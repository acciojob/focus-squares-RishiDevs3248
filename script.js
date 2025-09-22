let boxes = document.querySelectorAll('.square');

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        boxes.forEach(b => {
            b.style.backgroundColor = "#6F4E37";
        });
		box.style.backgroundColor = "#E6E6FA";
    });
    box.addEventListener("mouseout", () => {
        boxes.forEach(b => {
            b.style.backgroundColor = "#E6E6FA";
        });
    });
	
});
