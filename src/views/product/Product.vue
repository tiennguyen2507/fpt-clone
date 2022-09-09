<template lang="">
  <div>
    <div>
      <MyHeader />
      <MyNarBar />
    </div>
    <div class="w-full border-b border-gray-200">
      <div class="w-[1200px] py-2 mb-3 mx-auto">
        <a href="/" class="hover:border-b border-blue-700 text-blue-700"
          >Trang chủ</a
        >
        /
        <a href="" class="hover:border-b border-blue-700 text-blue-700"
          >Máy tính bảng</a
        >
        /
        <a href="" class="hover:border-b border-blue-700 text-blue-700"
          >Apple(iPad)</a
        >
      </div>
      <div
        class="w-[1200px] mx-auto flex justify-between border-b-2 border-[#ccc] mb-4"
      >
        <div class="flex items-center cursor-default">
          <h1 class="text-2xl font-medium mr-2">
            iPad Gen 9 2021 10.2 inch WiFi 64GB
          </h1>
          <p class="text-[13px] text-gray-500 mt-2">(No.00773217)</p>
        </div>
        <div class="flex h-5">
          <ul class="flex">
            <li class="mr-1">⭐</li>
            <li class="mr-1">⭐</li>
            <li class="mr-1">⭐</li>
            <li class="mr-1">⭐</li>
            <li class="mr-1">⭐</li>
          </ul>
          <div class="mr-3">
            <a href="" class="text-blue-700 hover:border-b border-blue-700">
              178 đánh giá
            </a>
            |
            <a href="" class="text-blue-700 hover:border-b border-blue-700">
              1809 Hỏi & đáp
            </a>
          </div>
          <div class="h-5 hover:border-blue-400">
            <a
              href=""
              class="flex text-blue-700 hover:border-b border-blue-700"
            >
              <div
                class="border border-blue-700 rounded-full w-4 h-4 text-center leading-3 mt-[2px] mr-1 hover:border-blue-400"
              >
                +
              </div>
              <p class="m-0">So sánh</p>
            </a>
          </div>
        </div>
      </div>
      <!-- product-container -->
      <div
        class="w-[1200px] h-[740px] mx-auto grid grid-cols-2 gap-x-[30px] border-b border-gray-200"
      >
        <!-- form-left -->
        <form action="" class="">
          <div class="h-[410px] w-[585px] relative" v-if="formLeft1">
            <img
              src="src/assets/img-product/frame-detail-585x428.webp"
              alt=""
              class="w-[585px] h-[390px] z-10"
              v-if="sale"
            />
            <img
              src="src/assets/img-product/ipad-bac-1.webp"
              alt=""
              class="w-[425px] h-[280px] absolute top-[58px] left-20 -z-10"
              v-if="mobiSlider1"
            />
            <img
              src="src/assets/img-product/ipad-10-2-2021-wi-fi-bac-2.webp"
              alt=""
              class="w-[300px] h-[270px] absolute top-[65px] left-[150px] -z-10"
              v-if="mobiSlider2"
            />
            <div
              class="border border-gray-300 w-10 h-10 text-lg text-center leading-10 rounded-full text-gray-400 absolute top-[160px] left-1 cursor-pointer"
              v-if="mobiSlider2"
              @click="slider2"
            >
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div
              class="border border-gray-300 w-10 h-10 text-lg text-center leading-10 rounded-full text-gray-400 absolute top-[160px] right-4 cursor-pointer"
              v-if="mobiSlider1"
              @click="slider1"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <!-- left-2 -->
          <div class="w-[585px] h-[410px] relative" v-if="formLeft2">
            <img
              src="src/assets/img-product/frame-detail-585x428.webp"
              alt=""
              class="w-[585px] h-[390px] z-10"
              v-if="sale"
            />
            <img
              src="src/assets/img-product/ipad-xam-1.webp"
              alt=""
              class="w-[300px] h-[270px] absolute top-[65px] left-[150px] -z-10"
              v-if="mobiSlider1"
            />
            <img
              src="src/assets/img-product/79_ipad-10-2-2021-wi-fi-xam-2.webp"
              alt=""
              class="w-[300px] h-[270px] absolute top-[65px] left-[150px] -z-10"
              v-if="mobiSlider2"
            />
            <div
              class="border border-gray-300 w-10 h-10 text-lg text-center leading-10 rounded-full text-gray-400 absolute top-[160px] left-1 cursor-pointer"
              v-if="mobiSlider2"
              @click="slider2"
            >
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div
              class="border border-gray-300 w-10 h-10 text-lg text-center leading-10 rounded-full text-gray-400 absolute top-[160px] right-4 cursor-pointer"
              v-if="mobiSlider1"
              @click="slider1"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>

          <div class="flex justify-evenly text-center">
            <a
              href="https://fptshop.com.vn/may-tinh-bang/ipad-10-2-2021-wi-fi?dung-luong=64gb#lg=1&slide=0"
              class="text-gray-400"
            >
              <i class="fa-solid fa-images text-4xl"></i>
              <p class="">Xem thêm 7 ảnh</p>
            </a>
            <a
              href="https://fptshop.com.vn/may-tinh-bang/ipad-10-2-2021-wi-fi?dung-luong=256gb#lg=1&slide=0"
              class="text-gray-400"
            >
              <i class="fa-solid fa-box-open text-4xl"></i>
              <p class="">Trong hộp có gì</p>
            </a>
          </div>

          <div
            class="w-[585px] bg-violet-100 border border-violet-200 px-5 py-3 rounded-md text-gray-600"
          >
            <div class="mb-1">
              <i class="fa-solid fa-mobile-screen text-gray-400 mr-2"></i>
              10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels
            </div>
            <div class="mb-1">
              <i class="fa-solid fa-camera text-gray-400 mr-2"></i>
              8.0 MP
            </div>
            <div class="mb-1">
              <i class="fa-solid fa-chalkboard-user text-gray-400 mr-2"></i>
              12.0 MP
            </div>
            <div class="mb-1">
              <i class="fa-solid fa-microchip text-gray-400 mr-2"></i>
              Apple A13 Bionic
            </div>
            <div class="mb-1">
              <i class="fa-solid fa-hard-drive text-gray-400 mr-2"></i>
              256 GB
            </div>
            <p
              class="text-blue-500 hover:border-b border-blue-500 inline-block cursor-pointer"
            >
              Xem chi tiết thông số kỹ thuật
            </p>
          </div>

          <div class="my-4">
            <i class="fa-solid fa-medal text-xl text-red-500"></i>
            Hàng chính hãng - bảo hành 12 Tháng
            <i class="fa-solid fa-truck-fast text-lg text-red-500 mx-2"></i>
            Giao hàng toàn quốc.
          </div>
        </form>
        <!-- form-right -->
        <div class="w-[585px] mb-3 overflow-y-scroll overflow-x-hidden pr-1">
          <!-- 64g -->
          <form action="" class="mb-3" v-if="checked1">
            <div class="flex justify-between">
              <div class="flex">
                <p class="text-red-700 text-[32px] font-medium mr-2 m-0">
                  8.790.000₫
                </p>
                <p class="text-lg text-gray-400 line-through leading-10 mt-2">
                  9.990.000₫
                </p>
              </div>
              <div class="text-center">
                <p class="m-0">Trả góp chỉ từ</p>
                <p class="font-bold">868.500₫/tháng</p>
              </div>
            </div>
            <div
              class="bg-red-800 rounded-md py-2 pl-5 pr-2 flex justify-between items-center mb-3"
            >
              <div class="flex items-center text-white">
                Chỉ từ
                <p class="mx-1 mb-0 text-yellow-400 font-medium text-xl">
                  7.911.000₫
                </p>
                áp dụng cho học sinh - Sinh viên
              </div>
              <div
                class="px-4 py-[10px] bg-white rounded-md font-medium text-red-600 text-base cursor-pointer"
              >
                Nhận mã ngay
              </div>
            </div>
            <div class="grid grid-cols-2 bg-[#f4f4f4] cursor-pointer">
              <div class="text-center py-[6px] bg-[#e3d6d6]">
                <div class="font-bold">
                  <input type="radio" :checked="checked" name="" />
                  64G
                </div>
                <div class="">8.790.000₫</div>
              </div>
              <div class="text-center py-[6px]" @click="check1">
                <div class="font-bold">
                  <input type="radio" name="" id="" />
                  256G
                </div>
                <div class="">12.490.000₫</div>
              </div>
            </div>
          </form>
          <!-- 256G -->
          <form action="" class="mb-3" v-if="checked2">
            <div class="flex justify-between">
              <div class="flex">
                <p class="text-red-700 text-[32px] font-medium mr-2 m-0">
                  12.490.000₫
                </p>
                <p class="text-lg text-gray-400 line-through leading-10 mt-2">
                  13.990.000₫
                </p>
              </div>
              <div class="text-center">
                <p class="m-0">Trả góp chỉ từ</p>
                <p class="font-bold">1.212.000₫/tháng</p>
              </div>
            </div>
            <div
              class="bg-red-800 rounded-md py-2 pl-5 pr-2 flex justify-between items-center mb-3"
            >
              <div class="flex items-center text-white">
                Chỉ từ
                <p class="mx-1 mb-0 text-yellow-400 font-medium text-xl">
                  11.241.000₫
                </p>
                áp dụng cho học sinh - Sinh viên
              </div>
              <div
                class="px-4 py-[10px] bg-white rounded-md font-medium text-red-600 text-base cursor-pointer"
              >
                Nhận mã ngay
              </div>
            </div>
            <div class="grid grid-cols-2 bg-[#f4f4f4] cursor-pointer">
              <div class="text-center py-[6px]" @click="check2">
                <div class="font-bold">
                  <input type="radio" name="" id="" />
                  64G
                </div>
                <div class="">8.790.000₫</div>
              </div>
              <div class="text-center py-[6px] bg-[#e3d6d6]">
                <div class="font-bold">
                  <input type="radio" :checked="checked" class="" />
                  256G
                </div>
                <div class="">12.490.000₫</div>
              </div>
            </div>
          </form>
          <div class="flex">
            <div
              class="p-[2px] text-center text-xs cursor-pointer"
              @click="showLeft1"
            >
              <img
                src="src/assets/img-product/47_ipad-10-2-2021-wi-fi-bac-1.webp"
                alt=""
                class="w-9 h-9 p-[2px] rounded"
                :class="{ checkBorder: this.checkout1 }"
              />
              Bạc
            </div>
            <div
              class="p-[2px] text-center text-xs cursor-pointer"
              @click="showLeft2"
            >
              <img
                src="src/assets/img-product/ipad-xam-1.webp"
                alt=""
                class="w-9 h-9 p-[2px] rounded"
                :class="{ checkBorder: this.checkout2 }"
              />
              Xám
            </div>
          </div>
          <form
            action=""
            class="bg-[#f4f4f4] border border-gray-400 mt-2 rounded-md"
          >
            <div class="">
              <div class="p-2 border-b border-gray-400 font-bold">
                Chọn 1 trong 2 khuyến mãi
              </div>
              <div class="p-2 border-b border-gray-400">
                <div class="text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name=""
                    class="mr-2"
                    :checked="promotion1"
                    @click="showPromo1"
                  />
                  Giảm ngay 1.200.000₫ khi mua màu xám áp dụng đến 08/09
                </div>
                <div class="text-gray-600 cursor-pointer">
                  <input
                    type="radio"
                    name=""
                    class="mr-2"
                    :checked="promotion2"
                    @click="showPromo2"
                  />
                  Trả góp 0%
                </div>
              </div>
              <div class="">
                <button class="bg-red-300 font-bold p-1">Ưu đãi thêm</button>
                <div class="p-2">
                  <div class="text-[13px]">
                    ✅ Đặc quyền dành cho Tân Sinh viên: Giảm thêm đến 10% +
                    Tặng thêm 1 năm bảo hành
                  </div>
                  <a
                    href="https://fptshop.com.vn/tiep-suc-mua-thi"
                    class="ml-5 hover:border-b border-blue-400 cursor-pointer"
                  >
                    Xem chi tiết
                  </a>
                  <div class="text-[13px] my-1">
                    ✅ Tặng PMH 300.000đ mua Apple Pencil 1
                  </div>
                  <div class="text-[13px]">
                    ✅ Thu cũ đổi mới trợ giá ngay 15% đến 3 triệu
                    (SmartExchange)
                    <a
                      href="https://fptshop.com.vn/thu-cu-doi-moi"
                      class="ml-1 hover:border-b border-blue-400 cursor-pointer"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                  <a
                    href=""
                    class="ml-5 hover:border-b border-blue-400"
                    v-if="text1"
                    @click.prevent="showText"
                  >
                    Xem thêm 2 ưu đãi khác
                    <i class="fa-solid fa-angle-down"></i>
                  </a>
                  <div class="" v-if="text2">
                    <div class="text-[13px] my-1">
                      ✅ Cơ hội trúng Jackpot đến 2 tỷ
                      <a
                        href="https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/fpt-shop-sinh-nhat-muoi-tuoi-mua-hang-trung-jackpot-den-2-ty-143556"
                        class="ml-1 hover:border-b border-blue-400 cursor-pointer"
                      >
                        Xem chi tiết
                      </a>
                    </div>
                    <div class="text-[13px]">
                      ✅ Tặng gói iCloud 50GB miễn phí 3 tháng
                      <a
                        href="https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/cach-nhan-mien-phi-goi-dung-luong-icloud-50gb-tai-fpt-shop-132626"
                        class="ml-1 hover:border-b border-blue-400 cursor-pointer"
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <form action="" class="my-4 w-[585px]">
            <div class="flex mb-3">
              <div
                class="border border-gray-200 w-[60px] h-[60px] p-1 rounded relative"
              >
                <img
                  src="src/assets/img-product/vnpay.webp"
                  alt=""
                  class="w-12 h-12"
                />
                <input type="checkbox" name="" class="absolute bottom-[6px]" />
              </div>
              <div class="w-[517px] ml-2">
                <p class="font-bold m-0 text-[15px] leading-[20px]">
                  Thanh toán VNPAY-QR
                </p>
                <p class="m-0 leading-[20px] text-gray-700">
                  Nhập BTS400 giảm 5% tối đa 400.000đ khi thanh toán 100% qua
                  VNPAY-QR
                  <a
                    href=""
                    class="leading-[20px] hover:border-b border-blue-400"
                    >Xem chi tiết</a
                  >
                </p>
              </div>
            </div>
            <div class="flex mb-3">
              <div
                class="border border-gray-200 w-[60px] h-[60px] p-1 rounded relative"
              >
                <img
                  src="src/assets/img-sale/tpbank.webp"
                  alt=""
                  class="w-12 h-12"
                />
                <input type="checkbox" name="" class="absolute bottom-[6px]" />
              </div>
              <div class="ml-2 w-[517px]">
                <p class="font-bold m-0 text-[15px] leading-[20px]">EVO</p>
                <p class="m-0 leading-[20px] text-gray-700">
                  Giảm ngay 600.000đ và hoàn tiền đến 500k khi mở thẻ đồng
                  thương hiệu TPBANK EVO (áp dụng cùng VNPAY/MOCA)
                  <a
                    href=""
                    class="leading-[20px] hover:border-b border-blue-400"
                    >Xem chi tiết</a
                  >
                </p>
              </div>
            </div>
            <div class="" v-if="endow">
              <div class="flex mb-3">
                <div
                  class="border border-gray-200 w-[60px] h-[60px] p-1 rounded relative"
                >
                  <img
                    src="src/assets/img-sale/channels4_profile.webp"
                    alt=""
                    class="w-12 h-12"
                  />
                  <input
                    type="checkbox"
                    name=""
                    class="absolute bottom-[6px]"
                  />
                </div>
                <div class="ml-2 w-[517px]">
                  <p class="font-bold m-0 text-[15px] leading-[20px]">
                    Thanh toán Kredivo
                  </p>
                  <p class="m-0 leading-[20px] text-gray-700">
                    Mua trước trả sau Kredivo - Giảm ngay 5% tối đa 1.000.000đ
                    cho sản phẩm từ 800.000đ đến 25.000.000đ khi thanh toán
                    Online qua Kredivo
                    <a
                      href=""
                      class="leading-[20px] hover:border-b border-blue-400"
                      >Xem chi tiết</a
                    >
                  </p>
                </div>
              </div>
              <div class="flex mb-3">
                <div
                  class="border border-gray-200 w-[60px] h-[60px] p-1 rounded relative"
                >
                  <img
                    src="src/assets/img-sale/logo-moca.webp"
                    alt=""
                    class="w-12 h-12"
                  />
                  <input
                    type="checkbox"
                    name=""
                    class="absolute bottom-[6px]"
                  />
                </div>
                <div class="ml-2 w-[517px]">
                  <p class="font-bold m-0 text-[15px] leading-[20px]">
                    Thanh toán ví Moca trên ứng dụng Grab
                  </p>
                  <p class="m-0 leading-[20px] text-gray-700">
                    Nhập FPTMOCA giảm ngay 5% tối đa 200.000 đồng cho sản phẩm
                    trên 500.000đ khi thanh toán ví Moca trên ứng dụng Grab
                    <a
                      href=""
                      class="leading-[20px] hover:border-b border-blue-400"
                      >Xem chi tiết</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <a
              href=""
              class="hover:border-b border-blue-400"
              v-if="!endow"
              @click.prevent="showEndow"
            >
              Xem thêm 2 ưu đãi khác
              <i class="fa-solid fa-chevron-down"></i>
            </a>
          </form>
          <div
            class="mt-5 bg-red-700 text-center text-white rounded-md cursor-pointer hover:opacity-90 p-1"
          >
            <p class="m-0 text-xl">MUA NGAY</p>
            <p class="m-0">Giao hàng miễn phí hoặc nhận tại shop</p>
          </div>
          <div class="grid grid-cols-2 gap-x-2">
            <div
              class="mt-5 bg-blue-700 text-center text-white rounded-md cursor-pointer hover:opacity-90 p-1"
            >
              <p class="m-0 text-xl">TRẢ GÓP 0%</p>
              <p class="m-0">Duyệt nhanh qua điện thoại</p>
            </div>
            <div
              class="mt-5 bg-blue-700 text-center text-white rounded-md cursor-pointer hover:opacity-90 p-1"
            >
              <p class="m-0 text-xl">TRẢ GÓP QUA THẺ</p>
              <p class="m-0">Visa, Master Card, JCB, AMEX</p>
            </div>
          </div>
          <div class="flex justify-between my-3">
            <div class="text-gray-500">
              Gọi
              <a href="" class="text-red-500 hover:text-gray-800 font-bold"
                >1800-6601
              </a>
              để được tư vấn mua hàng (Miễn phí)
            </div>
            <a href="" class="hover:border-b border-blue-400">
              <i class="fa-solid fa-location-dot"></i>
              Tìm shop có hàng gần nhất
            </a>
          </div>
          <div class="border border-gray-400 rounded p-2 my-2">
            <a href="" class="text-gray-600">
              Mua hàng cũ: iPad Gen 9 2021 10.2 inch WiFi 64G
            </a>
            <p class="m-0">
              Giá từ:
              <a href="" class="text-red-500">7.473.000đ</a>
            </p>
          </div>
          <form action="" class="w-[585px]">
            <h3 class="font-bold">Gợi ý sản phẩm mua kèm</h3>
            <ul class="w-[585px]">
              <li
                class="flex mb-2"
                v-for="(cart, index) in listCart"
                :key="index"
              >
                <div class="p-1 border border-gray-300 w-20 h-20 rounded">
                  <img :src="cart.thumb" alt="" class="w-[68px] h-[64px]" />
                </div>
                <div class="h-20 ml-2">
                  <a href="" class="text-gray-500 leading-8">{{
                    cart.title
                  }}</a>
                  <div class="w-[475px] flex justify-between">
                    <div class="text-red-500 cursor-pointer font-bold flex">
                      {{ cart.newPrice }}
                      <p class="line-through text-gray-600 font-normal">
                        {{ cart.oldPrice }}
                      </p>
                    </div>
                    <div
                      class="text-gray-700 text-xs border border-gray-400 px-1 cursor-pointer h-6 rounded pt-[2px]"
                    >
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </form>
          <form action="" class="w-[585px]">
            <h3 class="font-bold">Mua theo Combo</h3>
            <ul class="w-[585px]">
              <li
                class="flex mb-2"
                v-for="(combo, index) in combos"
                :key="index"
              >
                <div
                  class="p-1 border border-gray-300 w-20 h-20 rounded relative"
                >
                  <img :src="combo.photo" alt="" class="w-[68px] h-[64px]" />
                  <input type="checkbox" name="" class="absolute bottom-1" />
                </div>
                <div class="h-20 ml-2">
                  <a href="" class="text-gray-500 leading-8">{{
                    combo.content
                  }}</a>
                  <div class="w-[475px] h-6 flex justify-between">
                    <div class="text-red-500 cursor-pointer font-bold flex">
                      {{ combo.priceNew }}
                      <p class="line-through text-gray-600 font-normal">
                        {{ combo.priceOld }}
                      </p>
                    </div>
                    <div
                      class="text-gray-700 text-xs border border-gray-400 px-1 cursor-pointer h-6 rounded pt-[2px]"
                    >
                      Thêm vào giỏ hàng
                    </div>
                  </div>
                  <div class="text-gray-500 bg-[#f8f9fa] w-[475px]">
                    {{ combo.saleNew }}
                  </div>
                </div>
              </li>
            </ul>
          </form>
          <div class="mt-7 border-b border-gray-300 pb-3">
            <input
              type="text"
              class="w-[300px] border border-gray-400 px-2 py-[2px] outline-blue-300 rounded-l"
              placeholder="Chọn sản phẩm khác"
            />
            <span class="bg-gray-300 p-[5.5px] rounded-r text-white">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div class="mt-4 mb-2 flex items-center">
            <div
              class="bg-red-600 inline-block px-2 py-1 text-white cursor-pointer rounded hover:opacity-80"
            >
              Mua thêm 2 sản phẩm
            </div>
            <div class="flex ml-2">
              Tiết kiệm:
              <p class="m-0 text-red-500 text-[13px] font-medium">39.900đ</p>
            </div>
          </div>
        </div>
      </div>
      <!-- ---------------------------------  -->
      <div class="mt-4 bg-[#f8f9fa]">
        <form
          action=""
          class="w-[1200px] overflow-hidden mx-auto mb-5 shado flex gap-x-[30px]"
          :class="{ enlarge: this.zomOut }"
        >
          <!-- left -->
          <div class="p-3 w-[705px] bg-white shado rounded-md relative">
            <h2 class="text-xl font-medium">
              Đặc điểm nổi bật của iPad Gen 9 2021 10.2 inch WiFi
            </h2>
            <img
              src="src/assets/img-product/882_ipad.webp"
              alt=""
              class="w-[665px] h-[374px]"
            />
            <div class="flex justify-center">
              <div class="w-10 h-[3px] bg-red-500 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
              <div class="w-10 h-[3px] bg-gray-300 mt-2 mr-3"></div>
            </div>
            <h2 class="text-center text-xl font-bold mt-6">
              Đánh giá chi tiết iPad Gen 9 2021 10.2 inch WiFi
            </h2>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Mạnh mẽ, dễ dàng sử dụng, màn hình lớn, đặc biệt được bán ở mức
              giá rẻ, iPad Gen 9 10.2 2021 là chiếc máy tính bảng tuyệt vời cho
              mọi nhu cầu cơ bản, từ giải trí, sáng tạo, làm việc, kết nối và
              hơn thế nữa.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-11.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Đủ sức mạnh để làm mọi việc
            </h3>
            <p class="mx-[7px] font-bold text-gray-600 text-sm w-[665px]">
              iPad Gen 9 10.2 2021 mang trên mình bộ vi xử lý Apple A13 Bionic
              cực mạnh, giúp tất cả đều diễn ra một cách mượt mà và nhanh chóng.
              Từ duyệt web, xem phim cho đến chơi game hay thậm chí là chạy
              nhiều ứng dụng cùng lúc, iPad đều hoàn thành xuất sắc.
              <br />
              <br />
              GPU mạnh hơn tới 20%, cho hiệu suất đồ họa hoàn hảo, mang tới khả
              năng chỉnh sửa ảnh, video hay chơi game đỉnh cao. Hãy làm mọi thứ
              bạn muốn, iPad Gen 9 10.2 2021 đủ hiệu năng để chạy mượt trong
              nhiều năm nữa.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-15.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Giải trí không giới hạn
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Thời lượng pin của iPad Gen 9 lên tới 10 giờ sử dụng, sẵn sàng
              đồng hành cùng bạn suốt cả ngày. Bạn có thể sử dụng iPad để học
              trực tuyến vào buổi sáng, chơi game vào buổi chiều rồi xem phim
              vào buổi tối, iPad Gen 9 10.2 2021 với thời lượng pin bền bỉ sẽ là
              trợ thủ đắc lực.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-1.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Màn hình Retina 10.2 inch sắc nét
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Một màn hình lớn tới 10.2 inch sẵn sàng truyền tải nội dung theo
              cách ấn tượng nhất. Chất lượng Retina sắc nét, độ chi tiết đáng
              kinh ngạc, màu sắc sống động và công nghệ True Tone điều chỉnh màn
              hình theo nhiệt độ màu của môi trường giúp hình ảnh luôn vô cùng
              hấp dẫn. Màn hình lớn giúp đôi mắt của bạn dễ chịu hơn, trải
              nghiệm xem mãn nhãn hơn, làm việc hiệu quả và giải trí thú vị hơn.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-3.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Camera FaceTime 12MP sắc nét, góc siêu rộng
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Camera trước iPad Gen 9 10.2 2021 được nâng cấp vượt bậc với độ
              phân giải lên tới 12MP và góc siêu rộng, cho chất lượng hình ảnh
              rõ nét, chụp ảnh selfie ấn tượng, ngay cả khi chụp cả nhóm bạn
              đông người.
              <br />
              <br />
              Hơn nữa, trong những cuộc gọi video, chế độ Sân khấu trung tâm còn
              có thể tự động điều chỉnh để bạn luôn đứng giữa khung hình. Ngoài
              ra, một camera trước chất lượng còn rất hữu ích khi học tập hay
              họp mặt online.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-20.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Camera sau đa năng
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Camera sau 8MP giúp bạn ghi lại những hình ảnh và video sắc nét,
              sống động, lưu giữ khoảnh khắc đáng nhớ trong cuộc sống. Bên cạnh
              đó, bạn cũng có thể sử dụng camera này để scan tài liệu hay trải
              nghiệm các ứng dụng AR phong phú.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-7.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Tương thích với bút cảm ứng Apple Pencil và bàn phím Smart
              Keyboard
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              iPad 9 2021 tương thích với những phụ kiện hữu ích là bút cảm ứng
              Apple Pencil và bàn phím Smart Keyboard. Trong đó bút Apple Pencil
              cho bạn trải nghiệm viết vẽ tự nhiên như ở trên giấy, để bạn ghi
              lại những ghi chú hay phác họa các tác phẩm nghệ thuật, chỉnh sửa
              và chia sẻ nhanh chóng. Còn bàn phím thông minh kiêm bao da bảo vệ
              là phụ kiện hoàn hảo để nhập liệu, đánh máy thoải mái như trên
              laptop, biến iPad của bạn thành một sản phẩm làm việc thực sự
              chuyên nghiệp.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad102-gen-9-2021-2.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <h3 class="mt-3 font-bold text-base mx-[7px]">
              Phát huy hết sức mạnh trên hệ điều hành iPadOS
            </h3>
            <p class="w-[665px] mx-auto font-bold text-gray-600 text-sm">
              Được thiết kế để tối ưu cho màn hình lớn, hệ điều hành iPadOS cho
              bạn cách tương tác, tìm kiếm và sắp xếp thông tin một cách hiệu
              quả nhất. Bạn có thể chia đôi màn hình để hiển thị cùng lúc hai
              ứng dụng, đưa các tiện ích ra màn hình chủ hay ghi chú ở bất cứ
              đâu.
              <br />
              <br />
              Ngoài ra, kho ứng dụng khổng lồ dành riêng cho iPad sẽ có đầy đủ
              tất cả những thứ bạn cần, từ chơi game giải trí cho đến các phần
              mềm làm việc chuyên dụng.
            </p>
            <img
              src="src/assets/img-product/product-page/ipad-102-gen-9-2021-16.webp"
              alt=""
              class="w-[665px] h-[443px] mx-auto"
            />
            <div
              class="absolute bottom-0 left-0 w-[705px] h-[130px] z-20"
              v-if="btnZom"
            >
              <button
                class="border border-gray-800 ml-[300px] mt-[90px] text-black bg-white px-1 py-[2px] rounded-md hover:opacity-80"
                @click.prevent="showZom"
              >
                Đọc thêm
                <i class="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </div>
          <!-- right -->
          <div class="w-[465px]">
            <div class="h-[435px] bg-white p-5 shado rounded-md mx-auto">
              <h2 class="text-xl font-medium">Thông số kỹ thuật</h2>
              <table class="mb-2">
                <thead class="border border-x-gray-300 bg-[#f3f4f7] text-start">
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Màn hình
                    </th>
                    <th
                      class="w-[298px] border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      10.2 inch, IPS LCD, Liquid Retina HD, 2160 x 1620 Pixels
                    </th>
                  </tr>
                </thead>
                <tbody class="border border-x-gray-300">
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Camera sau
                    </th>
                    <th
                      class="w-298px border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      8.0 MP
                    </th>
                  </tr>
                  <tr class="bg-[#f3f4f7]">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Camera Selfie
                    </th>
                    <th
                      class="w-[298px] border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      12.0 MP
                    </th>
                  </tr>
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      RAM
                    </th>
                    <th
                      class="w-298px border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      3 GB
                    </th>
                  </tr>
                  <tr class="bg-[#f3f4f7]">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Bộ nhớ trong
                    </th>
                    <th
                      class="w-[298px] border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      64 GB
                    </th>
                  </tr>
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      CPU
                    </th>
                    <th
                      class="w-298px border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      Apple A13 Bionic
                    </th>
                  </tr>
                  <tr class="bg-[#f3f4f7]">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      GPU
                    </th>
                    <th
                      class="w-[298px] border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      Apple GPU 4 nhân
                    </th>
                  </tr>
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Thẻ sim
                    </th>
                    <th
                      class="w-298px border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      0
                    </th>
                  </tr>
                  <tr class="bg-[#f3f4f7]">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Xuất xứ
                    </th>
                    <th
                      class="w-[298px] border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      Trung Quốc
                    </th>
                  </tr>
                  <tr class="">
                    <th
                      class="w-[126px] border border-x-gray-300 text-start px-2 py-1 font-normal"
                    >
                      Thời gian ra mắt
                    </th>
                    <th
                      class="w-298px border border-x-gray-300 text-start px-2 py-1 whitespace-pre-wrap font-normal"
                    >
                      09/2021
                    </th>
                  </tr>
                </tbody>
              </table>
              <div class="text-center">
                <a
                  href=""
                  class="leading-[18px] hover:border-b border-blue-400"
                >
                  Xem cấu hình chi tiết
                  <i class="fa-solid fa-caret-right text-md"></i>
                </a>
              </div>
            </div>
            <div class="bg-white p-4 shadow-md rounded-md mt-5">
              <h3 class="text-xl font-medium">
                Tin tức về iPad Gen 9 2021 10.2 inch WiFi
              </h3>
              <div class="flex">
                <img
                  src="src/assets/img-product/84_750x500.webp"
                  alt=""
                  class="w-[105px] h-[70px] rounded-sm mr-2"
                />
                <div class="">
                  <a href="" class="text-[15px] text-gray-800">
                    FPT Shop giảm ngay 400.000 đồng cho khách hàng mua Apple
                    Watch Series 7, iPad 10.2 | iPad Mini 8.3 và thanh toán qua
                    VNPAY-QR
                  </a>
                  <div class="flex justify-between mt-2">
                    <a
                      href=""
                      class="text-gray-500 hover:bg-gray-300 px-1 py-[2px] hover:text-gray-800 rounded-sm"
                    >
                      Tin khuyến mãi
                    </a>
                    <a
                      href=""
                      class="text-gray-500 hover:bg-gray-300 px-1 py-[2px] hover:text-gray-800 rounded-sm"
                    >
                      Khuyến mãi FPT shop
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex mt-2">
                <img
                  src="src/assets/img-product/38_ipad-mini-purple-cover.webp"
                  alt=""
                  class="w-[105px] h-[70px] rounded-sm mr-2"
                />
                <div class="">
                  <a href="" class="text-[15px] text-gray-800">
                    iPad 9 và iPad mini 6 mới ra mắt có dung lượng RAM bao
                    nhiêu?
                  </a>
                  <div class="flex justify-between mt-2">
                    <a
                      href=""
                      class="text-gray-500 hover:bg-gray-300 px-1 py-[2px] hover:text-gray-800 rounded-sm"
                    >
                      Tin mới
                    </a>
                    <a
                      href=""
                      class="text-gray-500 hover:bg-gray-300 px-1 py-[2px] hover:text-gray-800 rounded-sm"
                    >
                      Bộ nhớ trong
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="w-[1200px] bg-white shado rounded-md mx-auto my-7">
          <div class="text-xl font-medium text-gray-600 p-3">
            Câu hỏi thường gặp
          </div>
          <div class="cursor-pointer border-y border-gray-300 px-3">
            <div class="text-lg flex justify-between items-center">
              <div class="leading-[46px]">
                <i
                  class="fa-solid fa-question bg-gray-600 text-gray-100 text-sm px-2 py-[5px] rounded-full"
                ></i>
                Trả góp thẻ tín dụng thì được góp mấy tháng?
              </div>
              <p
                class="px-2 mb-0 leading-[27px] bg-orange-300 rounded-full text-blue-600 hover:opacity-80"
                v-if="more"
                @click="showMore"
              >
                +
              </p>
              <p
                class="px-[9px] mb-0 bg-orange-300 rounded-full text-blue-600 hover:opacity-80"
                v-if="!more"
                @click="showMore"
              >
                -
              </p>
            </div>
            <div class="text-gray-500" v-if="newText">
              Tùy theo ngân hàng sẽ có thời hạn trả góp 6 - 9 - 12 tháng
            </div>
          </div>
          <div class="cursor-pointer px-3 shado">
            <div class="text-lg flex justify-between items-center">
              <div class="leading-[46px]">
                <i
                  class="fa-solid fa-question bg-gray-600 text-gray-100 text-sm px-2 py-[5px] rounded-full"
                ></i>
                Mua sản phẩm tại FPT Shop được hưởng chế độ bảo hành thế nào?
              </div>
              <p
                class="px-2 mb-0 leading-[27px] bg-orange-300 rounded-full text-blue-600 hover:opacity-80"
                v-if="more1"
                @click="showMore1"
              >
                +
              </p>
              <p
                class="px-[9px] mb-0 bg-orange-300 rounded-full text-blue-600 hover:opacity-80"
                v-if="!more1"
                @click="showMore1"
              >
                -
              </p>
            </div>
            <div class="text-gray-500 pb-2" v-if="newText1">
              Để đảm bảo quyền lợi của quý khách hàng khi mua sản phẩm tại các
              cửa hàng thuộc hệ thống cửa hàng FPT Shop. Chúng tôi cam kết tất
              cả các sản phẩm được tuân theo các điều khoản bảo hành của sản
              phẩm tại thời điểm xuất hóa đơn cho quý khách hàng. Các sản phẩm
              điện thoại sẽ có chính sách bảo hành khác nhau tùy thuộc vào hãng
              sản xuất. Khách hàng có thể bảo hành máy tại các cửa hàng FPT Shop
              trên toàn quốc cũng như các trung tâm bảo hành chính hãng sản
              phẩm.
            </div>
          </div>
        </div>
      </div>
      <div class="w-[1200px] px-5 py-4 mx-auto bg-white my-5 rounded-md shado">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-semibold">
            Hướng dẫn & tư vấn về iPad Gen 9 2021 10.2 inch WiFi
          </h2>
          <a href="" class="hover:border-b border-blue-400 leading-4"
            >Xem tất cả</a
          >
        </div>
        <ul class="grid grid-cols-4 gap-x-5 mt-2 cursor-pointer">
          <li class="" v-for="(iPad, index) in listIpad" :key="index">
            <img :src="iPad.photos" alt="" class="mb-2 rounded" />
            <a href="" class="text-gray-500">{{ iPad.name }}</a>
            <div class="grid grid-cols-2 mt-2">
              <a
                href=""
                class="text-gray-400 hover:bg-gray-200 text-center w-[132px] rounded hover:text-black"
              >
                Đánh giá - Tư vấn
              </a>
              <a
                href=""
                class="text-gray-400 hover:bg-gray-200 text-center w-[132px] rounded hover:text-black"
              >
                Tư vấn mua hàng
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
  data() {
    return {
      mobiSlider1: true,
      mobiSlider2: false,
      checked: true,
      checked1: true,
      checked2: false,
      formLeft1: true,
      formLeft2: false,
      checkout1: false,
      checkout2: false,
      text1: true,
      tex2: false,
      promotion1: true,
      promotion2: false,
      sale: true,
      zomOut: true,
      btnZom: true,
      endow: false,
      more: true,
      newText: false,
      more1: true,
      newText1: false,
      listCart: [
        {
          thumb: "src/assets/img-product/HASP.webp",
          title: "Bao da iPad 10.2 & Air 3 10.5 inch Apple Smart Cover Black",
          newPrice: "799.000đ",
          oldPrice: "1.599.000đ",
        },
        {
          thumb: "src/assets/img-product/HASP-0.webp",
          title:
            "Bàn phím không dây Apple iPad  10.2 & Air 3 10.5 Smart Keyboard",
          newPrice: "3.799.000đ",
          oldPrice: "4.999.000đ",
        },
        {
          thumb: "src/assets/img-product/apple pencil 1.webp",
          title: "Bút cảm ứng Apple Pencil 1",
          newPrice: "2.599.000đ",
          oldPrice: "2.999.000đ",
        },
        {
          thumb: "src/assets/img-product/sac-kep.webp",
          title: "Sạc kép 35W USB-C Power Adapter",
          newPrice: "1.690.000đ",
          oldPrice: "",
        },
      ],
      combos: [
        {
          photo: "src/assets/img-product/20_Untitled-1.png",
          content:
            "Bao da gập iPad Mini 5 2019 nhựa cứng viền dẻo Pure Color Cover Meetu",
          priceNew: "359.000đ",
          priceOld: "500.000đ",
          saleNew: "Giảm thêm 20% ốp lưng khi mua kèm ipad. MTB",
        },
        {
          photo: "src/assets/img-product/key-online.jpg",
          content:
            "Key-online Microsoft® 365 Personal (01 năm; 01 tài khoản; 05 thiết bị)",
          priceNew: "990.000đ",
          priceOld: "",
          saleNew:
            "Key-online Microsoft® 365 Personal kèm MTXT/Mac/iPad tặng combo Miếng dán màn hình",
        },
      ],
      listIpad: [
        {
          photos:
            "src/assets/img-product/product-page/tren-tay-ipad-pro-01.webp",
          name: "Top 5 mẫu iPad tốt nhất mà bạn có thể mua trong năm 2022",
        },
        {
          photos: "src/assets/img-product/product-page/ipad-02.webp",
          name: "Apple đang bán những loại iPad nào vào năm 2022?",
        },
        {
          photos: "src/assets/img-product/product-page/so-sanh-cover.webp",
          name: "So sánh iPad mini 6 và iPad 9: Máy tính bảng nào đáng mua hơn?",
        },
        {
          photos:
            "src/assets/img-product/product-page/so-sanh-ipad-10-2-2021-vs-galaxy-tab-s7-fe-cover.webp",
          name: "So sánh Apple iPad 10.2 (2021) và Samsung Galaxy Tab S7 FE",
        },
      ],
    };
  },
  methods: {
    slider1() {
      (this.mobiSlider1 = false), (this.mobiSlider2 = true);
    },
    slider2() {
      (this.mobiSlider1 = true), (this.mobiSlider2 = false);
    },
    check1() {
      this.checked1 = false;
      this.checked2 = true;
    },
    check2() {
      this.checked1 = true;
      this.checked2 = false;
    },
    showLeft1() {
      this.formLeft1 = true;
      this.formLeft2 = false;
      this.checkout1 = true;
      this.checkout2 = false;
    },
    showLeft2() {
      this.formLeft1 = false;
      this.formLeft2 = true;
      this.checkout1 = false;
      this.checkout2 = true;
    },
    showText() {
      this.text1 = false;
      this.text2 = true;
    },
    showPromo1() {
      this.promotion1 = true;
      this.promotion2 = false;
      this.sale = true;
    },
    showPromo2() {
      this.promotion1 = false;
      this.promotion2 = true;
      this.sale = false;
    },
    showEndow() {
      this.endow = true;
    },
    showZom() {
      this.zomOut = false;
      this.btnZom = false;
    },
    showMore() {
      this.newText = !this.newText;
      this.more = !this.more;
    },
    showMore1() {
      this.newText1 = !this.newText1;
      this.more1 = !this.more1;
    },
  },
};
</script>

<style>
.enlarge {
  height: 720px;
}
.shado {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.zom-img {
  width: 450px;
  height: 410px;
  margin-right: 100px;
}

.checkBorder {
  border: 1px solid red;
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
</style>
