<template lang="">
  <div>
    <div>{{ userStore.user }}</div>
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.img" />
      {{ item.img }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { items } from "./constant";
export default {
  data() {
    return {
      items,
    };
  },
  computed: {
    ...mapState(["userStore"]),
  },
};
</script>
<style lang=""></style>
