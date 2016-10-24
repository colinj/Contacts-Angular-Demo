angular
    .module("components.contact")
    .factory("ContactService", ContactService);

function ContactService($http, $q) {

    var contactUrl = "http://cj-contact-api.azurewebsites.net/api/mycontacts/";

    var getRequest = function (url) {
        var deferred = $q.defer();
        var result = $http.get(url);

        result
            .then(function (response) {
                deferred.resolve(response.data);
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        return deferred.promise;
    };

    return {
        getAll: function () {
            return getRequest(contactUrl);
        },

        getContact: function (id) {
            return getRequest(contactUrl + id);
        }
    };

}