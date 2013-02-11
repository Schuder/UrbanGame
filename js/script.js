var allBuildings = 'cell-store cell-cottage cell-graveyard cell-church cell-factory cell-farm cell-erase cell-empty cell-road cell-bridge cell-bridgeCanal cell-canal';
var allTerrain = 'terrain-forest terrain-plains';
var building = 'cell-erase';
var world = new Array();	
var cellCount=29;

generateWorld();

function generateWorld() {

	
	for (var i =0; i < 10; i++) {
		biomeGen('terrain-forest',10);
	}		
	
	biomeGenRiver();
	
	for (var i = 0; i < 929; i++) {
	
		if (typeof world[i] == 'undefined') {
			world[i] = 'terrain-plains';
		
		}
	
	}
	
}

function biomeGen(biomeName,sizeRange) {

	var randomOrigin = Math.floor((Math.random()*928)+1);
	var randomSize = Math.floor((Math.random()*sizeRange)+1);
	var cells = new Array();
	
	console.log(randomOrigin);
	
	cells = getOriginOffsets(randomOrigin,2);

	world[cells.origin] = biomeName;
	world[cells.adjacentTop] = biomeName;
	world[cells.adjacentLeft] = biomeName;
	world[cells.adjacentRight] = biomeName;
	world[cells.topLeftDiagonal] = biomeName;
	world[cells.adjacentBottom] = biomeName;
	
	for (var i = 0; i < randomSize; i++) {
	
		cells = getOriginOffsets(randomOrigin+28+i,2);

		world[cells.origin] = biomeName;
		world[cells.adjacentTop] = biomeName;
		world[cells.adjacentLeft] = biomeName;
		world[cells.adjacentRight] = biomeName;
		world[cells.topLeftDiagonal] = biomeName;
		world[cells.topLeftDiagonal] = biomeName;
		world[cells.adjacentBottom] = biomeName;		
	
	}

}

function biomeGenRiver() {

	var randomSpread = Math.floor((Math.random()*5)+1);
	var origin = 900;
	var cells = new Array();
	
	cells = getOriginOffsets(origin, 2);
	
	for (var i = 0; i < 60; i++)  {
		
		randomSpread = Math.floor((Math.random()*5)+1);
	
		if (randomSpread==1 || randomSpread==5) {
		
			origin = cells.adjacentTop;
			
		}
		else if (randomSpread==2 || randomSpread==4) {
		
			if (!(onMapEdge(cells.adjacentRight))){
				origin = cells.adjacentRight;
			}
			else {
				world[cells.adjacentRight] = 'terrain-river';	
				break;
			}
			
		}
		else if (randomSpread==3) {
		
			if (!(onMapEdge(cells.topRightDiagonal))){
				origin = cells.topRightDiagonal;
			}
			else {
				world[cells.topRightDiagonal] = 'terrain-river';	
				break;
			}
			
		}

		world[cells.origin] = 'terrain-river';	
		world[cells.adjacentBottom] = 'terrain-river';	
		world[cells.adjacentTop] = 'terrain-river';
		
		
		cells = getOriginOffsets(origin, 2);
		
		world[cells.origin] = 'terrain-river';	
				

	
	}
	

}

function onMapEdge(cell) {

	var edges = new Array();
	edges[0] = 29;
	console.log(cell);
	for (var i =1; i < 33; i++) {
	
		edges[i] =  edges[i-1] + 29;
	
	}
	
	for (var i =0; i < 32; i++) {
		
		if (cell==edges[i]) {
			return true;
		}
	
	}
	
	return false;

}

