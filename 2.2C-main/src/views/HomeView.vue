<script setup>
import Projects from '../components/Projects.vue';
import Blogs from '../components/Blogs.vue';
import Navbar from '../components/Navbar.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <Navbar />
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    </head>
  <main>
    <div class="text-black py-20">
      <div class="flex justify-between flex-col-reverse lg:flex-row  container mx-auto gap-4">
        <div class="flex flex-col px-4">
          <h1 style="font-size: 48px;">Jessica Wong</h1><br>
          <h1 class="header-name font-roboto">STUDENT | ASPIRING LEADER</h1><br><br>
          <p>People around me would view myself as an accountable and an independent team player. Always enthusiastic and with a curious mind, I am ready to embark my journey into a workforce of diverse cultures.
          </p><br>
        </div>
        <img alt="Home photo" src="@/assets/home.png" class="lg:h-[25rem]" />
      </div>
    </div>
    <Projects/>
    <Blogs/>
    <div class="flex justify-between py-8 container mx-auto">
      <div class="flex gap-6">
        <a href="#" title="Facebook" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
        <a href="#" title="Instagram" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="#" title="LinkedIn" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
      </div>
      <RouterLink to="/sign-in">Sign in</RouterLink>
    </div>
  </main>
</template>

<style scoped></style>

