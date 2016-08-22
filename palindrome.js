// check to see how many times individual characters exist in the string
// For a string to be a palindrome, it should do the following
// 1. has at most one character recurring odd number of times
// 2. + all other characters recurring even number of times

var isPalindrome = function(string) {
	var oddCharacters = [] // [ d, g ]
	string.split(""); // [m, a, d, g, g, g, a, m]
	// loop through splitted string, and for each characters determine how many times it exists in the array ===> if this happens even, then ignore it
	// if a character exists odd number of times in array, we add that into our empty array
	// then we count the number of characters array, and check to see if that's <= 1
	// if true then palindrome
};