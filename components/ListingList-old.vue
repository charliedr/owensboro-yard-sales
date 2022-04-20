<template>
  <div class="listingList">
    <!-- FILTERING -->
    <div class="listingList__filters">
      <button @click="filterListClear">All</button>
      <button @click="filterListings" value="Clothing">Electronics</button>
      <button @click="filterListings" value="Toys">Toys</button>
      <button @click="filterListings" value="Clothing">Clothing</button>
      <button @click="filterListings" value="Video Games">Video Games</button>
      <button @click="filterListings" value="Collectibles">Collectibles</button>
      <button @click="filterListings" value="Trading Cards">
        Trading Cards
      </button>
      <button @click="filterListings" value="Pet Supplies">Pet Supplies</button>
      <button @click="filterListings" value="Holiday Items">
        Holiday Items
      </button>
    </div>
    <h1 class="listingList__title">Upcoming Yard Sales</h1>
    <!-- <p>{{ filteredList }}</p> -->
    <ul v-if="filteredListVisible">
      <li v-for="listing in filteredList" :key="listing.address">
        <NuxtLink class="listingList__item" :to="`/listing/${listing.address}`">
          <div class="listingList__item--content">
            <div class="listingList__item--content-date">
              {{ listing.date }}
            </div>
          </div>
          <div>
            <div class="listingList__item--content-title">
              {{ listing.address }}
            </div>
            <div class="listingList__item--content-category">
              {{ listing.category }}
            </div>
            <div class="listingList__item--content-desc">
              {{ listing.description }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <!-- LIST -->
    <ul v-else>
      <li v-for="listing in listings" :key="listing.address">
        <NuxtLink class="listingList__item" :to="`/listing/${listing.address}`">
          <div class="listingList__item--content">
            <div class="listingList__item--content-date">
              {{ listing.date }}
            </div>
          </div>
          <div class="listingList__item--content">
            <div class="listingList__item--content-title">
              {{ listing.address }}
            </div>
            <div class="listingList__item--content-category">
              {{ listing.category }}
            </div>
            <div class="listingList__item--content-desc">
              {{ listing.description }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      filteredList: [],
      filteredListVisible: false,
    };
  },
  methods: {
    filterListings(e) {
      console.log("Filtering for:", e.target.value);
      // Filters listings if the value of the button equals the listing's category
      const filtered = this.listings.filter((listing) =>
        // *** Eventually add RegEx to highlight filtered category
        listing.category.includes(e.target.value)
      );
      this.filteredList = filtered;
      this.filteredListVisible = true;
    },
    filterListClear() {
      this.filteredListVisible = false;
    }
  },
  computed: {
    // Pull information from the store
    ...mapState({
      listings: (state) => state.listings,
    }),
  },
};
</script>

<style lang="scss">
.listingList {
  padding: 1.5rem 1rem;

  &__title {
    font-size: 1rem;
    font-weight: 500;
    color: #080808;
    margin-bottom: 1rem;
    border-left: 0.25rem solid #1d3557;
    padding-left: 0.5rem;
  }

  &__filters {
    margin-bottom: 0.5rem;

    button {
      display: inline-block;
      font-size: 14px;
      padding: 0.25rem 0.75rem;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.14);
      margin-bottom: 0.5rem;
      border-radius: 0.75rem;
      transition: all 0.2s ease-in-out;
      outline: none;

      &:hover,
      &:focus {
        cursor: pointer;
        background: #1d3557;
        color: #ffffff;
      }
    }
  }

  ul {
    list-style-type: none;
    border-radius: 8px;
    padding: 0;

    li {
      background: #efefef;
    }

    li:nth-of-type(even) {
      background: #dbdbdb;
    }

    .listingList__item {
      display: grid;
      grid-template-columns: 0.2fr 1fr;
      gap: 1rem;
      padding: 1rem;
      text-decoration: none;
      border-bottom: 1px solid rgba(8, 8, 8, 0.1);

      &--logo {
        max-width: 3rem;
        max-height: 3rem;
        align-self: center;
      }

      &--content {
        &-date {
          font-size: 1rem;
          font-weight: 500;
          color: #080808;
        }

        &-title {
          font-size: 1rem;
          font-weight: 600;
          color: #080808;
          text-transform: capitalize;
        }

        &-category {
          font-size: 0.85rem;
          font-weight: 500;
          font-style: italic;
          line-height: 1rem;
          color: #080808;
          margin: 0.25rem 0 0.35rem 0;
        }

        &-desc {
          font-size: 0.85rem;
          font-weight: 500;
          color: #080808;
        }
      }
    }
  }
}

@media (min-width: 769px) {
  .listingList__title {
    font-size: 1.5rem;
  }
}
</style>