function grid() {
	
	var square;
	var row = '<div class="row" ng-controller="BuildCtrl" ></div>';
	var gridContents = '<div class="row ng-scope" ng-controller="BuildCtrl"><div id="cell-1" class=" square '+world[1]+' cell-empty" ng-click="build(1)"></div><div id="cell-2" class=" square '+world[2]+' cell-empty" ng-click="build(2)"></div><div id="cell-3" class=" square '+world[3]+' cell-empty" ng-click="build(3)"></div><div id="cell-4" class=" square '+world[4]+' cell-empty" ng-click="build(4)"></div><div id="cell-5" class=" square '+world[5]+' cell-empty" ng-click="build(5)"></div><div id="cell-6" class=" square '+world[6]+' cell-empty" ng-click="build(6)"></div><div id="cell-7" class=" square '+world[7]+' cell-empty" ng-click="build(7)"></div><div id="cell-8" class=" square '+world[8]+' cell-empty" ng-click="build(8)"></div><div id="cell-9" class=" square '+world[9]+' cell-empty" ng-click="build(9)"></div><div id="cell-10" class=" square '+world[10]+' cell-empty" ng-click="build(10)"></div><div id="cell-11" class=" square '+world[11]+' cell-empty" ng-click="build(11)"></div><div id="cell-12" class=" square '+world[12]+' cell-empty" ng-click="build(12)"></div><div id="cell-13" class=" square '+world[13]+' cell-empty" ng-click="build(13)"></div><div id="cell-14" class=" square '+world[14]+' cell-empty" ng-click="build(14)"></div><div id="cell-15" class=" square '+world[15]+' cell-empty" ng-click="build(15)"></div><div id="cell-16" class=" square '+world[16]+' cell-empty" ng-click="build(16)"></div><div id="cell-17" class=" square '+world[17]+' cell-empty" ng-click="build(17)"></div><div id="cell-18" class=" square '+world[18]+' cell-empty" ng-click="build(18)"></div><div id="cell-19" class=" square '+world[19]+' cell-empty" ng-click="build(19)"></div><div id="cell-20" class=" square '+world[20]+' cell-empty" ng-click="build(20)"></div><div id="cell-21" class=" square '+world[21]+' cell-empty" ng-click="build(21)"></div><div id="cell-22" class=" square '+world[22]+' cell-empty" ng-click="build(22)"></div><div id="cell-23" class=" square '+world[23]+' cell-empty" ng-click="build(23)"></div><div id="cell-24" class=" square '+world[24]+' cell-empty" ng-click="build(24)"></div><div id="cell-25" class=" square '+world[25]+' cell-empty" ng-click="build(25)"></div><div id="cell-26" class=" square '+world[26]+' cell-empty" ng-click="build(26)"></div><div id="cell-27" class=" square '+world[27]+' cell-empty" ng-click="build(27)"></div><div id="cell-28" class=" square '+world[28]+' cell-empty" ng-click="build(28)"></div><div id="cell-29" class=" square '+world[29]+' cell-empty" ng-click="build(29)"></div></div>';
	var rowContents='<div id=cell-'+cellCount+' class="square {{structure}}" ng-click="build()"></div>';
	
	for (var i = 0; i < 31; i++) {
	
		cellCount++;
	
		rowContents='<div id=cell-'+cellCount+' class=" square '+world[cellCount]+' cell-empty" ng-click=build('+cellCount+')></div>';	
	
		for (var j = 0; j < 28; j++) {
		
			cellCount++;
		
			square ='<div id=cell-'+cellCount+' class=" square '+world[cellCount]+' cell-empty" ng-click=build('+cellCount+')></div>';	
		
			rowContents = rowContents+square;
		}		
		
		row = '<div class="row" ng-controller="BuildCtrl" >'+rowContents+'</div>'
		
		gridContents = gridContents+row;		
	
	}
	
	return('<div class="grid">' + gridContents + '</div>');
	
}

