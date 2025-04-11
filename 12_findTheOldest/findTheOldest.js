const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Need to use reduce. Loop through the array
// set initial oldest to the first object in the array
// compare next object to oldest
const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        if (!currentPerson.yearOfDeath) {
            const d = new Date();
            currentPerson.yearOfDeath = d.getFullYear();
        } 

        if (!oldest.yearOfDeath) {
            const d = new Date();
            oldest.yearOfDeath = d.getFullYear();
        } 


        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;



        if (currentPersonAge > oldestAge) {
            oldest = currentPerson;
        }



        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
