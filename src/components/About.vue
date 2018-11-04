<template>
    <div class="container about">
        <h1 id="about_h1">About</h1>
        <p class="about_para">Renewal Reminder reminds your customers to pay for your monthly services, so you don't need to get on the phone with them every month</p>
        <p class="about_para">This was created during the JAMstack hackaton in Houston</p>
        <h2>The Team</h2>
        <ul class="about_para">
            <li> Hecktor J. Saldana </li>
            <li>Biko Allen</li>
            <li>Yetunde Sola-Adebayo</li>
            <li>Earle Poole</li>
            <li>Josh Medeski</li>
        </ul>
    </div>
</template>


<script>
export default {
  name: "about",
  components: {},
  data() {
    return {};
  }
};
</script>


<style>
.about {
  font-family: "Rokkitt", serif;
}
#about_h1 {
  text-align: center;
}
.about_para {
  font-size: 1.5em;
}
</style>