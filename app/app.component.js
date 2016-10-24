angular
    .module("app")
    .component("app", {
        bindings: {
            contacts: "<",
            selectedContact: "<"
        },
        templateUrl: "app/app.html",
        controller: "AppController"
    });