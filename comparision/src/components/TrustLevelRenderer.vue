<template>
  <div v-if="params.value === false" class="flowrightblock" style="background-color: red;"></div>
  <div v-else class="flowrightblock" style="background-color: green;"></div>
</template>

<script setup>
import { ref } from 'vue';

const {params} = defineProps(['params']);
</script>