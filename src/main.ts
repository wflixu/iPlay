import './assets/main.css'
import 'plyr/dist/plyr.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import App from './App.vue'
import router from './router'
import { setupUILib } from './shared/setupUILib';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(setupUILib)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 百年功名、千秋霸业、万古流芳
