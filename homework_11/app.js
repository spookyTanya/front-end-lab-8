var rootNode = document.getElementById("root");


function start(structure, parent, clash){
	for(var i=0; i<structure.length; i++){
		var node = document.createElement("ul");
		var inode = document.createElement("i");
			inode.className = "material-icons"
		if(structure[i].folder){
			inode.innerHTML = "folder";
		} else { inode.innerHTML = "insert_drive_file";}
		node.appendChild(inode);
		if(clash===true){
			node.className = "show";
		} else node.className = "hide";
		var textnode = document.createTextNode(structure[i].title);
		node.appendChild(textnode);
		if(structure[i].folder){
			node.addEventListener("click", clicki);
		}

		parent.appendChild(node);
		if(structure[i].folder && structure[i].children){
			start(structure[i].children, node, false);
		}
	}
}


function clicki(event){
	var inode = this.childNodes[0];
	if(inode.innerHTML == "folder"){
		inode.innerHTML = "folder_open";
		for(var i=1; i<this.children.length; i++){
			this.children[i].className = "show";
		}
	} else {
		inode.innerHTML = "folder";
		for(var i=1; i<this.children.length; i++){
			this.children[i].className = "hide";
		}
	}
}

window.addEventListener("load", start(structure, rootNode, true));

