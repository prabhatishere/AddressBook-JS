class ContactValidation{
    static validateName(name) {
        let regexName = /^[A-Z][a-z]{2,}$/; // Starts with uppercase, minimum 3 characters
        if (!regexName.test(name)) {
            throw `Invalid Name: ${name}`;
        }
    }

    static validateAddress(address) {
        if (address.length < 4) {
            throw `Invalid Address: ${address}`;
        }
    }

    static validateZip(zip) {
        let regexZip = /^[0-9]{6}$/; // Validate Indian PIN code
        if (!regexZip.test(zip)) {
            throw `Invalid ZIP: ${zip}`;
        }
    }

    static validatePhone(phoneNumber) {
        let regexPhone = /^[0-9]{10}$/; // Validate 10-digit phone number
        if (!regexPhone.test(phoneNumber)) {
            throw `Invalid Phone Number: ${phoneNumber}`;
        }
    }

    static validateEmail(email) {
        let regexEmail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/; // Validates email
        if (!regexEmail.test(email)) {
            throw `Invalid Email: ${email}`;
        }
    }
}

 
try {
    ContactValidation.validateName("Rashi");
    ContactValidation.validateZip("400088");
    console.log("All validations passed!");
} catch (error) {
    console.error(error);
}