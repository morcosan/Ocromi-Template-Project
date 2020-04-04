<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';


   @Component({
      components: {},
   })
   export default class Index extends Vue {}
</script>


<template>
   <div>{{ $locale.pageIndex }}</div>
</template>


<style scoped lang="scss">
   // no css yet
</style>
