<script setup>
import Title from './Title.vue';
import TileMode from './TileMode.vue';
import Search from './Search.vue';
import Logout from './Logout.vue';
</script>

<template>
    <div class="banner">
        <Title />
        <div class="actions">
            <!--<TileMode />-->
            <Search />
            <Logout />
        </div>
    </div>
</template>

<style scoped>
  .banner {
    background-color: #4974A3;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .actions {
    display: flex;
  }
</style>
  