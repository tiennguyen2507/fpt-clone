<template lang="">
  <div>
    <div>
      <MyHeader />
      <MyNarBar />
    </div>
    <div class="h-screen"></div>
    <MyFooter />
  </div>
</template>
<script>
import MyFooter from "@/views/common/footer/MyFooter.vue";
import MyHeader from "@/views/common/header/MyHeader.vue";
import MyNarBar from "@/views/common/narbar/MyNarBar.vue";
export default {
  components: {
    MyFooter,
    MyHeader,
    MyNarBar,
  },
};
</script>

<style>
.contai {
  background-image: url("../assets/img-container/desk-header-bg-banner-2.9.webp");
  background-size: cover;
}

.img-form {
  background-image: url("../assets/img-container/desk-html-bg.webp");
  background-size: cover;
}

.done2 {
  background-color: rgb(179, 7, 7);
  color: #fff;
}

.show-mobi:hover > .hidden-mobi {
  display: flex;
}

.hidden-mobi {
  display: none;
}

.show-loptop:hover > .hidden-loptop {
  display: flex;
}

.hidden-loptop {
  display: none;
}

.show-tablet:hover > .hidden-tablet {
  display: flex;
}

.hidden-tablet {
  display: none;
}

.show-apple:hover > .hidden-apple {
  display: flex;
}

.hidden-apple {
  display: none;
}

.show-pc:hover > .hidden-pc {
  display: block;
}

.hidden-pc {
  display: none;
}

.show-promo:hover > .hidden-promo {
  display: block;
}

.hidden-promo {
  display: none;
}

.show-phone:hover > .hidden-phone {
  display: flex;
}

.hidden-phone {
  display: none;
}

.show-voucher:hover > .hidden-voucher {
  display: block;
}

.hidden-voucher {
  display: none;
}

.show-dt:hover > .hidden-dt {
  display: block;
}

.hidden-dt {
  display: none;
}

.show-btn-mb:hover > .btn-mb {
  display: block;
}

.btn-mb {
  display: none;
}
</style>
