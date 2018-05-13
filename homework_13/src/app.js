const app = angular.module('list', []);
app.controller('MyController', ['$scope', function($scope) {
  $scope.data = data;

  $scope.test = [];
  function ununiqueArr(){
  	for(let i=0; i<$scope.data.length;i++){
  		$scope.test.push($scope.data[i].categories);
  	}
  }
  ununiqueArr();

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  $scope.unique = $scope.test.filter( onlyUnique );

  $scope.showElement = true;
  $scope.testF = function(x){
  	let elem = document.getElementsByClassName(x)[0];
  	let all = document.getElementsByClassName('element');
  	for(let i=0; i<all.length;i++){
	  	all[i].classList.remove('ng-show');
	  	all[i].classList.add('ng-hide');
	}
  	elem.classList.remove('ng-hide');
  	elem.classList.add('ng-show');
  }

  $scope.showAll = function(){
  	$scope.showElement = true;
  	let all = document.getElementsByClassName('element');
  	for(let i=0; i<all.length;i++){
	  	all[i].classList.add('ng-show');
	  	all[i].classList.remove('ng-hide');
	}
  }

  $scope.update = function(post){
  	let amount = $scope.data.length;
  	post.id = amount;
  	$scope.data.push(post);
  	ununiqueArr();
  	$scope.unique = $scope.test.filter( onlyUnique );
  }

  // $scope.edit = function($event){
  // 	//console.log($event.currentTarget.parentNode.);
  // 	let elementsToEdit = $event.currentTarget.parentNode.getElementsByTagName('p');
  // 	elementsToEdit[0].innerHTML = '<input class="ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-model="editPost.title"  />';
  // 	elementsToEdit[1].innerHTML = '<input type="text" class="ng-pristine ng-untouched ng-valid ng-empty" ng-model="editPost.description"  />'

  // }
  // $scope.save=function(editPost){
  //   let val1 = document.getElementsByTagName('input')[1].value;
  //   let val2 = document.getElementsByTagName('input')[2].value;
    
  // }
 
}]);