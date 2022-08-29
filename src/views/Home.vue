<template>
  <div>
    <div class="flex justify-center items-center">
        <img src="../assets/clipse.svg" alt="" class="w-[30px] h-[30px]">
        <p class=" text-[#ff001f] cursor-text m-[10px]">
            <strong class="text-sm font-bold">Laptop</strong>
            giảm đến
            <strong class="text-sm font-bold">40%</strong>
            cho học sinh sinh viên
        </p>
        <button class="bg-[#2183f6] w-[92px] h-6 text-xs text-white rounded-sm cursor-pointer">Nhận mã ngay</button>
    </div>
    <!-- Header -->
    <div class="bg-[#cd1818] flex justify-center">
      <div class="flex justify-around items-center bg-[#cd1818] w-[1200px]">
          <img src="../assets/logofpt.png" alt="" class="w-[151] h-10 bg-[#cd1818] rounded">
          <div class="flex">
              <input type="text" placeholder="Nhập tên điện thoại,máy tính phụ kiện...cần tìm" 
              class="rounded-sm w-[496px] h-[38px] px-2 rounded-l-md outline-none">
              <button class="bg-[#000000] w-[58px] text-white rounded-r-md">
                  <i class="fa-solid fa-magnifying-glass text-xl"></i>
              </button>
          </div>
          <ul class="flex justify-between h-[63px] w-[449px] items-center text-white">
              <li class="text-center h-[55px] mt-7 relative show-info">
                  <i class="fa-solid fa-file-lines text-xl"></i>
                  <p class="mt-1 mb-0">Thông tin hay</p>
                  <ul class="w-[200px] bg-white text-gray-600 text-start px-3 py-2 shadow-lg absolute top-[52px] left-0 hidden-info">
                    <li class="hover:text-black w-40 h-8 cursor-pointer">Tin mới</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">khuyến mãi</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">Thủ thuật</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">For Gamers</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">Video hot</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">Đánh giá - tư vấn</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">App & game</li>
                    <li class="hover:text-black w-40 h-8 cursor-pointer">Sự kiện</li>
                  </ul>
              </li>
              <li class="text-center h-[63px] mt-7">
                  <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                  <p class="mt-1 mb-0">Thanh toán & tiện ích</p>
              </li>
              <li class="text-center h-[63px] mt-7">
                  <i class="fa-solid fa-circle-user text-xl"></i>
                  <p class="mt-1 mb-0">Tài khoản của tôi</p>
              </li>
              <li class="text-center h-[63px] mt-7">
                  <i class="fa-solid fa-cart-shopping  text-xl"></i>
                  <p class="mt-1 mb-0">Giỏ hàng</p>
              </li>
          </ul>
      </div>
    </div>
    <!-- NAVBAR -->
    <div class="w-full h-9 bg-[#212529] flex justify-center">
      <ul class="w-[1200px] h-9 flex justify-between">
        <li class="leading-9 relative show-mobi">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-mobile-screen-button"></i>
            ĐIỆN THOẠI
          </a>
  <!-- form mobile -->
          <div class="w-[1200px] flex shadow-md absolute top-9 left-0 right-0 hidden-mobi">
            <div class="w-[395px] p-3 ">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">HÃNG SẢN XUẤT</div>
              <div class="w-[395px] grid grid-cols-3">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Apple(iPhone)</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Xiaomi</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Nokia</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Realme</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Samsung</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Vivo</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Asus</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">OPPO</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Tecno</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Masstel</a>
                  </li>
                </ul>
              </div>
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">ĐỒNG HỒ THÔNG MINH</div>
              <div class="w-[395px] grid grid-cols-3">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Apple Watch</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Masstel</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Huawei</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Samsung</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Xiaomi</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">OPPO</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Garmin</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[180px] p-3 border-l border-r border-[#ccc]">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">MỨC GIÁ</div>
              <div class="w-[180px]">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Dưới 2 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 2 - 4 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 4- 7 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 7 - 13 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Trên 13 triệu</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[347px] p-3">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">BÁN CHẠY NHẤT</div>
                <div class="flex mb-3">
                <img src="../assets/samsung-galaxy-a53-xanh-dd-icon.webp" alt="" class="w-20 h-20">
                <div class="">
                  <a href="" class="text-gray-900 hover:text-black">Samsung Galaxy A53 5G 256GB</a>
                  <p class="text-[#d0021b] leading-5 font-bold">10.990.000 ₫</p>
                </div>
              </div>
                <div class="flex">
                  <img src="../assets/oppo-a55-dd.webp" alt="" class="w-20 h-20">
                  <div class="">
                    <a href="" class="text-gray-900 hover:text-black">OPPO A55 4GB-64GB</a>
                    <p class="text-[#d0021b] leading-5 font-bold">3.990.000 ₫</p>
                  </div>
                </div>
            </div>
            <div class="w-[276px] p-3 mt-5">
              <img src="../assets/logo-oppo.webp" alt="" class="w-[248px] h-[248px]">
            </div>
          </div>
        </li>
        <li class="leading-9 relative show-loptop">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-laptop"></i>
            LOPTOP
          </a>
