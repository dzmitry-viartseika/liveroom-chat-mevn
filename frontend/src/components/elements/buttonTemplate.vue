<template>
  <button class="app-button" @click="change">
    {{ testtt.buttonText }}
  </button>
</template>

<script>
// import { computed, ref } from 'vue';

export default {
  name: 'buttonTemplate',
  props: {
    testtt: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const change = () => {
      emit('changeText');
    };
    return {
      change,
    };
  },
};
</script>

<style scoped>

</style>