function getOriginOffsets(origin,pick) {

	var asociativeCells = new Array();
	var indexCells = new Array();
	var indexNumCells = new Array();
	var asociativeNumCells = new Array();
	
	asociativeCells["bottomLeftDiagonal"] = 'cell-'+(origin + 28);
	asociativeCells["adjacentBottom"] = 'cell-'+(origin + 29);
	asociativeCells["bottomRightDiagonal"] = 'cell-'+(origin + 30);	
	asociativeCells["adjacentLeft"] = 'cell-'+(origin - 1);	
	asociativeCells["origin"] = 'cell-'+origin;	
	asociativeCells["adjacentRight"] = 'cell-'+(origin + 1);	
	asociativeCells["topLeftDiagonal"] = 'cell-'+(origin - 30);
	asociativeCells["adjacentTop"] = 'cell-'+(origin - 29);
	asociativeCells["topRightDiagonal"] = 'cell-'+(origin - 28);
	
	asociativeNumCells["bottomLeftDiagonal"] = origin + 28;
	asociativeNumCells["adjacentBottom"] = origin + 29;
	asociativeNumCells["bottomRightDiagonal"] = origin + 30;	
	asociativeNumCells["adjacentLeft"] = origin - 1;	
	asociativeNumCells["origin"] = origin;	
	asociativeNumCells["adjacentRight"] = origin + 1;	
	asociativeNumCells["topLeftDiagonal"] = origin - 30;
	asociativeNumCells["adjacentTop"] = origin - 29;
	asociativeNumCells["topRightDiagonal"] = origin - 28;	
	
	indexCells[1] = 'cell-'+(origin + 28);
	indexCells[2] = 'cell-'+(origin + 29);
	indexCells[3] = 'cell-'+(origin + 30);	
	indexCells[4] = 'cell-'+(origin - 1);	
	indexCells[5] = 'cell-'+origin;	
	indexCells[6] = 'cell-'+(origin + 1);	
	indexCells[7] = 'cell-'+(origin - 30);
	indexCells[8] = 'cell-'+(origin - 29);
	indexCells[9] = 'cell-'+(origin - 28);	
	
	indexNumCells[1] = origin + 28;
	indexNumCells[2] = origin + 29;
	indexNumCells[3] = origin + 30;	
	indexNumCells[4] = origin - 1;	
	indexNumCells[5] = origin;	
	indexNumCells[6] = origin + 1;	
	indexNumCells[7] = origin - 30;
	indexNumCells[8] = origin - 29;
	indexNumCells[9] = origin - 28;	
	
		
	
	if (pick==0) {
		return asociativeCells;
	}
	else if (pick==1) {
		return indexCells;
	}
	else if (pick==2) {
		return asociativeNumCells;
	}
	else if (pick==3) {
		return indexNumCells;
	}

}

function cellHasClass(cell,searchClass,searchClass2,searchClass3) {

	if (searchClass2==undefined) {

		if (angular.element(document.getElementById(cell)).hasClass(searchClass)) {
			return true;
		}
	}
	else if (searchClass2 != undefined) {
	
		if (angular.element(document.getElementById(cell)).hasClass(searchClass) && angular.element(document.getElementById(cell)).hasClass(searchClass2) ) {
			return true;
		}	
		
	}
	else if (searchClass3 != undefined) {
	
		if (angular.element(document.getElementById(cell)).hasClass(searchClass) && angular.element(document.getElementById(cell)).hasClass(searchClass2) && angular.element(document.getElementById(cell)).hasClass(searchClass23) ) {
			return true;
		}	
		
	}	
	return false;
}

function buildFactory(origin) {

	var cells = new Array();
	
	cells = getOriginOffsets(origin,0);

	if (cellHasClass(cells.origin,'cell-empty','terrain-plains') && cellHasClass(cells.topRightDiagonal,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentTop,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentRight,'cell-empty','terrain-plains')) {

		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
		angular.element(document.getElementById(cells.topRightDiagonal)).removeClass(allBuildings).addClass(building);
		angular.element(document.getElementById(cells.adjacentTop)).removeClass(allBuildings).addClass(building);
		angular.element(document.getElementById(cells.adjacentRight)).removeClass(allBuildings).addClass(building);
	
		console.log('Built a factory!');
	
	}	

}

function buildCottage(origin) {

	var cells = new Array();
	
	cells = getOriginOffsets(origin,0);
	
	if (cellHasClass(cells.origin,'cell-empty','terrain-plains') && cellHasClass(cells.bottomLeftDiagonal,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentBottom,'cell-empty','terrain-plains') && cellHasClass(cells.bottomRightDiagonal,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentLeft,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentRight,'cell-empty','terrain-plains') && cellHasClass(cells.topLeftDiagonal,'cell-empty','terrain-plains') && cellHasClass(cells.origin,'cell-empty','terrain-plains') && cellHasClass(cells.adjacentTop,'cell-empty','terrain-plains') && cellHasClass(cells.topRightDiagonal,'cell-empty','terrain-plains')) {
	
		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
		angular.element(document.getElementById(cells.bottomLeftDiagonal)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.adjacentBottom)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.bottomRightDiagonal)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.adjacentLeft)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.adjacentRight)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.topLeftDiagonal)).removeClass(allBuildings).addClass('cell-farm');			
		angular.element(document.getElementById(cells.adjacentTop)).removeClass(allBuildings).addClass('cell-farm');
		angular.element(document.getElementById(cells.topRightDiagonal)).removeClass(allBuildings).addClass('cell-farm');		

		console.log('Built a cottage!');			
		
	}
		
}

