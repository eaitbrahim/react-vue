<script>
  import { defineComponent } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
  
  export default defineComponent({
    components: {
      FontAwesomeIcon,
    },
    setup() {
      return {
        faSearch,
        styles,
      };
    },
  });
</script>

<template>
    <div class="search">
      <input type="text" placeholder="Search..." class="input" />
      <font-awesome-icon :icon="faSearch" class="icon" />
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
  