// units included for use in GraphX
class UNITS {
        constructor() {
                this.percent = '%'
                this.pixel = 'px'
		this.vpWidth = 'vw'
		this.vpHeight = 'vh'
        }
}
const Units = new UNITS()

// main methods
class GraphX {
	constructor() {
		this.loaderInterval = 300
	}
	moveInterface(element, transitionTime, marginLeft, marginRight, marginTop, marginBottom) {
    	document.getElementById(element).style.marginLeft = marginLeft + "px"
    	document.getElementById(element).style.marginRight = marginRight + "px"
    	document.getElementById(element).style.marginTop = marginTop + "px"
    	document.getElementById(element).style.marginBottom = marginBottom + "px"
   	 	document.getElementById(element).style.transition = transitionTime + "s ease-in-out"
	}
	capitalize(string) {
 		return string.charAt(0).toUpperCase() + string.slice(1); 
	}
	removeInterface(element, time) {
		setTimeout(function(){document.getElementById(element).style.display = "none"}, time * 1000)
	}
	displayInterface(element, time) {
		setTimeout(function(){document.getElementById(element).style.display = "inline-block"}, time * 1000)
	}
	setWidth(element, size, unit) {
		document.getElementById(element).style.width = size + unit
	}
	setCenterLeft(element) {
		document.getElementById(element).style.marginLeft = 'calc(100vw / 2)'
	}
	setCursor(type) {
		document.body.style.cursor = type
	}
	setCenterTop(element) {
		document.getElementById(element).style.marginTop = 'calc(100vh / 2)'
	}
	setDirectCenter(element) {
		document.getElementById(element).style.marginLeft = 'calc(100vw / 2)'
		document.getElementById(element).style.marginTop = 'calc(100vh / 2)'
	}
	setHeight(element, size, unit) {
		document.getElementById(element).style.height = size + unit
	}
	setMarginLeft(element, margin, unit) {
		document.getElementById(element).style.marginLeft = margin + unit
	}
	setMarginTop(element, margin, unit) {
		document.getElementById(element).style.marginTop = margin + unit
	}
	setTransform(element, transform) {
		document.getElementById(element).style.transform = transform
	}
	setPointerEvents(element, event) {
		document.getElementById(element).style.pointerEvents = event
	}
	setRoundness(element, roundness, unit) {
		document.getElementById(element).style.borderRadius = roundness + unit
	}
	setText(element, string) {
		document.getElementById(element).innerHTML = string
	}
	setValue(element, value) {
		document.getElementById(element).value = value
	}
	setImage(element, link) {
		document.getElementById(element).style.backgroundImage = 'url(' + link + ')'
	}
	setMatrix(element, scale, left, top) {
		document.getElementById(element).style.transform = 'matrix(' + scale + ', 0, 0, ' + scale + ', ' + left + ', ' + top + ');'
	}
	setTextColor(element, color) {
		document.getElementById(element).style.color = color
	}
	setBackgroundSize(element, size) {
		document.getElementById(element).style.backgroundSize = size
	}
	setBackgroundColor(element, color) {
		document.getElementById(element).style.backgroundColor = color
	}
	setBackground(element, background) {
		document.getElementById(element).style.background = background
	}
	setFill(element, fill) {
		document.getElementById(element).style.fill = fill
	}
	setFilter(element, filter) {
		document.getElementById(element).style.filter = filter
	}
	setStroke(element, stroke) {
		document.getElementById(element).style.stroke = stroke
	}
	setOpacity(element, opacity) {
		document.getElementById(element).style.opacity = (opacity * 100) + '%'
	}
	addElement(element, data) {
		document.getElementById(element).innerHTML += data
	}
	clearImage(element) {
		document.getElementById(element).style.backgroundImage = 'none'
	}
	dragElement(element) {
  		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  		if (document.getElementById(`${element}-header`)) {
    			// if present, the header is where you move the DIV from:
    			document.getElementById(`${element}-header`).onmousedown = dragMouseDown;
  		} else {
    			// otherwise, move the DIV from anywhere inside the DIV:
    			document.getElementById(element).onmousedown = dragMouseDown;
  		}
		
  		function dragMouseDown(e) {
    			e = e || window.event;
    			e.preventDefault();
    			// get the mouse cursor position at startup:
    			pos3 = e.clientX;
    			pos4 = e.clientY;
    			document.onmouseup = closeDragElement;
    			// call a function whenever the cursor moves:
    			document.onmousemove = elementDrag;
  		}

  		function elementDrag(e) {
    			e = e || window.event;
    			e.preventDefault();
    			// calculate the new cursor position:
    			pos1 = pos3 - e.clientX;
    			pos2 = pos4 - e.clientY;
    			pos3 = e.clientX;
    			pos4 = e.clientY;
    			// set the element's new position:
    			document.getElementById(element).style.marginTop = (document.getElementById(element).offsetTop - pos2) + Units.pixel;
    			document.getElementById(element).style.marginLeft = (document.getElementById(element).offsetLeft - pos1) + Units.pixel;
  		}

  		function closeDragElement() {
    			// stop moving when mouse button is released:
    			document.onmouseup = null;
    			document.onmousemove = null;
  		}
	}
	updateLoader(element, string) {
		setInterval(function() {
			document.getElementById(element).innerHTML = string + '.'
			setTimeout(function() {
				document.getElementById(element).innerHTML = string + '..'
				setTimeout(function() {
					document.getElementById(element).innerHTML = string + '...'
				}, this.loaderInterval)
			}, this.loaderInterval)
		}, this.loaderInterval * 3)
	}
	setLoaderInterval(number) {
		this.loaderInterval = number * 1000
	}
}
const graphx = new GraphX()