function buildRoad(origin) {

	var cells = new Array();
	
	cells = getOriginOffsets(origin,0);

	if (building == 'cell-road' && !(cellHasClass(cells.origin,'terrain-river'))) {
		
		if (!(cellHasClass(cells.origin,'cell-canal')) && !(cellHasClass(cells.origin,'cell-farm')) && !(cellHasClass(cells.origin,'cell-cottage')) && !(cellHasClass(cells.origin,'cell-factory')) ) {
		
			angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
		
		}
	
	}
	
	else if (building == 'cell-bridge' && cellHasClass(cells.origin,'terrain-river')) {
		
		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
	
	}
	
	else if (building == 'cell-bridge' && cellHasClass(cells.origin,'cell-canal')) {
	
		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass('cell-bridgeCanal');		
	
	}

	else if (building == 'cell-canal' && cellHasClass(cells.origin,'terrain-river') || cellHasClass(cells.adjacentTop,'cell-canal')|| cellHasClass(cells.adjacentBottom,'cell-canal')) {
		
		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
	
	}	

}

function destroy(origin) {

	var cells = new Array();
	
	cells = getOriginOffsets(origin,0);
	
	if(cellHasClass(cells.origin,'cell-factory')) {
	
		destroyFactory(origin);
		
	}
	else {
	
		angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).removeClass(allTerrain).addClass('cell-empty terrain-plains');
	}	

}

function destroyFactory(origin) {

	var cells = new Array();
	
	cells = getOriginOffsets(origin,1);	
	
	for (var i = 0; i <3; i+=2) {
	
		if (cellHasClass(cells[5],'cell-factory') && cellHasClass(cells[7+i],'cell-factory') && cellHasClass(cells[8],'cell-factory') && cellHasClass(cells[4+i],'cell-factory')) {

			angular.element(document.getElementById(cells[5])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[7+i])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[8])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[4+i])).removeClass(allBuildings).addClass(building).addClass('cell-empty');		

		}	
		else if (cellHasClass(cells[5],'cell-factory') && cellHasClass(cells[1+i],'cell-factory') && cellHasClass(cells[2],'cell-factory') && cellHasClass(cells[4+i],'cell-factory')) {

			angular.element(document.getElementById(cells[5])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[1+i])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[2])).removeClass(allBuildings).addClass(building).addClass('cell-empty');
			angular.element(document.getElementById(cells[4+i])).removeClass(allBuildings).addClass(building).addClass('cell-empty');		

		}		
	
	}

}

function BuildCtrl($scope) {
	
	$scope.build = function(origin) {
	
		var cells = new Array();
		
		cells = getOriginOffsets(origin,0);		
		
		console.log('New Cell');
		console.log('bottomLeftDiagonal ' + cells.bottomLeftDiagonal);
		console.log('adjacentBottom ' + cells.adjacentBottom);
		console.log('bottomRightDiagonal ' + cells.bottomRightDiagonal);
		console.log('adjacentLeft ' + cells.adjacentLeft);
		console.log('origin ' + cells.origin);
		console.log('adjacentRight ' + cells.adjacentRight);
		console.log('topLeftDiagonal ' + cells.topLeftDiagonal);
		console.log('adjacentTop ' + cells.adjacentTop);
		console.log('topRightDiagonal ' + cells.topRightDiagonal);
		
		
		if (building=='cell-factory') {
		
			buildFactory(origin);
			
		}
		else if (building=='cell-cottage') {
		
			buildCottage(origin);
			
		}
		else if (building=='cell-road' || building=='cell-bridge' || building=='cell-canal') {
			
			buildRoad(origin);
			
		}
		else if (building=='cell-erase') {
			
			destroy(origin);
			
		}
		else {

			angular.element(document.getElementById(cells.origin)).removeClass(allBuildings).addClass(building);
		
		}
	}

}

function SelectCtrl($scope) {
	
	$scope.select = function(buildingName) {
	
		var string = buildingName;
		
		building= 'cell-' + buildingName;
	
	}

}

function MenuCtrl($scope) {
	
	
	$scope.clear = function() {
	
		console.log('Clearing');
		
		for (i=0; i < 927; i++) {
			angular.element(document.getElementById('cell-'+i)).removeClass(allBuildings).addClass('cell-empty');
		}
	
	}

}

angular.module('myApp',[])
	
	.directive('grid',function() {
		return {
			restrict: 'E',
			template: grid()	
		}
	});	
	

