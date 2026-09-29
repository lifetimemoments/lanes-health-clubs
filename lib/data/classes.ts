export type GymClass = {
  name: string;
  description: string;
  category: "High Intensity" | "Mind & Body" | "Cardio & Dance" | "Strength & Power" | "Aqua";
};

export const classCategories = [
  "All",
  "High Intensity",
  "Mind & Body",
  "Cardio & Dance",
  "Strength & Power",
  "Aqua",
] as const;

export const classes: GymClass[] = [
  // ——— High Intensity ———
  { name: "Les Mills Cardio Mix", category: "High Intensity", description: "Mixing Les Mills Body Combat and Body Attack for a full-body cardio workout." },
  { name: "BootCamp", category: "High Intensity", description: "If you want to work really hard this is the class for you — pushed all the way, working all areas of your body with no excuses." },
  { name: "Les Mills Body Combat™", category: "High Intensity", description: "A fiercely energetic programme inspired by karate, boxing, Taekwondo, capoeira and kickboxing — strike, punch and kick your way to superior cardio fitness." },
  { name: "Les Mills Grit", category: "High Intensity", description: "High-intensity plyometric workout — a cardio blast to set you up for the day." },
  { name: "HIIT", category: "High Intensity", description: "High Intensity Interval Training at 100% effort — quick, intense bursts followed by short recovery. 30 minutes is all you need." },
  { name: "Totally Shredded", category: "High Intensity", description: "Combat meets HIIT — reduces body composition, shreds inches, with strength, cardio and metabolic benefits all in one." },
  { name: "Les Mills Core", category: "High Intensity", description: "An intense 30-minute core workout for functional fitness — tightens and tones abs, glutes, back and obliques." },
  // ——— Mind & Body ———
  { name: "Balance", category: "Mind & Body", description: "PT-led gym-floor class focused on balance and stability — improving core strength and correcting postural imbalances." },
  { name: "Pilates", category: "Mind & Body", description: "Correct body alignment and lateral breathing to improve flexibility, core strength, endurance, co-ordination and balance." },
  { name: "Pilates Flow", category: "Mind & Body", description: "Pilates moves combined into a more continuous movement class." },
  { name: "Les Mills Pilates", category: "Mind & Body", description: "Traditional Pilates re-imagined — strength, breathwork and controlled movement with unique music and beautiful choreography." },
  { name: "Meditation", category: "Mind & Body", description: "Slow down and be still — breath and mind exercises to leave you calmer, clearer and more peaceful from within." },
  { name: "Stretch", category: "Mind & Body", description: "Improve flexibility and mobility to aid recovery, reduce stress, prevent injury and enhance overall wellbeing." },
  { name: "Tai Chi", category: "Mind & Body", description: "A traditional practice circulating and rebalancing energy through gentle flowing movements — excellent for balance." },
  { name: "Les Mills Body Balance™", category: "Mind & Body", description: "Carefully sequenced poses to beautiful music — builds flexibility and strength while reducing stress." },
  { name: "Body Burn", category: "Mind & Body", description: "PT-led class using movements that burn deep into the muscles — floorwork and weight work to push your comfort zone." },
  { name: "Barre & Burn", category: "Mind & Body", description: "Hip flexors, legs, glutes and core — chair-supported first half, leg strengthening second half. No joint strain." },
  { name: "Qi Gong", category: "Mind & Body", description: "Slow flowing movement with gentle breathing to reduce stress — standing or seated, suitable for all ages and abilities." },
  { name: "Yoga", category: "Mind & Body", description: "Strength, flexibility and breathing for physical and mental wellbeing — Hatha, Flow and Iyengar sessions available." },
  { name: "Beginners Yoga", category: "Mind & Body", description: "A fantastic introduction to yoga — strength, flexibility and breathing to boost physical and mental wellbeing." },
  { name: "Yogalates", category: "Mind & Body", description: "Inspired by yoga and Pilates — a comprehensive exercise system harnessing the benefits of both practices." },
  { name: "Les Mills Shapes", category: "Mind & Body", description: "Pilates, barre and power yoga to modern playful beats — small, controlled movements that sculpt and strengthen." },
  { name: "Yoga Chair", category: "Mind & Body", description: "Gentle chair-supported yoga for all ages and abilities — improves flexibility, strength, balance and confidence." },
  { name: "Yin Yoga", category: "Mind & Body", description: "A slower-paced yoga holding postures 1–5 minutes to target connective tissues — the perfect complement to active practice." },
  // ——— Cardio & Dance ———
  { name: "Spin", category: "Cardio & Dance", description: "Endurance-based cycling with speed work and resistance — instructor-led, at your own pace." },
  { name: "Zumba", category: "Cardio & Dance", description: "Feels more like a night out than a workout — rhythmic Latin music meets high-intensity cardio dance." },
  { name: "Run Club", category: "Cardio & Dance", description: "A friendly group running 5k outdoors around Angmering/Rustington at your own speed, in all weathers." },
  { name: "Legs, Bums & Tums", category: "Cardio & Dance", description: "Burn fat, tone up and shape thighs, buttocks and abdominals — standing and floor-based exercises." },
  { name: "Les Mills Sh'Bam", category: "Cardio & Dance", description: "A fun-loving, insanely addictive dance workout — high energy in an ego-free zone." },
  { name: "Dance FIT", category: "Cardio & Dance", description: "A mix of dance and fitness to burn calories and tone. Dance, achieve, inspire, sweat." },
  { name: "Spin Circuits", category: "Cardio & Dance", description: "45 minutes combining 30 minutes of group cycle with 15 minutes of circuits to tone the whole body." },
  { name: "Circuits", category: "Cardio & Dance", description: "Functional and strength training circuit session — building strength, stamina and functional fitness." },
  { name: "Lanes Mix", category: "Cardio & Dance", description: "A mix of every class we run — body conditioning to dance. Work every muscle, leave feeling good." },
  { name: "Dance Through the Decades", category: "Cardio & Dance", description: "Dance workout through the decades — from 50s rock & roll to modern-day pop." },
  { name: "Dance Mix", category: "Cardio & Dance", description: "Mixing Les Mills Body Combat and Body Attack for a full-body cardio workout." },
  { name: "HIIT Step & Tone", category: "Cardio & Dance", description: "High-intensity class using a step and mixed cardio moves — with the option to work off the step too." },
  { name: "Step & Conditioning", category: "Cardio & Dance", description: "High/low intensity step aerobics — tone and strengthen with step, hand weights and body weight." },
  { name: "Quick Class", category: "Cardio & Dance", description: "A gym-based class using gym equipment — a quick blast to the cardio system and the muscles." },
  { name: "Latin Dance", category: "Cardio & Dance", description: "Fun movement class using Latin-inspired dance moves." },
  { name: "Smash Aerobics", category: "Cardio & Dance", description: "High/low impact retro aerobics — 45 minutes of continuous movement to retro tunes. Leg warmers optional." },
  { name: "Step Aerobics", category: "Cardio & Dance", description: "High/low intensity aerobic workout on the step with small hand weights and body weight." },
  // ——— Strength & Power ———
  { name: "Les Mills Body Pump™", category: "Strength & Power", description: "The original barbell workout — light-to-moderate weights, high reps, lean and toned." },
  { name: "Body Pump™ Heavy", category: "Strength & Power", description: "Traditional lifting techniques to challenge strength, build lean muscle and deliver measurable gains." },
  { name: "Fitness Pilates", category: "Strength & Power", description: "Identifies postural imbalances and increases muscular balance — more challenging than standard Pilates." },
  { name: "Freestyle Weights", category: "Strength & Power", description: "PT-led full-body barbell, dumbbell and plate workout — burns calories while shaping and toning." },
  { name: "Use It or Lose It", category: "Strength & Power", description: "For members unable to get to the floor — easy, fun moves improving balance, strength, mobility and brain function." },
  { name: "T'ai Chair", category: "Strength & Power", description: "Designed to increase muscle strength and range of movement for daily-living activities." },
  { name: "Conditioning", category: "Strength & Power", description: "Light weights, resistance bands and body weight to strengthen and tone the entire body." },
  { name: "HIIT Strength", category: "Strength & Power", description: "Full-body strength using timed lifting intervals — build muscle and support proper technique." },
  { name: "Strength Development", category: "Strength & Power", description: "Les Mills programme building strength in phases — slow, controlled, functional movements with dynamic core work." },
  { name: "Les Mills Thrive", category: "Strength & Power", description: "Low-impact strength workout for life — lower body, core, flexibility and balance." },
  { name: "Stability", category: "Strength & Power", description: "Full-body tone and strength training — strengthening the core and trunk." },
  { name: "Resistance", category: "Strength & Power", description: "Full-body resistance-band workout to tone, condition and grow muscle strength without raising your heart rate." },
  { name: "Abs & Core", category: "Strength & Power", description: "30 minutes of whole-core exercises — a great standalone class or add-on to any cardio workout." },
  { name: "Total Tone", category: "Strength & Power", description: "A challenging mix of cardio, toning and core exercises to improve fitness and tone muscles." },
  { name: "Resistance: Feel the Beat", category: "Strength & Power", description: "Music-fuelled conditioning with bands, sliders and hand weights — sculpt, strengthen, energise." },
  // ——— Aqua ———
  { name: "Swim Fit", category: "Aqua", description: "Swimming training and coaching — lane swims and drills. Requires 4 continuous lengths of front crawl." },
  { name: "Aqua Fit", category: "Aqua", description: "Excellent for joint problems or those new to exercise — work at your own level with light equipment." },
  { name: "Aqua Aerobics", category: "Aqua", description: "45-minute continuous high-energy workout using resistance and cardio — full body, all fitness levels." },
];
