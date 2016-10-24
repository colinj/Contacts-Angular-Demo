angular
    .module("components.contact")
    .controller("ContactController", ContactController);

function ContactController() {
    var ctrl = this;

    ctrl.selectContact = function () {
        ctrl.onSelect({
            $event: {
                contact: ctrl.contact
            }
        });
    };
}
