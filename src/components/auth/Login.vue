<template>
  <div
    class="h-screen w-full bg-blue-300 flex justify-center items-center custom-login"
  >
    <a-spin :spinning="loading">
      <div class="w-96 bg-white rounded-lg shadow-2xl px-5 py-10">
        <div class="flex items-end">
          <img src="@/assets/Logo.png" class="w-14" />
          <h2 class="mb-0">Shop.com.vn</h2>
        </div>
        <a-form
          layout="vertical"
          class="!mt-10"
          @finish="login"
          :model="formData"
        >
          <a-form-item
            name="phone"
            label="Số Điện Thoại"
            :rules="[{ required: true, message: 'Số điện thoại là bắt buộc' }]"
          >
            <a-input
              v-model:value="formData.phone"
              type="tel"
              placeholder="0886694350"
            />
          </a-form-item>
          <a-form-item
            name="password"
            label="Mật khẩu"
            :rules="[{ required: true, message: 'Mật khẩu là bắt buộc' }]"
          >
            <a-input
              v-model:value="formData.password"
              type="password"
              placeholder="123456"
            />
          </a-form-item>
          <template v-if="alert1">
            <div class="rounded border-2 border-red-200 p-1 bg-red-300 mb-5">
              {{ alert1 }}
            </div>
          </template>

          <a-button danger type="primary" class="w-full" html-type="submit">
            Đăng Nhập
          </a-button>
        </a-form>
      </div>
    </a-spin>
  </div>
</template>
<script>
import { listUser } from "@/mock/auth.js";
export default {
  data() {
    return {
      formData: {
        phone: "",
        password: "",
      },
      alert1: "",
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        const user = listUser.find((user) => {
          if (user.phone !== this.formData.phone) {
            this.alert1 = "SDT không đúng hoặc chưa đăng kí!";
            return false;
          }
          if (user.password !== this.formData.password) {
            this.alert1 = "password không đúng!";
            return false;
          }
          this.alert1 = "";
          this.$router.push("/");
          return true;
        });
        console.log(user);
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style scoped>
.custom-login {
  background-image: url("https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/8/25/637970482425663739_Desk_Header_Background.png");
  background-size: cover;
}
</style>
