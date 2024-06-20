<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  onPrevPage: Function,
  onNextPage: Function,
  isNextDisabled: Boolean
});

</script>

<template>
    <div class="PaginationButtons">
      <button @click="onPrevPage" :disabled="currentPage === 1" class="PaginationButton">
        Prev
      </button>
      <button @click="onNextPage" :disabled="isNextDisabled" class="PaginationButton">
        Next
      </button>
    </div>    
</template>

<style scoped>
  .PaginationButtons {
    margin-top: 20px;
  }
  
  .PaginationButton {
    padding: 8px 16px;
    margin-right: 8px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .PaginationButton:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
  