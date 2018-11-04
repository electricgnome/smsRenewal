// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import router from "./router";
import firebase from "firebase";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

let app;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCAIQZNVv8Q2vBY2OYqbBbadeXtHnsVfuQ",
  authDomain: "smsrenewal.firebaseapp.com",
  databaseURL: "https://smsrenewal.firebaseio.com",
  projectId: "smsrenewal",
  storageBucket: "smsrenewal.appspot.com",
  messagingSenderId: "45552393564"
};


firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    Vue.use(Vuetify);
    /* eslint-disable no-new */
    app = new Vue({
      el: "#app",
      template: "<App/>",
      components: { App },
      router
    });
  }
});

