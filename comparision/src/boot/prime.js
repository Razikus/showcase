import { boot } from 'quasar/wrappers'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import MultiSelect from 'primevue/multiselect';
import DatePicker from 'primevue/calendar'; // Calendar is the component used for DatePicker
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Checkbox from 'primevue/checkbox';
import Slider from 'primevue/slider';
import ProgressBar from 'primevue/progressbar';
import SelectButton from 'primevue/selectbutton'; // SelectButton is often used instead of plain Select
import Tag from 'primevue/tag';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'


const test = "tesT"
export default boot(({ app }) => {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'user'
        }
      }
    })
    app.component('AButton', Button);
    app.component('AInputText', InputText);
    app.component('AInputNumber', InputNumber);
    app.component('AMultiSelect', MultiSelect);
    app.component('ADatePicker', DatePicker);
    app.component('AColumn', Column);
    app.component('ADataTable', DataTable);
    app.component('ACheckbox', Checkbox);
    app.component('ASlider', Slider);
    app.component('AProgressBar', ProgressBar);
    app.component('ASelectButton', SelectButton);
    app.component('ATag', Tag);
})

export { test }
