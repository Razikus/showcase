<template>
  <q-page padding>
    <q-table :rows="rows" :rows-per-page-options="[0]" :columns="columns"></q-table>
  </q-page>
</template>

<script setup>

import { ref } from 'vue'
import data from '../data/data.js'


const rows = ref(data)

const columns = [
  { name: 'first_name', label: 'First Name', align: 'left', field: row => row.first_name },
  { name: 'last_name', label: 'Last Name', align: 'left', field: row => row.last_name },
  { name: 'email', label: 'Email', align: 'left', field: row => row.email },
]

</script>
