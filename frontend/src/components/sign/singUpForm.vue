<template>
  <div class="app-form">
    formData{{ formData }}
    <div class="app-form__field">
      <input type="text" v-model="formData.name">
    </div>
    <div class="app-form__field">
      <input type="email" v-model="formData.email">
    </div>
    <div class="app-form__field">
      <input type="password" v-model="formData.password">
    </div>
    <buttonTemplate :buttonSetting="buttonSettings" :wer="wer"/>
  </div>
</template>

<script>
import buttonTemplate from '@/components/elements/buttonTemplate.vue';
import { reactive, ref } from 'vue';

export default {
  name: 'singUpForm',
  components: {
    buttonTemplate,
  },
  setup() {
    const buttonSettings = reactive({
      buttonText: 'test',
      handleEvent: '132',
      customClass: '',
    });

    const wer = ref('wer');

    const formData = reactive({
      name: '',
      email: '',
      password: '',
    });

    return {
      buttonSettings,
      formData,
      wer,
    };
  },
};
</script>

<style scoped>

</style>
