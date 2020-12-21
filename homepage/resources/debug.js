var debug = false;

$('link[title=debug]')[0].disabled=true;

function debugPage() {

	if (debug) {
		$('link[title=debug]')[0].disabled=true;
		debug = false;
	} else {
		$('link[title=debug]')[0].disabled=false;
		debug = true;
	};
};