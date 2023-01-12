<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Explainer />
      <Features02 />
      <Services />
      <Pricing />
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
import Explainer from '../partials/Explainer.vue'
import Features02 from '../partials/Features02.vue'
import Services from '../partials/Services.vue'
import Pricing from '../partials/Pricing.vue'
import Faqs from '../partials/Faqs.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Explainer,
    Features02,
    Services,
    Pricing,
    Faqs,
    Cta,
    Footer
},

}
</script>