let form = document.querySelector('#addEvent');

let calendarName = document.location.search;
// console.log(calendarName);
calendarName = calendarName.replace('?','');
// console.log(calendarName);
calendarNameArr = calendarName.split('=');
// console.log(calendarNameArr);
calendarName = calendarNameArr[1];
//console.log(calendarName);

form.addEventListener('submit',function(e){
	e.preventDefault();

	let form = this;

	let input_name = form.querySelector('#name'),
		input_nameValue = input_name.value;

		console.log(input_nameValue);

	let selected_Users = form.querySelector('#users'),
		selected_UsersValue = [...selected_Users.selectedOptions];

	selected_UsersValue = selected_UsersValue.map(function(option){
		return option.value;
	})

		console.log(selected_UsersValue);

	let selected_Day = form.querySelector('#day'),
		selected_DayValue = selected_Day.value;

		console.log(selected_DayValue);

	let selected_hour = form.querySelector('#hour'),
		selected_hourValue = selected_hour.value;

		console.log(selected_hourValue);


	let data = JSON.parse(localStorage[calendarName]);
	console.log(data);

	if(data[selected_DayValue] && data[selected_DayValue][selected_hourValue]){
		alert('Event for this day and hour already exists. Please, change day or hour.');
	} else{
		if(!data[selected_DayValue]){
			data[selected_DayValue] = {}
		}

		data[selected_DayValue][selected_hourValue] = {
			name: input_nameValue,
			users: selected_UsersValue
		}

		localStorage[calendarName] = JSON.stringify(data);
	}
})


