var computer = document.createElement("img");
computer.src = "resources/images/Code-min.jpg";
computer.alt = "Photograph of computer";

var recording = document.createElement("img");
recording.src = "resources/images/Recording-studio-min.jpg";
recording.alt = "Photograph of Recording Desk";

var typewriter = document.createElement("img");
typewriter.src = "recources/images/Typewriter-min.jpg");
typewriter.alt = "Photograph of typewriter";

var[] image = {1, 2, 3};
for (let i = image.length - 1; i > 0; i--)
{
	const j = Math.floor(Math.random() * i);
	const temp = image[i];
	image[i] = image[j];
	image[j] = temp;
};

for (i = 0; i < 3; i++)
{
	switch (image(i))
	{
		case 1:

			break;
		case 2:

			break;
		case 3:

			break;
	};
};
