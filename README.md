# GraphX
A library that makes DOM commands simpler. It allows you to create special animations using the DOM oriented methods from within the library.

## Importing it to your project

You can import the GraphX library by importing the source into your `HTML` file (below is the latest release).

```html
<script src='https://gearshiftstudios.github.io/GraphX/releases/stable/graphx@0.0.1.js'></script>
```

You can import an older version by changing the numbers after the `@` in the URL.

## Usage

Here is an example of how you could use the GraphX library.

**HTML**

```html
<div id='my-text'>This is some text!</div>
```

**JavaScript**

```javascript
// changes color of text.
graphx.setColor('my-text', 'white')
// removes text from display (similar to 'display:none' in CSS) and how it should display before being removed.
// the unit for time is seconds, not the usual milliseconds.
graphx.removeInterface('my-text', 0.2)
```

## Syntax

Here is some basic and advanced things that this library can do.

**Adding an Element**

Like using ```innerHTML += [new stuff]``` as the simplest way for adding new elements, ```addElement``` will allow you to add elements with a preset parent/child element type (HTML variable) or a custom one like ```x-foo``` that u might have a style template for in a CSS file you have previously made.

Here is the format

```javascript
graphx.addElement([parent element], [element's type], [element's ID], [element's Class], [element's content])
```
Here is how to use it

```HTML
<!-- This is before 'addElement' is used -->
<div id='my-div'></div>
```

```javascript
const myDiv = document.getElementById('my-div')

// elex is a part of the library that consists of different element types (HTML variables)
// in this case we are creating a new div with text saying 'New Element!'
graphx.addElement(myDiv, elex.div, 'new-div-id', 'new-div-class', 'New Element!')
```
Once ran, the HTML would look like this

```HTML
<!-- This is after 'addElement' is used -->
<div id='my-div'>
  <div id='new-div-id' class='new-div-class'>New Element!</div>
</div>
```
