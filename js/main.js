var click = function test() {
    btn.onclick = function() {
    card.classList.toggle('active');
    btn.classList.toggle('active');
    vert.classList.toggle('minus');
	}
}

click();