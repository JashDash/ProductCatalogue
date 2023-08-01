import { faker } from '@faker-js/faker';

const createCars = (num = 100) => {
    let cars = new Array();
    for (let i = 0; i < num; i++) {
        cars.push(faker.vehicle.manufacturer());
    }
    return cars;
};

let fakeCarsSuggestions = createCars(100);
let fakeCarsTrending = createCars(100);

let fakeCarsSuggestionsDisplay = fakeCarsSuggestions.slice(0, 5);
let fakeCarsTrendingDisplay = fakeCarsTrending.slice(0, 5);

export {fakeCarsSuggestions, fakeCarsTrending, fakeCarsSuggestionsDisplay, fakeCarsTrendingDisplay}