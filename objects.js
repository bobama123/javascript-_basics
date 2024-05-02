const person = {
    name: 'Maxine',
    age: 32,
    address: 'London, E1 123'
};

  // both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);


const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,

    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
        return 100;
    }
};

bankAccount.getBalance();


const person2 = {
    name: 'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person2.address.city)
console.log(person2['hobbies'][1])


const cohort = {
    name: 'May2022',
    id: 1234,
    studentNames: ['bob', 'john', 'james']
};

const studentsInCohorts = (cohort) => {
    return `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`
}

console.log(studentsInCohorts(cohort))