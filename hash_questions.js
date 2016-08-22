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


----------------------------


// Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]

//grab the anagrams from one large array
	-for loop that takes first word in array, split each letter of that word into new array
	-compare each letter in new array in rest of 
//put the anagrams back into each variable, one variable per anagram
//fill one large array with each index an anagram variable

// hashmap = [e,a,s,t]
// loop through hashmap and for each chars we are going to see if they exist (indexOf) in strings (for example, 'cars' will give us -1 value)
// countMatchChars = 0;
// if count variable becomes 4, then two words are anagrams