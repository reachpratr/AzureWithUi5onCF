/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapcp/azure/cf/ui/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});