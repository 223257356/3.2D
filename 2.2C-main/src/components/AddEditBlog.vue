<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-96">
      <h1 class="text-2xl font-bold mb-4">{{ editing ? 'Edit Blog' : 'Add Blog' }}</h1>
      <form @submit.prevent="editing ? updateBlog() : addBlog()">
        <div class="mb-4">
          <label for="title" class="block text-lg font-semibold mb-2">Title</label>
          <input type="text" id="title" v-model="blog.title" class="border border-gray-300 rounded-md p-2 w-full" required>
        </div>
        <div class="mb-4">
          <label for="content" class="block text-lg font-semibold mb-2">Content</label>
          <textarea id="content" v-model="blog.body" class="border border-gray-300 rounded-md p-2 w-full" required></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {{ editing ? 'Update Blog' : 'Add Blog' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';
import axios from '../plugins/axios';
import { useRouter } from 'vue-router';

const props = defineProps(['blog']);
const emit = defineEmits(['closeModal']);
const blog = reactive({
  title: props.blog ? props.blog.title : '',
  body: props.blog ? props.blog.body : '',
});

const editing = ref(props.blog !== null);
const router = useRouter();

const addBlog = async () => {
  try {
    const response = await axios.post('blogs', blog);
    if (response.status === 201) {
      console.log('Blog added successfully:', response.data);
      blog.title = '';
      blog.body = '';
      emit('closeModal');
    }
  } catch (error) {
    console.error('Failed to add blog:', error);
  }
};

const updateBlog = async () => {
  try {
    const response = await axios.put(`blogs/${props.blog.id}`, blog);
    if (response.status === 200) {
      console.log('Blog updated successfully:', response.data);
      blog.title = '';
      blog.body = '';
      editing.value = false;
      emit('closeModal');
    }
  } catch (error) {
    console.error('Failed to update blog:', error);
  }
};
</script>

<style>
.container {
  padding: 2rem;
}
</style>