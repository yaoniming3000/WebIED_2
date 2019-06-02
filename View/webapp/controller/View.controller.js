sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	
	return Controller.extend("viewapp.controller.View", {
		onPress: function() {
			alert("Hello World!");
		}
	});
});