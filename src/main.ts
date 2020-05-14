import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import './css/app.scss';
import { Ocromi, Design, DuoStyle, Spinner, Theme } from 'ocromi';


Vue.use(Ocromi, {
   theme: Theme.Light,
   design: Design.Material,
   button: {
      isRounded: false,
      isUppercase: true,
      spinner: Spinner.Default,
      duoStyle: DuoStyle.FilledText,
   },
});

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   i18n,
   render: h => h(App),
}).$mount('#app');
