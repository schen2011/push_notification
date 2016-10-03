angular.module('starter.services', ['firebase'])

.factory('Claims', function($firebaseArray) {

    var ref = new Firebase("https://hackathon-143101.firebaseio.com/posts");

    var syncObject = $firebaseArray(ref);

    var claims = [];

    syncObject.$loaded().then(function() {
      angular.forEach(syncObject, function(value, key){
          var claim = {email: value.email3, username, value.username3};
          claims.push(claim);
      });
    });

  var claims = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return claims;
    },
    remove: function(claim) {
            claims.splice(claims.indexOf(claim), 1);
    },
    get: function(claimId) {
      for (var i = 0; i < claims.length; i++) {
        if (claims[i].id === parseInt(claimId)) {
          return claims[i];
        }
      }
      return null;
    }
  };
});
