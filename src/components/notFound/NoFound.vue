<template>
  <div class="h-screen flex items-center justify-center">
    <a-result
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary" @click="backHome" :loading="loading"
          >Back Home</a-button
        >
      </template>
    </a-result>
  </div>
</template>
<script>
export default {
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
