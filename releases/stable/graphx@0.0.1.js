// units included for use in GraphX
class UNITS {
        constructor() {
                this.percent = '%'
                this.pixel = 'px'
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
	setTransform(element, transform) {
		document.getElementById(element).style.transform = transform
	}
	setPointerEvents(element, event) {
		document.getElementById(element).style.pointerEvents = event
	}
	setRoundness(element, roundness) {
		document.getElementById(element).style.borderRadius = roundness + 'px'
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
	setBackgroundColor(element, color) {
		document.getElementById(element).style.backgroundColor = color
	}
	setFill(element, fill) {
		document.getElementById(element).style.fill = fill
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
