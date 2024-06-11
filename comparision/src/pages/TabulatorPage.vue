<template>
  <q-page padding>
    <div id="tabulator" ref="tabulatorRef"></div>
  </q-page>
</template>

<script setup>
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import data from '../data/data.js'
import { onMounted, ref } from 'vue';
import "tabulator-tables/dist/css/tabulator.min.css"; 

const rows = ref(data)
let tabulatorRef = ref(null)
let createdTabulator = null
onMounted(() => {
  createdTabulator = new Tabulator(tabulatorRef.value, {
    data: rows.value,
    layout: "fitColumns",
    columns: [
      { title: "Name", field: "first_name", width: 200 },
      { title: "Last name", field: "last_name", hozAlign: "left" },
      { title: "Favourite Color", field: "email" }
    ],
  })


})

</script>
