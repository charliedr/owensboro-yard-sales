<template>
  <header class="navbar">
    <div class="navbar__wrapper container">
      <NuxtLink to="/" exact>
        <span class="logo">OYS</span>
      </NuxtLink>
      <div class="navbar__links">
        <NuxtLink to="/about"> About </NuxtLink>
        <NuxtLink to="/"> Submit Your Listing </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: #1d3557;
  color: #ffffff;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.35);

  &__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .logo {
      color: #ffffff;
      font-size: 20px;
      line-height: 1;
      font-weight: 600;
    }

  }

  &__links {
    display: flex;
    
    a {
      font-size: 0.85rem;
      font-weight: normal;
      color: #ffffff;
      margin-left: 1rem;
    }
  }
}
</style>
