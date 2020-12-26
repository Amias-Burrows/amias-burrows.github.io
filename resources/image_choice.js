var[] chosenSlot = document.getElementByClassName('parallaxImage');

var image = Math.random() * (3 - 1) + 1;

for (i = 1, i < 4, i++)
{
	switch (image)
	{
		case 1:
			chosenSlot[i].src = "resources/images/Code-min.jpg";
			chosenSlot[i].alt = "Photograph of computer";
			break;
		case 2:
			chosenSlot[i].src = "resources/images/Recording-Studio-min.jpg";
			chosenSlot[i].alt = "Photograph of Recording Desk";
			break;
		case 3:
			chosenSlot[i].src = "resources/images/Typewriter-min.jpg";
			chosenSlot[i].alt = "Photograph of Typewriter";
			break;
	};
};
