
<template>
  <div class="card">
      <ADataTable v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
              filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
          <template #header>
              <div class="flex justify-between">
                  <AButton type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                  <AIconField>
                      <AInputIcon>
                          <i class="pi pi-search" />
                      </AInputIcon>
                      <AInputText v-model="filters['global'].value" placeholder="Keyword Search" />
                  </AIconField>
              </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <AColumn field="name" header="Name" style="min-width: 12rem">
              <template #body="{ data }">
                  {{ data.name }}
              </template>
              <template #filter="{ filterModel }">
                  <AInputText v-model="filterModel.value" type="text" placeholder="Search by name" />
              </template>
          </AColumn>
          <AColumn header="Country" filterField="country.name" style="min-width: 12rem">
              <template #body="{ data }">
                  <div class="flex items-center gap-2">
                      <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                      <span>{{ data.country.name }}</span>
                  </div>
              </template>
              <template #filter="{ filterModel }">
                  <AInputText v-model="filterModel.value" type="text" placeholder="Search by country" />
              </template>
              <template #filterclear="{ filterCallback }">
                  <AButton type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></AButton>
              </template>
              <template #filterapply="{ filterCallback }">
                  <AButton type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></AButton>
              </template>
              <template #filterfooter>
                  <div class="px-4 pt-0 pb-4 text-center">Customized Buttons</div>
              </template>
          </AColumn>
          <AColumn header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
              <template #body="{ data }">
                  <div class="flex items-center gap-2">
                      <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                      <span>{{ data.representative.name }}</span>
                  </div>
              </template>
              <template #filter="{ filterModel }">
                  <AMultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any">
                      <template #option="slotProps">
                          <div class="flex items-center gap-2">
                              <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                              <span>{{ slotProps.option.name }}</span>
                          </div>
                      </template>
                  </AMultiSelect>
              </template>
          </AColumn>
          <AColumn header="Date" filterField="date" dataType="date" style="min-width: 10rem">
              <template #body="{ data }">
                  {{ formatDate(data.date) }}
              </template>
              <template #filter="{ filterModel }">
                  <ADatePicker v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
              </template>
          </AColumn>
          <AColumn header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
              <template #body="{ data }">
                  {{ formatCurrency(data.balance) }}
              </template>
              <template #filter="{ filterModel }">
                  <AInputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
              </template>
          </AColumn>
          <AColumn header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
              <template #body="{ data }">
                  <Tag :value="data.status" :severity="getSeverity(data.status)" />
              </template>
              <template #filter="{ filterModel }">
                  <ASelect v-model="filterModel.value" :options="statuses" placeholder="Select One" showClear>
                      <template #option="slotProps">
                          <ATag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                      </template>
                  </ASelect>
              </template>
          </AColumn>
          <AColumn field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
              <template #body="{ data }">
                  <AProgressBar :value="data.activity" :showValue="false" style="height: 6px"></AProgressBar>
              </template>
              <template #filter="{ filterModel }">
                  <ASlider v-model="filterModel.value" range class="m-4"></ASlider>
                  <div class="flex items-center justify-between px-2">
                      <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                      <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                  </div>
              </template>
          </AColumn>
          <AColumn field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
              <template #body="{ data }">
                  <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.verified, 'pi-times-circle text-red-500': !data.verified }"></i>
              </template>
              <template #filter="{ filterModel }">
                  <label for="verified-filter" class="font-bold"> Verified </label>
                  <ACheckbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary inputId="verified-filter" />
              </template>
          </AColumn>
      </ADataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '../service/CustomerService';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

const customers = ref();
const filters = ref();
const representatives = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png' },
  { name: 'Anna Fali', image: 'annafali.png' },
  { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  { name: 'Onyama Limba', image: 'onyamalimba.png' },
  { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
  CustomerService.getCustomersMedium().then((data) => {
      customers.value = getCustomers(data);
      loading.value = false;
  });
});


const initFilters = () => {
  filters.value = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
      balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  };
};

initFilters();

const formatDate = (value) => {
  return value.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
  });
};
const formatCurrency = (value) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
  initFilters();
};
const getCustomers = (data) => {
  return [...(data || [])].map((d) => {
      d.date = new Date(d.date);

      return d;
  });
};
const getSeverity = (status) => {
  switch (status) {
      case 'unqualified':
          return 'danger';

      case 'qualified':
          return 'success';

      case 'new':
          return 'info';

      case 'negotiation':
          return 'warn';

      case 'renewal':
          return null;
  }
};
</script>
