<template>
    <div className="flex flex-col min-h-screen overflow-hidden">
  
      <!-- Site header -->
      <Header />
  
      <!-- Page content -->
      <main class="grow">
  
        <Hero />
        
        <Faqs />
        <Cta />
  
      </main>
      
      <!-- Site footer -->
      <Footer />    
  
    </div>
  </template>
  
  <script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Faq',
components: {
  Header,
  Hero,
  Cta,
  Footer
}
}
</script>
