var debug = false;

function debugPage() 
{
	if (debug) {
		console.log("Turn Debug Off");
		$('link[title=debug]')[0].disabled=true;
		console.log("Works");
		debug = false;
	} else {
		console.log("Turn Debug On");
		$('link[title=debug]')[0].disabled=false;
		console.log("Works");
		debug = true;
	};
};
