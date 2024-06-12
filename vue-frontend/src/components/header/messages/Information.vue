<script>
import { defineComponent } from 'vue';
import classes from './Information.module.scss'; // Assuming styles are defined in a SCSS module

export default defineComponent({
  setup() {
    return {
      classes,
    };
  },
});
</script>

<template>
    <div class="information">
      <span>Acknowledgements Disabled</span>
    </div>
</template>
  
<style scoped>
    .information {
        display: flex;
        justify-content: flex-end;
    }
    span {
        background-color: #ffef8f;
        display: inline-block; 
    }
</style>