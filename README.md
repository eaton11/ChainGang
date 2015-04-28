# Chain Gang
Allows for quick HTML node creation and inheritance.

__*Note:*__ Chain Gaing uses PascalCase (UpperCamelCase) naming convetions rather than camelCase. This allows for word use for words that are otherwise reserved.

#####*This repository is in active development and is not ready for commercial use*

*Key Words*  
Chain *n.* - an individual Node or Fragment and a child of previous Object.   
Gang *n.* - a collective group of Chains, all inside a container Element or Fragment. No container, no Gang.

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

###Adding Attributes to an Element
Building off of the previous example, just use Chain Gang Methods for adding HTML attributes before you call `.Chain()`, `.Sibling()`, or `.End()`.  All Methods are in Pascal Case, not Camel Case.
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

- - -

###Sibling Chaining

- - -

###Traversing Up the Chain

- - -

###Using Document Fragments

- - -

###Adding Gangs to the Document

- - -

###List of HTML Attributes and Properties
The corresponding methods for setting HTMl attributes are:
- id `.Id(value)`
- class (add) `.Class(value)`
- class (remove) `.RemoveClass(value)`
- src `.Src(value)`
- href `.Href(value)`
- alt `.Alt(value)`
- data-*key* `.Id(key, value)`
- *more soon*

To add a textNode to an element:
- `.Text(value)`

__*Other HTML attibute methods are on the roadmap*__


###Feature Roadmap
Future features that are on the list:
- add lots of common HTML attributes
- allow for simple data binding
- develop chaining features for HTML forms
- develop chaining for more specialized html elements
