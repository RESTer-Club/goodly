var layout = {
	widthUnit: 200,
	heightUnit: 200
};

function renderWidgets() {
	var listOfWidgetNames = $('[data-view]').get();
	console.log(listOfWidgetNames);
}

function initDashboardLayout() {
	$(".gridster ul").gridster({
		widget_margins: [5, 5],
		widget_base_dimensions: [layout.widthUnit, layout.heightUnit]
	});
}

function extractDashboardNameFromUri(){
	var pathArray = window.location.pathname.split('/');
	return pathArray[1];
}

$(function() { //DOM Ready

	var dashboardName = extractDashboardNameFromUri();

	if (!dashboardName) {
		console.log("Loading defaul dashboard");
		dashboardName = 'sample';
	}
	console.log(dashboardName + " dashboard loaded");

	$("#dashboard").load("dashboards/" + dashboardName + ".html", function() {

		initDashboardLayout();
		renderWidgets();
	});

});