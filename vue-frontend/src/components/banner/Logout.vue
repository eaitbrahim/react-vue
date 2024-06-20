<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
     <div class="logout">
        <button class="button">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon" />
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
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  
  .icon {
    margin-right: 5px; 
    color: green;
  }
  </style>
  