<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper">
        <!-- <h1 class="hero__wrapper--title">{{ $nuxt.$route.name }}</h1> -->
        <h1 class="hero__wrapper--title">About OYS</h1>
      </div>
    </section>
    <div class="content">
      <h2><span>What</span> is this website?</h2>
      <p>
        A yard sale listing website for Owensboro and the surrounding area.
        <i>(will write more on this later)</i>
      </p>

      <h2><span>Why</span> was this created?</h2>
      <p>Because the others suck. <i>(will write more on this later)</i></p>

      <h2><span>How</span> was this created?</h2>
      <p>Vue.js, Nuxt.js, Netlify. <i>(will write more on this later)</i></p>

      <h2><span>Upcoming Features</span></h2>
      <ul>
        <li>The ability to select multiple filters</li>
        <li>Pictures added to individual yard sale pages</li>
        <li>User accounts</li>
        <ul>
          <li>The ability to favorite specific yard sale listings</li>
          <li>A curated list of favorited yard sale listings</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url("~static/owensboro-bridge.jpg"), rgba(255, 255, 255, 0.7);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 2rem 0;
  margin-top: 52px;

  &__wrapper {
    padding: 1rem;

    &--title {
      font-size: 1.8rem;
      font-weight: 500;
      max-width: 20ch;
      margin: 0;
    }

    span {
      display: block;
      margin-top: 0.5rem;
    }
  }
}

.content {
  color: #080808;
  padding: 2rem 1rem;

  > h2 {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;

    > span {
      color: #1d3557;
      font-weight: 600;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }
}

@media (min-width: 769px) {
  .hero {
    padding: 6rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &--title {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
