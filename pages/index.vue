<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper">
        <h1 class="hero__wrapper--title">home page yeet</h1>
        <span>Shift + Alt + F</span>
      </div>
    </section>
    <section class="cta-section">
      <h2 class="cta-section__title">
        <span>Have a yard sale coming up?</span><br><span>Post it here!</span>
      </h2>
      <a class="cta-section__button" href="https://google.com" target="_blank">Submit Your Listing</a>
    </section>
    <div class="content">
      <h1 class="content__title">Upcoming Yard Sales</h1>
      <ListingList class="content__list" />
    </div>
  </div>
</template>

<script>
import ListingList from "~/components/ListingList";

export default {
  components: {
    ListingList,
  },
};
</script>

<style lang="scss">
.hero {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: url("~static/hero-img.jpg"), rgba(255, 255, 255, 0.7);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  padding: 2rem 0;

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

.cta-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1d3557;
  margin: 2.5rem 1rem;
  border-radius: 1rem;
  padding: 2rem 1rem;
  box-shadow: 0 0.5rem 0.75rem rgba(0, 0, 0, 0.1);

  &__title {
    font-size: 1.35rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
    margin-top: 0;
  }

  &__button {
    border-radius: 0.75rem;
    padding: 0.75rem 1rem;
    background: #fff;
    color: #1d3557;
    font-weight: 600;
  }
}

.content {
    &__title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #080808;
    margin-bottom: 0;
    padding: 0 1rem;
    // border-left: 0.25rem solid #1d3557;
    // padding-left: .5rem;
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

      &--hashtag {
        font-size: 1.5rem;
      }

      &--title {
        font-size: 2.5rem;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__list {
      width: 100%;
      max-width: 800px;
      align-self: center;
    }
  }
}
</style>
