function Gang(){
	var ChainGang = {
		Element: function(_TYPE){
			var newElement = document.createElement(_TYPE);
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
			newElement.Src = function(_SRC){
				this.src = _SRC;
				return this;
			};
			newElement.Href = function(_HREF){
				this.href = _HREF;
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
			newElement.InnerHTML = function(_HTML){
				this.innerHTML = _HTML;
				return this;
			};
			newElement.Chain = function(_TYPE){
				var newerElement = ChainGang.Element(_TYPE);
				this.appendChild(newerElement);
				return newerElement;
			};
			newElement.Sibling = function(_TYPE){
				var newerElement = ChainGang.Element(_TYPE);
				if(this.parentNode)
					this.parentNode.appendChild(newerElement);
				else
					console.error("attempting to add sibling to parentless node");
				return newerElement;
			};
			newElement.Up = function(){
				return this.parentNode;
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