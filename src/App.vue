<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Renewal</span>
        <span class="font-weight-light">Reminder</span>
      </v-toolbar-title>

       <v-toolbar-items>
        <v-btn>Button 1</v-btn>
        <v-btn>Button 2</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>
