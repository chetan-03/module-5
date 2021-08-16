(function () {
    'use strict';
    angular.module('public')
        .controller('infoController', infoController);
    infoController.$inject = ['MenuService', 'ApiPath'];
    function infoController(MenuService, ApiPath) {
        var ictrl = this;
        ictrl.ApiPath = ApiPath;
        ictrl.showUser = false;
        ictrl.user = MenuService.getUser();
        console.log(' User is ' + ictrl.user);
        if (ictrl.user) {
            ictrl.showUser = true;
        } else {
            ictrl.showUser = false;
        }
    };
})();