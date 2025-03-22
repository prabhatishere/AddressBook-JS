let addressBook = require('./AddContacts');
function sortByAttribute(addressBook, attribute) {
    return addressBook.sort((a, b) => {
        if (a[attribute] < b[attribute]) return -1;
        if (a[attribute] > b[attribute]) return 1;
        return 0;
    });
}


let sortedByCity = sortByAttribute(addressBook, "city");
console.log("Sorted by City:", sortedByCity);

let sortedByState = sortByAttribute(addressBook, "state");
console.log("Sorted by State:", sortedByState);

let sortedByZip = sortByAttribute(addressBook, "zip");
console.log("Sorted by Zip:", sortedByZip);