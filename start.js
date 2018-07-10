var quatersWorkingDay = [0, 0, 0, 0];
var quatersFreeDay = [0, 0, 0, 0];
/*
var firstWeekGrowth = 0;
var secoundWeekGrowth = 0;
var thirdWeekGrowth = 0;
var fourthWeekGrowth = 0;
var mounthlyGrowth = 0;
*/
/*
var values1sWorkingDay = [463, 464, 464, 461];
var values1sFreeDay = [463, 463, 464, 462]; 
fillQuaters(); 
document.write("Liczba GB przeslanych przez Internet w drugim tygodniu wrzesnia</br>" + getGrowthSecondWeek());
*/
/*
var values1sWorkingDay = [67, 67, 67, 67];
var values1sFreeDay = [66, 66, 66, 66];
fillQuaters();  
document.write("Liczba krotkich wiadomosci na Twitterze w drugim tygodniu wrzesnia</br>" + getGrowthSecondWeek());
*/
/*
var values1sWorkingDay = [554, 552, 553, 553];
var values1sFreeDay = [548, 547, 550, 547];
fillQuaters();
document.write("Liczba wyszukiwan w Google w drugim tygodniu wrzesnia</br>" + getGrowthSecondWeek());
*/
/*
var values1sWorkingDay = [23313, 23279, 23347, 23234];
var values1sFreeDay = [23003, 22959, 23076, 22979];
fillQuaters(); 
document.write("Liczba wyslanych wiadomosci elektronicznych w drugim tygodniu wzesnia</br>" + getGrowthSecondWeek());
*/

/* var values1sWorkingDay = [11, 11, 11, 11];
var values1sFreeDay = [11, 11, 11, 11];
fillQuaters();
document.write("Liczba postow na Tumblerze we wrzesniu</br>" + getGrowthSecondWeek()); */

var values1sWorkingDay = [37, 37, 37, 37];
var values1sFreeDay = [37, 37, 36, 37];
fillQuaters();
document.write("Liczba krotkich wiadomosci na Twitterze w krajach z jezykiem niemieckim w ciagu dwoch ostatnich tygodni" 
 + "sierpnia</br>" + (10 * getDailyGrowth(true) + 2 * getDailyGrowth(false)));

//firstWeekGrowth = getGrowthFirstWeek();
//secoundWeekGrowth = getGrowthSecondWeek();
//thirdWeekGrowth = getGrowthThirdWeek();
//fourthWeekGrowth = getGrowthFourthWeek();
//mounthlyGrowth = firstWeekGrowth + secoundWeekGrowth + thirdWeekGrowth + fourthWeekGrowth;
/*
document.write("Przyrost w pierwszym tygodniu maja " + firstWeekGrowth + 
				" a w Polsce " + Math.round(firstWeekGrowth * 0.007186119) + "</br>");
document.write("Przyrost w drugim tygodniu maja " + secoundWeekGrowth + 
				" a w Polsce " + Math.round(secoundWeekGrowth * 0.007186119) + "</br>");
document.write("Przyrost w trzecim tygodniu maja " + thirdWeekGrowth + 
				" a w Polsce " + Math.round(thirdWeekGrowth * 0.007186119) + "</br>");
document.write("Przyrost w czwartym tygodniu maja " + fourthWeekGrowth + 
				" a w Polsce " + Math.round(fourthWeekGrowth * 0.007186119) + "</br>");;
document.write("Przyrost w maju " + mounthlyGrowth + 
				" a w Polsce " + Math.round(mounthlyGrowth * 0.007186119) + "</br>");;
*/
function fillQuaters() {
	for(var q = 0; q < 4; q++) {
		quatersWorkingDay[q] = Math.round(values1sWorkingDay[q] * 60 * 60 * 6 - values1sWorkingDay[q] * 60);
		quatersFreeDay[q] = Math.round(values1sFreeDay[q] * 60 * 60 * 6 - values1sFreeDay[q] * 60);
	} 
}				
/* 				
function fillQuaters1factor() {
	for(var q = 0; q < 4; q++) {
		quatersWorkingDay[q] = Math.round(values1sWorkingDay[q] * factor * 60 * 60 * 6 - values1sWorkingDay[q] * 60);
		quatersFreeDay[q] = Math.round(values1sFreeDay[q] * factor * 60 * 60 * 6 - values1sFreeDay[q] * 60);
	} 
}

function fillQuaters2factors() {
	for(var q = 0; q < 4; q++) {
		quatersWorkingDay[q] = 
			Math.round(values1sWorkingDay[q] * factorWorkingDay * 60 * 60 * 6 - values1sWorkingDay[q] * 60);
		quatersFreeDay[q] = Math.round(values1sFreeDay[q] * factorFreeDay * 60 * 60 * 6 - values1sFreeDay[q] * 60); 
	}
}

function fillQuaters3factors() {
	for(var q = 0; q < 4; q++) {
		if(q == 0) {
			quatersWorkingDay[0] = 
				Math.round(values1sWorkingDay[0] * factorWorkingDayNight * 60 * 60 * 6 - values1sWorkingDay[0] * 60);
		}
		else {
			quatersWorkingDay[q] = 
				Math.round(values1sWorkingDay[q] * factorWorkingDay * 60 * 60 * 6 - values1sWorkingDay[q] * 60);	
		}
		quatersFreeDay[q] = Math.round(values1sFreeDay[q] * factorFreeDay * 60 * 60 * 6 - values1sFreeDay[q] * 60); 
	}
}*/

/* function getGrowthFirstWeek() {
	return 4 * getDailyGrowth(true) + 2 * getDailyGrowth(false);
} */

function getGrowthSecondWeek() {
	return 5 * getDailyGrowth(true) + 2 * getDailyGrowth(false);
}

/* function getGrowthThirdWeek() {
	return 5 * getDailyGrowth(true) + 2 * getDailyGrowth(false);
}

function getGrowthFourthWeek() {
	return 4 * getDailyGrowth(true);
} */

function getDailyGrowth(workingDay) {
	var quaters = workingDay ? quatersWorkingDay : quatersFreeDay;
	var growth = quaters[0];
	for(var q = 1; q < 4; q++) {
		growth += quaters[q];
	}
	return growth;
}