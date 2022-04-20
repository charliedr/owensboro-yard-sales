<template>
  <div>
    <section>
      <!-- address + Description -->
      <h1 class="listing__content--date">{{ date }}</h1>
      <h1 class="listing__content--address">{{ address }}</h1>
      <span class="listing__content--category">{{ category }}</span>
      <p class="listing__content--desc">{{ description }}</p>
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
      address: "",
      category: "",
      description: "",
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
    this.address = currentListing[0].address;
    this.category = currentListing[0].category;
    this.description = currentListing[0].description;

    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss">
section {
  padding: 1rem;
}

.section__title {
  font-size: 1rem;
  font-weight: 700;
  color: #080808;
  text-align: left;
  // border-left: .25rem solid #1D3557;
  // padding-left: .5rem;
  margin: -0.5rem 0;
}

.listing {
  &__hero {
    height: 35vh;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &__button {
    display: inline-block;
    background: #1d3557;
    color: #ffffff;
    text-align: center;
    padding: 0.5rem 1rem;
    margin: 0 1rem 1rem 0;
    border-radius: 0.5rem;
    border: none;
    text-decoration: none;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }

    span {
      font-size: 0.8rem;
    }
  }

  &__content {
    padding: 1rem;
    margin-top: -80px;
    // text-align: center;

    &--logo-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--logo {
      background: #ffffff;
      width: auto;
      max-width: 80%;
      height: 160px;
      padding: 1rem;
      border-radius: 1rem;
      margin: 0 auto;
    }

    &--address {
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    .listing__contact--wrapper {
      display: grid;
      grid-template-columns: repeat(2, minmax(50%, 1fr));

      .listing__button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .listing__onlineorder--wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem;

        img {
          width: 100%;
          max-width: 150px;
        }
      }
    }
  }
}

@media (min-width: 769px) {
  .section__title {
    font-size: 1.25rem;
  }

  .listing__contact--wrapper,
  .listing__onlineorder--wrapper {
    grid-template-columns: repeat(3, 1fr) !important;
    padding: 2rem 0;
  }

  .listing__contact--wrapper {
    .listing__button {
      margin-bottom: 0;
    }
  }

  .listing__onlineorder--wrapper {
    img {
      max-width: 150px !important;
    }
  }
}
</style>
