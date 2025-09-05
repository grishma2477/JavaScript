const worldData = {
    continents: [
        {
            name: "Asia",
            countries: [
                {
                    name: "Japan",
                    cities: [
                        { name: "Tokyo", population: 14_000_000 },
                        { name: "Osaka", population: 2_700_000 }
                    ]
                },
                {
                    name: "India",
                    cities: [
                        { name: "Delhi", population: 19_000_000 },
                        { name: "Mumbai", population: 20_400_000 }
                    ]
                }
            ]
        },
        {
            name: "Europe",
            countries: [
                {
                    name: "Germany",
                    cities: [
                        { name: "Berlin", landmarks: ["Brandenburg Gate", "Berlin Wall"] },
                        { name: "Munich", landmarks: ["Marienplatz", "Neuschwanstein Castle"] }
                    ]
                },
                {
                    name: "France",
                    cities: [
                        { name: "Paris", landmarks: ["Eiffel Tower", "Louvre Museum"] },
                        { name: "Lyon", landmarks: ["Basilica of Notre-Dame", "Parc de la Tête d'Or"] }
                    ]
                }
            ]
        }
    ]
};
// Tasks:
// Print the population of Mumbai.
const {continents} = worldData;
// const a = continents[0];
// console.log(a["countries"][1].cities[1].population);
// Print the second landmark of Berlin.
// Print the name of the second city in France.
// const {continents} = worldData;
const {cities} = continents[1].countries

// Print the first country in Europe.
// Print the first landmark in Lyon.
console.log(continents[1]["countries"][1].cities[1].landmarks[0]);
