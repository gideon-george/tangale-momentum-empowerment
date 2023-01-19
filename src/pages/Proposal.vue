<template>
  <main class="flex">

    <!-- Content -->
    <div class="min-h-screen w-full lg:w-1/2">

      <div class="h-full">

        <div class="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">

          <!-- Site header -->
          <header class="flex-1 flex mb-auto">
            <div class="flex items-center justify-between h-16 md:h-20">
              <!-- Logo -->
              <router-link class="block group" to="/" aria-label="Cruip">
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-blue-600 group-hover:fill-blue-500 transform duration-150 ease-in-out" d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z" />
                  <path class="fill-sky-400 group-hover:fill-sky-300 transform duration-150 ease-in-out" d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z" />
                </svg>
              </router-link>
            </div>
          </header>

          <div class="flex-1 py-8">

            <div class="mb-10 text-center">
              <h1 class="h2 font-cabinet-grotesk">Apply & Submit Proposal</h1>
            </div>
<h2 class="font-bold text-center">Begin Process in 3 easy steps below: </h2>
            <div class="text-xl mt-15 text-center font-cabinet-grotesk text-gray-900 mb-4">
  <ul class="text-center mt-15 font-semibold">
  <li>Take Survey</li>
  <li>Download Advertisement</li>
  <li>Apply and Submit proposal</li>
</ul></div>

            <!-- Form -->
            <div class="flex flex-col md:flex-row justify-center items-center">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1H7JRKl-x435tgoeAGA9EyLDRc3AM8fax-Q20ur1vSBh0UA/viewform?usp=sf_link" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full md:mr-8 md:mb-4 text-center">
      Take Survey
    </a>
  
     <a href="https://drive.google.com/file/d/1K-sxOikScsgAYmaIaVU_Nm4G0MDo19Pw/view?usp=sharing" class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full md:mr-8 md:mb-4 text-center"    @click="trackDownload">  Download Advertisement (PDF)</a>

    
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdf9ptFyyPT4Zgo-EVOAZJxvSUwp_TwycU4X0oqQEl24-t_OQ/viewform?usp=sf_link" class="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-center">
      Apply and Submit Proposal
    </a>
  </div>
          </div>
          <div class="text-center">
    <a href="/" class="text-blue-900 hover:underline">Go Back to Home Page</a>
  </div>
        </div>

      </div>

    </div>

    <!-- Right side -->
    <div class="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">

      <!-- Bg -->
      <div class="absolute inset-0 bg-blue-600 pointer-events-none -z-10">

      <!-- Illustration -->
      <img src="../images/explainer.jpg" alt="Explainer">
      <div class="text-center relative my-50" > <h2> Applications and Proposal Submission is From:</h2>
     <p> 20th January, 2023 - 28th February, 2023</p></div>
    
    </div>
</div>
  </main>
</template>

<script>
export default {
  name: 'Proposal',
}
</script>