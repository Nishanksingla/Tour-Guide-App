angular.module('TouristApp', [])
.controller('mainCntrler', ['$scope', '$http', function ($scope, $http) {
    $scope.imageSRCs = [];
    $scope.places = [
        {
            name: "Lotus Temple",
            imgSrc: "images/LotusTemple.jpg"
        },
        {
            name: "Qutub Minar",
            imgSrc: "images/QutubMinar.jpg"
        },
        {
            name: "Jama Masjid",
            imgSrc: "images/JamaMasjid.jpg"
        },
        {
            name: "Humayun Tomb",
            imgSrc: "images/HumayunTomb.jpg"
        }
    ]

    $scope.setPanoID = function () {
        debugger
        if (this.place.name === 'Taj Mahal') {
            sessionStorage.panoid = 'rEQIKH3RXo4AAAGusnEkNQ';
            sessionStorage.place = 'Taj Mahal, Agra India';
        } else if (this.place.name === 'Lotus Temple') {
            sessionStorage.panoid = 'WdBZGlAP9jwAAAGu41fwjQ';
            sessionStorage.place = 'Lotus Temple, New Delhi India';
        } else if (this.place.name === 'Qutub Minar') {
            sessionStorage.panoid = 'qGe1pZh1hMYAAAAGOoSngA';
            sessionStorage.place = 'Qutub Minar, New Delhi India';
        } else if (this.place.name === 'Jama Masjid') {
            sessionStorage.panoid = 'jtGqAJ9PkhcAAAAGOr7mCQ';
            sessionStorage.place = 'Jama Masjid, New Delhi India';
        } else if (this.place.name === 'Humayun Tomb') {
            sessionStorage.panoid = 'Px7UKtIDgh4AAAQDMaGfRQ';
            sessionStorage.place = 'Humayun Tomb, New Delhi India';
        }
    }
}]);
