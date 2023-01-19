<template>
  <section class="relative overflow-hidden">

    <!-- Bg -->
    <div class="absolute inset-0 bg-blue-900 pointer-events-none -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <!-- Had to place the SVG in the public folder, and here is why:
      Ref: https://github.com/vitejs/vite/issues/7062 -->
      <object type="image/svg+xml" data="/hero-illustration.svg" width="1440" height="1214"></object>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-28 pb-16 md:pt-40 md:pb-20">

        <!-- Hero content -->
        <div class="max-w-3xl mx-auto text-center">

          <h1 class="h1 font-cabinet-grotesk text-white mb-2" data-aos="fade-up">Tangale Momentum for Empowerment.</h1>
          <p class="text-lg md:text-xl text-white text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">Empowering Tangale entrepreneurs to drive economic growth and development.</p>
          <div data-aos="fade-up" data-aos-delay="200">
            <div class="btn inline-flex items-center text-white bg-red-500 hover:bg-gray-800 group" to="/proposal-call">
              KALKWI KA AMDO
              
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>