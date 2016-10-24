var itemDetail = {
    bindings: {
        label: "@",
        value: "<"
    },
    templateUrl: "app/components/item-detail/item-detail.html"
};

angular
    .module("components.item-detail")
    .component("itemDetail", itemDetail);

