import { faker } from '@faker-js/faker';

let manufacturerArray: any = [];
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




const createItem = () => {
<<<<<<< HEAD
return {
    manufacturer: faker.vehicle.manufacturer(),
    price: Math.floor(Math.random() * 100 + 1),
    rating: Math.floor(Math.random() * 5) + 1,
    numrating:  Math.floor(Math.random() * (1000 - 100) ) + 100,
=======
    const brand = faker.vehicle.manufacturer();
    if (manufacturerArray.indexOf(brand) === -1) {
        manufacturerArray.push(brand);
    }
    return {
        manufacturer: brand,
        price: Math.floor(Math.random() * 100 + 1),
        rating: Math.floor(Math.random() * 5) + 1,
        numrating: Math.floor(Math.random() * (1000 - 100)) + 100,
>>>>>>> 250e85f6342b484f7c2e9fc5c2ca8ba2d551f702
    };
};

const createCarItems = (num = 100) => {
    let items = new Array();
    for (let i = 0; i < num; i++) {
        items.push(createItem());
    }
    return items;
};

let fakeCarItems = createCarItems(100);
let fakeCarItemsDisplay = fakeCarItems.slice(0, 10);
<<<<<<< HEAD

export {fakeCarsSuggestions, fakeCarsTrending, fakeCarsSuggestionsDisplay, fakeCarsTrendingDisplay, fakeCarItems, fakeCarItemsDisplay}
=======
manufacturerArray = manufacturerArray.slice(0, 10);

export { fakeCarsSuggestions, fakeCarsTrending, fakeCarsSuggestionsDisplay, fakeCarsTrendingDisplay, fakeCarItems, fakeCarItemsDisplay, manufacturerArray }
>>>>>>> 250e85f6342b484f7c2e9fc5c2ca8ba2d551f702
