angular.module('angularjs-cart')
.component('appHeader', {
    templateUrl: 'src/components/header/header.component.html',
    bindings: {
        onMenuItemClick: '&'
    },
    controller: function() {
        this.onLinkClick = function(e, menuName) {
            e.preventDefault();
            console.log(menuName);
            this.onMenuItemClick({name: menuName});
        }
    }
})