<template>
  <button class="app-button">
    {{ buttonSetting }}
  </button>
</template>

<script>
export default {
  name: 'buttonTemplate',
  props: {
    buttonSettings: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  setup() {
    console.log('buttonSettings', buttonSettings);
  },
};
</script>

<style scoped>

</style>
