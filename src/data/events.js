// events.js
export default [
  {
    id: "day5",
    title: " جمعه ۵ دی",
    periods: [
      {
        time: " ساعت ۸ الی ۱۱",
        categories: [
          {
            label: "۱۵_۱۶_۱۷",
            minAge: 15,
            maxAge: 17,
            races: [
              { key: "parvane100", name: "پروانه ۱۰۰", fee: 100, allowed: true },
              { key: "sine100", name: "سینه ۱۰۰", fee: 100, allowed: true },
              { key: "posht100", name: "پشت ۱۰۰", fee: 100, allowed: true },
              { key: "ghorbaqe100", name: "غورباقه ۱۰۰", fee: 100, allowed: true },
              { key: "team", name: "تیمی", fee: null, allowed: true }
            ]
          }
        ]
      },
      {
        time: " ساعت ۱۱ الی ۱۴",
        categories: [
          {
            label: "۱۴_۱۳",
            minAge: 13,
            maxAge: 14,
            races: [
              { key: "parvane100", name: "پروانه ۱۰۰", fee: 100, allowed: true },
              { key: "sine100", name: "سینه ۱۰۰", fee: 100, allowed: true },
              { key: "posht100", name: "پشت ۱۰۰", fee: 100, allowed: true },
              { key: "ghorbaqe100", name: "غورباقه ۱۰۰", fee: 100, allowed: true },
              { key: "team", name: "تیمی", fee: null, allowed: true }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "day4",
    title: " پنجشنبه ۴ دی",
    periods: [
      {
        time: " ساعت ۸ الی ۱۰ صبح",
        categories: [
          {
            label: "۱۲",
            minAge: 12,
            maxAge: 12,
            races: [
              { key: "parvane50", name: "پروانه ۵۰", fee: 50, allowed: true },
              { key: "sine50", name: "سینه ۵۰", fee: 50, allowed: true },
              { key: "posht50", name: "پشت ۵۰", fee: 50, allowed: true },
              { key: "ghorbaqe50", name: "غورباقه ۵۰", fee: 50, allowed: true }
            ]
          },
          {
            label: "۱۱",
            minAge: 11,
            maxAge: 11,
            races: [
              { key: "parvane50", name: "پروانه ۵۰", fee: 50, allowed: true },
              { key: "sine50", name: "سینه ۵۰", fee: 50, allowed: true },
              { key: "posht50", name: "پشت ۵۰", fee: 50, allowed: true },
              { key: "ghorbaqe50", name: "غورباقه ۵۰", fee: 50, allowed: true }
            ]
          },
          {
            label: "۱۰",
            minAge: 10,
            maxAge: 10,
            races: [
              { key: "parvane50", name: "پروانه ۵۰", fee: 50, allowed: true },
              { key: "sine50", name: "سینه ۵۰", fee: 50, allowed: true },
              { key: "posht50", name: "پشت ۵۰", fee: 50, allowed: true },
              { key: "ghorbaqe50", name: "غورباقه ۵۰", fee: 50, allowed: true }
            ]
          }
        ]
      },
      {
        time: " ساعت ۱۱ الی ۱۴ صبح",
        categories: [
          {
            label: "۹",
            minAge: 9,
            maxAge: 9,
            races: [
              { key: "parvane50", name: "پروانه", fee: 0, allowed: false },
              { key: "sine50", name: "سینه ۵۰", fee: 50, allowed: true },
              { key: "posht50", name: "پشت ۵۰", fee: 50, allowed: true },
              { key: "ghorbaqe50", name: "غورباقه ۵۰", fee: 50, allowed: true }
            ]
          },
          {
            label: "۸",
            minAge: 8,
            maxAge: 8,
            races: [
              { key: "parvane25", name: "پروانه", fee: 0, allowed: false },
              { key: "sine25", name: "سینه ۲۵", fee: 25, allowed: true },
              { key: "posht25", name: "پشت ۲۵", fee: 25, allowed: true },
              { key: "ghorbaqe25", name: "غورباقه ۲۵", fee: 25, allowed: true }
            ]
          },
          {
            label: "۷_۶",
            minAge: 6,
            maxAge: 7,
            races: [
              { key: "parvane25", name: "پروانه", fee: 0, allowed: false },
              { key: "sine25", name: "سینه ۲۵", fee: 25, allowed: true },
              { key: "posht25", name: "پشت ۲۵", fee: 25, allowed: true },
              { key: "ghorbaqe25", name: "غورباقه ۲۵", fee: 0, allowed: false } // غورباقه برای 6-7 ممنوع
            ]
          }
        ]
      }
    ]
  }
];
