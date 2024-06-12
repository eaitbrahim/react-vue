<script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      return {
        classes,
      };
    },
  });
</script>

<template>
    <div class="signedIn">
      Logged in as: Mehdi Aitbrahim
    </div>
</template>
  
  <style scoped module>
  .signedIn {
    display: flex;
    justify-content: flex-end;
    font-size: 10px;;
}
  </style>