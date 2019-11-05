import Cookie from 'js-cookie';
import { auth } from '@/services/firebase';
import { longStackSupport } from 'q';

export const state = () => ({
    user: null
});

export const mutations = {
    SET_USER: function (state, account) {
        state.user = account;
    },
    ERASE_USER: function(state) {
        state.user = null;
    }
}

export const actions = {
    async login({commit}, account) {
        try {
            console.log(account)
            // Login the user
            await auth.signInWithEmailAndPassword(account.email, account.password);

            // Get JWT from Firebase
            const token = await auth.currentUser.getIdToken();
            // Set JWT to the cookie
            Cookie.set('access_token', token);

            //Get Current User
            const {email, uid } = auth.currentUser;
            // Set the user Locally
            commit("SET_USER", { email, uid });
        } catch(error) {
            throw error;
        }
    },
    
    async logout({commit}) {
        await auth.signOut();
        await Cookie.remove("access_token");
        commit("ERASE_USER");
    } 
}