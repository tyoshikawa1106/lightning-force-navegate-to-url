({
    gotoURL : function (component) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": "/006/o"
        });
        urlEvent.fire();
    },
    navigate : function(component) {
        var address = '/Salesforce.com+Inc/@37.793779,-122.39448,17z/';
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": 'https://www.google.com/maps/place/' + address
        });
        urlEvent.fire();
    }
})