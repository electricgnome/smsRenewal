<template>
  <v-app>
    
    <v-toolbar app>       
      <v-toolbar-title class="headline text-uppercase"> 
        <router-link to="/" tag="span" style="cursor: pointer">        
          <span>Renewal</span>         
          <span class="font-weight-light">Reminder</span>
        </router-link>
      </v-toolbar-title>

        <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          {{ item.title }}
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>

    <v-content>
    <main>
      <router-view></router-view>
    </main>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      sideNav: false,
      menuItems: [
        { title: "Home", link: "/home" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact" },
        { title: "Sign Up", link: "/sign-up" }
      ]
    };
  }
};
</script>
