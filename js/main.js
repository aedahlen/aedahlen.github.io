function askQuestions () {

var firstName = prompt ('What is your first name?');
var lastName = prompt ('What is your last name?');
var fullName = firstName + ' ' + lastName;

console.log(fullName);

var age = prompt ('How old are you?');
age = parseInt (age);

if (age >= 18) {
	console.log ('User is an adult.');
} else if (age >= 13) {
	console.log('User is a teenager.');
} else {
	console.log ('User is a child.');
}

var faveColor = prompt('What is your favorite color?');
faveColor = faveColor.toLowerCase().trim();
if (faveColor == 'red' ||
	faveColor == 'blue' ||
	faveColor == 'green' ||
	faveColor == 'yellow') {
	$('.main').css('background-color', faveColor);
}

if (firstName == 'General' && lastName != 'Assembly') {
	console.log ('Hello General!');
	$('h1').text('Hello '+fullName);
	}

}
	




// When the page has loaded 
$(function() {

	$('img').on('click', askQuestions);

	// When the user clicks an h3
	$('h3').on('click', function() { 	 

		// Toggle the next element 
		$(this).next().slideToggle(100);

	});
});