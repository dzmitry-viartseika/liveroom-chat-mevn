<template>
  <button class="app-button">
 {{ settingsBtn.buttonText }}
    {{ wer }}
  </button>
</template>

<script>
// import { computed } from 'vue';

export default {
  name: 'buttonTemplate',
  props: {
    buttonSettings: {
      type: Object,
      required: true,
      default: () => {},
    },
    wer: {
      type: String,
    },
  },
  setup(props) {
    console.log('props', props);
    const settingsBtn = {
      ...props.buttonSettings,
    };

    return {
      settingsBtn,
    };
  },
};
</script>

<style scoped>

</style>
