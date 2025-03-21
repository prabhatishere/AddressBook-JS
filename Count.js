let addressBook = require('./AddContacts');
function countByCityOrState(addressBook, groupBy) {
    let count = addressBook.reduce((acc, contact) => {
        let key = groupBy === "city" ? contact.city : contact.state;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    return count;
}

let countByCity = countByCityOrState(addressBook, "city");
console.log("Count by City:", countByCity);

let countByState = countByCityOrState(addressBook, "state");
console.log("Count by State:", countByState);