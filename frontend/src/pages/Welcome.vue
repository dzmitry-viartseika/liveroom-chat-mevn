<template>
  <div class="app-welcome">
    <div>
      Welcome
    </div>
    <singUpForm />
  </div>
</template>

<script>
import singUpForm from '@/components/sign/singUpForm.vue';

export default {
  name: 'Welcome',
  components: {
    singUpForm,
  },
};
</script>

<style scoped>

.app-welcome {
  padding: 20px;
}
</style>
