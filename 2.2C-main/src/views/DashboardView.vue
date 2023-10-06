<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <button @click="signOut" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Sign Out
      </button>
    </div>
    <div class="flex justify-end mb-4">
      <button @click="addBlog" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Add Blog
      </button>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <div v-for="blog in blogs" :key="blog.id" class="bg-white shadow-md rounded-lg p-4">
        <h2 class="text-lg font-semibold mb-2">{{ blog.title }}</h2>
        <p class="text-gray-700 mb-4">{{ blog.body }}</p>
        <div class="flex justify-end">
          <button @click="editBlog(blog)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Edit
          </button>
          <button @click="deleteBlog(blog.id)"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
    <div v-if="showMessage" class="bg-green-300 text-white text-center py-2 px-4 fixed top-0 left-0 right-0 z-50">
      <p>{{ showMessage }}</p>
    </div>
  </div>
  <AddEditBlog v-if="showModal" :blog="eBlog" @closeModal="closeModal" />
</template>

<script setup>
import AddEditBlog from '../components/AddEditBlog.vue';
import { ref, onMounted } from 'vue';
import axios from '../plugins/axios';
import { useRouter } from 'vue-router';

const blogs = ref([]);
const showMessage = ref('');
const showModal = ref(false);
const eBlog = ref({});
const router = useRouter();

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

const editBlog = (blog) => {
  showModal.value = true;
  eBlog.value = { ...blog };
};

const closeModal = () => {
  showModal.value = false;
  showMessage.value = 'Successful!';
  setTimeout(() => {
    showMessage.value = '';
  }, 500);
  fetchBlogs();
};

const deleteBlog = (blogId) => {
  axios
    .delete(`blogs/${blogId}`)
    .then((response) => {
      if (response.status === 204) {
        blogs.value = blogs.value.filter((blog) => blog.id !== blogId);
        showMessage.value = 'Blog deleted successfully.';
        setTimeout(() => {
          showMessage.value = '';
        }, 500);
      } else {
        console.error('Failed to delete blog:', response.data);
      }
    })
    .catch((error) => {
      console.error('Failed to delete blog:', error);
    });
};

const addBlog = () => {
  eBlog.value = null;
  showModal.value = true;
};

const signOut = () => {
  localStorage.removeItem('token');
  router.push('/');
};

onMounted(() => {
  fetchBlogs();
});
</script>

<style>
.container {
  padding: 2rem;
}
</style>
