<template>
  <section class="bg-gray-900">

    <div class="py-12 md:py-20">

      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 class="h4 font-cabinet-grotesk text-gray-100">Trusting by leading brands, including:</h2>
      </div>

      <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
      <!-- * Custom styles in src/css/additional-styles/theme.scss -->
      <div class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
        <div class="swiper-wrapper !ease-linear select-none">
          <!-- Carousel items -->
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-01.svg" alt="Client 01" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-02.svg" alt="Client 02" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-03.svg" alt="Client 03" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-04.svg" alt="Client 04" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-05.svg" alt="Client 05" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-06.svg" alt="Client 06" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-07.svg" alt="Client 07" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-08.svg" alt="Client 08" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-09.svg" alt="Client 09" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/client-10.svg" alt="Client 10" />
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { onMounted } from 'vue'

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay])

export default {
  name: 'Clients',
  setup() {
    onMounted(() => {
      const carousel = new Swiper('.clients-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: true,
        loop: true,
        speed: 5000,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      })
    })
  }
}
</script>