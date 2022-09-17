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
          class="w-[151] h-10 bg-[#cd1818] rounded"
        />
        <div class="flex items-center">
          <a-select
            v-model:value="value"
            mode="multiple"
            label-in-value
            placeholder="Nhập tên điện thoại,máy tính phụ kiện@.cần tìm"
            class="!w-[486px] !leading-9 !rounded-l-md"
            :filter-option="false"
            :not-found-content="fetching ? undefined : null"
            :options="data"
            @search="fetchUser"
          >
          <template v-if="fetching" #notFoundContent>
            <a-spin size="small" />
          </template>
          </a-select>
          <button class="bg-[#000000] w-[58px] h-[40px] text-white rounded-r-md">
            <search-outlined class="!text-xl font-bold"/>
          </button>
        </div>
        <ul
          class="flex justify-between h-[63px] w-[449px] items-center text-white"
        >
          <li
            class="text-center h-[55px] mt-2 cursor-pointer relative show-info"
          >
            <file-text-outlined class="!text-2xl"/>
            <p class="mt-1 mb-0">Thông tin hay</p>
            <ul
              class="w-[200px] bg-white text-gray-600 text-start px-3 py-2 shadow-lg absolute z-50 top-[55px] left-0 hidden-info"
            >
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                Tin mới
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                khuyến mãi
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                Thủ thuật
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                For Gamers
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                Video hot
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                Đánh giá - tư vấn
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">
                App & game
              </li>
              <li class="hover:text-black w-40 h-8 cursor-pointer">Sự kiện</li>
            </ul>
          </li>
          <li class="text-center h-[63px] mt-4 cursor-pointer">
            <dollar-outlined class="!text-2xl"/> 
            <p class="mt-1 mb-0">Thanh toán & tiện ích</p>
          </li>
          <li class="text-center h-[63px] mt-4 cursor-pointer">
            <contacts-filled class="!text-2xl"/>
            <p class="mt-1 mb-0">Tài khoản của tôi</p>
          </li>
          <li class="text-center h-[63px] mt-4 cursor-pointer">
            <shopping-cart-outlined class="!text-2xl"/>
            <p class="mt-1 mb-0">Giỏ hàng</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SearchOutlined,
  FileTextOutlined,
  DollarOutlined,
  ContactsFilled,
  ShoppingCartOutlined
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs, watch } from 'vue';
import { debounce } from 'lodash-es';
export default defineComponent({
  components:{
  SearchOutlined,
  FileTextOutlined,
  DollarOutlined,
  ContactsFilled,
  ShoppingCartOutlined
  },
  setup() {
    let lastFetchId = 0;

    const state = reactive({
      data: [],
      value: [],
      fetching: false,
    });

    const fetchUser = debounce(value => {
      console.log('fetching user', value);
      lastFetchId += 1;
      const fetchId = lastFetchId;
      state.data = [];
      state.fetching = true;
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
          if (fetchId !== lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.results.map(user => ({
            label: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
          }));
          state.data = data;
          state.fetching = false;
        });
    }, 300);

    watch(state.value, () => {
      state.data = [];
      state.fetching = false;
    });

    return {
      ...toRefs(state),
      fetchUser,
    };
  },
});

</script>
<style scoped>
.show-info:hover > .hidden-info {
  display: block;
}
.hidden-info {
  display: none;
}
</style>