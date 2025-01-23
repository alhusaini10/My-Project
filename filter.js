const user = [
    {
     nama: 'ayu',
     age: 16,
     gender: 'female',
    },
    {
     nama: 'nisa',
     age: 17,
     gender: 'female',
    },
    {
     nama: 'sayyidah',
     age: 16,
     gender: 'female',
    },
    {
     nama: 'yoga',
     age: 16,
     gender: 'male',
    },
];

const userfemale = user.filter((user) => user.gender === "female");

console.log(userfemale);