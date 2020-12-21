var liskill = document.getElementById('skills');
var liachiev = document.getElementById('achiev');

function DropdownSkill() {
	if (liskill.style.display == '')
	{
		liskill.style.display = 'none';
		skillDown = true;
	}
	else
	{
		liskill.style.display = '';
		skillDown = false;
	}
}

function DropdownAchiev() {
	console.log("Called procedure");
	if (liachiev.style.display == '')
	{
		liachiev.style.display = 'none';
		achievDown = false;
		console.log("Added hide property");
	}
	else
	{
		liachiev.style.display = '';
		achievDown = true;
		console.log("Removed hide property");
	}
}