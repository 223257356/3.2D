<template>
  <div class="projects">
    <div class="flex py-20 flex-col items-center container mx-auto">
      <p class="text-4xl font-semibold mb-12 text-white">Recent Posts</p>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-4 lg:mx-0">
        <div class="bg-[#F1EFEF] rounded-md py-10 w-72 px-4 flex flex-col shadow-md" v-for="blog in blogs" :key="blog">
          <p class="text-lg font-semibold text-center py-2">{{ blog.title }}</p>
          <p class="text-gray-700">{{ blog.body.slice(0, blog.body.indexOf('\n')) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from '../plugins/axios';

const blogs = ref([]);

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

onMounted(() => {
  fetchBlogs();
});

</script>
<style scoped>
.projects {
  background-image: url('../assets/blog.jpg');
}
</style>

