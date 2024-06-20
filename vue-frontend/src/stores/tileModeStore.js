import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTileModeStore = defineStore('tileMode', () => {
    const expanded = ref(false);

    const toggleMode = () => {
        expanded.value = !expanded.value;
        console.log('toggleMode:', expanded.value);
    };

    return {
        expanded,
        toggleMode
    };
});