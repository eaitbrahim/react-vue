<script>
  import { defineComponent } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
  
  export default defineComponent({
    components: {
      FontAwesomeIcon,
    },
    setup() {
      const handleLogout = () => {
        // Handle logout functionality
      };
  
      return {
        faSignOutAlt,
        styles,
        handleLogout,
      };
    },
  });
</script>
  
<template>
    <div class="logout">
      <button class="button" @click="handleLogout">
        <font-awesome-icon icon="faSignOutAlt" class="icon" />
        Logout
      </button>
    </div>
  </template>

  <style scoped>
  .logout {
    margin-left: 10px; 
  }
  
  .button {
    background-color: #FF6600;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .button:hover {
    cursor: pointer;
  }
  
  .icon {
    margin-right: 5px; 
    color: green;
  }
  </style>