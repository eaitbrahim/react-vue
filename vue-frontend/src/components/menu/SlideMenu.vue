<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const categories = ref([
  { name: 'Sensors', isOpen: false, items: ['Sensor 1', 'Sensor 2', 'Sensor 3'] },
  { name: 'Reports', isOpen: false, items: ['Report 1', 'Report 2', 'Report 3'] },
  { name: 'Configuration', isOpen: false, items: ['Setting 1', 'Setting 2', 'Setting 3'] },
]);

const toggleCategory = (index) => {
  categories.value[index].isOpen = !categories.value[index].isOpen;
};
</script>

<template>
    <div class="slideMenu">
        <div v-for="(category, index) in categories" :key="index" class="category">
            <div class="categoryHeader" @click="toggleCategory(index)">
                <span class="categoryText">{{ category.name }}</span>
                <div class="plusIcon">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                </div>
            </div>
            <ul v-if="category.isOpen" class="menuItems">
                <li v-for="(item, itemIndex) in category.items" :key="itemIndex" class="menuItem">
                {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
  <style scoped>
  .slideMenu {
  background-color: #ffffff;
  padding: 10px;
  margin-top: 15px;
  border-right: 1px solid #ccc;
}

.category {
  margin-bottom: 10px;
}

.categoryHeader {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 150px;
  background-color: #4974A3;
  align-items: center;
  cursor: pointer;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.categoryText {
  writing-mode: vertical-rl;
  line-height: 50px; 
  color: white;
  font: bold;
  margin-top: 10px;
}

.plusIcon {
  background-color: #4974A3;
  border-radius: 50%;
  padding: 5px;
  margin-top: 10px;
}

.plusIcon svg {
  color: darkgreen;
  font-weight:bolder;
  font-size: larger;
}

.menuItems {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menuItem {
  cursor: pointer;
  padding: 5px 10px;
}

.menuItem:hover {
  background-color: #ddd;
}
  </style>
  