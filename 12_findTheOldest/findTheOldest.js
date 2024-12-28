const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    // Safely handle missing properties
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = oldest
      ? (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth
      : 0;

    return personAge > oldestAge ? person : oldest;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
