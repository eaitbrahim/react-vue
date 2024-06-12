<script>
  import { defineComponent } from 'vue';
  import classes from './Site.module.scss'; // Assuming styles are defined in a SCSS module
  
  export default defineComponent({
    setup() {
      return {
        classes,
      };
    },
  });
</script>

<template>
    <div class="site">
      <select>
        <option>Site 1</option>
        <option>Site 2</option>
        <option>Site 3</option>
      </select>
    </div>
</template>
  
<style scoped>
  .site {
        display: flex;
        justify-content: flex-end;
        select {
            width: 250px;
        } 
    }
  </style>