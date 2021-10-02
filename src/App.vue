<template>
  <div class="page-container">
    <Navigation/>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<script>
  import Navigation from "../src/components/Navigation"
  import Footer from "../src/components/Footer"
  export default{
    components: {
      Navigation,
      Footer
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  :root{
    --nav-height: 80px;
    --footer-color: beige;
    --footer-height: 50px;
    --nav-color: beige;
    --logo-color: black;
    --nav-link-color: black;
    --nav-selectedlink-color: #8c0303;
    --drop-down-nav-color: rgba(226, 215, 191, 0.8);
  }
  body{
    font-family: 'Poppins', sans-serif;
    margin:0;
    padding: 0;
  }
  .content{
    padding-top: var(--nav-height);
    padding-bottom: var(--footer-height);
  }
  .page-container{
      position: relative;
      min-height: 100vh;
  }

</style>
