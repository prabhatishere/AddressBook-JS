let addressBook = require('./AddContacts');
function viewByCityOrState(addressBook, groupBy) {
    let grouped = addressBook.reduce((acc, contact) => {
        let key = groupBy === "city" ? contact.city : contact.state;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(contact);
        return acc;
    }, {});

    return grouped;
}

let groupedByCity = viewByCityOrState(addressBook, "city");
console.log("Grouped by City:", groupedByCity);

let groupedByState = viewByCityOrState(addressBook, "state");
console.log("Grouped by State:", groupedByState);