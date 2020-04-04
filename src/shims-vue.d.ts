import Vue from 'vue';

// TS checking for importing .vue files
declare module '*.vue' {
   export default Vue;
}

// TS checking for custom i18n access variable
declare module 'vue/types/vue' {
   interface Vue {
      $locale: any;
   }
}
