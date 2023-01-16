<template>
    <div className="flex flex-col min-h-screen overflow-hidden">
  
      <!-- Site header -->
      <Header />
  
      <!-- Page content -->
      <main class="grow">
  
        <Hero />
        
        
        <Contact/>
  
      </main>
      
      <!-- Site footer -->
      <Footer />    
  
    </div>
  </template>
  
  <script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Contact from '../partials/Contact.vue'
import Footer from '../partials/Footer.vue'

export default {
    name: 'ContactUs',
components: {
  Header,
  Hero,
  Contact,
  Footer
}
}
</script>
