const addressBook = require('./AddContacts');
function editContactByName(name, updatedDetails) {
    let contact = addressBook.find(contact => contact.firstName === name || contact.lastName === name);
    if (contact) {
        Object.assign(contact, updatedDetails); // Update contact properties
    } else {
        console.log("Contact not found!");
    }
}

editContactByName("Riya", { city: "Mathura", state: "UP" });
console.log(addressBook);