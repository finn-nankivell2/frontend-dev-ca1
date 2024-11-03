function styleOnHover(property, enter, leave) {
	return {
		enter: function(e) {
			e.target.style[property] = enter;
		},

		leave: function(e) {
			e.target.style[property] = leave;
		}
	}
}

function swapClassesOnHover(a, b) {
	return {
		enter: function(e) {
			e.target.classList.add(a);
			e.target.classList.remove(b);
		},

		leave: function(e) {
			e.target.classList.remove(a);
			e.target.classList.add(b);
		}
	}
}


export default {
	styleOnHover: styleOnHover,
	swapClassesOnHover: swapClassesOnHover
}

