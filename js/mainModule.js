/**
 * Created by neun34tel on 3/5/2016.
 */
var app = angular.module( "myApp", [] );

app.controller( "myController", function ( $scope ) {
    $scope.quantity = 1;
    $scope.quantityFormatted = function () {
        return ( $scope.quantity >= 0 && typeof $scope.quantity === 'number' ) ? $scope.quantity : 0;
    };
    $scope.price = 5;

    $scope.sum = function () {
        if ( $scope.quantity >= 0 && $scope.price >= 0 ) {
            return $scope.quantity * $scope.price;
        } else {
            return 0;
        }
    };

    $scope.firstName = "Bronco";
    $scope.lastName = "Bamma";

    $scope.fullName = function () {
        if ( $scope.firstName !== undefined && $scope.firstName.length > 0 &&
             $scope.lastName !== undefined && $scope.lastName.length > 0 ) {
            return $scope.firstName + ' ' + $scope.lastName;
        } else if ( ( $scope.firstName === undefined || $scope.firstName.length === 0 ) &&
                    ( $scope.lastName !== undefined && $scope.lastName.length > 0 ) ) {
            return 'member of the ' + $scope.lastName + ' family';
        } else if ( $scope.firstName !== undefined && $scope.firstName.length > 0 ) {
            return $scope.firstName;
        } else {
            return '';
        }
    };

    $scope.nameFormatted = function () {
        if ( $scope.fullName !== undefined && $scope.fullName().trim().length > 0) {
            return $scope.fullName().trim() + '!';
        } else {
            return 'stranger!';
        }
    }
} );