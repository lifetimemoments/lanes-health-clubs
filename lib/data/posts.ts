export type Post = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  excerpt: string;
  image: string;
  external?: string;
  body?: string[];
};

export const posts: Post[] = [
  {
    slug: "grab-and-go-meals",
    title: "New Year, New Nutrition: Introducing Grab & Go Meals at Lanes Health Clubs",
    date: "December 12, 2024",
    categories: ["Nutrition", "Cafe"],
    excerpt:
      "As we welcome in a new year, Lanes Health Clubs is excited to unveil our latest offering designed to complement your fitness journey — nutritious grab & go meals, ready when you are.",
    image: "/assets/photos/protein-shake.jpg",
    body: [
      "As we welcome in a new year, Lanes Health Clubs is excited to unveil our latest offering designed to complement your fitness journey: Grab & Go meals, freshly prepared by our café team using local ingredients wherever possible.",
      "We know that nutrition is the missing piece for so many members. You can train brilliantly, but without the right fuel your progress stalls. Our Grab & Go range removes the guesswork — balanced macros, honest ingredients, and meals that actually taste like food you want to eat.",
      "Whether you're dashing back to work after a lunchtime class, fuelling up after a swim, or grabbing dinner on the way home, the fridge by the café is stocked daily. Look out for weekly specials on the board — our chef is always evolving the menu.",
      "Members can pair Grab & Go with a coffee or one of our protein shakes for the perfect post-workout combination. Pop in, grab what you need, and get on with your day — no prep, no washing up, no excuses.",
    ],
  },
  {
    slug: "mindful-movement",
    title: "The Power of Mindful Movement",
    date: "December 3, 2024",
    categories: ["Classes", "Wellness"],
    excerpt:
      "Hello, I'm Jack, a personal trainer and wellness coach here at Lanes. Over the years, I've discovered that fitness is more than just physical exertion — it's about moving with intention.",
    image: "/assets/photos/yoga-group.jpg",
    body: [
      "Hello, I'm Jack, a personal trainer and wellness coach here at Lanes. Over the years, I've discovered that fitness is more than just physical exertion — it's about connection between mind and body.",
      "Mindful movement means paying attention to how your body moves and feels during exercise: your breath, your alignment, the muscles engaging with each rep. It transforms a workout from a chore you endure into a practice you look forward to.",
      "The benefits go beyond the physical. Members who practise mindful movement — whether in Yoga, Pilates, Tai Chi or a slow strength session — consistently report lower stress, better sleep and a healthier relationship with exercise itself.",
      "If you're new to it, start small: try one of our Mind & Body classes, arrive five minutes early, and simply notice your breathing before you begin. Your body — and mind — will thank you.",
    ],
  },
  {
    slug: "supplements-guide",
    title: "Maximise Your Workout Results with Supplements: Creatine, Pre-Workout, and Protein Shakes",
    date: "November 1, 2024",
    categories: ["Gym", "Nutrition"],
    excerpt:
      "At Lanes Health Clubs, we understand that achieving your fitness goals requires dedication, consistency, and sometimes a little extra support — that's where smart supplementation comes in.",
    image: "/assets/photos/protein-shake.jpg",
    body: [
      "At Lanes Health Clubs, we understand that achieving your fitness goals requires dedication, consistency, and sometimes a little extra support. That's where smart supplementation comes in.",
      "Creatine is one of the most researched supplements in sport science — proven to support strength, power output and lean muscle growth. A simple 3–5g daily dose is all you need; timing matters far less than consistency.",
      "Pre-workout formulas can sharpen focus and delay fatigue for tough sessions — but treat them as a tool, not a crutch. And protein shakes remain the simplest way to hit your daily protein target when whole food isn't practical.",
      "Remember: supplements supplement a good diet — they don't replace it. If you'd like guidance on what might suit your goals, chat to any of our Personal Trainers on the gym floor. They'll give you honest, individual advice.",
    ],
  },
  {
    slug: "meditation-benefits",
    title: "The Wellness Benefits of Meditation: A Path to Inner Peace and Holistic Health",
    date: "July 19, 2024",
    categories: ["Wellness"],
    excerpt:
      "In today's world, stress and anxiety have become almost ubiquitous. Amidst the hustle and bustle, meditation offers a path back to calm.",
    image: "/assets/photos/yoga-group.jpg",
    external: "https://laneshealthclubs.co.uk/blog/",
  },
  {
    slug: "lymphatic-drainage",
    title: "Explaining the Health Benefits of Lymphatic Drainage Massage",
    date: "July 17, 2024",
    categories: ["Wellness"],
    excerpt:
      "Lymphatic drainage massage stimulates lymph flow, aiding detoxification, reducing swelling, enhancing immune function and improving skin health.",
    image: "/assets/photos/massage.jpg",
    external: "https://laneshealthclubs.co.uk/blog/",
  },
  {
    slug: "lunch-break-fitness",
    title: "Lunch Break Fitness: Express Workouts with Lanes Health Clubs",
    date: "June 14, 2024",
    categories: ["Gym", "Classes"],
    excerpt:
      "In today's fast-paced world, finding time for fitness can be a real challenge — express workouts make it achievable.",
    image: "/assets/blog/express-workout.png",
    external: "https://laneshealthclubs.co.uk/blog/",
  },
  {
    slug: "workplace-wellness",
    title: "Workplace Wellness: Boosting Employee Health with Lanes Health Clubs",
    date: "June 14, 2024",
    categories: ["Cafe", "Classes", "Gym", "Nutrition", "Wellness"],
    excerpt:
      "Workplace wellness isn't just a trendy buzzword — it's a vital component of a thriving business.",
    image: "/assets/blog/lady-gym.png",
    external: "https://laneshealthclubs.co.uk/blog/",
  },
  {
    slug: "group-pt-team-building",
    title: "The Power of Group PT for Team Building at Lanes Health Clubs",
    date: "June 14, 2024",
    categories: ["Gym"],
    excerpt:
      "Incorporating group personal training sessions is a game-changer for team cohesion and motivation.",
    image: "/assets/blog/pt-sessions.png",
    external: "https://laneshealthclubs.co.uk/blog/",
  },
];

export const blogCategories = [
  "All",
  "Cafe",
  "Classes",
  "Gym",
  "Nutrition",
  "Wellness",
];
