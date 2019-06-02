sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller) {
		"use strict";
		return Controller.extend("sapui5.demo.mvcapp.controller.Master", {
			onListPress: function(oEvent) {
				var sPageId = oApp.getPages()[1].getId();
				oApp.to(sPageId);
				
				var oPage = oApp.getPage(sPageId);
				var oContext = oEvent.getSource().getBindingContext();
				oPage.setBindingContext(oContext);
				// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				// var oItem = oEvent.getSource();
				
				// oRouter.navTo("detail", {
				// 	ID: oItem.getBindingContext().getProperty("ID")
				// });
			}
		});
	});