const trackerMetadata = {
    game: "Fortnite",
    chapter: 7,
    season: 3,
    seasonTitle: "Chapter 7: Season 3",
    storageKey: "fortniteSpriteData_ch7s3",
    lastUpdated: "2026-08-06",
    nextUpdate: "2026-08-14",
    seasons: [
        { name: "Chapter 7: Season 3", url: "index.html" }
    ],
    variants: ["Gold", "Gummy", "Galaxy", "Holofoil", "Cube", "Quack", "Gem"]
};

// Rarity values represent spawn percentages.
const spriteData = [
    { 
        family: "Unique", 
        sprites: [
            { id: "vini_jr", name: "Vini Jr.", rarityValue: 1.00, owned: false, mastered: false },
            { id: "burnt_peanut", name: "Burnt Peanut", rarityValue: 1.01, owned: false, mastered: false },
            { id: "pollo", name: "Pollo", rarityValue: 0.00, owned: false, mastered: false },
            { id: "john_wick", name: "John Wick", rarityValue: 0.00, owned: false, mastered: false },
            { id: "ironmouse", name: "Ironmouse", rarityValue: 0.00, owned: false, mastered: false }
        ] 
    },
    { 
        family: "Batman", 
        sprites: [
            { id: "batman", name: "Batman", rarityValue: 1.44, owned: false, mastered: false },
            { id: "gold_batman", name: "Gold Batman", rarityValue: 0.17, owned: false, mastered: false },
            { id: "gummy_batman", name: "Gummy Batman", rarityValue: 0.10, owned: false, mastered: false },
            { id: "galaxy_batman", name: "Galaxy Batman", rarityValue: 0.07, owned: false, mastered: false },
            { id: "holofoil_batman", name: "Holofoil Batman", rarityValue: 0.34, owned: false, mastered: false },
            { id: "cube_batman", name: "Cube Batman", rarityValue: 0.02, owned: false, mastered: false }
        ] 
    },
    { 
        family: "Water", 
        sprites: [
            { id: "water", name: "Water", rarityValue: 13.92, owned: false, mastered: false },
            { id: "gold_water", name: "Gold Water", rarityValue: 0.75, owned: false, mastered: false },
            { id: "gummy_water", name: "Gummy Water", rarityValue: 0.62, owned: false, mastered: false },
            { id: "galaxy_water", name: "Galaxy Water", rarityValue: 0.50, owned: false, mastered: false },
            { id: "holofoil_water", name: "Holofoil Water", rarityValue: 0.00, owned: false, mastered: false },
            { id: "quack_water", name: "Quack Water", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_water", name: "Gem Water", rarityValue: 0.00, owned: false, mastered: false }
        ] 
    },
    { 
        family: "Earth", 
        sprites: [
            { id: "earth", name: "Earth", rarityValue: 13.92, owned: false, mastered: false },
            { id: "gold_earth", name: "Gold Earth", rarityValue: 0.75, owned: false, mastered: false },
            { id: "gummy_earth", name: "Gummy Earth", rarityValue: 0.62, owned: false, mastered: false },
            { id: "galaxy_earth", name: "Galaxy Earth", rarityValue: 0.50, owned: false, mastered: false },
            { id: "cube_earth", name: "Cube Earth", rarityValue: 0.05, owned: false, mastered: false },
            { id: "quack_earth", name: "Quack Earth", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_earth", name: "Gem Earth", rarityValue: 0.00, owned: false, mastered: false }
        ] 
    },
    {
        family: "Fire",
        sprites: [
            { id: "fire", name: "Fire", rarityValue: 12.48, owned: false, mastered: false },
            { id: "gold_fire", name: "Gold Fire", rarityValue: 0.75, owned: false, mastered: false },
            { id: "gummy_fire", name: "Gummy Fire", rarityValue: 0.62, owned: false, mastered: false },
            { id: "galaxy_fire", name: "Galaxy Fire", rarityValue: 0.50, owned: false, mastered: false },
            { id: "holofoil_fire", name: "Holofoil Fire", rarityValue: 0.25, owned: false, mastered: false },
            { id: "cube_fire", name: "Cube Fire", rarityValue: 0.05, owned: false, mastered: false },
            { id: "quack_fire", name: "Quack Fire", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_fire", name: "Gem Fire", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Duck",
        sprites: [
            { id: "duck", name: "Duck", rarityValue: 5.22, owned: false, mastered: false },
            { id: "gold_duck", name: "Gold Duck", rarityValue: 0.20, owned: false, mastered: false },
            { id: "gummy_duck", name: "Gummy Duck", rarityValue: 0.15, owned: false, mastered: false },
            { id: "galaxy_duck", name: "Galaxy Duck", rarityValue: 0.10, owned: false, mastered: false },
            { id: "gem_duck", name: "Gem Duck", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Ghost",
        sprites: [
            { id: "ghost", name: "Ghost", rarityValue: 5.25, owned: false, mastered: false },
            { id: "gold_ghost", name: "Gold Ghost", rarityValue: 0.62, owned: false, mastered: false },
            { id: "gummy_ghost", name: "Gummy Ghost", rarityValue: 0.37, owned: false, mastered: false },
            { id: "galaxy_ghost", name: "Galaxy Ghost", rarityValue: 0.25, owned: false, mastered: false },
            { id: "holofoil_ghost", name: "Holofoil Ghost", rarityValue: 1.23, owned: false, mastered: false }
        ]
    },
    {
        family: "Demon",
        sprites: [
            { id: "demon", name: "Demon", rarityValue: 5.76, owned: false, mastered: false },
            { id: "gold_demon", name: "Gold Demon", rarityValue: 0.20, owned: false, mastered: false },
            { id: "gummy_demon", name: "Gummy Demon", rarityValue: 0.15, owned: false, mastered: false },
            { id: "galaxy_demon", name: "Galaxy Demon", rarityValue: 0.10, owned: false, mastered: false },
            { id: "gem_demon", name: "Gem Demon", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "King",
        sprites: [
            { id: "king", name: "King", rarityValue: 5.22, owned: false, mastered: false },
            { id: "gold_king", name: "Gold King", rarityValue: 0.20, owned: false, mastered: false },
            { id: "gummy_king", name: "Gummy King", rarityValue: 0.15, owned: false, mastered: false },
            { id: "galaxy_king", name: "Galaxy King", rarityValue: 0.10, owned: false, mastered: false },
            { id: "holofoil_king", name: "Holofoil King", rarityValue: 0.06, owned: false, mastered: false }
        ]
    },
    {
        family: "Aura",
        sprites: [
            { id: "aura", name: "Aura", rarityValue: 5.74, owned: false, mastered: false },
            { id: "gold_aura", name: "Gold Aura", rarityValue: 0.07, owned: false, mastered: false },
            { id: "gummy_aura", name: "Gummy Aura", rarityValue: 0.04, owned: false, mastered: false },
            { id: "galaxy_aura", name: "Galaxy Aura", rarityValue: 0.02, owned: false, mastered: false },
            { id: "gem_aura", name: "Gem Aura", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Striker",
        sprites: [
            { id: "striker", name: "Striker", rarityValue: 5.74, owned: false, mastered: false },
            { id: "gold_striker", name: "Gold Striker", rarityValue: 0.07, owned: false, mastered: false },
            { id: "gummy_striker", name: "Gummy Striker", rarityValue: 0.04, owned: false, mastered: false },
            { id: "galaxy_striker", name: "Galaxy Striker", rarityValue: 0.02, owned: false, mastered: false },
            { id: "holofoil_striker", name: "Holofoil Striker", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Punk",
        sprites: [
            { id: "punk", name: "Punk", rarityValue: 2.43, owned: false, mastered: false },
            { id: "gold_punk", name: "Gold Punk", rarityValue: 0.10, owned: false, mastered: false },
            { id: "gummy_punk", name: "Gummy Punk", rarityValue: 0.07, owned: false, mastered: false },
            { id: "galaxy_punk", name: "Galaxy Punk", rarityValue: 0.04, owned: false, mastered: false },
            { id: "cube_punk", name: "Cube Punk", rarityValue: 0.02, owned: false, mastered: false }
        ]
    },
    {
        family: "Dream",
        sprites: [
            { id: "dream", name: "Dream", rarityValue: 2.43, owned: false, mastered: false },
            { id: "gold_dream", name: "Gold Dream", rarityValue: 0.10, owned: false, mastered: false },
            { id: "gummy_dream", name: "Gummy Dream", rarityValue: 0.07, owned: false, mastered: false },
            { id: "galaxy_dream", name: "Galaxy Dream", rarityValue: 0.04, owned: false, mastered: false },
            { id: "cube_dream", name: "Cube Dream", rarityValue: 0.02, owned: false, mastered: false }
        ]
    },
    {
        family: "Fishy",
        sprites: [
            { id: "fishy", name: "Fishy", rarityValue: 13.79, owned: false, mastered: false },
            { id: "gold_fishy", name: "Gold Fishy", rarityValue: 0.75, owned: false, mastered: false },
            { id: "gummy_fishy", name: "Gummy Fishy", rarityValue: 0.62, owned: false, mastered: false },
            { id: "galaxy_fishy", name: "Galaxy Fishy", rarityValue: 0.50, owned: false, mastered: false },
            { id: "cube_fishy", name: "Cube Fishy", rarityValue: 0.05, owned: false, mastered: false }
        ]
    },
    {
        family: "Air",
        sprites: [
            { id: "air", name: "Air", rarityValue: 13.92, owned: false, mastered: false },
            { id: "gold_air", name: "Gold Air", rarityValue: 0.75, owned: false, mastered: false },
            { id: "gummy_air", name: "Gummy Air", rarityValue: 0.62, owned: false, mastered: false },
            { id: "galaxy_air", name: "Galaxy Air", rarityValue: 0.50, owned: false, mastered: false },
            { id: "holofoil_air", name: "Holofoil Air", rarityValue: 0.53, owned: false, mastered: false }
        ]
    },
    {
        family: "Boss",
        sprites: [
            { id: "boss", name: "Boss", rarityValue: 2.63, owned: false, mastered: false },
            { id: "gold_boss", name: "Gold Boss", rarityValue: 0.10, owned: false, mastered: false },
            { id: "gummy_boss", name: "Gummy Boss", rarityValue: 0.07, owned: false, mastered: false },
            { id: "galaxy_boss", name: "Galaxy Boss", rarityValue: 0.04, owned: false, mastered: false },
            { id: "cube_boss", name: "Cube Boss", rarityValue: 0.02, owned: false, mastered: false }
        ]
    },
    {
        family: "Grim",
        sprites: [
            { id: "grim", name: "Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gold_grim", name: "Gold Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gummy_grim", name: "Gummy Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "galaxy_grim", name: "Galaxy Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "cube_grim", name: "Cube Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_grim", name: "Gem Grim", rarityValue: 0.00, owned: false, mastered: false },
            { id: "holofoil_grim", name: "Holofoil Grim", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Seven",
        sprites: [
            { id: "seven", name: "Seven", rarityValue: 6.98, owned: false, mastered: false },
            { id: "gold_seven", name: "Gold Seven", rarityValue: 0.20, owned: false, mastered: false },
            { id: "gummy_seven", name: "Gummy Seven", rarityValue: 0.15, owned: false, mastered: false },
            { id: "galaxy_seven", name: "Galaxy Seven", rarityValue: 0.10, owned: false, mastered: false },
            { id: "holofoil_seven", name: "Holofoil Seven", rarityValue: 0.85, owned: false, mastered: false }
        ]
    },
    {
        family: "Zero Point",
        sprites: [
            { id: "zero_point", name: "Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gold_zero_point", name: "Gold Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gummy_zero_point", name: "Gummy Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "galaxy_zero_point", name: "Galaxy Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "holofoil_zero_point", name: "Holofoil Zero Point", rarityValue: 0.00028, owned: false, mastered: false },
            { id: "cube_zero_point", name: "Cube Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "quack_zero_point", name: "Quack Zero Point", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_zero_point", name: "Gem Zero Point", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Llama",
        sprites: [
            { id: "lootin_llama", name: "Lootin' Llama", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gummy_lootin_llama", name: "Gummy Lootin' Llama", rarityValue: 0.00, owned: false, mastered: false },
            { id: "galaxy_lootin_llama", name: "Galaxy Lootin' Llama", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gem_lootin_llama", name: "Gem Lootin' Llama", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gold_lootin_llama", name: "Gold Lootin' Llama", rarityValue: 0.00, owned: false, mastered: false }
        ]
    },
    {
        family: "Peely",
        sprites: [
            { id: "peeky_peely", name: "Peeky Peely", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gummy_peeky_peely", name: "Gummy Peeky Peely", rarityValue: 0.00, owned: false, mastered: false },
            { id: "galaxy_peeky_peely", name: "Galaxy Peeky Peely", rarityValue: 0.00, owned: false, mastered: false },
            { id: "gold_peeky_peely", name: "Gold Peeky Peely", rarityValue: 0.00, owned: false, mastered: false },
            { id: "holofoil_peeky_peely", name: "Holofoil Peeky Peely", rarityValue: 0.00, owned: false, mastered: false }
        ]
    }
];