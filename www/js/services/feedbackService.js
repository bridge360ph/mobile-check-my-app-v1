angular.module('cmsapp.feedbackService', [])
.factory('feedbackService', function($http, $q, $rootScope,Constants)
{
   return{
    feedback: function(data1){
     return $http({
          url:Constants.API_URL['feedback_url'],
          method: "POST",
          headers: {
                    'Content-Type': Constants.API_HEADERS['content_type']
                },
          transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
          data:data1
          }).success(function (response) {
            console.log(response);
        }).error(function (response) {
            console.log(response);
        });
      }
      }
  
});