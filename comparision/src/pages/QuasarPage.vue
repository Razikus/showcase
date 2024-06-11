<template>
  <q-page padding>
    <q-table
      :rows="filteredRows"
      :columns="columnsConfig"
      :rows-per-page-options="[0]"
    >
      <template v-slot:top>
        <q-btn-dropdown flat square icon="more_vert" label="Columns">
          <q-list dense>
            <q-item v-for="column in allColumns" :key="column.name" clickable>
              <q-checkbox dense
                v-model="visibleColumns"
                :val="column.name"
                :label="column.label"
              />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>

      <template v-slot:header="props">
        <q-tr>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            <q-input v-if="isFilterable(col)"
              v-model="filters[col.name]"
              debounce="300"
              dense
              
              :placeholder="'Filter ' + col.label"
              style="max-width: 200px;"
            />
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import data from '../data/data.js'

const rows = ref(data)

// Define all possible columns
const allColumns = [
  { name: 'first_name', label: 'First Name', align: 'left', field: row => row.first_name },
  { name: 'last_name', label: 'Last Name', align: 'left', field: row => row.last_name },
  { name: 'email', label: 'Email', align: 'left', field: row => row.email },
]

// Reactive array to hold the names of visible columns
const visibleColumns = ref(allColumns.map(col => col.name))

// Reactive object to hold filter values for each column
const filters = ref(allColumns.reduce((acc, col) => {
  acc[col.name] = ''
  return acc
}, {}))

// Computed property to get the columns configuration based on visible columns
const columnsConfig = computed(() => {
  return allColumns.filter(column => visibleColumns.value.includes(column.name))
})

// Computed property to filter rows based on the filter inputs
const filteredRows = computed(() => {
  return rows.value.filter(row => {
    return columnsConfig.value.every(col => {
      const filterValue = filters.value[col.name].toLowerCase()
      return String(row[col.name]).toLowerCase().includes(filterValue)
    })
  })
})

// Method to determine if a column is filterable
const isFilterable = col => ['first_name', 'last_name', 'email'].includes(col.name)
</script>

<style scoped>
.q-table__container {
  overflow: visible;
}
.q-th > .q-field {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
