<template lang="">
  <div>
    <div class="flex justify-center items-center">
      <img src="@/assets/clipse.svg" alt="" class="w-[30px] h-[30px]" />
      <p class="text-[#ff001f] cursor-text m-[10px]">
        <strong class="text-sm font-bold">Laptop</strong>
        giảm đến
        <strong class="text-sm font-bold">40%</strong>
        cho học sinh sinh viên
      </p>
      <button
        class="bg-[#2183f6] w-[92px] h-6 text-xs text-white rounded-sm cursor-pointer"
      >
        Nhận mã ngay
      </button>
    </div>
    <div class="bg-[#cd1818] flex justify-center">
      <div class="flex justify-around items-center bg-[#cd1818] w-[1200px]">
        <img
          src="@/assets/logofpt.png"
          alt=""
          class="w-[151] h-10 bg-[#cd1818] rounded cursor-pointer"
          @click="$router.push('/')"
        />
        <div class="flex">
          <input
            type="text"
            placeholder="Nhập tên điện thoại,máy tính phụ kiện@.cần tìm"
            class="rounded-sm w-[496px] h-[38px] px-2 rounded-l-md outline-none"
          />
          <button class="bg-[#000000] w-[58px] text-white rounded-r-md">
            <i class="fa-solid fa-magnifying-glass text-xl"></i>
          </button>
        </div>
        <ul
          class="flex justify-between h-[63px] w-[449px] items-center text-white"
        >
          <li
            class="text-center h-[55px] mt-7 cursor-pointer relative show-info"
          >
            <i class="fa-solid fa-file-lines text-xl"></i>
            <p class="mt-1 mb-0">Thông tin hay</p>
            <ul
              class="w-[200px] bg-white text-gray-600 text-start px-3 py-2 shadow-lg absolute z-50 top-[52px] left-0 hidden-info"
            >
              <li
                class="hover:text-black w-40 h-8 cursor-pointer"
                v-for="(item, index) in goodInfor"
                :key="index"
              >
                {{ item.title }}
              </li>
            </ul>
          </li>
          <li class="text-center h-[63px] mt-7 cursor-pointer">
            <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
            <p class="mt-1 mb-0">Thanh toán & tiện ích</p>
          </li>
          <li
            class="text-center h-[63px] mt-7 cursor-pointer"
            @click="$router.push('/login')"
          >
            <i class="fa-solid fa-circle-user text-xl"></i>
            <p class="mt-1 mb-0">Tài khoản của tôi</p>
          </li>
          <li class="text-center h-[63px] mt-7 cursor-pointer">
            <i class="fa-solid fa-cart-shopping text-xl"></i>
            <p class="mt-1 mb-0">Giỏ hàng</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { goodInfor } from "./constant";
export default {
  computed: {
    goodInfor() {
      return goodInfor;
    },
  },
};
</script>
<style scoped>
.show-info:hover > .hidden-info {
  display: block;
}

.hidden-info {
  display: none;
}
</style>
