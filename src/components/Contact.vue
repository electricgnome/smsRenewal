<template>
<v-container>
<h1>
    Contact Us
</h1>
<p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    matter of hours to help you.</p>
    
<v-form method="POST" action="https://formspree.io/ysolaadebayo@gmail.com" v-model="valid">

      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
        name="name"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
        name="email"
      ></v-text-field>
       <v-text-field
        label="Subject"
        v-model="subject"
        required
        name="subject"
      ></v-text-field>
       <v-text-field
        label="Message"
        v-model="message"
        required
        name="message"
      ></v-text-field>

      <v-btn @click="submit" type="submit">submit</v-btn>
   
 </v-form>

</v-container>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {};
  }
};
</script>

<style>
</style>
