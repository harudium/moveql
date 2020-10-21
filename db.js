export let people = [
    {
        id: 1,
        name: "agent a",
        age: 12,
        gender: "male"
    },
    {
        id: 2,
        name: "agent b",
        age: 22,
        gender: "male"
    },
    {
        id: 3,
        name: "agent c",
        age: 24,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

export const deletePerson = (id) => {
    const cleanPeople = people.filter(person => person.id !==id);
    if(people.length > cleanPeople.length){
        people = cleanPeople;
        return true;
    } else
        return false;
}

export const addPerson = (name, age) => {
    const newPerson = {
        id: (people.length +1),
        name,
        age
    };
    people.push(newPerson);
    return newPerson;
}