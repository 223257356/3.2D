<template>
  <div class="projects">
    <div class="flex py-32 flex-col items-center container mx-auto">
      <p class="text-4xl font-semibold mb-32 text-white">Projects</p>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-4 lg:mx-0">
        <div class="bg-[#F1EFEF] rounded-md py-10 px-4 flex flex-col shadow-xl" v-for="project in data" :key="project">
          <p class="text-lg font-semibold text-center py-2">{{ project.title }}</p>
          <p class="text-gray-700">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const data = reactive([]);

onMounted(async () => {
  try {
    const response = await fetch('src/assets/projects.json');
    const jsonData = await response.json();
    data.push(...jsonData);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});
</script>

<style scoped>
.projects {
  background-image: url('../assets/project.jpg');
}
</style>
