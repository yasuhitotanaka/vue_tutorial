<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Googleアカウントでログイン</button>
    <button @click="twitterLogin">Twitterアカウントでログイン</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to MyMarkDown"
    };
  },
  methods: {
    googleLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    twitterLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.TwitterAuthProvider());
    }
  }
};
</script>
