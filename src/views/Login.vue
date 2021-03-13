<template>
  <LoginForm />
</template>

<script lang="js">
export default {
  components: {
    LoginForm: () => import("@/components/Controls/LoginForm.vue")
  }
};
</script>

<style>
</style>