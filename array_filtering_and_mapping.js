const persons = [
  {
    name: "Abul",
    age: 25,
    gender: "MALE",
  },
  {
    name: "Babul",
    age: 26,
    gender: "MALE",
  },
  {
    name: "Rokeya",
    age: 27,
    gender: "FEMALE",
  },
  {
    name: "Hablu",
    age: 28,
    gender: "MALE",
  },
  {
    name: "Rafia",
    age: 29,
    gender: "FEMALE",
  },
];

const printNames = (persons) => {
  const excludeFemales = persons.filter((person) => person.gender !== "FEMALE");

  const arrayOfRemainingPersonsName = excludeFemales.map(
    (person) => person.name
  );

  return arrayOfRemainingPersonsName;
};

const names = printNames(persons);

console.log(names);
