function Gang(GANG_INPUT){

	function createFragment(GANG_INPUT){
		var GangFragment = document.createDocumentFragment();
		GangFragment.Head = GangFragment;
		GangFragment.Gang = true;
		GangFragment.Gang = function(){
			this.Last = this;
			return this;
		}

		if(GANG_INPUT && Object.prototype.toString.call( GANG_INPUT ) === '[object Array]'){
			for(var i = 0, ii = GANG_INPUT.length; i<ii; i++){
				GangFragment.appendChild(GANG_INPUT[i]);
			}
		}
		return GangFragment;
	}

	var FragObject = {
		Chain: function(_NODE, _CHILD){
			_CHILD = (typeof _CHILD !== 'undefined') ? _CHILD : true;
			var GANG_NODE;
			var idToAdd;
			var classToAdd;
			var addId = false;
			var addClass = false;
			var isDomNode = false;

			if( typeof _NODE === "string"){ 
				if(_NODE.substring(0, 1) === "#"){ // if already in the DOM
					GANG_NODE = document.getElementById(_NODE.substring(1, _NODE.length));
					isDomNode = true;
				}
				else if(_NODE.match(/[#]\w+[.]\w+/)){ // if has id and class
					addId = true;
					addClass = true;
					var elmArr1 = _NODE.split("#");
					var elmArr2 = elmArr1[1].split(".");
					GANG_NODE = document.createElement(elmArr1[0]);
					idToAdd = elmArr2[0];
					classToAdd = elmArr2[1];
				} else if(_NODE.match(/#/)){ // if has id only
					addId = true;
					var elmArr = _NODE.split("#");
					GANG_NODE = document.createElement(elmArr[0]);
					idToAdd = elmArr[1];
				} else if (_NODE.match(/[.]/)){ // if has class only
					addClass = true;
					var elmArr = _NODE.split(".");
					GANG_NODE = document.createElement(elmArr[0]);
					classToAdd = elmArr[1];
				} else { // just an element type with no id or class
					GANG_NODE = document.createElement(_NODE);
				}
			}  else { // already an object
				GANG_NODE = _NODE;
			}
			if(!isDomNode){
				if(this.Last === undefined || this.Last === null){
						this.appendChild(GANG_NODE);
				}
				else {
					try{
						(_CHILD) ? 
							this.Last.appendChild(GANG_NODE) : 
							this.Last.parentNode.insertBefore(GANG_NODE, this.Last.nextSibling) ;
					} catch(e){
						console.error("Container Gang Can't have Sibling");
					}

				}
			}
			this.Last = GANG_NODE;
			if(this.Last.Gang) this.Last = this.Last.Last;
			GANG_NODE.Head = this.Head;

			var FRAGMENT = this;
			FRAGMENT = FragObject.RECRUIT(FRAGMENT);

			if(addId) FRAGMENT.Id(idToAdd); 
			if(addClass) FRAGMENT.Class(classToAdd);

			GANG_NODE = FragObject.NODE_METHODS(GANG_NODE);

			if(isDomNode) 
				return GANG_NODE;
			else 
				return FRAGMENT;
		},

		NODE_METHODS: function(_NODE){
			var GANG_NODE = _NODE;
			GANG_NODE.Id 					= GANG_NODE.Head.Id;
			GANG_NODE.Class 			= GANG_NODE.Head.Class;
			GANG_NODE.RemoveClass	= GANG_NODE.Head.RemoveClass;
			GANG_NODE.ToggleClass	= GANG_NODE.Head.ToggleClass;
			GANG_NODE.Src 				= GANG_NODE.Head.Src;
			GANG_NODE.Href 				= GANG_NODE.Head.Href;
			GANG_NODE.Alt 				= GANG_NODE.Head.Alt;
			GANG_NODE.Data 				= GANG_NODE.Head.Data;
			GANG_NODE.Text 				= GANG_NODE.Head.Text;
			GANG_NODE.Type 				= GANG_NODE.Head.Type;
			GANG_NODE.Method 			= GANG_NODE.Head.Method;
			GANG_NODE.Action 			= GANG_NODE.Head.Action;
			GANG_NODE.Name 				= GANG_NODE.Head.Name;
			GANG_NODE.Value 			= GANG_NODE.Head.Value;
			GANG_NODE.Checked 		= GANG_NODE.Head.Checked;
			GANG_NODE.Placeholder = GANG_NODE.Head.Placeholder;
			GANG_NODE.Listener 		= GANG_NODE.Head.Listener;
			GANG_NODE.Attr 				= GANG_NODE.Head.Attr;
			GANG_NODE.Purge 			= GANG_NODE.Head.Purge;
			GANG_NODE.Up 					= GANG_NODE.Head.Up;
			GANG_NODE.Sibling 		= GANG_NODE.Head.Sibling;
			GANG_NODE.Chain 			= GANG_NODE.Head.Chain;

			return GANG_NODE;
		},

		RECRUIT: function(_NODE){
			var GANG_NODE = _NODE;
			GANG_NODE.Id = function(_ID){
				if(!this.Last)this.Last = this;
				this.Last.id = _ID;
				return this;
			};
			GANG_NODE.Class = function(_CLASS){
				if(!this.Last)this.Last = this;
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.Last.classList.add(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.Last.classList.add(_CLASS[i]);
					}
				}
				return this;
			};
			GANG_NODE.RemoveClass = function(_CLASS){
				if(!this.Last)this.Last = this;
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.Last.classList.remove(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.Last.classList.remove(_CLASS[i]);
					}
				}
				return this;
			};
			GANG_NODE.ToggleClass = function(_CLASS){
				if(!this.Last)this.Last = this;
				// STRING
				if(_CLASS && typeof _CLASS === "string"){
					this.Last.classList.toggle(_CLASS);
				// ARRAY
				} else if(Object.prototype.toString.call( _CLASS ) === '[object Array]') {
					for(var i=0, ii=_CLASS.length; i<ii; i++){
						this.Last.classList.toggle(_CLASS[i]);
					}
				}
				return this;
			};
			GANG_NODE.Src = function(_SRC){
				if(!this.Last)this.Last = this;
				this.Last.src = _SRC;
				return this;
			};
			GANG_NODE.Href = function(_HREF){
				if(!this.Last)this.Last = this;
				this.Last.href = _HREF;
				return this;
			};
			GANG_NODE.Alt = function(_ALT){
				if(!this.Last)this.Last = this;
				this.Last.alt = _ALT;
				return this;
			};
			GANG_NODE.Data = function(_OBJECT, _OptValue){
				if(!this.Last)this.Last = this;
				// if Object passed, ignore _OptValue and treat _OBJECT like an object
				if(Object.prototype.toString.call( _OBJECT ) === '[object Object]'){
					var keysArr = Object.keys(_OBJECT);
					for(var i=0, ii=keysArr.length; i<ii; i++){
							this.Last.dataset[keysArr[i]] = _OBJECT[keysArr[i]];
					}
				// if _OBJECT is not an object it is a key and _OptValue is a value
				} else if(typeof _OBJECT === "string") {
					this.Last.dataset[_OBJECT] = _OptValue;
				}
				return this;
			};
			GANG_NODE.Text = function(_TEXT){
				if(!this.Last)this.Last = this;
				this.Last.appendChild(document.createTextNode(_TEXT));
				return this;
			};
			GANG_NODE.Type = function(_TYPE){
				if(!this.Last)this.Last = this;
				this.Last.type = _TYPE;
				return this;
			};
			GANG_NODE.Method = function(_METHOD){
				if(!this.Last)this.Last = this;
				this.Last.method = _METHOD;
				return this;
			};
			GANG_NODE.Action = function(_ACTION){
				if(!this.Last)this.Last = this;
				this.Last.action = _ACTION;
				return this;
			};
			GANG_NODE.Name = function(_NAME){
				if(!this.Last)this.Last = this;
				this.Last.name = _NAME;
				return this;
			};
			GANG_NODE.Value = function(_VALUE){
				if(!this.Last)this.Last = this;
				this.Last.value = _VALUE;
				return this;
			};
			GANG_NODE.Checked = function(_BOOLEAN){
				if(!this.Last)this.Last = this;
				this.Last.checked = _BOOLEAN;
				return this;
			};
			GANG_NODE.Placeholder = function(_PLACEHOLDER){
				if(!this.Last)this.Last = this;
				this.Last.placeholder = _PLACEHOLDER;
				return this;
			};
			GANG_NODE.Listener = function(_EVENT, _CALLBACK){
				if(!this.Last)this.Last = this;
				this.Last.addEventListener(_EVENT,_CALLBACK);
				return this;
			};

			// Attr
			GANG_NODE.Attr = function(_OBJECT){
				if(!this.Last)this.Last = this;
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

			GANG_NODE.Purge = function(){
				if(!this.Last)this.Last = this;
				var parent = this.Last.parentNode;
				var sibling = this.Last.nextSibling;
				parent.removeChild(this);
				while (this.Last.firstChild) {
				  this.Last.removeChild(this.Last.firstChild);
				}
				parent.insertBefore(this,sibling);
				return this;
			};

			GANG_NODE.Up = function(){
				if(this.Last.parentNode) this.Last = this.Last.parentNode;
				return this;
			};
			GANG_NODE.Sibling = function(_NODE){
				if(!this.Last)this.Last = this;
				this.Chain(_NODE, false);
				return this;
			};
			return GANG_NODE;
		}
	}; // end FragObject

	var FRAGMENT = createFragment(GANG_INPUT);
	FRAGMENT.Chain = FragObject.Chain;
	FRAGMENT.Last = null;
	if(typeof GANG_INPUT === "string"){ // 
		FRAGMENT = FRAGMENT.Chain("#"+GANG_INPUT);
		FRAGMENT.Last = FRAGMENT;
	}
	return FRAGMENT;
}
