$(document).ready(function() {

	fizzbuzzer();

	function fizzbuzzer() {
	
		//Define fizzbuzzer Variables 
		var fizz = '<li>Fizz</li>';
		var buzz = '<li>Buzz</li>';
		var fizzBuzz = '<li>FizzBuzz</li>';
	
	
		$('#number').keyup(function(e) {
			
			//Get the value of the input box on "Enter."
			var newNumber = $('#number').val();
			if(e.keyCode == 13) {
				
				//Error Message - Number is not an Integer Value
				if (newNumber % 1 != 0) {
					$('#integer-error').show();
					$('#number').val('');
					$('#integer-error-button').click(function () {
						$('#integer-error').hide();
					})

				//Error Message - Number is not within the defined Range.		
				} else if (newNumber <= 0 || newNumber > 100) {
					$('#range-error').show();
					$('#number').val('');
					$('#range-error-button').click(function () {
					$('#range-error').hide();
					})
				} 
				
				//For Loop for Valid Numbers 
				else {
					var validNumber = parseInt(newNumber);
					for(var i=1; i<=validNumber; i++) {
						if ((i % 3 == 0) && (i % 5 == 0)) {
							$('ul').append(fizzBuzz);
						} else if (i % 3 == 0) {
							$('ul').append(fizz);
						} else if (i % 5 == 0) {
							$('ul').append(buzz);
						} else {
							$('ul').append('<li>' + i + '</li>');
						}
					} //close the for loop

				} 
			} // Close the keyCode If Statement
	
		}) // Close keyup function

	} //Close the fizzbuzzer function

}) //End of Script 