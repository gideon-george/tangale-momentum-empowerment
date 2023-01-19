<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block group" to="/" aria-label="Cruip">
            <img src="../images/cropped.jpg" width="60" height="60" alt="Logo" class="rounded-full" >
          </router-link>
        </div>

        <nav class="flex flex-wrap md:flex-no-wrap justify-between items-center py-4 md:py-0">
  <div class="md:hidden">
    <button class="text-blue-500 hover:text-blue-900 font-medium" @click="toggleNav">
      <span class="mx-2 text-gray-500">Menu</span>
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="8">
        <path d="M8 7L0 1L1 0L9 6L1 12L0 11L8 7Z"></path>
      </svg>
    </button>
    <div class="hidden" v-if="showNav">
      <ul>
        <li class="mx-2">
          <router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/">HOME</router-link>
        </li>
        <li class="mx-2">
          <router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/about-us">ABOUT US</router-link>
        </li>
        <li class="mx-2">
          <router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/faq">F.A.Q</router-link>
        </li>
        <li class="mx-2">
          <router-link class="text-blue-500 hover:text-blue-600 font-medium" to="/contact-us">CONTACT US</router-link>
        </li>
        <li class="mx-2">
          <router-link class="text-white bg-red-500 hover:bg-blue-600 font-medium p-2" to="/proposal-call">APPLY</router-link>
        </li>
      </ul>
    </div>
  </div>
  <div class="hidden md:block">
    <ul class="flex">
      <li class="mr-6 group-start">
        <router-link class="btn-md inline-flex items-center text-gray-900 hover:text-blue-500 font-medium" to="/">HOME</router-link>
      </li>
    <li class="mr-6">
      <router-link class="btn-md inline-flex items-center text-gray-900 hover:text-blue-500 font-medium" to="/about-us">ABOUT US</router-link>
    </li>
    <li class="mr-6">
      <router-link class="btn-md inline-flex items-center text-gray-900 hover:text-blue-500 font-medium" to="/faq">F.A.Q</router-link>
    </li>
    <li class="mr-6">
      <router-link class="btn-md inline-flex items-center text-gray-900 hover:text-blue-500 font-medium" to="/contact-us">CONTACT US</router-link>
    </li>
    <li class="mr-6 group-end">
      <router-link class="btn-md inline-flex p-3 items-center text-white bg-red-700 hover:bg-gray-800 group font-medium" to="/proposal-call">APPLY
      </router-link>
    </li>
  </ul>
</div>
</nav>


      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav
    }
  }
}
</script>