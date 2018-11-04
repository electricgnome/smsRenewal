<template>
  <v-app>
    <!-- <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Renewal Reminder</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> -->


    <v-toolbar app>       
      <v-toolbar-title class="headline text-uppercase">         
        <span>Renewal</span>         
        <span class="font-weight-light">Reminder</span>
      </v-toolbar-title>
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
        { title: "Home", link: "/main" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact" }
      ]
    };
  }
};
</script>
