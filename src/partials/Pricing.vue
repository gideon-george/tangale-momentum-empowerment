<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-8">
          <h2 class="h2 font-cabinet-grotesk">Core Principles of TME Entrepreneurship</h2>
        </div>

        <!-- Pricing tables -->
        <div>

          <!-- Pricing toggle -->
          <div class="flex justify-center max-w-[10rem] m-auto mb-8 lg:mb-14">
            <div class="relative flex w-full p-1 bg-gray-100 rounded-full">
              <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span class="absolute inset-0 w-1/2 bg-blue-900 rounded-full shadow-sm transform transition duration-150 ease-in-out" :class="annual ? 'translate-x-full' : 'translate-x-0'"></span>
              </span>
              <button class="relative flex-1 text-sm font-cabinet-grotesk font-bold h-8 transition duration-150 ease-in-out" :class="annual ? 'text-gray-900' : 'text-white'" @click.prevent="annual = false">Program</button>
              <button class="relative flex-1 text-sm font-cabinet-grotesk font-bold h-8 transition duration-150 ease-in-out" :class="annual ? 'text-white' : 'text-gray-900'" @click.prevent="annual = true">Blueprint</button>

            </div>
          </div>

          <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4">

            <!-- Pricing table 1 -->
            <div class="relative flex flex-col h-full p-6 rounded bg-gray-100" data-aos="fade-up" data-aos-delay="100">
      
              <div class="mb-6">
               
                <h3 class="h1 font-cabinet-grotesk text-blue-500 mb-2" data-aos="fade-up">Mission</h3>
                <p class="text-lg md:text-xl text-gray-900 text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">Empowering Entrepreneurs for Community Development</p>
               
                <div class="text-gray-500 mb-6">The mission of the TME Entrepreneurship Program is to empower entrepreneurs in Tangale land, accelerate economic growth through business and job creation, drive poverty reduction and create a commonwealth fund for the Tangale nation. TME aims to facilitate the empowerment of men and women in Tangale land, and provide the necessary support, mentorship and resources to develop a new breed of entrepreneurs in the community.</div>
                
              </div>
              <div class="font-cabinet-grotesk font-bold mb-4">Mission goals include:</div>
              <ul class="text-gray-500 space-y-3 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Facilitate the empowerment of men and women in Tangale land</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Drive poverty reduction</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Accelerate economic growth through business and job creation</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Create a commonwealth fund for the Tangale nation.</span>
                </li>
              </ul>
            </div>

            <!-- Pricing table 2 -->
            <div class="relative flex flex-col h-full p-6 rounded bg-blue-100" data-aos="fade-up">
              <div class="mb-6">
                <h3 class="h1 font-cabinet-grotesk text-blue-900 mb-2" data-aos="fade-up">Vision</h3>
                <p class="text-lg md:text-xl text-gray-900 text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">Empowering Tangale's Future, Today.</p>
               
                <div class="text-gray-500 mb-6">TME's Entrepreneurship Program is driven by a vision to empower the people of Tangale land and create a sustainable future for the community. We strive to create a culture of entrepreneurship, where men and women are equipped with the skills, knowledge, and resources they need to succeed in business and contribute to the economic growth of their community.</div>
              </div>
              <div class="font-cabinet-grotesk font-bold mb-4">Empowering Tangale Entrepreneurs</div>
              <ul class="text-gray-500 space-y-3 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Promote entrepreneurial mindset and skills among the people of Tangale land</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Facilitate access to capital and mentorship for small businesses</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Drive economic growth through job creation and innovation</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Reduce poverty by providing opportunities for sustainable income</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Create a community of successful entrepreneurs that will inspire others and contribute to the development of Tangale land.</span>
                </li>
              </ul>
            </div>

            <!-- Pricing table 3 -->
            <div class="relative flex flex-col h-full p-6 rounded bg-gray-100" data-aos="fade-up" data-aos-delay="100">
              <div class="mb-6">
                <h3 class="h1 font-cabinet-grotesk text-blue-500 mb-2" data-aos="fade-up">Purpose </h3>
                <p class="text-lg md:text-xl text-gray-900 text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">Driving growth, and building a strong community</p>
               
                <div class="text-gray-500 mb-6">The Purpose and Aspirations of TME Entrepreneurship Program is to empower individuals of the Tangale land by promoting entrepreneurial mindset and skills, facilitating access to capital and mentorship, and driving economic growth through job creation and innovation. Our ultimate goal is to contribute to the development of Tangale land through a community of successful entrepreneurs.</div>
              </div>
              <div class="font-cabinet-grotesk font-bold mb-4">Empowerment</div>
              <ul class="text-gray-500 space-y-3 grow">
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Contribute to the development of Tangale land through a community of successful entrepreneurs</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Promote entrepreneurial mindset and skills among the people of Tangale land</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Facilitate access to capital and mentorship for small businesses</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Drive economic growth through job creation and innovation</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Pricing',
  setup() {
    const annual = ref(false)

    return {
      annual,
    }
  },
}
</script>