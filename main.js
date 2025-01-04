import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Certifique-se de que esta linha esteja presente

// Criação da aplicação Vue
const app = createApp(App);

// Criação do Vuetify
const vuetify = createVuetify();

// Usar o Vuetify na aplicação
app.use(vuetify);

// Montar a aplicação
app.mount('#app');
