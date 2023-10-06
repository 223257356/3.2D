<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg px-20 py-24">
      <h2 class="text-2xl font-bold mb-6">Sign In</h2>
      <form @submit.prevent="signIn">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email"
            class="shadow appearance-none border rounded-lg w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email" placeholder="Enter your email" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password"
            class="shadow appearance-none border rounded-lg w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password" placeholder="Enter your password" />
        </div>
        <div class="flex justify-center">
          <button
            class="bg-lime-600 hover:bg-lime-800 text-white w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../plugins/axios.js';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const signIn = () => {
  if (!email.value || !password.value) {
    return;
  }

  axios.post('authenticate', { email: email.value, password: password.value })
    .then(response => {
      if (response.status === 200) {
        const token = response.data.auth_token;
        localStorage.setItem('token', token);
        router.push('/dashboard');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
</script>

<style></style>
