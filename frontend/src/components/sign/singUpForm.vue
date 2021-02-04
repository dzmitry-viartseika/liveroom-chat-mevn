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
    <buttonTemplate :testtt="testtt" :wer="wer" @changeText="changeText">
      <template #button>
        default text
      </template>
    </buttonTemplate>
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
    const testtt = reactive({
      buttonText: 'test',
      handleEvent: '132',
      customClass: '',
    });

    const wer = ref('wer');

    const changeText = () => {
      wer.value = 'wertey';
    };

    const formData = reactive({
      name: '',
      email: '',
      password: '',
    });

    return {
      testtt,
      formData,
      wer,
      changeText,
    };
  },
};
</script>

<style scoped>

</style>
