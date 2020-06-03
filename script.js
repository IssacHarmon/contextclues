var friends = ['amy', 'bart', 'kelly', 'jack', 'maggie'];
var locations = [
	'bathroom',
	'kitchen',
	'foyer',
	'dining room',
	'office',
	'library',
	'sun room',
	'shed',
	'garden',
	'driveway'
];
var weapons = ['gun', 'hammer', 'lamp', 'knife', 'trebuchet', 'spatula', 'candle', 'spoon', 'flashlight', 'bottle'];

document.addEventListener('DOMContentLoaded', function () {
	for (var i = 1; i < 101; i++) {
		var h3 = document.createElement('h3');
		h3.innerText = `Accusation ${i}`;
		document.body.appendChild(h3);
		var details = alertDetails(i);
		h3.addEventListener('click', details);
	}
});

function alertDetails(i) {
	return function () {
		alert(
			`Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${
				locations[i % locations.length]
			}!`
		);
	};
}
