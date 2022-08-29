<template>
  <div class="h-screen flex items-center justify-center">
    <Result
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <Button type="primary" @click="backHome" :loading="loading"
          >Back Home</Button
        >
      </template>
    </Result>
  </div>
</template>
<script>
import { Result, Button } from "ant-design-vue";
export default {
  components: {
    Result,
    Button,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    backHome() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push({ name: "root" });
      }, 1000);
    },
  },
};
</script>
<style lang=""></style>
