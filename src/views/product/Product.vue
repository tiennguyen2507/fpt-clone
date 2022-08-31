<template lang="">
  <div>
    <div>{{ userStore.user }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userStore"]),
  },
};
</script>
<style lang=""></style>
