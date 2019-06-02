sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/routing/History"
], function(Controller, History) {
	"use strict";
	return Controller.extend("sapui5.demo.mvcapp.controller.Detail", {
		onInit: function() {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRouter("detail").attachPatternMatched(this._onDetailMatched, this);
		},
		_onDetailMatched: function(oEvent) {
			var sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
			var oView = this.getView();
			oView.bindElement(sObjectPath);
		},
		onNavPress: function() {
			// oApp.back();  //oApp is a global viable
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			else {
				this._oRouter.navTo("master");
			}
		}
	});
});