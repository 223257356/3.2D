<script setup>
import { ref } from 'vue'
const greeting = ref('This is a contact page')

</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
    display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
}
</style>
