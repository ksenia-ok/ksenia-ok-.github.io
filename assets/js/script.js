function changeServiceSlide(event) {
	return function() {
		var sliderControlList = this.parentElement.parentElement;
		var activeControlButton = document.querySelector(".slider-button.active");
		var clickedControlButton = this.parentElement;
		for (var i = 0; i < sliderControlList.children.length; i++) {
			if (sliderControlList.children[i] === clickedControlButton) {
				activeControlButton.classList.remove("active");
				var activeElement = document.querySelector(".services-slide-item.active");
				activeElement.classList.remove("active");
				var serviceSliderList = document.querySelector(".services-slides");
				serviceSliderList.children[i].classList.add("active");
				this.classList.add("active");
				break;
			};
		}
	}
}

function setEventServiceSliderClick() {
	var elementList = document.querySelectorAll(".slider-button");
	for (var k=0; k < elementList.length; k++) {
		elementList[k].addEventListener("click", changeServiceSlide());
	}
}


setEventServiceSliderClick();