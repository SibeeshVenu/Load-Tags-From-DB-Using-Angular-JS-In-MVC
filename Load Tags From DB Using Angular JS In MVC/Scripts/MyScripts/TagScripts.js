/* Using Angular JS */
(function () {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    var app;
    //Angular App
    app = angular.module('tagApp', []);

    //Angular Controller
    app.controller('tagController', function ($scope, tagService) {
        //Angular service call
        var tgs = tagService.getTags();
        if (tgs != undefined) {
            tgs.then(function (d) {
                availableTags = [];
                for (var i = 0; i < d.data.length; i++) {
                    availableTags.push(d.data[i].tagName);
                }

                $("#tags").tagit({
                    availableTags: availableTags,
                    autocomplete: { delay: 0, minLength: 1 },
                    beforeTagAdded: function (event, ui) {
                        if ($.inArray(ui.tagLabel, availableTags) < 0) {
                            $('#error').show();
                            return false;
                        } else {
                            $('#error').hide();
                        }
                    }
                });
                console.log(JSON.stringify(availableTags));
            }, function (error) {
                console.log('Oops! Something went wrong while fetching the data.');
            });
        }
    });

    //Angular Service
    app.service('tagService', function ($http) {
        //call the web api controller
        this.getTags = function () {
            return $http({
                method: 'get',
                url: 'api/tag'
            });
        }
    });
})();

///* Using jQuery */

//$(function () {
//    var availableTags = [
//      "ActionScript",
//      "AppleScript",
//      "Asp",
//      "BASIC",
//      "C",
//      "C++",
//      "Clojure",
//      "COBOL",
//      "ColdFusion",
//      "Erlang",
//      "Fortran",
//      "Groovy",
//      "Haskell",
//      "Java",
//      "JavaScript",
//      "Lisp",
//      "Perl",
//      "PHP",
//      "Python",
//      "Ruby",
//      "Scala",
//      "Scheme"
//    ];   
//    //Load the available tags from database start
//    $.ajax({
//        type: 'GET',
//        dataType: 'json',
//        contentType: 'application/json;charset=utf-8',
//        url: 'http://localhost:56076/api/Tag',
//        success: function (data) {
//            try {
//                if (data.length > 0) {
//                    availableTags = data;
//                }
//            } catch (e) {
//                console.log('Error while formatting the data : ' + e.message)
//            }
//        },
//        error: function (xhrequest, error, thrownError) {
//            console.log('Error while ajax call: ' + error)
//        }
//    });
//    //Load the available tags from database end

//    $("#tags").tagit({
//        availableTags: availableTags,
//        autocomplete: { delay: 0, minLength: 1 },
//        beforeTagAdded: function (event, ui) {
//            if ($.inArray(ui.tagLabel, availableTags) < 0) {
//                $('#error').show();
//                return false;
//            } else {
//                $('#error').hide();
//            }
//        }
//    });
//});
