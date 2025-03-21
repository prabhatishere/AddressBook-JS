let addressBook = require('./AddContacts');
function deleteContactByName(name) {
    addressBook = addressBook.filter(contact => contact.firstName !== name && contact.lastName !== name);
}
deleteContactByName("Riya");
console.log(addressBook);