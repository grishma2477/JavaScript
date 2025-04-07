// 3. Array of Objects with Nested Structures
const university = [
    {
        faculty: "Science",
        subjects: [
            { name: "Physics", professor: { name: "Dr. Smith", age: 45 } },
            { name: "Chemistry", professor: { name: "Dr. Johnson", age: 50 } }
        ]
    },
    {
        faculty: "Arts",
        subjects: [
            { name: "History", professor: { name: "Dr. Brown", age: 55 } },
            { name: "Philosophy", professor: { name: "Dr. White", age: 40 } }
        ]
    }
];
// Tasks:
// Print the name of the professor teaching Chemistry.
const a = university[0];
console.log(a.subjects[1].professor["name"]);



// Print the faculty where "History" is taught.
// Print the age of the professor teaching Philosophy.

