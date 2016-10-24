angular
    .module("app")
    .controller("AppController", AppController);

function AppController(ContactService) {
    var ctrl = this;

    ContactService.getAll().then(function (result) {
        ctrl.contacts = result;
        ctrl.selectedContact = result[0];
    });

    ctrl.selectContact = function (event) {
        ctrl.selectedContact = event.contact
    };
}
