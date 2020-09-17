var numbers = [10, 20, 30];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}//=>60

numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);
//何か一つのものに集約する

var primaryColor = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
]
primaryColor.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, [])


//()のバランスが取れているか
function BalancedParents(string) {
    return !string.split('').reduce(function (previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return previous + 1 }
        if (char === ')') { return previous - 1 }
    }, 0)
}

//演習１
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (sum, trip) {
    return sum + trip.distance;
}, 0)

//演習２
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function (acc, desk) {
    if (desk.type === 'sitting') { acc.sitting += 1 }
    if (desk.type === 'standing') { acc.standing += 1 }
    return acc
}, { sitting: 0, standing: 0 });

//演習３
