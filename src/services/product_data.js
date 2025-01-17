
const coffeeProducts = [
    {
      id: 1,
      name: "Cappuccino",
      type: "Espresso-based",
      description: "A classic coffee made with espresso, steamed milk, and a frothy top.",
      price: 110,
      sizeOptions: [
        {
          size: "Small",
          volume: "8 oz",
          price: 110
        },
        {
          size: "Medium",
          volume: "12 oz",
          price: 120
        },
        {
          size: "Large",
          volume: "16 oz",
          price: 130
        }
      ],
      ingredients: [
        "Espresso",
        "Steamed Milk",
        "Milk Foam"
      ],
      dietary: {
        vegan: false,
        glutenFree: true
      },
      imageUrl: "Cappuccino.png",
      available: true,
    },
    {
      id: 2,
      name: "Latte",
      type: "Espresso-based",
      description: "A smooth and creamy espresso drink with steamed milk and a light foam top.",
      price: 110,
      sizeOptions: [
        {
          size: "Small",
          volume: "8 oz",
          price: 110
        },
        {
          size: "Medium",
          volume: "12 oz",
          price: 120
        },
        {
          size: "Large",
          volume: "16 oz",
          price: 130
        }
      ],
      ingredients: [
        "Espresso",
        "Steamed Milk",
        "Milk Foam"
      ],
      dietary: {
        vegan: false,
        glutenFree: true
      },
      imageUrl: "latte.png",
      available: true,
    },
    {
      id: 3,
      name: "Caramel Macchiato",
      type: "Espresso-based",
      description: "A sweet espresso drink with steamed milk and a caramel drizzle.",
      price: 110,
      sizeOptions: [
        {
          size: "Small",
          volume: "8 oz",
          price: 110
        },
        {
          size: "Medium",
          volume: "12 oz",
          price: 120
        },
        {
          size: "Large",
          volume: "16 oz",
          price: 130
        }
      ],
      ingredients: [
        "Espresso",
        "Steamed Milk",
        "Caramel Syrup",
        "Vanilla Syrup"
      ],
      dietary: {
        vegan: false,
        glutenFree: true
      },
      imageUrl: "macchiato.png",
      available: true,
    }, {
    id: 4,
    name: "Mocha",
    type: "Espresso-based",
    description: "A rich and indulgent coffee made with espresso, steamed milk, and chocolate syrup.",
    price:110,
    sizeOptions: [
      {
        size: "Small",
        volume: "8 oz",
        price: 110
      },
      {
        size: "Medium",
        volume: "12 oz",
        price: 120
      },
      {
        size: "Large",
        volume: "16 oz",
        price: 130
      }
    ],
    ingredients: [
      "Espresso",
      "Steamed Milk",
      "Chocolate Syrup",
      "Whipped Cream"
    ],
    dietary: {
      vegan: false,
      glutenFree: true
    },
    imageUrl: "mocha.png",
    available: true,
  },
  {
    id:5,
    name: "Matcha Latte",
    type: "Green Tea-based",
    description: "A smooth and creamy blend of matcha green tea and steamed milk, perfect for tea lovers.",
    price: 110,
    sizeOptions: [
      {
        size: "Small",
        volume: "8 oz",
        price: 110
      },
      {
        size: "Medium",
        volume: "12 oz",
        price: 120
      },
      {
        size: "Large",
        volume: "16 oz",
        price: 130
      }
    ],
    ingredients: [
      "Matcha Green Tea",
      "Steamed Milk",
      "Vanilla Syrup"
    ],
    dietary: {
      vegan: true,
      glutenFree: true
    },
    imageUrl: "matcha.png",
    available: true,
  },
    {
        id: 6,
        name: "Black Coffee",
        type: "Brewed",
        description: "A simple, strong, and pure coffee brewed to perfection, served black with no milk or sugar.",
        price:90,
        sizeOptions: [
        {
            size: "Small",
            volume: "8 oz",
            price: 90
        },
        {
            size: "Medium",
            volume: "12 oz",
            price: 100
        },
        {
            size: "Large",
            volume: "16 oz",
            price: 110
        }
        ],
        ingredients: [
        "Ground Coffee Beans",
        "Water"
        ],
        dietary: {
        vegan: true,
        glutenFree: true
        },
        imageUrl: "black coffee.png",
        available: true,
    }
  ];
  
  const cookieProducts = [
    {
      id: 1,
      name: "Chocolate Chunk Cookies",
      description: "Rich and soft cookies filled with large chunks of chocolate for an indulgent treat.",
      price: 49,
      sizeOptions: [
        {
          size: "Single",
          quantity: 1,
          price: 49
        },
        {
          size: "Pack of 3",
          quantity: 3,
          price: 139
        },
      ],
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Eggs",
        "Chocolate Chunks",
        "Vanilla Extract",
        "Baking Soda",
        "Salt"
      ],
      dietary: {
        vegan: false,
        glutenFree: false,
        nutFree: true
      },
      imageUrl: "Chocolate chunk cookies.png",
      available: true,
    },
    {
      id: 2,
      name: "Chocolate Cookies",
      description: "Classic soft and chewy chocolate cookies with a rich chocolate flavor.",
      price: 49,
      sizeOptions: [
        {
          size: "Single",
          quantity: 1,
          price:49
        },
        {
          size: "Pack of 3",
          quantity: 3,
          price: 139
        },
      ],
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Eggs",
        "Cocoa Powder",
        "Chocolate Chips",
        "Vanilla Extract",
        "Baking Powder",
        "Salt"
      ],
      dietary: {
        vegan: false,
        glutenFree: false,
        nutFree: true
      },
      imageUrl: "Chocolate Cookie.png",
      available: true,
    },
    {
      id: 3,
      name: "Chocolate M&M Cookies",
      description: "Chewy cookies loaded with colorful M&M candies and plenty of chocolate.",
      price: 49,
      sizeOptions: [
        {
          size: "Single",
          quantity: 1,
          price: 49
        },
        {
          size: "Pack of 3",
          quantity: 3,
          price: 139
        },
      ],
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Eggs",
        "Chocolate Chips",
        "M&M Candies",
        "Vanilla Extract",
        "Baking Powder",
        "Salt"
      ],
      dietary: {
        vegan: false,
        glutenFree: false,
        nutFree: true
      },
      imageUrl: "Chocolate M&M Cookie.png",
      available: true,
    }
  ];

  const allProd = [...coffeeProducts,...cookieProducts];
  