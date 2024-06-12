<script>
import { defineComponent, ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    message: String,
    icon: Object, // Assuming icon is passed as a prop
  },
  setup() {
    const backgroundColor = ref('red');
    const textColor = ref('white');

    onMounted(() => {
      interval(1000)
        .pipe(takeUntil(unmounted))
        .subscribe(() => {
          backgroundColor.value = backgroundColor.value === 'red' ? 'white' : 'red';
          textColor.value = textColor.value === 'white' ? 'blue' : 'white';
        });
    });

    // Unsubscribe from the interval when component is unmounted
    const unmounted = new Subject();

    return {
      backgroundColor,
      textColor,
      styles,
    };
  },
});
</script>

<template>
    <div class="alarm" :style="{ backgroundColor, color: textColor }">
        <font-awesome-icon :icon="icon" class="icon" />
        {{ message }}
    </div>
</template>
  
  <style scoped>
  .alarm {
    background-color: red;
    color: white;
    padding: 3px 12px;
    margin-bottom: 5px;
    border-radius: 8px;
  }

  .icon {
    margin-right: 3px; 
  }
  </style>