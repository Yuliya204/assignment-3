var dynamicObject = {};
dynamicObject.Name = "SomeName";
dynamicObject.Data = "SomeData";
dynamicObject.ThankYouText = "Thank You!";

var alertUpdateDataFunction = function(page, input, message)
{
	message.innerHTML = dynamicObject.ThankYouText;
	page.removeChild(input);
}
function InvokeThisFunction(f)
{
	f();
}

function TextInputChanged(input)
{ var myFunction = function(input)
	{
	var page = document.getElementsByClassName("about-me")[0];
	var footer = document.getElementsByClassName("footer")[0];
	page.removeChild(input);
	footer.innerHTML = dynamicObject.ThankYouText; 
}
    InvokeThisFunction(myFunction(input));
}

function ToggleMyDogImageHighlight()
{
	var mydogImages = document.getElementsByClassName("mydog-image");
	var mydogImagesHighlight = document.getElementsByClassName("mydog-image-highlight");
	var mydogCaptions = document.getElementsByClassName("mydog-caption");

	var toggleStatus;

	if (mydogImages.length > 0)
	{
		toggleStatus = "ON";
		mydogImages[0].className = "mydog-image-highlight";
	}
	else if (mydogImagesHighlight.length > 0)
	{
		toggleStatus = "OFF";
		mydogImagesHighlight[0].className = "mydog-image";
	}

	mydogCaptions[0].innerHTML = "I just toggled the MyDog Image Higlight to: " + toggleStatus;
}

function MouseOverListItem(li)
{
	li.className = "list-item-highlight";
}

function MouseOutListItem(li)
{
	li.className = "";
}