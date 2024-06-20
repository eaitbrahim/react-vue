<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
    <div class="search">
        <input type="text" placeholder="Search..." class="input" />
        <font-awesome-icon :icon="['fas', 'search']" class="icon" />
    </div>
</template>
  
<style scoped>
.search {
    position: relative;
  }
  
  .input {
    padding: 5px 30px 5px 10px; 
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #555;
    cursor: pointer;
  }
</style>
  