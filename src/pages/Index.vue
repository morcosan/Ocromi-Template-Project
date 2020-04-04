<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import { YFieldText } from 'ocromi';


   @Component({
      components: { YFieldText },
   })
   export default class Index extends Vue {}
</script>


<template>
   <div>
      {{ $locale.pageIndex }}

      <YFieldText label="Name"/>
   </div>
</template>


<style scoped lang="scss">
   // no css yet
</style>
