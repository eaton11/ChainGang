function Gang(){
	var ChainGang = {
		Head: null,
		Element: function(_TYPE){
			var newElement = document.createElement(_TYPE);
			if(ChainGang.Head === null) ChainGang.Head = newElement;
			newElement.Id = function(_ID){
				this.id = _ID;
				return this;
			};
			newElement.Class = function(_CLASS){
				this.classList.add(_CLASS);
				return this;
			};
			newElement.RemoveClass = function(_CLASS){
				this.classList.remove(_CLASS);
				return this;
			};
			newElement.ToggleClass = function(_CLASS){
				this.classList.toggle(_CLASS);
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
			newElement.Data = function(_NAME, _VALUE){
				this.dataset[_NAME] = _VALUE;
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
			}
			newElement.Chain = function(_ELEMENT){
				var newerElement = ChainGang.Element(_ELEMENT);
				this.appendChild(newerElement);
				return newerElement;
			};
			newElement.Sibling = function(_ELEMENT){
				var newerElement = ChainGang.Element(_ELEMENT);
				this.parentNode.insertBefore(newerElement, this.nextSibling);
				return newerElement;
			};
			newElement.Up = function(){
				return this.parentNode;
			};
			newElement.End = function(){
				return ChainGang.Head;
			};
			return newElement;
		},
		Fragment : function(){
			var newFrag = document.createDocumentFragment();
			newFrag.Chain = function(_OBJECT){
				this.appendChild(_OBJECT);
				return this;
			}
			return newFrag;
		}
	};
	return Object.create(ChainGang);
}