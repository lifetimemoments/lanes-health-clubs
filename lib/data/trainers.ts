export type Trainer = {
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  specialities: string[];
  email: string;
  image?: string;
};

export const trainers: Trainer[] = [
  {
    name: "Rob Wood",
    role: "Senior Personal Trainer",
    bio: "With 12 years of experience as a Personal Trainer, I bring a wealth of knowledge to assist you. I'm dedicated to making positive health and fitness changes in the lives of Lanes' members. Beyond 1-2-1 personal training, I offer classes, Group PT, and the Movement is Medicine membership. I've enhanced my skills to support members with medical conditions such as high blood pressure, high cholesterol, arthritis, COPD, lower back pain, anxiety and depression.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 2 NCFE Nutrition & Health",
      "Level 3 Personal Trainer",
      "Level 3 Sports & Exercise Science National Diploma",
      "Level 3 Exercise GP Referral",
      "Level 4 Lower Back Pain Specialist",
    ],
    specialities: [
      "Medical condition related fitness",
      "Strength & growth training",
      "Technical exercise development",
      "Injury prevention & management",
    ],
    email: "robwood@laneshealthclubs.co.uk",
  },
  {
    name: "Scott Hudson",
    role: "Personal Trainer & Nutritionist",
    bio: "Getting fit shouldn't mean living on chicken and broccoli. When I began my own journey, I fell into the trap of confusing diets and guesswork until a great Personal Trainer showed me a better way. Now, as a Level 4 Strength Coach and Level 5 Nutritionist, my goal is to take the guesswork out of fitness for you — building sustainable, healthy habits without giving up the foods you love.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
      "Level 4 Strength and Conditioning",
      "Level 4 RSPH Nutrition",
      "Level 5 Nutrient Metabolism",
      "Level 5 Nutrition and Immunity",
    ],
    specialities: [
      "Weight training",
      "Fat loss and body transformation",
      "Coaching and motivation",
      "12-week nutrition course",
    ],
    email: "scott.hudson@laneshealthclubs.co.uk",
    image: "/assets/photos/img4550.jpg",
  },
  {
    name: "Claire Endersby",
    role: "Personal Trainer",
    bio: "I've been a Personal Trainer since 2014 and I hold the belief that everyone deserves good health, well-being, and longevity. My mission is to inspire a shift in mindset when it comes to exercise and nutrition, motivating individuals to embark on their own fitness and well-being journey.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
      "Level 3 Diploma in Sports Massage",
    ],
    specialities: ["Sports therapy", "Strength & conditioning", "Wellbeing coaching"],
    email: "claireendersby@laneshealthclubs.co.uk",
  },
  {
    name: "Hannah Dyckes",
    role: "Personal Trainer",
    bio: "Since starting ballet at age three, my passion for staying active has grown. After fifteen years of dancing and completing my Level 3 dance diploma, I became a Personal Trainer. I believe there's something for everyone in the gym — exercising should be enjoyable, not a chore. Starting the gym can be daunting, so I'm here to guide you and build your confidence.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
      "Level 3 Sports Massage Therapist",
    ],
    specialities: ["Strength training", "Muscle growth", "Building gym confidence"],
    email: "hannahdyckes@laneshealthclubs.co.uk",
  },
  {
    name: "Charlie Cammell",
    role: "Personal Trainer",
    bio: "I'm a passionate Personal Trainer with a background in kickboxing, strength training, and sport psychology. With a degree in Sport & Exercise Science from the University of Brighton, I bring a science-backed, holistic approach to training, blending physical conditioning with mental resilience.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
      "BSc (Hons) Sport & Exercise Science, University of Brighton",
    ],
    specialities: [
      "Strength & conditioning",
      "Rehabilitation & injury prevention",
      "Sport psychology & mental resilience",
    ],
    email: "charliecammell@laneshealthclubs.co.uk",
    image: "/assets/team/charlie.jpeg",
  },
  {
    name: "Kez Betsworth",
    role: "Personal Trainer",
    bio: "I've been dedicated to fitness since the age of 16 and have spent nearly 14 years as a Personal Trainer exploring every corner of the training world. After recovering from a back injury, my focus shifted toward functional movement, callisthenics, mobility, and rehabilitation. My mission is to help people move better, feel stronger, and build a lasting foundation for long-term well-being.",
    qualifications: ["Level 2 Fitness Instructor", "Level 3 Personal Trainer"],
    specialities: [
      "Functional movement & mobility",
      "Callisthenics & bodyweight training",
      "Injury recovery & rehabilitation",
      "Strength & flexibility training",
      "Long-term health & longevity coaching",
    ],
    email: "kezbetsworth@laneshealthclubs.co.uk",
    image: "/assets/team/kez.jpeg",
  },
  {
    name: "Caroline Hodgson",
    role: "Personal Trainer",
    bio: "My journey into health and fitness started with a love for football and rugby, playing both at a high level before studying Sport, Health and Exercise Sciences. Over the past 8 years, I've worked as a Personal Trainer and Group Exercise Instructor. Inspired by the outdoors, I've taken on marathons, triathlons, and other endurance events — specialising in sport-specific training with a strong focus on safe, effective technique.",
    qualifications: [
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
      "Level 4 Strength & Conditioning",
      "BSc (Hons) Sport, Health & Exercise Sciences, Brunel University London",
    ],
    specialities: [
      "Sports & activity focused training (running, golf, tennis)",
      "Injuries & post-op rehabilitation",
      "Injury prevention",
    ],
    email: "carolinehodgson@laneshealthclubs.co.uk",
  },
  {
    name: "Kiko Tanev",
    role: "Personal Trainer",
    bio: "From an early age I have dedicated my life to sport, starting by playing football competitively — which led me to pursue my love for fitness and well-being. I believe exercise is one of the most powerful tools for improving health, confidence, and overall well-being. Health, wellness, and maximising functional mobility are at the heart of what I do.",
    qualifications: ["Level 2 Gym Instructor", "Level 3 Personal Trainer"],
    specialities: ["Sports focused training", "Functional mobility", "Body awareness"],
    email: "kikotanev@laneshealthclubs.co.uk",
    image: "/assets/photos/img5668.png",
  },
  {
    name: "Josh Till",
    role: "Personal Trainer",
    bio: "My passion for sport and fitness started as a child playing football, developing into a commitment to physical activity and performance. I studied Sports and Exercise Science for 3 years at the University of Portsmouth — strength and conditioning, nutrition, medicine and rehabilitation — allowing me to safely and effectively work with individuals of different ages, abilities, and health conditions.",
    qualifications: [
      "BSc (Hons) Sport and Exercise Science, University of Portsmouth",
      "Level 2 Gym Instructor",
      "Level 3 Personal Trainer",
    ],
    specialities: [
      "Strength training",
      "Muscle growth",
      "Injury prevention",
      "Body fat loss",
    ],
    email: "josh.till@laneshealthclubs.co.uk",
    image: "/assets/photos/img4574.jpg",
  },
];
