// Code your solution in this file!
function returnFirstTwoDrivers(firstDrivers) {
    return firstDrivers = ["Antonia", "Nuru"];
}

function returnLastTwoDrivers(lastDrivers) {
    return lastDrivers = ["Amari", "Mo"];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function(value) {
        return fareMultiplier * value;
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, lastDrivers) {
return drivers = lastDrivers;
}
