var rootNode = document.getElementById("root");
var starturl = location.href;
function setLoc(){
	var x = this.childNodes[2].innerHTML;
	location.href = '#' + x;
	var main = this.parentNode;
}

function func(){
	var x = location.hash.replace(/#/, "");
	
	var container = document.getElementById("tanks");
	while (container.firstChild) {
    	container.removeChild(container.firstChild);
	}

	var rootn = document.getElementById('root');
	rootn.removeChild(rootn.firstChild); 

	for(var i=0; i<tanks.length; i++)
	if(x===tanks[i].model){

		var inode = document.createElement("img");
		inode.className = "country-imgSolo";
		inode.src = tanks[i]["country_image"];
		container.appendChild(inode);

		var nameofpage =  document.createElement("h1");
		nameofpage.innerHTML = tanks[i].model;
		nameofpage.innerHTML += " (level ";
		nameofpage.innerHTML += tanks[i].level;
		nameofpage.innerHTML += ")";
		container.appendChild(nameofpage);

		var h2 = document.createElement("h2");
		h2.innerHTML = "Preview";
		container.appendChild(h2);

	
		var imgnode = document.createElement("img");
		imgnode.className = "imgSolo";
		imgnode.src = tanks[i].preview;
		container.appendChild(imgnode);

		var character = document.createElement("h2");
		character.className = "mt";
		character.innerHTML = "Characterictics";
		container.appendChild(character); 


			var table = document.createElement('TABLE');
			var tr = document.createElement('TR');
			
			var td = document.createElement('TD');
			td.appendChild(document.createTextNode("damage"));
			td.width = '500';

			var td1 = document.createElement('TD');
			td1.appendChild(document.createTextNode(tanks[i].details.damage));
			td1.width = '200';

			tr.appendChild(td);
			tr.appendChild(td1);
			table.appendChild(tr);


			var tr = document.createElement('TR');
			var td = document.createElement('TD');
			td.appendChild(document.createTextNode("breoning"));
			td.width = '500';

			var td1 = document.createElement('TD');
			td1.appendChild(document.createTextNode(tanks[i].details.breoning));
			td1.width = '200';

			tr.appendChild(td);
			tr.appendChild(td1);
			table.appendChild(tr);


			var tr = document.createElement('TR');
			var td = document.createElement('TD');
			td.appendChild(document.createTextNode("attack speed"));
			td.width = '500';

			var td1 = document.createElement('TD');
			td1.appendChild(document.createTextNode(tanks[i].details.attack_speed));
			td1.width = '200';

			tr.appendChild(td);
			tr.appendChild(td1);
			table.appendChild(tr);


			var tr = document.createElement('TR');
			var td = document.createElement('TD');
			td.appendChild(document.createTextNode("time of targeting"));
			td.width = '500';

			var td1 = document.createElement('TD');
			td1.appendChild(document.createTextNode(tanks[i].details.time_of_targeting));
			td1.width = '200';

			tr.appendChild(td);
			tr.appendChild(td1);
			table.appendChild(tr);


			var tr = document.createElement('TR');
			var td = document.createElement('TD');
			td.appendChild(document.createTextNode("ammunition"));
			td.width = '500';

			var td1 = document.createElement('TD');
			td1.appendChild(document.createTextNode(tanks[i].details.ammunition));
			td1.width = '200';

			tr.appendChild(td);
			tr.appendChild(td1);
			table.appendChild(tr);

		container.appendChild(table);
		var back = document.createElement("p");
		back.innerHTML = "Back to list view";
		back.addEventListener("click", goBack);
		var br = document.createElement("br");
		container.appendChild(back);
	}
}

function goBack() {
    // = document.getElementById("tanks");
    location.href = starturl;
	while (rootNode.firstChild) {
    	rootNode.removeChild(rootNode.firstChild);
	}
    start(tanks, rootNode);
}

function start(structure, root){
	var nameofpage =  document.createElement("h1");
	nameofpage.innerHTML = "Most popular tanks";
	rootNode.appendChild(nameofpage);

	var divMain = document.createElement("div");
	divMain.id = "tanks";
	rootNode.appendChild(divMain);

	for(var i=0; i<structure.length; i++){
		var divnode = document.createElement("div");
		divnode.className = "thumbnail ";
		divnode.className += structure[i].model;
		var imgnode = document.createElement("img");

		imgnode.className = "thumbnail-img";
		imgnode.src = structure[i].preview;
		divnode.appendChild(imgnode);

		var inode = document.createElement("img");
		inode.title = structure[i].country;
		inode.className = "country-img";
		inode.src = structure[i]["country_image"];
		divnode.appendChild(inode);

		var model = document.createElement("h4");
		model.innerHTML = structure[i].model;
		model.title = structure[i].model;
		model.className = "truncate-with-css-ellipsis";
		divnode.appendChild(model);
		divnode.addEventListener("click", setLoc);
		divnode.title = "Click to details";
		window.addEventListener("hashchange", func);
			
		divMain.appendChild(divnode);
	}
}

window.addEventListener("load", start(tanks,rootNode));
