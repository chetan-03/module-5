(function () {
    "use strict";

    angular.module('public')
        .controller('formController', formController);

    formController.$inject = ['MenuService'];
    function formController(MenuService) {
        var fctrl = this;
        fctrl.user = {};
        fctrl.favitem = {};
        fctrl.user.favitem = "";
        fctrl.items = MenuService.getAllItems().then(function (res) {
            return res;
        });

        console.log(fctrl.items);
        fctrl.submit = function (form) {
            fctrl.showError = false;
            fctrl.showMessage = false;
            if (form.$invalid) {
                console.log("Invalid form");
                return;
            }
            MenuService.checkfavitem(fctrl.user.favitem)
                .then(function (res) {
                    fctrl.user.favitemDetails = res;
                    console.log("fav item" + fctrl.user.favitemDetails);
                    MenuService.saveUser(fctrl.user);
                    fctrl.showMessage = true;
                }, function (error) {
                    console.log("Error after then " + error);
                    fctrl.showError = true;
                });

        }
    }

})();
