const users = [
    {
    name: 'nashir',
    age: 16,
    gender: 'male',
    },
    {
    name: 'yoga',
    age: 16,
    gender: 'male',
    },
    {
    name: 'azan',
    age: 16,
    gender: 'female',
    },
];

const nashir = users.find((user) => user.name === 'nashir');

console.log(nashir); //{name: 'nashir', age: 16, gender: 'male'}