<template>
    <v-container fill-height>
        <v-row>
            <v-col>
                <v-row align="center" justify="center">
                    <v-col>
                        <p class="display-1 font-weight-light text-center">
                            Login
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" no-gutters>
                    <v-col cols="11" sm="5" md="4">
                        <v-text-field v-model="form.email" placeholder="Email" type="text" solo></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" no-gutters>
                    <v-col cols="11" sm="5" md="4">
                        <v-text-field v-model="form.password" placeholder="Password" type="password" solo @keyup.native.enter="login()"></v-text-field>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" no-gutters>
                    <v-btn @click="login()" dark color="blue darken-1" elevation="20" x-large>Go!</v-btn>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col cols="11" sm="5">
                        <v-alert v-if="errorPost" type="error" outlined style="margin-top:20px;">Uh oh, there was an issue: {{ errorMessage }}</v-alert>
                        <v-progress-linear v-if="posting" :indeterminate="posting" style="margin-top:20px;"></v-progress-linear>
                    </v-col>
                </v-row>
                <br>
                <v-row justify="center" align="center" no-gutters>
                    <v-col cols="11" sm="5">
                        <p class="subtitle-1 font-weight-light text-center">
                            Don't have an account? <router-link to="/getstarted">Click Here</router-link> to get started.
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" no-gutters>
                    <v-col cols="11" sm="5">
                        <p class="subtitle-1 font-weight-light text-center">
                            Forgot your password? <router-link to="/passwordrecovery">Click Here.</router-link>
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            },
            errorPost: false,
            errorMessage: null,
            posting: false
        }
    },
    methods: {
        login() {
            this.$store.dispatch('users/login', this.form)
                .then(response => { this.$router.push("/") })
                .catch(error => {
                    this.errorPost = true;
                    this.errorMessage = error.code;
                    return;
                });
            
        }
    }
}
</script>

<style>

</style>