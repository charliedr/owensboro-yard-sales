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
    <!-- <p>{{ filteredList }}</p> -->
    <!-- FILTERED LISTING -->
    <ul v-if="filteredListVisible">
      <li v-for="listing in filteredList" :key="listing.address">
        <div class="listingList__item">
          <div>
            <div class="listingList__item--content-date">
              <img src="~/static/icon-calendar.svg" />
              {{ listing.date }}
            </div>
            <div class="listingList__item--content-title">
              {{ listing.address }}
            </div>
            <div class="listingList__item--content-category">
              {{ listing.category }}
            </div>
            <div class="listingList__item--content-desc">
              {{ listing.description }}
            </div>
            <div class="listingList__item--button-wrapper">
              <NuxtLink class="btn-view" :to="`/listing/${listing.address}`"
                >View Listing</NuxtLink
              >
              <a
                class="btn-directions"
                :href="`${listing.directionsLink}`"
                target="_blank"
                >Get Directions</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- LISTINGS -->
    <ul v-else>
      <li v-for="listing in listings" :key="listing.address">
        <div class="listingList__item">
          <div class="listingList__item--content">
            <div class="listingList__item--content-date">
              <div>
                <img src="~/static/icon-calendar.svg" />
                {{ listing.date }}
              </div>
              <div>
                <img src="~/static/icon-clock.svg" />
                {{ listing.time }}
              </div>
            </div>
            <div class="listingList__item--content-title">
              {{ listing.address }}
            </div>
            <div class="listingList__item--content-category">
              {{ listing.category }}
            </div>
            <div class="listingList__item--content-desc">
              {{ listing.description }}
            </div>
            <div class="listingList__item--button-wrapper">
              <NuxtLink class="btn-view" :to="`/listing/${listing.address}`"
                >View Listing</NuxtLink
              >
              <a
                class="btn-directions"
                :href="`${listing.directionsLink}`"
                target="_blank"
                >Get Directions</a
              >
            </div>
          </div>
        </div>
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
    },
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
      background: #fafafa;
      border-radius: 1rem;
      box-shadow: 0 .5rem .75rem rgba(0, 0, 0, 0.1);
    }

    li:nth-of-type(even) {
      background: #e7e7e7;
    }

    .listingList__item {
      // display: grid;
      // grid-template-columns: 0.55fr 1fr;
      // gap: 1rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      
      padding: 1rem;
      text-decoration: none;
      border-bottom: 1px solid rgba(8, 8, 8, 0.1);

      &--logo {
        max-width: 3rem;
        max-height: 3rem;
        align-self: center;
      }

      &--content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        &-date {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          justify-content: space-between;
          // gap: 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: #080808;
          margin-bottom: 1rem;

          > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
          }

          // &::before {
          //   content: '[icon]';
          // }
        }

        &-title {
          font-size: 1rem;
          font-weight: 600;
          color: #080808;
          text-transform: capitalize;
        }

        &-category {
          font-size: .85rem;
          font-weight: 500;
          font-style: italic;
          line-height: 1rem;
          color: #080808;
          margin: 0.25rem 0 0.35rem 0;
        }

        &-desc {
          font-size: 1rem;
          font-weight: 500;
          color: #080808;
        }
      }

      &--button-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1.5rem;

        a {
          margin-right: 1rem;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
        
        }

        .btn-view {
          background: #1d3557;
          color: #fff;
          border: none;
          
          &:focus, &:hover {
            background: rgba(29, 54, 88, .85);
          }
        }

        .btn-directions {
          background: transparent;
          color: #080808;
          border: 1px solid #080808;
          
          &:focus, &:hover {
            background: rgba(8, 8, 8, .05);
          }
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
