<template>
  <v-card flat>
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-spacer></v-spacer>
     <v-toolbar-items class="hidden-sm-and-down">
     
      <v-btn flat @click="logout()">Logout</v-btn>
    </v-toolbar-items>
    </v-toolbar>

    <Customers></Customers>


  </v-card>
</template>

<script>
import firebase from "firebase";
import Customers from './Customers'

export default {
  name: "main",
  components:{
    Customers
  },
  data() {
    return {
      msg: "Welcome to Your Renewal Reminder Account"
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped></style>
