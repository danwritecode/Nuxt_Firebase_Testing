<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="2">
        <v-btn @click="callAPI()" outlined>Test API</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="apiResponse" justify="center" align="center">
      <v-col>
        <span>{{ apiResponse }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cookie from 'js-cookie';

export default {
  data() {
    return {
      apiResponse: null
    }
  },
  methods: {
    callAPI() {
      const config = {
          headers: {
              'Authorization': Cookie.get("access_token")
              }
          }

      this.$axios.get("https://x8plx8jqd0.execute-api.us-east-1.amazonaws.com/dev/testing", config)
        .then(response => { console.log(response), this.apiResponse = response.data })
        .catch(err => { console.log(err) })
    }
  }
}
</script>