<!-- form loptop -->
          <div class="w-[1200px] flex shadow-md absolute top-9 left-[-118px] right-0 hidden-loptop">
            <div class="w-[557px] p-3 ">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">HÃNG SẢN XUẤT</div>
              <div class="w-[557px] grid grid-cols-3">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Apple(MacBook)</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Acer</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Dell</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Fujitsu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Masstel</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Asus</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">MSI</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Microsoft(Surface)</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Chuwi</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">HP</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Lenovo</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Gigabyte</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Avita</a>
                  </li>
                </ul>
              </div>
              
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">PHẦN MỀM</div>
              <div class="w-[557px] grid grid-cols-3">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Diệt virut</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Phần mềm khác</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Microsoft office</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Windows</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[253px] p-3 border-l border-r border-[#ccc]">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">MỨC GIÁ</div>
              <div class="w-[253px]">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Dưới 5 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 5 - 10 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 10 - 15 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 15 - 20 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 20 - 25 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Trên 30 triệu</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[388px] p-3 mt-5">
              <img src="../assets/logo-loptop.webp" alt="" class="w-[248px] h-[248px] mx-auto">
            </div>
          </div>

        </li>
        <li class="leading-9 relative show-tablet">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-tv"></i>
            MÁY TÍNH BẢNG
          </a>
          <!--form máy tinh bảng -->
          <div class="w-[1200px] flex shadow-md absolute top-9 left-[-219px] right-0 hidden-tablet">
            <div class="w-[395px] p-3 ">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">HÃNG SẢN XUẤT</div>
              <div class="w-[395px] grid grid-cols-3">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Apple(iPad)</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Lenovo</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">OPPO</a>
                  </li>
                  
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Samsung</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Xiaomi</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Nexta</a>
                  </li>
                </ul>
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Masstel</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Coolpad</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[180px] p-3 border-l border-r border-[#ccc]">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">MỨC GIÁ</div>
              <div class="w-[180px]">
                <ul class="text-[13px]">
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Dưới 2 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 2 - 5 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Từ 5 - 8 triệu</a>
                  </li>
                  <li class="h-7">
                    <a class="text-gray-600 cursor-pointer hover:text-black">Trên 8 triệu</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-[347px] p-3">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">BÁN CHẠY NHẤT</div>
                <div class="flex mb-3">
                <img src="../assets/ipad-pro-11-wifi-dd.webp" alt="" class="w-20 h-20 pr-2">
                <div class="">
                  <a href="" class="text-gray-900 hover:text-black">iPad Pro 11 2021 M1 Wi-Fi 128GB</a>
                  <p class="text-[#d0021b] leading-5 font-bold">19.999.000 ₫</p>
                </div>
              </div>
                <div class="flex">
                  <img src="../assets/samsung-galaxy-tab-s6-lite-2022-xanh-dd-logo.webp" alt="" class="w-20 h-20 pr-2">
                  <div class="">
                    <a href="" class="text-gray-900 hover:text-black">Samsung Galaxy Tab S6 Lite 2022</a>
                    <p class="text-[#d0021b] leading-5 font-bold">7.490.000 ₫</p>
                  </div>
                </div>
            </div>
            <div class="w-[276px] p-3 mt-5">
              <img src="../assets/tablet.webp" alt="" class="w-[248px] h-[248px]">
            </div>
          </div>
        </li>
        <li class="leading-9 relative show-apple">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-brands fa-apple"></i>
            APPLE
          </a>
    <!-- form apple -->
        <div class="w-[1200px] flex shadow-md absolute top-9 left-[-370px] right-0 hidden-apple">
            <div class="w-[465px] p-3 ">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">CÁC SẢN PHẨM APPLE</div>
                <div class="w-[465px] grid grid-cols-3">
                    <ul class="text-[13px]">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">iPhone</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Apple Watch</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Mac Mini</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Apple TV</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">AirTag</a>
                      </li>
                    </ul>
                    <ul class="text-[13px]">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">iPad</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Apple Tai nghe</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Sạc & cáp</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Chuột và Trackpad</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Hàng dự án</a>
                      </li>
                    </ul>
                    <ul class="text-[13px]">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">MacBook</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">iMac</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Ốp lưng & Bao da</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Bàn phím</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-[409px] border-l border-r border-[#ccc] p-3">
                  <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">BÁN CHẠY NHẤT</div>
                    <div class="flex mb-3">
                    <img src="../assets/iphone-13-pro-max-dd-2-128-256-512-1tb.webp" alt="" class="w-20 h-20 mr-2">
                    <div class="">
                      <a href="" class="text-gray-900 hover:text-black">iPhone 13 Pro Max 128GB</a>
                      <p class="text-[#d0021b] leading-5 font-bold">27.990.000 ₫</p>
                    </div>
                  </div>
                    <div class="flex">
                      <img src="../assets/iphone-13-bh-2nam-dac-quyen.webp" alt="" class="w-20 h-20 mr-2">
                      <div class="">
                        <a href="" class="text-gray-900 hover:text-black">iPhone 13 128GB</a>
                        <p class="text-[#d0021b] leading-5 font-bold">18.990.000 ₫</p>
                      </div>
                    </div>
                </div>
                <div class="w-[324px] p-3 mt-5">
                  <img src="../assets/logo-loptop.webp" alt="" class="w-[248px] h-[248px] mx-auto">
                </div>
        </div>
        </li>
        <li class="leading-9 relative show-pc">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-computer"></i>
            PC-LINH KIỆN
          </a>
          <form action="" class="w-[200px] shadow-lg absolute left-0 top-9 hidden-pc">
            <ul class=" py-2 px-5 text-gray-600">
              <li class="cursor-pointer hover:text-black">PC</li>
              <li class="cursor-pointer hover:text-black">Linh kiện</li>
              <li class="cursor-pointer hover:text-black">Màn hình</li>
              <li class="cursor-pointer hover:text-black">Xây dựng PC</li>
            </ul>
          </form>
        </li>
        <li class="leading-9 relative show-phone">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-headphones-simple"></i>
            TAI NGHE
          </a>
          <!--form tai nghe  -->
          <div class="w-[1200px] flex shadow-md absolute top-9 left-[-589px] right-0 hidden-phone">
            <div class="w-[465px] p-3 ">
              <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">CÁC SẢN PHẨM PHỤ KIỆN</div>
                <div class="w-[465px] grid grid-cols-3">
                    <ul class="text-[13px] leading-5">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Router</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Thẻ nhớ</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Loa</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Tai nghe</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Balo - Túi xách</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Phụ kiện khẩu trang lọc khí</a>
                      </li>
                    </ul>
                    <ul class="text-[13px] leading-5">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">bao da ốp lưng</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Phụ kiện Apple</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">USB - Ổ cứng</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Chuột</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">TV - BOX</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Bàn phím</a>
                      </li>
                    </ul>
                    <ul class="text-[13px] leading-5">
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Sạc dự phòng</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Miến dán màn hình</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Sạc cáp</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Bàn ghế gaming</a>
                      </li>
                      <li class="h-7">
                        <a class="text-gray-600 cursor-pointer hover:text-black">Phụ kiện khác</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="w-[409px] border-l border-r border-[#ccc] p-3">
                  <div class="text-[#3d3d3d] pt-2 pb-2 font-bold">BÁN CHẠY NHẤT</div>
                    <div class="flex mb-3">
                    <img src="../assets/loa.webp" alt="" class="w-20 h-20 mr-2">
                    <div class="leading-5">
                      <a href="" class="text-gray-900 hover:text-black">Combo Loa Bluetooth Karaoke kèm Mic không dây ivalue F12-65N</a>
                      <p class="text-[#d0021b] leading-5 font-bold">1.990.000 ₫</p>
                    </div>
                  </div>
                    <div class="flex">
                      <img src="../assets/sac.webp" alt="" class="w-20 h-20 mr-2">
                      <div class="leading-5">
                        <a href="" class="text-gray-900 hover:text-black">Pin sạc dự phòng UmeTravel 10000mAh TRIP10000 Quick Charge</a>
                        <p class="text-[#d0021b] leading-5 font-bold">690.000 ₫</p>
                      </div>
                    </div>
                </div>
                <div class="w-[324px] p-3 mt-5">
                  <img src="../assets/phu-kien.webp" alt="" class="w-[248px] h-[248px] mx-auto">
                </div>
      </div>
        </li>
        <li class="leading-9">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-arrow-rotate-right"></i>
            MÁY CŨ GIÁ RẼ
          </a>
        </li>
        <li class="leading-9">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-house-flag"></i>
            HÀNG DA DỤNG
          </a>
        </li>
        <li class="leading-9">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-sim-card"></i>
            SIM & THẺ
          </a>
        </li>
        <li class="leading-9 relative show-promo">
          <a href="" class="text-sm text-white cursor-pointer hover:text-gray-400">
            <i class="fa-solid fa-bahai"></i>
            KHUYẾN MÃI
          </a>
          <form action="" class="w-[200px] shadow-lg absolute left-0 top-9 hidden-promo">
            <ul class=" py-2 px-5 text-gray-600">
              <li class="cursor-pointer hover:text-black">Thông tin trao thưởng</li>
              <li class="cursor-pointer hover:text-black">Tất cả khuyến mãi</li>
            </ul>
          </form>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .show-info:hover>.hidden-info {
    display:block;
  }
  .hidden-info {
    display:none;
  }
  .show-mobi:hover>.hidden-mobi {
    display:flex;
  }
  .hidden-mobi {
    display:none
  }
  .show-loptop:hover>.hidden-loptop {
    display: flex;
  }
  .hidden-loptop {
    display:none;
  }
  .show-tablet:hover>.hidden-tablet {
    display:flex;
  }
  .hidden-tablet {
    display:none;
  }
  .show-apple:hover>.hidden-apple {
    display:flex;
  }
  .hidden-apple {
    display:none;
  }
  .show-pc:hover>.hidden-pc {
    display:block;
  }
  .hidden-pc {
    display:none; 
  }
  .show-promo:hover>.hidden-promo {
    display:block;
  }
  .hidden-promo {
    display:none;
  }
  .show-phone:hover>.hidden-phone {
    display:flex;
  }
  .hidden-phone {
    display:none;
  }
</style>



