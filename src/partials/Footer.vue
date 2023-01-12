<template>
  <footer class="relative">

    <!-- Bg -->
    <div class="absolute inset-0 bg-blue-900 -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img class="max-w-none" src="../images/footer-illustration.svg" width="2336" height="421" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-between pb-4 md:pb-8">

        <!-- Social links -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a class="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0" aria-label="Twitter">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
              </svg>
            </a>
          </li>
          
        
          <li class="ml-2">
            <a class="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0" aria-label="Telegram">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
              </svg>
            </a>
          </li>
        </ul>

        <!-- Copyrights -->
        <div class="text-sm text-blue-300">
          © Tangale-momentum-empowerment.org.  All rights reserved.
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>