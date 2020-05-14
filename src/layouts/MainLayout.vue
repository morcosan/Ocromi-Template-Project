<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import { YLayout } from 'ocromi';


   @Component({
      components: { YLayout },
   })
   export default class MainLayout extends Vue {}
</script>


<template>
   <YLayout>
      <router-view/>
   </YLayout>
</template>


<style scoped lang="scss">
   // @import 'src/css/variables';
</style>
