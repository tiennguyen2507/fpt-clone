<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="relative">
    <!-- Header -->
    <MyHeader />
    <!-- NAVBAR -->
    <MyNarBar />
  </div>
  <!-- container -->
  <div class="contai w-full -z-50 pb-5 bg-[#f4f4f4]">
    <img src="../assets/Desk_top-head.webp" alt="" class="" />
    <!-- form slider -->
    <form class="w-[1200px] bg-white flex shadow-md mx-auto rounded-lg mb-8">
      <div class="w-[800px]">
        <div class="">
          <img
            src="../assets/shider1.webp"
            alt=""
            class="w-[800px] h-[300px] rounded p-1"
          />
          <ul class="grid grid-cols-5 text-center px-2">
            <li
              class="p-1 cursor-pointer hover:font-bold hover:border-b-2 border-red-600"
            >
              Sở hữu Reno8 Series chỉ từ 1.8 triệu
            </li>
            <li
              class="p-1 cursor-pointer hover:font-bold hover:border-b-2 border-red-600"
            >
              Mở bán Galaxy Z mới - Quà đến 5.5 triệu
            </li>
            <li
              class="p-1 cursor-pointer hover:font-bold hover:border-b-2 border-red-600"
            >
              iPhone 13 Pro Max chỉ từ 27.49 triệu
            </li>
            <li
              class="p-1 cursor-pointer hover:font-bold hover:border-b-2 border-red-600"
            >
              Redmi 10 tặng sạc 10.000mAh
            </li>
            <li
              class="p-1 cursor-pointer hover:font-bold hover:border-b-2 border-red-600"
            >
              Quạt điều hoà chỉ từ 1.790.000đ
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[400px]">
        <div class="">
          <img
            src="../assets/dong-ho.webp"
            alt=""
            class="w-[400px] h-[100px] p-1"
          />
          <img
            src="../assets/phu-2.webp"
            alt=""
            class="w-[400px] h-[100px] px-1"
          />
          <div class="flex justify-between pt-2 px-2">
            <p class="text-gray-500 font-bold">Thông tin nổi bật</p>
            <a
              href=""
              class="hover:text-gray-600 hover:border-b-2 border-gray-600 h-[22px]"
              >Xem tất cả</a
            >
          </div>
          <div class="w-[400px]">
            <ul class="flex cursor-pointer relative show-voucher">
              <li class="p-[2px] rounded border border-[#ccc]">
                <img
                  src="../assets/FPT-0.webp"
                  alt=""
                  class="w-[70px] h-10 rounded"
                />
              </li>
              <li class="text-sm font-bold pl-2">Nhận ngay Voucher 50.000Đ</li>
              <li
                class="p-1 rounded border border-[#ccc] absolute top-[-62px] left-[-260px] hidden-voucher"
              >
                <img
                  src="../assets/FPT_3.webp"
                  alt=""
                  class="w-[243px] h-[160px] rounded"
                />
                <i
                  class="fa-solid fa-caret-right text-xl text-gray-300 absolute right-[-9px] top-[74px]"
                ></i>
              </li>
            </ul>
            <ul class="flex cursor-pointer relative show-dt">
              <li class="p-[2px] rounded border border-[#ccc]">
                <img
                  src="../assets/OPPO A95.webp"
                  alt=""
                  class="w-[70px] h-10 rounded"
                />
              </li>
              <li class="text-sm font-bold pl-2">
                OPPO A95 giá sốc chỉ 5.990.000Đ
              </li>
              <li
                class="p-1 rounded border border-[#ccc] absolute top-[-60px] left-[-260px] hidden-dt"
              >
                <img
                  src="../assets/A95_2.webp"
                  alt=""
                  class="w-[243px] h-[160px] rounded"
                />
                <i
                  class="fa-solid fa-caret-right text-xl text-gray-300 absolute right-[-9px] top-[74px]"
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </form>
    <!-- form sản phẩm -->
    <form
      action=""
      class="w-[1200px] h-[321px] bg-white border border-[#ccc] mx-auto rounded-md truncate mb-14"
    >
      <ul class="grid grid-cols-6">
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-mobile.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Điện thoại</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-laptop.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Laptop</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-pc.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">PC - Lắp ráp</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-tablet.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Máy tính bảng</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-smart.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Thiết bị thông minh</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-houseware.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Gia dụng</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-apple.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Apple</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-samsung.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Samsung</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-smartwatch.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Đồng hồ thông minh</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-accessories.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Phụ kiện</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-screen.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Màn hình</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl"
        >
          <div
            class="w-[95px] h-[95px] bg-[#f4f4f4] inline-flex items-center justify-center rounded-full"
          >
            <img src="../assets/img-sp/icon-tcdm.webp" alt="" class="" />
          </div>
          <p class="pt-2 text-black">Máy cũ</p>
        </li>
      </ul>
    </form>
    <!-- form gold time -->
    <form
      action=""
      class="w-[1200px] bg-white mx-auto border-2 border-red-500 rounded-md"
    >
      <ul class="grid grid-cols-4 m-0 relative">
        <li class="cursor-pointer">
          <div
            class="h-[127px] flex flex-col justify-center items-center w-full border-r-2 border-white bg-[#444b52] text-white"
          >
            <div class="flex items-center pt-4 mb-2 text-2xl font-medium">
              29/08
              <div
                class="text-black text-base ml-2 font-bold w-[125px] h-[26px] leading-[26px] text-center rounded-full bg-white"
              >
                12:00 - 14:00
              </div>
            </div>
            <p class="mb-0 text-base">Đã kết thúc</p>
          </div>
          <div class="hover:shadow-xl border-[#ccc] pb-3 hover:-translate-y-1">
            <div class="relative pt-2 hover:scale-[101%]">
              <img
                src="../assets/img-gold-time/product-border.webp"
                alt=""
                class="mx-auto"
              />
              <img
                src="../assets/img-gold-time/smartwatch.webp"
                alt=""
                class="w-[172px] h-[172px] absolute top-8 left-14"
              />
              <span
                class="w-[76px] h-6 bg-red-700 absolute left-[14px] top-40 rounded-r-md text-white text-center"
                >Giảm 60%</span
              >
            </div>
            <div
              class="text-center font-bold text-base pt-3 hover:text-blue-700 text-[#474c51]"
            >
              Đồng hồ Casio MW-600F-2AVDF
            </div>
            <div class="flex h-8 ml-5 text-lg font-medium text-red-700">
              326.000 ₫
              <p
                class="line-through text-sm text-[#ccc] font-light leading-7 ml-2"
              >
                825.000 ₫
              </p>
            </div>
            <div
              class="w-[275px] h-5 bg-red-200 text-white bg-red-200 text-white rounded-full text-center mx-auto"
            >
              Đã kết thúc
            </div>
          </div>
        </li>
        <li class="cursor-pointer">
          <div
            class="h-[127px] flex flex-col justify-center items-center w-full border-r-2 border-white bg-red-500 text-white"
          >
            <div class="flex items-center pt-4 mb-2 text-2xl font-medium">
              30/08
              <div
                class="text-black text-base ml-2 font-bold w-[125px] h-[26px] leading-[26px] text-center rounded-full bg-white"
              >
                12:00 - 14:00
              </div>
            </div>
            <p class="mb-0 text-base">Đã kết thúc</p>
          </div>
          <div class="hover:shadow-xl border-[#ccc] pb-3 hover:-translate-y-1">
            <div class="relative pt-2 hover:scale-[101%]">
              <img
                src="../assets/img-gold-time/product-border.webp"
                alt=""
                class="mx-auto"
              />
              <img
                src="../assets/img-gold-time/OP-IPHONE.webp"
                alt=""
                class="w-[172px] h-[172px] absolute top-8 left-14"
              />
              <span
                class="w-[76px] h-6 bg-red-700 absolute left-[14px] top-40 rounded-r-md text-white text-center"
                >Giảm 60%</span
              >
            </div>
            <div
              class="ml-5 font-bold text-base pt-3 hover:text-blue-700 text-[#474c51]"
            >
              Ốp lưng iPhone 13 Pro Max
            </div>
            <div class="flex h-8 ml-5 text-lg font-medium text-red-700">
              345.000 ₫
              <p
                class="line-through text-sm text-[#ccc] font-light leading-7 ml-2"
              >
                690.000 ₫
              </p>
            </div>
            <div
              class="w-[275px] h-5 bg-red-200 text-white bg-red-700 rounded-full text-center mx-auto"
            >
              Đã kết thúc
            </div>
          </div>
        </li>
        <li class="cursor-pointer">
          <div
            class="h-[127px] flex flex-col justify-center items-center w-full border-r-2 border-white bg-[#444b52] text-white"
          >
            <div class="flex items-center pt-4 mb-2 text-2xl font-medium">
              31/08
              <div
                class="text-black text-base ml-2 font-bold w-[125px] h-[26px] leading-[26px] text-center rounded-full bg-white"
              >
                12:00 - 14:00
              </div>
            </div>
            <p class="mb-0 text-base">Đã kết thúc</p>
          </div>
          <div class="hover:shadow-xl border-[#ccc] pb-3 hover:-translate-y-1">
            <div class="relative pt-2 hover:scale-[101%]">
              <img
                src="../assets/img-gold-time/product-border.webp"
                alt=""
                class="mx-auto"
              />
              <img
                src="../assets/img-gold-time/may-loc-khong-khi.webp"
                alt=""
                class="w-[172px] h-[172px] absolute top-8 left-14"
              />
              <span
                class="w-[76px] h-6 bg-red-700 absolute left-[14px] top-40 rounded-r-md text-white text-center"
                >Giảm 60%</span
              >
            </div>
            <div
              class="ml-5 font-bold text-base pt-3 hover:text-blue-700 text-[#474c51]"
            >
              Máy lọc không khí Kangaroo
            </div>
            <div class="flex h-8 ml-5 text-lg font-medium text-red-700">
              1.900.000 ₫
              <p
                class="line-through text-sm text-[#ccc] font-light leading-7 ml-2"
              >
                2.350.000 ₫
              </p>
            </div>
            <div
              class="w-[275px] h-5 bg-red-200 text-white bg-red-700 rounded-full text-center mx-auto"
            >
              Đã kết thúc
            </div>
          </div>
        </li>
        <li class="cursor-pointer">
          <div
            class="h-[127px] flex flex-col justify-center items-center w-ful bg-[#444b52] text-white"
          >
            <div class="flex items-center pt-4 mb-2 text-2xl font-medium">
              1/09
              <div
                class="text-black text-base ml-2 font-bold w-[125px] h-[26px] leading-[26px] text-center rounded-full bg-white"
              >
                12:00 - 14:00
              </div>
            </div>
            <p class="mb-0 text-base">Đã kết thúc</p>
          </div>
          <div class="hover:shadow-xl border-[#ccc] pb-3 hover:-translate-y-1">
            <div class="relative pt-2 hover:scale-[101%]">
              <img
                src="../assets/img-gold-time/product-border.webp"
                alt=""
                class="mx-auto"
              />
              <img
                src="../assets/img-gold-time/lenovo.webp"
                alt=""
                class="w-[172px] h-[172px] absolute top-8 left-14"
              />
              <span
                class="w-[76px] h-6 bg-red-700 absolute left-[14px] top-40 rounded-r-md text-white text-center"
                >Giảm 60%</span
              >
            </div>
            <div
              class="text-center font-bold text-base pt-3 hover:text-blue-700 text-[#474c51]"
            >
              Lenovo Ideapad Slim 3 i3 1115G4
            </div>
            <div class="flex h-8 ml-5 text-lg font-medium text-red-700">
              8.495.000 ₫
              <p
                class="line-through text-sm text-[#ccc] font-light leading-7 ml-2"
              >
                12.825.000 ₫
              </p>
            </div>
            <div
              class="w-[275px] h-5 bg-red-200 text-white bg-red-700 rounded-full text-center mx-auto"
            >
              Đã kết thúc
            </div>
          </div>
        </li>
        <li
          class="flex justify-center items-center rounded-full w-[520px] h-[56px] bg-yellow-200 absolute top-[-28px] left-[340px]"
        >
          <h3 class="text-4xl font-bold text-[#cb1c22] leading-[56px] m-0">
            Giờ vàng giá sốc
          </h3>
          <p
            class="text-xl mb-0 ml-4 px-2 border-l-2 border-[#ccc] text-[#0664f9] font-medium cursor-pointer"
          >
            Xem thể lệ
            <i class="fa-solid fa-caret-right mt-1"></i>
          </p>
        </li>
      </ul>
    </form>
    <img
      src="../assets/img-container/F-H7_1200x100.webp"
      alt=""
      class="mx-auto my-7 rounded-md"
    />
    <!-- form hot sale -->
    <form
      action=""
      class="bg-white rounded-md w-[1200px] mx-auto drop-shadow-md py-4"
    >
      <div class="mb-4 px-4 text-[#cd1817] flex items-center">
        <i
          class="fa-solid fa-fire-flame-curved mr-2 text-[22px] font-black"
        ></i>
        <h3 class="mb-0 text-[#cd1817] text-[22px] font-black">
          KHUYẾN MÃI HOT
        </h3>
      </div>
      <ul class="grid grid-cols-4">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/ip-11-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 6.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 11 Pro Max 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              27.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/oppo-reno8-z-dd-icon.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO Reno8-Z=Đ 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              10.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/samsung-galaxy-z-fold4-kem-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Z 5G 256G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              21.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">28.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/xiaomi-redmi-note-11.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 5.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Xiaomi Redmi 10 4G-128G 2022</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              12.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">15.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
        </li>
      </ul>
    </form>
    <img
      src="../assets/img-container/F-H5_1200x200.webp"
      alt=""
      class="mx-auto my-4 rounded-md"
    />
    <!-- form img sale -->
    <form
      action=""
      class="img-form w-[1200px] h-[668px] mx-auto flex justify-evenly items-center mb-4"
    >
      <ul class="grid grid-cols-4 gap-x-4 mt-6 relative">
        <li class="cursor-pointer">
          <img
            src="../assets/img-container/HTML1.webp"
            alt=""
            class="w-[250px] h-[336px]"
          />
        </li>
        <li class="cursor-pointer">
          <img
            src="../assets/img-container/HTML.webp"
            alt=""
            class="w-[250px] h-[336px]"
          />
        </li>
        <li class="cursor-pointer">
          <img
            src="../assets/img-container/HTML-2.webp"
            alt=""
            class="w-[250px] h-[336px]"
          />
        </li>
        <li class="cursor-pointer">
          <img
            src="../assets/img-container/HTML-3.webp"
            alt=""
            class="w-[250px] h-[336px]"
          />
        </li>
        <img
          src="../assets/img-container/html_sub_cate.webp"
          alt=""
          class="w-[516px] h-[52px] cursor-pointer absolute bottom-[-75px] left-[262px]"
        />
      </ul>
    </form>
    <!-- form shop mobile -->
    <form
      action=""
      class="bg-white rounded-md w-[1200px] mx-auto drop-shadow-md py-4 mb-4"
    >
      <div class="mb-4 px-4 flex items-center">
        <i
          class="fa-solid fa-mobile-screen-button mr-2 text-[22px] text-pink-700 font-black"
        ></i>
        <h3 class="mb-0 text-[22px] text-pink-700 font-black">
          ĐIỆN THOẠI NỔI BẬT
        </h3>
      </div>
      <ul class="grid grid-cols-4">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/ip-11-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 6.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 11 Pro Max 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              27.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/oppo-reno8-z-dd-icon.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO Reno8-Z=Đ 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              10.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/samsung-galaxy-z-fold4-kem-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Z 5G 256G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              21.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">28.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/xiaomi-redmi-note-11.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 5.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Xiaomi Redmi 10 4G-128G 2022</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              12.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">15.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/xiaomi-redmi-note-11-xanh-dd-logo.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Xiami Redmi 10 4G-128G 2022</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              12.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">15.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/vivo-y16-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Vivo Y16 4G-128G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              4.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">5.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/samsung-galaxy-z-flip4-vang-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Z Flip4 5G 128G
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              23.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/samsung-galaxy-s22-ultra-do-dd-2.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Ultra 5G 128G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              25.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">30.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/oppo-a95-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO A95-8G 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              5.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">6.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/iphone-13-bh-2nam-dac-quyen.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 13 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              18.550.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">24.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/oppo-reno8-z-dd-icon.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO Reno8-Z=Đ 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              10.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-dt/ip-11-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 11 64G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              11.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">14.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
    </form>
    <!-- form suggestions sp -->
    <form
      action=""
      class="bg-white rounded-md w-[1200px] mx-auto drop-shadow-md py-4 mb-4"
    >
      <div class="mb-4 px-4 text-[#cd1817] flex items-center">
        <i class="fa-regular fa-star mr-2 text-[22px] font-black"></i>
        <h3 class="mb-0 text-[#cd1817] text-[22px] font-black">
          GỢI Ý HÔM NAY
        </h3>
      </div>
      <div class="">
        <button
          class="px-3 py-1 rounded mb-4 hover:bg-red-100 border border-[#ccc] ml-3"
          :class="{ done: this.done }"
          @click.prevent="isSubmit1"
        >
          Độc quyền
        </button>
        <button
          class="px-3 py-1 rounded mb-4 hover:bg-red-100 border border-[#ccc] ml-3"
          :class="{ done1: this.done1 }"
          @click.prevent="isSubmit2"
        >
          Top tìm kiếm
        </button>
        <button
          class="px-3 py-1 rounded mb-4 hover:bg-red-100 border border-[#ccc] ml-3"
          :class="{ done2: this.done2 }"
          @click.prevent="isSubmit3"
        >
          Đồng giá 299k
        </button>
      </div>
      <ul class="grid grid-cols-4" v-if="submit1">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/ip-11-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 6.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 11 Pro Max 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              27.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/oppo-reno8-z-dd-icon.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO Reno8-Z=Đ 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              10.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/samsung-galaxy-z-fold4-kem-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Z 5G 256G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              21.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">28.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/xiaomi-redmi-note-11.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 5.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Xiaomi Redmi 10 4G-128G 2022</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              12.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">15.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
      <ul class="grid grid-cols-4" v-if="submit2">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/tab-a7-lite-bac-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 700.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Tab A7 Lite
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              4.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">5.390.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/may-tinh-bang-masstel-tab-10m-4g-xanh-navy-dd-1.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 500.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Masstel Tab 10M 4G
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              3.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">3.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/lenovo-tab-m10-gen-2-xam-dd-bh2nam.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Lenovo Tab M10 64GB (Gen2)
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              4.790.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">5.650.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/ip-11-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 6.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPhone 11 Pro Max 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              27.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/oppo-reno8-z-dd-icon.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >OPPO Reno8-Z=Đ 128GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              10.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">33.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/samsung-galaxy-z-fold4-kem-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Z 5G 256G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              21.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">28.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-sale/xiaomi-redmi-note-11.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 5.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Xiaomi Redmi 10 4G-128G 2022</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              12.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">15.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/ipad-10-2-2021-wi-fi-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 300.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPad Gen 9 2021 10.2 inch WiFi 64GB
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              8.790.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">9.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
      <ul class="grid grid-cols-4" v-if="submit3">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-accessory/ANH-DAI-DIEN.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />

            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[152px] rounded-r-md px-1 text-white text-center"
              >Sale đồng giá
            </span>
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Pin sạc dự phòng UmeTravel 10000 mAh SEA10000</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              299.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">599.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-accessory/PIN-SAC-BASIX-PBN99-10000MAH-AUKEY-DEN-AVT.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />

            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[152px] rounded-r-md px-1 text-white text-center"
              >Sale đồng giá
            </span>
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Pin sạc dự phòng Aukey Basix Slim PB-N99 10000mAh</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              299.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">599.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-accessory/PowerGo-white-600x602.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />

            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[152px] rounded-r-md px-1 text-white text-center"
              >Sale đồng giá
            </span>
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Pin sạc dự phòng Innostyle PowerGo Smart Ai 10000mAh</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              299.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">599.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-sale/637970666750766220_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-accessory/Trip10C_Black.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />

            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[152px] rounded-r-md px-1 text-white text-center"
              >Sale đồng giá
            </span>
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Pin sạc dự phòng UmeTravel 10000mAH TRIP10C
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              299.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">599.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
    </form>
    <!-- form shop laptop -->
    <form
      action=""
      class="bg-white rounded-md w-[1200px] mx-auto drop-shadow-md py-4 mb-4"
    >
      <div class="mb-4 px-4 flex items-center">
        <i
          class="fa-solid fa-laptop mr-2 text-[22px] text-pink-700 font-black"
        ></i>
        <h3 class="mb-0 text-[22px] text-pink-700 font-black">
          LAPTOP BÁN CHẠY
        </h3>
      </div>
      <ul class="grid grid-cols-4">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-laptop/637862460280901283_lenovo-ideapad-gaming-3-15ach6-dd-rtx-3050-dd2-donsac.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 4.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Lenovo IdeaPad Gaming 3 15ACH6 R5 5600H (82K200T0VN)</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              17.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">21.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-laptop/asus-tuf-gaming-fx516pc-hn558w-i5-11300h-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 3.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Asus TUF Gaming FX516P-HN558W i5 11300H</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              18.690.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">21.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-laptop/hp-envy-13-vang-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 2.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >HP Envy 13-ba1536TU i5 1135G7 (4U6M5PA)</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              20.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">23.500.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-laptop/msi-gf63-thin-den-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 4.500.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >MSI GF63 Thin 11UC 444VN i5 11400H
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              17.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">22.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
    </form>
    <!-- form tablet -->
    <form
      action=""
      class="bg-white rounded-md w-[1200px] mx-auto drop-shadow-md py-4 mb-4"
    >
      <div class="mb-4 px-4 flex items-center">
        <i
          class="fa-solid fa-tablet-screen-button mr-2 text-[22px] text-pink-700 font-black"
        ></i>
        <h3 class="mb-0 text-[22px] text-pink-700 font-black">
          TABLET BÁN CHẠY
        </h3>
      </div>
      <ul class="grid grid-cols-4">
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/ipad-10-2-2021-wi-fi-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 2.000.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >iPad Gen 9 2021 10.2 inch WiFi 64GB</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              7.990.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">9.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/lenovo-tab-m10-gen-2-xam-dd-bh2nam.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 100.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Samsung Galaxy Tab A7 Lite</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              4.390.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">4.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/may-tinh-bang-masstel-tab-10m-4g-xanh-navy-dd-1.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 500.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Masstel Tab 10M 4G</a
          >
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              3.490.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">3.990.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
        <li
          class="hover:border border-[#ccc] p-3 shadow rounded-md cursor-pointer hover:-translate-y-1 show-btn-mb"
        >
          <div class="relative mb-4 hover:scale-105">
            <img
              src="../assets/img-container/img-dt/637975566171073291_frame-cate-270x210.webp"
              alt=""
              class=""
            />
            <img
              src="../assets/img-container/img-tablet/tab-a7-lite-bac-dd.webp"
              alt=""
              class="w-[168px] h-[168px] absolute top-8 left-[50px]"
            />
            <span
              class="leading-6 h-6 bg-red-700 absolute left-0 top-[165px] rounded-r-md px-1 text-white text-center"
              >Giảm 1 .500.000₫</span
            >
            <span
              class="leading-6 h-6 bg-[#ea9d02] absolute left-0 top-[132px] rounded-r-md px-1 text-white text-center"
              >Trả góp 0%</span
            >
          </div>
          <a
            href=""
            class="text-center text-gray-700 text-[17px] font-extrabold text-base"
            >Lenovo Tab M10 64GB (Gen2)
          </a>
          <div class="flex items-center mt-2 mb-3">
            <div
              class="bg-[#cb1c22] w-[130px] h-7 text-center font-[18px] rounded-full leading-7 text-white font-bold"
            >
              4.090.000 ₫
            </div>
            <span class="text-[#919191] ml-3 line-through">5.550.000 ₫</span>
          </div>
          <ul class="flex justify-between mb-2">
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/tpbank.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/logo-moca.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/vnpay400.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
            <li class="border border-[#ccc] rounded-full mr-2 hover:scale-105">
              <img
                src="../assets/img-sale/channels4_profile.webp"
                alt=""
                class="w-[45px] h-[45px] rounded-full"
              />
            </li>
          </ul>
          <span class="block text-center font-normal text-xs text-red-500"
            >Nhận thanh toán qua các ứng dụng ví mua sắm,nhanh tay nhận ưu
            đãi</span
          >
          <button
            class="px-3 py-1 text-white rounded mt-3 hover:opacity-80 bg-blue-800 btn-mb"
          >
            Mua ngay
          </button>
        </li>
      </ul>
    </form>
    <!-- slider img tín dụng -->
    <form
      action=""
      class="w-[1200px] rounded-md p-4 bg-white mx-auto shadow-md mb-4"
    >
      <div class="text-indigo-700 text-xl font-bold">
        ƯU ĐÃI KHI THANH TOÁN ONLINE
      </div>
      <ul class="grid grid-cols-3 gap-x-4 mt-3">
        <li>
          <img
            src="../assets/img-container/_F_384x180-4.webp"
            alt=""
            class=""
          />
        </li>
        <li>
          <img src="../assets/img-container/F_384x180-3.webp" alt="" class="" />
        </li>
        <li>
          <img
            src="../assets/img-container/Foxpay-F_384x180.webp"
            alt=""
            class=""
          />
        </li>
      </ul>
    </form>
    <div
      class="grid grid-cols-2 w-[1200px] gap-x-3 mx-auto bg-white p-4 rounded-md shadow-md mb-4"
    >
      <img src="../assets/img-container/58_F-C3_590x160.webp" alt="" class="" />
      <img src="../assets/img-container/59_F-C3_590x160.webp" alt="" class="" />
    </div>
    <!-- form dịch vụ  -->
    <form
      class="p-4 w-[1200px] mx-auto mb-4 shadow-md mt-4 rounded-md bg-white"
    >
      <div class="text-blue-700 text-[22px] font-bold mb-3">
        Dịch vụ tiện ích
      </div>
      <ul class="grid grid-cols-4 gap-x-3">
        <li
          class="bg-green-100 p-4 flex rounded-md border border-green-300 h-[100px]"
        >
          <img
            src="../assets/img-container/ic-insuran-moto.webp"
            alt=""
            class="w-[39px] h-[39px] mr-3"
          />

          <div class="text-gray-500">
            <h3 class="text-[24px] text-gray-500 m-0">Bảo hiểm xe máy</h3>
            <p class="text-sm">Tặng bảo hiểm cho người ngồi trên xe</p>
          </div>
        </li>
        <li
          class="bg-yellow-100 p-4 flex rounded-md border border-yellow-300 h-[100px]"
        >
          <img
            src="../assets/img-container/service-item2.webp"
            alt=""
            class="w-[39px] h-[39px] mr-3"
          />

          <div class="text-gray-500">
            <h3 class="text-[18px] text-gray-500 m-0">Thanh toán tiền điện</h3>
            <p class="text-sm">Thanh toán nhanh chóng, tiện lợi</p>
          </div>
        </li>
        <li
          class="bg-blue-100 p-4 flex rounded-md border border-blue-300 h-[100px]"
        >
          <img
            src="../assets/img-container/service-item3.webp"
            alt=""
            class="w-[39px] h-[39px] mr-3"
          />
          <div class="text-gray-500">
            <h3 class="text-[18px] text-gray-500 m-0">Thẻ cào điện thoại</h3>
            <p class="text-sm">Giảm 2% cho mệnh giá từ 100.000đ</p>
          </div>
        </li>
        <li
          class="bg-orange-100 p-4 flex rounded-md border border-orange-300 h-[100px]"
        >
          <img
            src="../assets/img-container/ic-credit-card.webp"
            alt=""
            class="w-[39px] h-[39px] mr-3"
          />
          <div class="text-gray-500">
            <h3 class="text-[24px] text-gray-500 m-0">Thẻ game</h3>
            <p class="text-sm">Giảm 2% cho mệnh giá từ 100.000đ</p>
          </div>
        </li>
      </ul>
    </form>
    <!-- form phụ kiện -->
    <form
      action=""
      class="w-[1200px] h-[350px] bg-white border border-[#ccc] mx-auto rounded-md truncate mb-4"
    >
      <div class="text-[22px] m-4 font-bold text-red-600">Phụ kiện hot</div>
      <ul class="grid grid-cols-8">
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-medal text-[45px]"></i>
          <p class="pt-2 text-black">Phụ kiện nổi bật</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-mobile-button text-[45px]"></i>
          <p class="pt-2 text-black">Bao da ốp lưng</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-battery-half text-[45px]"></i>
          <p class="pt-2 text-black">Sạc dự phòng</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-sd-card text-[45px]"></i>
          <p class="pt-2 text-black">Thẻ nhớ</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-print text-[45px]"></i>
          <p class="pt-2 text-black">Mực in</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-brands fa-apple text-[45px]"></i>
          <p class="pt-2 text-black">Phụ kiện Apple</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-mobile-screen-button text-[45px]"></i>
          <p class="pt-2 text-black">Miếng dán màn hình</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-headphones-simple text-[45px]"></i>
          <p class="pt-2 text-black">Tai nghe</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-volume-high text-[45px]"></i>
          <p class="pt-2 text-black">Loa</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-hard-drive text-[45px]"></i>
          <p class="pt-2 text-black">USB-Ổ cứng</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-charging-station text-[45px]"></i>
          <p class="pt-2 text-black">Sạc cáp</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-computer-mouse text-[45px]"></i>
          <p class="pt-2 text-black">Chuột</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-regular fa-keyboard text-[45px]"></i>
          <p class="pt-2 text-black">Bàn phím</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-brands fa-shopify text-[45px]"></i>
          <p class="pt-2 text-black">Balo-Túi xách</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-tv text-[45px]"></i>
          <p class="pt-2 text-black">TV-BOX</p>
        </li>
        <li
          class="p-[15px] border border-[#f4f4f4] cursor-pointer flex flex-col items-center justify-center hover:shadow-xl text-[#777777]"
        >
          <i class="fa-solid fa-diagram-successor text-[45px]"></i>
          <p class="pt-2 text-black">Phụ kiện khác</p>
        </li>
      </ul>
    </form>
    <div
      class="grid grid-cols-3 w-[1200px] gap-x-3 mx-auto bg-red-100 p-4 rounded-md shadow-md mb-4 truncate"
    >
      <img
        src="../assets/img-container/99_icon-desktop-1.webp"
        alt=""
        class="rounded-md"
      />
      <img
        src="../assets/img-container/24_icon-desktop.webp"
        alt=""
        class="rounded-md"
      />
      <img
        src="../assets/img-container/29_f-friends.webp"
        alt=""
        class="rounded-md"
      />
    </div>
  </div>
  <!-- footer -->
  <MyFooter />
</template>
<script>
import MyFooter from "@/views/common/footer/MyFooter.vue";
import MyHeader from "@/views/common/header/MyHeader.vue";
import MyNarBar from "./common/narbar/MyNarBar.vue";
export default {
  components: {
    MyFooter,
    MyHeader,
    MyNarBar,
  },
  data() {
    return {
      submit1: true,
      submit2: false,
      submit3: false,
      done: true,
      done1: false,
      done2: false,
    };
  },
  methods: {
    isSubmit1() {
      this.submit1 = true;
      this.submit2 = false;
      this.submit3 = false;
      this.done = true;
      this.done1 = false;
      this.done2 = false;
    },
    isSubmit2() {
      this.submit1 = false;
      this.submit2 = true;
      this.submit3 = false;
      this.done = false;
      this.done1 = true;
      this.done2 = false;
    },
    isSubmit3() {
      this.submit1 = false;
      this.submit2 = false;
      this.submit3 = true;
      this.done = false;
      this.done1 = false;
      this.done2 = true;
    },
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
