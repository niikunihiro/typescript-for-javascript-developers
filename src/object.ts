export {};

let profile1: object = { name: "Ham" };
profile1 = { birthYear: 1978 };

console.log(profile1);

let profile2: { name: string } = { name: "Ham" };
// profile2 = { birthYear: 1978 };
profile2 = { name: "Nimo" };

console.log(profile2);
