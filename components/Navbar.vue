<template>
  <header class="navbar">
    <div class="navbar__wrapper container">
      <NuxtLink to="/" exact>
        <span class="logo">logo</span>
      </NuxtLink>
      <NuxtLink to="/">
        Submit Your Listing
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  position: relative;
  width: 100%;
  background: #1d3557;
  color: #ffffff;
}

.navbar__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

/* a:nth-of-type(2) {
  height: 32px;
} */

.logo {
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  font-weight: 500;
}

a {
  font-size: .85rem;
  font-weight: normal;
  color: #ffffff;
}

@media (min-width: 769px) {
}

@media (min-width: 1020px) {
}

@media (min-width: 1200px) {
}
</style>
