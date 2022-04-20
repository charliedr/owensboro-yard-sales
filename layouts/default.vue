<template>
  <div>
    <Navbar />
    <div class="body-content">
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

//
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  //   head() {
  //     return {
  //       meta: [
  //         { hid: 'og:url', property: 'og:url', content: 'https://eatlocalobky.com' },
  //         { hid: 'og:type', content: 'website' },
  //         { hid: 'og:title', property: 'og:title', content: 'Eat Local OBKY' },
  //         { hid: 'og:description', property: 'og:description', content: 'A directory for locally owned restaurants in the Owensboro, KY area.' },
  //         { hid: 'og:image', property: 'og:image', content: 'https://irp-cdn.multiscreensite.com/a661854b/dms3rep/multi/ogImage.jpg' }
  //       ]
  //     }
  //   }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}

.body-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 50px);
}
</style>
