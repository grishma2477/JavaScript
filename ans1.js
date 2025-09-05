// Object with Nested Arrays and Objects

const company = {
    name: "TechCorp",
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "Alice", skills: ["JavaScript", "React", "Node.js"] },
                { name: "Bob", skills: ["Python", "Django", "Machine Learning"] }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Charlie", skills: ["SEO", "Content Writing", "Analytics"] },
                { name: "David", skills: ["Social Media", "Branding", "Copywriting"] }
            ]
        }
    ],
    headquarters: {
        location: "New York",
        branches: [
            { city: "Los Angeles", employees: 50 },
            { city: "San Francisco", employees: 30 }
        ]
    }
};

//? Tasks:
// Print Bob’s second skill.

// Print Charlie’s first skill.

// Get the total number of employees in the San Francisco branch.


// Print the name of the second department.
