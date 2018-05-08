import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import list from './list';


class Single extends Component {
	constructor(props){
		super(props);
		
	}


	test(event){
		let amount = document.getElementsByClassName('selected').length;
		if(amount<=9){
			event.target.parentNode.style.display = "none";
			let b = event.target.parentNode.style.background;
			let id = event.target.parentNode.id;
			var a = `<div class='selected' style='background: ${b}'><i class='material-icons' onclick='this.parentNode.style.display = "none"; document.getElementById(${id}).style.display="inline-block"'>delete</i></div>`;
			var cont = document.getElementsByClassName('container')[0];
			cont.innerHTML += a;
			let amountcont = document.getElementsByClassName('amount')[0];
			amountcont.innerHTML = `${amount+1} colors`;
		}
	}
	
	

	renderList(){
	  	return(
			list?
			list.map(item =>(
				<div className="color" id={item.id} key={item.id} style={{background: item.color}}>
					<div className='add' onClick={this.test}><i className="material-icons">add</i>Add</div>
				</div>
			)): null
		);
  }  

  render() {
   return (
      <div>
      	
      	{this.renderList()}

      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(Single);