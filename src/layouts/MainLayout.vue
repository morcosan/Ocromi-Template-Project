<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';


   @Component({
      components: {},
   })
   export default class MainLayout extends Vue {}
</script>


<template>
   <router-view/>
</template>


<style scoped lang="scss">
   // @import 'src/css/variables';
</style>
