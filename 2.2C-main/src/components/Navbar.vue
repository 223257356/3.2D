<template>
  <nav class="container mx-auto py-6 flex justify-between">
    <p class="font-bold">JW's Portfolio</p>
    <div class="Nav">
      <ul class="flex gap-16">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/cv" target="_blank">CV</RouterLink>
        </li>
        <li>
          <RouterLink to="/blog">Blogs</RouterLink>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped></style>

