# Chain Gang
Allows for quick HTML node creation and inheritance.

__*Note:*__ Chain Gaing uses PascalCase (UpperCamelCase) naming convetions rather than camelCase. This allows for word use for words that are otherwise reserved.

*This repository is in active development and is not ready for commercial use*

*Key Words*
Chain *n.* an individual Node or Fragment and a child of previous Object. 
Gang *n.* a collective group of Chains, all inside a container Element or Fragment.

###Starting a Chain
To a chain, type `Gang()`, which will initiate a chain with a parent container.
However, ChainGang doesnt know what type of container you want. There are 2 types of containers:
- HTML Element Node `Gang().Element(elementType)`
- Document Fragment `Gang().Fragment()`

- - -

###Creating a Chain of Elements
The container of a Gang is the only one where the method `Element()` is used.
Every other element would be a *Chain* or a *Sibling* of a Chain.
When the Gang is complete, use the `End()` method.
#####Example:
```javascript
Gang().Element("div")
	.Chain("span")
	.End();
```

- - -

###Adding Attributes to an Element
Building off of the previous example

- - -

###Working with Element Chains



###Chaining (appending) a Child Element to a Parent

###Sibling Chaining

###Traversing Up the Chain

###Using Document Fragments

###Adding Gangs to the Document


###Feature Roadmap
Future features that are on the list:
- add lots of common HTML attributes
- allow for simple data binding
- develop chaining features for HTML forms
- develop chaining for more specialized html elements
