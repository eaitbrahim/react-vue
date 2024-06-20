import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTileModeStore = defineStore('tileMode', () => {
    const expanded = ref(false);

    const toggleMode = () => {
        console.log("before toggleMode:", expanded.value);
        expanded.value = !expanded.value;
        console.log("after toggleMode:", expanded.value);
    };

    return {
        expanded,
        toggleMode
    };
});