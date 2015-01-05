if (Meteor.isClient) {
  if (Meteor.isClient) {
    Template.body.helpers({
      loc: function () {
        // return 0, 0 if the location isn't ready
        return Geolocation.latLng() || {
          lat: 0,
          lng: 0
        };
      },
      error: Geolocation.error
    });
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}