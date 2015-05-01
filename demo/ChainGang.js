// This is the old version!

function Gang(){
	var ChainGang = {
		Head: null,

		// Creates an Element
		Element: function(_TYPE){
			var newElement,
				elmHasId = false,
				elmHasClass = false,
				elmType,
				elmId,
				elmClass;
			// check if ID and CLASS were passed with element
			if(_TYPE.match(/[#]\w+[.]\w+/)){
				elmHasId = true;
				elmHasClass = true;
				var elmArr1 = _TYPE.split("#");
				var elmArr2 = elmArr1[1].split(".");
				elmType = elmArr1[0];
				elmId = elmArr2[0];
				elmClass = elmArr2[1];
			// check if ID was passed with element	
			} else if(_TYPE.match(/#/)){
				elmHasId = true;
				var elmArr = _TYPE.split("#");
				elmType = elmArr[0];
				elmId = elmArr[1];
			// check if CLASS was passed with element
			} else if(_TYPE.match(/[.]/)){
				elmHasClass = true;
				var elmArr = _TYPE.split(".");
				elmType = elmArr[0];
				elmClass = elmArr[1];
			// Nothing passed with Element Type
			}  else {
				elmType = _TYPE;
			}


			newElement = document.createElement(elmType);
			if(ChainGang.Head === null) ChainGang.Head = newElement;


			// ==================================================
			// ADD ALL METHODS HERE
			var recruitedElement = ChainGang.Recruit(newElement);
			// ==================================================


			// if ID passed with element (e.g. element#id)
			if(elmHasId){
				recruitedElement.Id(elmId);
			}
			// if Class passed with element (e.g. element.className)
			if(elmHasClass){
				recruitedElement.Class(elmClass);
			}

			return recruitedElement;

		},

		// Creates a Document Fragment
		Fragment : function(){
			var newFrag = document.createDocumentFragment();
			newFrag.Chain = function(_OBJECT){
				this.appendChild(_OBJECT);
				return this;
			}
			return newFrag;
		},

		// Adds Gang Methods to Element
		Recruit: function(_REC_OBJECT){
			var newElement;
			if(typeof _REC_OBJECT === "string"){
				newElement = document.getElementById(_REC_OBJECT.slice(1, _REC_OBJECT.length));
			} else {
				newElement = _REC_OBJECT;
			}
			
			newElement.Id = function(_ID){
				this.id = _ID;
				return this;
			};
			newElement.Class = function(_CLASS){
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.classList.add(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.classList.add(_CLASS[i]);
					}
				}
				return this;
			};
			newElement.RemoveClass = function(_CLASS){
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.classList.remove(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.classList.remove(_CLASS[i]);
					}
				}
				return this;
			};
			newElement.ToggleClass = function(_CLASS){
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.classList.toggle(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.classList.toggle(_CLASS[i]);
					}
				}
				return this;
			};
			newElement.Src = function(_SRC){
				this.src = _SRC;
				return this;
			};
			newElement.Href = function(_HREF){
				this.href = _HREF;
				return this;
			};
			newElement.Alt = function(_ALT){
				this.alt = _ALT;
				return this;
			};
			newElement.Data = function(_OBJECT, _OptValue){
				// if Object passed, ignore _OptValue and treat _OBJECT like an object
				if(Object.prototype.toString.call( _OBJECT ) === '[object Object]'){
					var keysArr = Object.keys(_OBJECT);
					for(var i=0, ii=keysArr.length; i<ii; i++){
							this.dataset[keysArr[i]] = _OBJECT[keysArr[i]];
					}
				// if _OBJECT is not an object it is a key and _OptValue is a value
				} else if(typeof _OBJECT === "string") {
					this.dataset[_OBJECT] = _OptValue;
				}
					
				return this;
			};
			newElement.Text = function(_TEXT){
				this.appendChild(document.createTextNode(_TEXT));
				return this;
			};
			newElement.Type = function(_TYPE){
				this.type = _TYPE;
				return this;
			};
			newElement.Method = function(_METHOD){
				this.method = _METHOD;
				return this;
			};
			newElement.Action = function(_ACTION){
				this.action = _ACTION;
				return this;
			};
			newElement.Name = function(_NAME){
				this.name = _NAME;
				return this;
			};
			newElement.Value = function(_VALUE){
				this.value = _VALUE;
				return this;
			};
			newElement.Checked = function(_BOOLEAN){
				this.checked = _BOOLEAN;
				return this;
			};
			newElement.Placeholder = function(_PLACEHOLDER){
				this.placeholder = _PLACEHOLDER;
				return this;
			};
			newElement.Listener = function(_EVENT, _CALLBACK){
				this.addEventListener(_EVENT,_CALLBACK);
				return this;
			};

			// Attr
			newElement.Attr = function(_OBJECT){
				var keysArr = Object.keys(_OBJECT);
				for(var i=0, ii=keysArr.length; i<ii; i++){
					if( this[keysArr[i]] ) {
						// ARRAY
						if(Object.prototype.toString.call( _OBJECT[keysArr[i]] ) === '[object Array]'){
							// For each string in array
							for(var j=0, jj=_OBJECT[keysArr[i]].length; j<jj; j++){
								this[keysArr[i]](_OBJECT[keysArr[i]][j]);
							}
						}
						// OBJECT
						else if(Object.prototype.toString.call( _OBJECT[keysArr[i]] ) === '[object Object]'){
							// For each string in array
							this[keysArr[i]](_OBJECT[keysArr[i]]);
						}
						// STRING
						else if(typeof _OBJECT[keysArr[i]] === "string"){
							this[keysArr[i]](_OBJECT[keysArr[i]]);
						}
						
					}
				}
				return this;
			};

			// Chain
			newElement.Chain = function(_ELEMENT){
				var newerElement;
				if(Object.prototype.toString.call( _ELEMENT ) === '[object Object]'){
					var keysArr = Object.keys(_ELEMENT);
					if(_ELEMENT.hasOwnProperty("Element")){
						newerElement = ChainGang.Element(_ELEMENT["Element"]);
					} else { return; }
					for(var i = 0, ii = keysArr.length; i<ii; i++){
						if(keysArr[i] !== "Element"){
							newerElement[keysArr[i]](_ELEMENT[keysArr[i]]);
						}
					}
					this.appendChild(newerElement);
					return newerElement;
				} else if(typeof _ELEMENT === "string") {
					newerElement = ChainGang.Element(_ELEMENT);
					this.appendChild(newerElement);
					return newerElement;
				}
			};

			// Sibling
			newElement.Sibling = function(_ELEMENT){
				var newerElement;
				if(Object.prototype.toString.call( _ELEMENT ) === '[object Object]'){
					var keysArr = Object.keys(_ELEMENT);
					if(_ELEMENT.hasOwnProperty("Element")){
						newerElement = ChainGang.Element(_ELEMENT["Element"]);
					} else { return; }
					for(var i = 0, ii = keysArr.length; i<ii; i++){
						if(keysArr[i] !== "Element"){
							newerElement[keysArr[i]](_ELEMENT[keysArr[i]]);
						}
					}
					this.parentNode.insertBefore(newerElement, this.nextSibling);
					return newerElement;
				} else if(typeof _ELEMENT === "string") {
					newerElement = ChainGang.Element(_ELEMENT);
					this.parentNode.insertBefore(newerElement, this.nextSibling);
					return newerElement;
				}
			};

			newElement.Purge = function(){
				var parent = this.parentNode;
				var sibling = this.nextSibling;
				parent.removeChild(this);
				while (this.firstChild) {
				  this.removeChild(this.firstChild);
				}
				parent.insertBefore(this,sibling);
				return this;
			}

			newElement.Up = function(){
				return this.parentNode;
			};
			newElement.End = function(){
				return ChainGang.Head;
			};

			// RETURN ELEMENT
			return newElement;
		} // end recruit

	};// end ChainGang
	return Object.create(ChainGang);
}// end Gang