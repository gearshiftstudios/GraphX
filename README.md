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

**HTML

```html
<div id='my-text'>This is some text!</div>
```

**JavaScript

```javascript
// changes color of text.
graphx.setColor('my-text', 'white')
// removes text from display (similar to 'display:none' in CSS) and how it should display before being removed.
// the unit for time is seconds, not the usual milliseconds.
graphx.removeInterface('my-text', 0.2)
```
