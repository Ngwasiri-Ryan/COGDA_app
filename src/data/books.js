
//books data

const books = [
    {
      id: 1,
      book_name: "The Principle of Recommendation",
      book_cover_image: require("../assets/book_covers/the_power_of_recommendation_book_cover.jpg"),
      book_image: require("../assets/books/the_power_of_recommendation.jpg"),
      description:
        "The principle of recommendation has been from the beginning of the world. It however began to unfold, right from the Garden when Satan recommended the fruit to Eve, who later recommended it to Adam, her husband. Your next level in life is tied to a recommendation. Where you will be tomorrow might just be hanging on a single recommendation from someone. In this book, you are going to learn types of recommendation, how to avoid negative recommendations, how to provoke positive and constructive recommendations, and much more. So let’s take an amazing journey into your next level as you study this timely weapon released from heaven.",
      price: 12.99,
      url:'https://store.cogda.cm/home/product/the-principle-of-recommendation/'
    },
    {
      id: 2,
      book_name: "The Principle of Servanthood",
      book_cover_image: require("../assets/book_covers/princilpe_of_servanthood_book_cover.jpg"),
      book_image: require("../assets/books/principle_of_servanthood.jpg"),
      description:
        "Life on earth is a function of principles. We live in a dispensation where people self-exalt themselves above the rule of love and service. Many seek to be masters rather than servants. The lack of excellence and productivity in today's world highlights the need for emphasis on servanthood—the importance and sanctity of service. Only faithful servants become great masters. This book will take you through a journey that acts as an eye-opener to the importance of service as you pursue your destiny.",
      price: 14.99,
      url:'https://store.cogda.cm/home/product/the-principle-of-servanthood/'
    },
    {
      id: 3,
      book_name: "Making Disciples",
      book_cover_image: require("../assets/book_covers/making_disciples_book_cover.jpg"),
      book_image: require("../assets/books/making_disciples.jpg"),
      description:
        "The Great Commission—making disciples—is different from getting people saved. Not everyone saved is a disciple. Jesus didn't send us to preach discipleship; He sent us to make disciples. This book elaborates on the process and strategies of discipleship. It will give you a fresh perspective on the Great Commission, the process of discipleship, who is a disciple, and how to disciple nations. Read and be blessed. Enjoy!",
      price: 13.99,
      url:'https://store.cogda.cm/home/product/making-disciples/'
    },
    {
      id: 4,
      book_name: "Building According to Pattern",
      book_cover_image: require("../assets/book_covers/building_according_to_the_pattern_book_cover_original.jpg"),
      book_image: require("../assets/books/tree_in_the_sand.jpg"),
      description:
        "The Ark was a vision from God. The Tabernacle was a vision from God. As good as the Ark was, it couldn't help the Israelites in the wilderness. And as good as the Tabernacle was, it couldn't help Noah in the raining season. We cannot continue repeating what God told our fathers for their generations. We must go to God for what will serve our generation. Building according to pattern requires us to build what will serve our generation.",
      price: 15.99,
      url: 'https://store.cogda.cm/home/product/building-according-to-pattern/' ,
    },
    {
        id: 5,
        book_name: "Principles of Submission",
        book_cover_image: require("../assets/book_covers/principles_of_submission_book_cover.jpeg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/the-principle-of-submission/'
      },
    {
      id: 6,
      book_name: "Faithful Men",
      book_cover_image: require("../assets/book_covers/faithful_men_book_cover.jpg"),
      book_image: require("../assets/books/faithful_men.jpg"),
      description:
        "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
      price: 11.99,
      url:'https://store.cogda.cm/home/product/faithful-men/'
    },
    {
        id: 7,
        book_name: "The Force of Pasion",
        book_cover_image: require("../assets/book_covers/the_force_of_passion_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/the-force-of-passion/'
      },
      {
        id: 8,
        book_name: "The Beautiful Woman",
        book_cover_image: require("../assets/book_covers/the_beautiful_woman_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/beautiful-woman/'
      },
      {
        id: 9,
        book_name: "Principle of Honor",
        book_cover_image: require("../assets/book_covers/principle_of_honor_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/principle-of-honor/'
      },
      {
        id: 10,
        book_name: "Tree in the Seed",
        book_cover_image: require("../assets/book_covers/tree_in_the_seed_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/tree-in-the-seed/'
      },
      {
        id: 11,
        book_name: "Profitable For Ministry",
        book_cover_image: require("../assets/book_covers/profitable_for_ministry_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/profitable-for-ministry/'
      },
      {
        id: 12,
        book_name: "Resting in the Lord",
        book_cover_image: require("../assets/book_covers/resting_in_the_lord_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/resting-in-god/'
      },
      {
        id: 13,
        book_name: "Acient Mantles",
        book_cover_image: require("../assets/book_covers/ancient_mantles_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/ancient-mantles/'
      },
      {
        id: 14,
        book_name: "Spiritual Sonship",
        book_cover_image: require("../assets/book_covers/spiritual_sonship_book_cover.jpg"),
        book_image: require("../assets/books/faithful_men.jpg"),
        description:
          "The continuity of the legacy of every man depends on the people it is entrusted to. This book will take you on a journey to discover what it takes for your legacy to be written in the sands of time. God bless you as you read to the end.",
        price: 11.99,
        url:'https://store.cogda.cm/home/product/spritual-sonship/'
      },
     

  ];
  
  
  

  
  export default books;
    
  