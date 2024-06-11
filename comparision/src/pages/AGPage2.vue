<template>
  <q-page padding>
    <div style="height: 100%; height: 1024px;">
      <ag-grid-vue
        style="height: 100%"
        class="ag-theme-quartz"
        :columnDefs="colDefs"
        :rowData="rows"
        :defaultColDef="defaultColDef"
        :enableAdvancedFilter="true"
        :initialState="initialState"
        @grid-ready="onGridReady"
        @first-data-rendered="onFirstDataRendered"
      ></ag-grid-vue>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { LicenseManager } from '@ag-grid-enterprise/core';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import data from '../data/data.js';

import { AdvancedFilterModule } from "@ag-grid-enterprise/advanced-filter";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ModuleRegistry } from "@ag-grid-community/core";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";

ModuleRegistry.registerModules([
    AdvancedFilterModule,
    ClientSideRowModelModule,
    MenuModule,
    SetFilterModule
  ]);


  const initialAdvancedFilterModel = {
  filterType: "join",
  type: "AND",
  conditions: [
    {
      filterType: "join",
      type: "AND",
      conditions: [
        {
          filterType: "text",
          colId: "first_name",
          type: "startsWith",
          filter: "A",
        },
        {
          filterType: "text",
          colId: "last_name",
          type: "endsWith",
          filter: "Garcia",
        },
      ],
    }
  ],
};


const rows = ref(data);

const colDefs = ref([
  { field: "first_name", filter: 'agMultiColumnFilter' },
  { field: "last_name", filter: 'agMultiColumnFilter' },
  { field: "email", filter: 'agMultiColumnFilter' },
]);

const defaultColDef = ref({
  flex: 1,
  minWidth: 180,
  filter: true,
});

const initialState = ref({
  filter: {
    advancedFilterModel: initialAdvancedFilterModel,
  },
});

const gridApi = ref();

const onFirstDataRendered = (params) => {
  // params.api.showAdvancedFilterBuilder();
};

const onGridReady = (params) => {
  gridApi.value = params.api;
};

onBeforeMount(() => {
  initialState.value = {
    filter: {
      advancedFilterModel: initialAdvancedFilterModel,
    },
  };
});
</script>
