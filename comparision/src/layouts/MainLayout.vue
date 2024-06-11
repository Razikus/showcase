<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Comparision
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <q-item
          clickable
          v-ripple
          to="/quasar">
          <q-item-section>
            <q-item-label>
              Quasar
            </q-item-label>
          </q-item-section>
        
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/grid">
          <q-item-section>
            <q-item-label>
              AG Grid
            </q-item-label>
          </q-item-section>
        
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/grid2">
          <q-item-section>
            <q-item-label>
              AG Grid2
            </q-item-label>
          </q-item-section>
        
        </q-item>
        <q-item
          clickable
          v-ripple
          to="/tabulator">
          <q-item-section>
            <q-item-label>
              Tabulator
            </q-item-label>
          </q-item-section>
        
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'MainLayout'
})


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
