<template>
<v-container>
  <div class="sign-up">

    <h3>Let's create a new account !</h3>

    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>

    <v-btn color="success" v-on:click="signUp">Sign Up</v-btn>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "signUp",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("main");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
#create {
  font-size: 1.2em;
}
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
  border-bottom: 1px solid black;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
