#  Chain Gang &nbsp;    
[![GitHub version](https://badge.fury.io/gh/eaton11%2FChainGang.svg)](http://badge.fury.io/gh/eaton11%2FChainGang) <img src="https://img.shields.io/badge/bower-chain--gang-yellow.svg"> 
<img src="logo.png" height="150" align="right">    

**JavaScript library for quick HTML node creation, inheritance, and rendering through method chaining.**

*"JavaScript be doing drive-by's in HTML's turf."*

__*Key Words*__  
__Chain__ *n.* - an individual Node, or Fragment, and a child of the previous Object.   
__Gang__ *n.* - a collective group of Chains, all inside a container Element or Fragment. No container, no Gang.

__*Note:*__ Chain Gaing uses PascalCase (UpperCamelCase) naming convetions rather than camelCase. This allows for the use of words that are otherwise reserved.

- - -

###Starting a Chain
To make chain, type `Gang()`, which will create a parent container on which you can add chains.
However, Chain Gang doesnt know what type of container you want. You have to clarify. There are 2 types of containers:
- HTML Element Node `Gang().Element(elementType)`
- Document Fragment `Gang().Fragment()`

- - -

###Creating a Chain of Elements
Creating the container element of a Gang is the only place where the method `Element()` is used.
Every other element would be a *Chain* or a *Sibling of a Chain*.
When the Gang is complete, use the `End()` method.
#####Example:
```javascript
Gang().Element("div")
	.Chain("span")
	.End();
```
...would produce...

```html
<div>
	<span></span>
</div>
```

- - -

###Creating an Element with One Id and/or One Class
When you create an element, you can pass an one Id and/or one class.  
For example:
```javascript
Gang().Element("div#container")
	.Chain("p.thug").
		.Chain("span#gangster.hard")
	.End();
```
...would produce...

```html
<div id="container">
	<p class="thug">
		<span id="gangster" class="hard"></span>
	</p>
</div>
```
__*Note:*__ you can't set more than one class when creating an element, there are other methods below for multiple classes.

- - -

###Adding Attributes to an Element
Building off of the example in the above *Creating a Chain of Elements* section, just use Chain Gang Methods for adding HTML attributes before you call `.Chain()`, `.Sibling()`, or `.End()`.  All Methods are in Pascal Case, not Camel Case.
#####Example:
```javascript
Gang().Element("div").Id("parent").Class("happy").Data("happyparent",true)
	.Chain("span").Class("baby").Class("boy").Text("It's a Boy!")
	.End();
```
...would produce...

```html
<div id="parent" class="happy" data-happyparent="true">
	<span class="baby boy">It's a Boy!</span>
</div>
```

####The `Attr` Method
The `Attr` Method allows you to combine multiple method calls into a single object. These two sibling chains are identical:  
*JavaScript*
```javascript
.Chain("div").Text("Child 2").Class(["cool","tired","hungry"]).Data({"super":2})
		
.Sibling("div").Attr({
	"Text": "Child 3", 
	"Class":["cool", "tired", "hungry"],
	"Data":{"super":3}
})
```
*HTML*
```html
<div class="cool tired hungry" data-super="1">Child 1</div>
<div class="cool tired hungry" data-super="2">Child 2</div>
```
The properties of the object that you pass to Attr are just the name of the methods you would normally use. Notice how "Text", "Class", and "Data" are always uppercase.

- - -

###Passing Objects
Anywhere where you can create an Element, you can pass it as a string, or as an Object. By passing an Object, you can assign attributes as you create it.  
Both produce the same result:
```javascript
.Sibling("div").Class(["steezy", "trippin"]).Text("word")

.Sibling({
  Element:"div", 
  Class:["steezy", "trippin"], 
  Text:"word"
})
```
```html
<div class="steezy trippin">word</div>
```

- - -

###Once a Gang Member, Always a Gang Member
Any element that was created in a Gang will always have access to chaining. A great example is when adding event listeners:
```javascript
// creates div element and adds click listener
Gang().Element("div").Listener("click", doSomething);

...

function doSomething(){
	// adds class to clicked div element (this)
	// adds a child paragraph to clicked element
	// gives child some text
	this.Class("selected").Chain("p").Text("You clicked my parent!");
}
```
  
- - -
  
###Sibling Chaining
The `Sibling()` method adds a new element __*after*__ the element that it is being called on (rather than inside like `Chain()`). It takes one parameter—the new element type.
#####Example:
The second paragraph is a sibling to the first:
```javascript
Gang().Element("div").Id("parent")
	.Chain("p").Id("child1")
	.Sibling("p").Id("child2")
		.Chain("span").Text("I'm inside child 2")
	.End();
```  
...would produce...  

```html
<div id="parent">
	<p id="child1"></p>
	<p id="child1"><span>I'm inside child 2</span></p>
</div>
```
It makes for more legible code to indent everytime you call a `.Chain()` method and to stay at the same level (NOT indent) when calling the `.Sibling()` method.

- - -

###Traversing Up the Chain
How could we add a Sibling to an element if we already added a Chain?    
Produces Unintended Result:
```javascript
Gang().Element("div").Id("parent")
	.Chain("p").Id("child1")
		.Chain("span").Id("child1_span")
	.Sibling("p").Id("child2") // this would add a sibling to the span, not child 1
	.End();
```  
The solution is the `.Up()` method. It traverses "up" the chain by one node.  

*Note:* Where we indent when we call the *Chain* method, we would unindent when calling the *Up* method:
```javascript
Gang().Element("div").Id("parent")
	.Chain("p").Id("child1")
		.Chain("span").Id("child1_span")
	.Up()
	.Sibling("p").Id("child2") // this would add a sibling to child 1
	.End();
```

- - -

###Using Document Fragments    

__*Documentation Coming Soon*__

- - -

###Adding Gangs to the Document    

__*Documentation Coming Soon*__

- - -

###List of HTML Attributes and Properties    
The corresponding methods for setting HTML attributes are:    
- id `.Id(value)`
- class (add) `.Class(value)` or `.Class([value1, value2, etc])`
- class (remove) `.RemoveClass(value)` or `.Class([value1, value2, etc])`
- class (toggle) `.ToggleClass(value)` or `.Class([value1, value2, etc])`
- src `.Src(value)`
- href `.Href(value)`
- alt `.Alt(value)`
- data-*key* `.Data( key: value )` , `.Data({key: value})` , `.Data({key1: value1, key2: value2})`    
&nbsp;&nbsp;&nbsp;&nbsp;The ability to pass an object as a parameter for `Data()` is necesary for setting Data attribute(s) in the `Attr` method
- type `.Type(value)`
- method `.Method(value)`
- action `.Action(value)`
- name `.Name(value)`
- value `.Value(value)`
- checked `.Checked(boolean)`
- value `.Value(value)`
- placeholder `.Placeholder(value)`

To add a textNode to an element:
- `.Text(value)`

- - -

###Feature Roadmap
Future features that are on the list:
- Expand the functionlity of the `Fragment()` method
- develop chaining for more specialized html elements
- one-way data-binding?
- finish this README
- Add more examples to README
- make video tutorials (not related to repo, just to be friendly)
