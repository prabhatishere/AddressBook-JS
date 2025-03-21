const Contact = require('./AddressBookContact');
let addressBook = [];
function addContactToAddressBook(contact) {
    addressBook.push(contact);
}

let contact1 = new Contact("Gogo", "Bansal", "123 Main St", "New York", "NY", "10001", "1234567890", "gogobansal852@example.com");
addContactToAddressBook(contact1);
console.log(addressBook);