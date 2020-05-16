<script lang="ts">
   import Vue from 'vue';
   import { Component, YButtonSubmit, YFieldText, YForm, YPage } from 'ocromi';


   @Component({
      components: { YForm, YFieldText, YButtonSubmit, YPage },
   })
   export default class Index extends Vue {

      public email: string = '';
      public password: string = '';

   }
</script>


<template>
   <YPage>
      <YForm>
         <YFieldText
            v-model="email"
            label="Email address"
            placeholder="email@gmail.com"
         />

         <YFieldText
            v-model="password"
            label="New password"
         />

         <br>

         <YButtonSubmit
            label="Log In"
            will-be-enabled
            style="width: 100%"
         />
      </YForm>
   </YPage>
</template>


<style scoped lang="scss">
   // no css yet
</style>
