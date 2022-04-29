<template>
  <div>
    <section class="hero">
      <div class="hero__wrapper">
        <h1 class="hero__wrapper--title">{{ address }}</h1>
      </div>
    </section>
    <section class="listing">
      <!-- address + Description -->
      <div class="date-time">
        <div>
          <img src="~/static/icon-calendar.svg" />
          <p class="listing__content--date">{{ date }}</p>
        </div>
        <div>
          <img src="~/static/icon-clock.svg" />
          <p class="listing__content--time">{{ time }}</p>
        </div>
      </div>
      <h3 class="listing__content--subheading">Categories:</h3>
      <p class="listing__content--category">{{ category }}</p>
      <h3 v-if="description" class="listing__content--subheading">
        Description:
      </h3>
      <p v-if="description" class="listing__content--desc">{{ description }}</p>
      <a :href="`${directionsLink}`" target="_blank" class="btn-directions"
        >Get Directions</a
      >
      <!-- <div class="listing__content--image-wrapper">
        <nuxt-img
          format="webp"
          quality="50"
          src="test-1.jpg"
          class="listing__content--image"
        />
        <nuxt-img
          format="webp"
          quality="50"
          src="test-2.jpg"
          class="listing__content--image"
        />
      </div> -->
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // The slug is based on the address of the current listing
      slug: this.$route.params,
      // I had to declare these beforehand so that they could be referenced in mounted()
      date: "",
      time: "",
      address: "",
      category: "",
      description: "",
      directionsLink: "",
    };
  },
  computed: {
    ...mapState({
      listings: (state) => state.listings,
    }),
  },
  mounted() {
    // Grab listing information based on the current slug
    const currentListing = this.listings.filter(
      (listing) => listing.address === this.slug.id
    );
    // Set data points based on the information that was pulled above in currentListing
    // [0] is used to reference the first object (listing) as it is unnamed when filtered like this
    this.date = currentListing[0].date;
    this.time = currentListing[0].time;
    this.address = currentListing[0].address;
    this.category = currentListing[0].category;
    this.description = currentListing[0].description;
    this.directionsLink = currentListing[0].directionsLink;

    // console.log(this.$route.params.id);
  },
};
</script>

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

.btn-directions {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  background: #1d3557;
  color: #fff;
  border: none;
  font-weight: 600;

  &:focus,
  &:hover {
    background: rgba(29, 54, 88, 0.85);
  }
}

.listing {
  padding: 1.5rem 1rem;

  .date-time {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .date-time > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:first-of-type {
      margin-right: 1.5rem;
    }
  }

  &__content {
    padding: 1rem;
    margin-top: -80px;

    &--subheading {
      font-size: 1.15rem;
      font-weight: 600;
      margin: 0;
    }

    &--category {
      margin: 0.5rem 0 1.5rem 0;
    }
    &--desc {
      margin: 0.5rem 0 2.5rem 0;
    }

    &--image-wrapper {
      margin-top: 2rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      > img {
        width: 100%;
        border-radius: 1rem;
        aspect-ratio: 1 / 1;
      }
    }
  }
}
</style>
