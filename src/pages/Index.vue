<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import { YForm, YFieldText, YButtonSubmit } from 'ocromi';


   @Component({
      components: { YForm, YFieldText, YButtonSubmit },
   })
   export default class Index extends Vue {

      public email: string = '';
      public password: string = '';

   }
</script>


<template>
   <div>
      {{ YLocale.pageIndex }}

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

         <br/>

         <YButtonSubmit
            label="Log In"
            will-be-enabled
            style="width: 100%"
         />
      </YForm>
   </div>
</template>


<style scoped lang="scss">
   // no css yet
</style>
