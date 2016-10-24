angular
    .module("components.contact")
    .filter("fullName", FullNameFilter);

function FullNameFilter() {
    return function(contact) {
        var firstName = (contact.FirstName || "").trim();
        var lastName = (contact.LastName || "").trim();
        return (firstName + " " + lastName).trim();
    }
}