export const state = () => ({
  // Manually adding these for now, will eventually connect to Google Sheets API to pull in Google Forms submissions
  listings: [
    {
      date: "June 01",
      time: "7am - 2pm",
      address: "P. Sherman, 42 Wallaby Way",
      category: "Electronics, Toys, Holiday Items, Trading Cards, Clothing, Pet Supplies",
      directionsLink: "https://www.google.com/maps/dir//42+Rock+Wallaby+Way,+Blaxland+NSW+2774,+Australia/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x6b12883f97111b4b:0x72042424009f2705?sa=X&ved=2ahUKEwjM_pei-KH3AhVNVd8KHc58B7gQwwV6BAg8EAM",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
    {
      date: "June 03",
      time: "9am - 4pm",
      address: "address 2",
      category: "Toys, Video Games",
      directionsLink: "https://google.com",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      date: "June 05",
      time: "6am - 1pm",
      address: "address 3",
      category: "Clothing, Holiday Items",
      directionsLink: "https://google.com",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      date: "June 07",
      time: "11am - 4pm",
      address: "address 4",
      category: "Pet Supplies",
      directionsLink: "https://google.com",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
      date: "June 11",
      time: "12pm - 5:30pm",
      address: "address 5",
      category: "Trading Cards",
      directionsLink: "https://google.com",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      date: "June 13",
      time: "9am - 5pm",
      address: "address 6",
      category: "Video Games",
      directionsLink: "https://google.com",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      date: "June 15",
      time: "5am - 11am",
      address: "address 7",
      category: "Holiday Items",
      directionsLink: "https://google.com",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
      date: "September 09",
      time: "7:30am - 2pm",
      address: "address 8",
      category: "Collectibles, Trading Cards",
      directionsLink: "https://google.com",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
  ],
});
