function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every(function(element, index) {
		return element === arr2[index];
	})
}

function getUsersNamesInAgeRange(users, gender) {
	if (users.length === 0) {
		return 0;
	}
	const user = users.filter(user => user.gender === gender);
	if (user.length === 0) {
		return 0;
	}
	const ages = user.map(user => user.age);
	const averagAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
	return averagAge;
}