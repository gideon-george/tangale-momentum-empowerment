<template>
    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-6 md:py-10">
  
          <!-- Section header -->
          <div class="max-w-3xl mx-auto text-center pb-5 md:pb-16">
            <h2 class="h2 font-cabinet-grotesk">CONTACT US</h2>
          </div>
  
</div>

<div class="bg-white rounded-lg p-12 max-w-xl mx-auto space-y-6">
    <form name="tme_contact" method="POST" data-netlify="true">
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Your Name:</label>
            <input class="bg-gray-200 rounded-lg p-2 w-full" type="text" name="name" />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Your Email:</label>
            <input class="bg-gray-200 rounded-lg p-2 w-full" type="email" name="email" />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Message:</label>
            <textarea class="bg-gray-200 rounded-lg p-2 w-full" name="message"></textarea>
        </div>
        <div class="text-center">
            <button class="bg-indigo-500 text-white rounded-lg p-2 hover:bg-indigo-600">Send</button>
        </div>
    </form>
</div>

  </div>

  
    
    </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>