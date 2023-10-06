<template>
  <NavBar/>
  <div class="container mx-auto py-8">
    <h1 class="text-4xl font-bold text-center mb-8">Blogs</h1>
    <div class="grid grid-cols-1 gap-8">
      <div v-for="blog in blogs" :key="blog.id" class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ blog.title }}</h2>
        <p class="text-gray-700 mb-6">{{ blog.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/Navbar.vue';
import { ref, onMounted } from 'vue';
import axios from '../plugins/axios';
const blogs = ref([]);

onMounted(() => {
  fetchBlogs();
});

const fetchBlogs = async () => {
  try {
    const response = await axios.get('blogs');
    if (response.status === 200) {
      blogs.value = response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style>
.container {
  padding: 0 2rem;
}
</style>
