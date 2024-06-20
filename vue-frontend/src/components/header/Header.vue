<script setup>
import Alarms from './messages/Alarms.vue';
import Site from './Site.vue';
// import Information from './components/messages/Information.vue'
// import SignedIn from './components/messages/SignedIn.vue'
</script>

<template>
  <header class="header">
        <div class="logoAndAlarms">
            <div class="logo">
                <router-link to="/">Vue</router-link>
            </div>
            <Alarms />
        </div>
        <div class={rightSection}>
            <Site />
            <!-- 
            <Information />
            <SignedIn /> -->
        </div>
    </header>
</template>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 40% 30% 30%; 
    align-items: center;
  }
  
  .logoAndAlarms {
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start; 
  }
  
  .logo {
    font-size: 24px; 
    margin-right: 20px;
    font-weight: bold;
    color: black;
    justify-self: end; 
  }
  
  .rightSection {
    grid-column: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
  }
</style>
