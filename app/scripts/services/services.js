/**
* searchTheWebApp Module
*
* Description
*/
angular.module('searchTheWebApp.services', []).factory('twitterService', ['$q', function($q){

	'use strict';

	var authorizationResult = false;

	return {
		initialize: function() {
			OAuth.initialize('HIgGFMD2W0rH2u04zP-yfMZsuhA', {
				cache: true
			});

			authorizationResult = OAuth.create('twitter');
		},
		isReady: function() {
			return (authorizationResult);
		},
		connectTwitter: function() {
			var deferred = $q.defer();
			OAuth.popup('twitter', {
				cache: true
			}, function(error, result) {
					if (!error) {
						authorizationResult = result;
						deferred.resolve();
					} else {
						//TODO: Handle error
						console.log(error);
					}
			});
			return deferred.promise;
		},
		clearCache: function() {
			OAuth.clearCache('twitter');
			authorizationResult = false;
		},
		getLatestTweets: function(maxId) {
			var deferred = $q.defer(),
					promise,
					url = '/1.1/statuses/home_timeline.json';

			if (maxId) {
				url += '?max_id=' + maxId;
			}

			promise = authorizationResult.get(url).done(function(data) {
				deferred.resolve(data);
			}).fail(function(err) {
				deferred.reject(err);
			});

			//return the promise of the deferred object
			return deferred.promise;
		}
	};
}]);