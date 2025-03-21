let addressBook = require('./AddContacts');
function sortByName(addressBook) {
    return addressBook.sort((a, b) => a.firstName.localeCompare(b.firstName));
}

let sortedByName = sortByName(addressBook);
console.log("Sorted by Name:", sortedByName);