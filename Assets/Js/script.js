
// Once Document is rdy (rendered) the program will play the function so it runs smoother

$(document).ready(function(){

  var currentDate = dayjs().format('MMM, D, YY')

  $('#currentDay').text(currentDate)

  $('.saveBtn').on('click', function(event){

   // (event.preventDefault = tells the user that if the event does not get explicitely handled default action should not be taken)

    event.preventDefault();

   // timeBlock is parent Id and is = to the element but its taking its Id from the element child 
    
    var timeBlockId = $(this).parent().attr('id');

   // $("textarea") = selecting ur element in HTML

    var userInput = $(this).siblings('textarea').val();

// when saved btn is saved it will take the value and Id and Save It

localStorage.setItem(timeBlockId, userInput);

  });

$('.time-block').each(function(){

// timeBlock.each ( goes through each div with tb and expresses the function being set)

var currentHour = dayjs().hour();

var timeBlockHours = parseInt($(this).attr('id'));

// var tbh pareint is taking the string(Id) and making it into a number and it address the time block class and getting the #(value) 

if (timeBlockHours < currentHour){

 // if our current hour is > than our TimeBlockhour which is our ID in HMTL we are addign the Class past and linknig it and then changing the color to grey ) 

$(this).addClass('past');

}  else if(timeBlockHours === currentHour){

    $(this).addClass('present'); // adds the class to the div and accesses the css for slyting  ( grey = past / current = red / future = green)

} else {

    $(this).addClass('future');

}

// selecting the timeblocD Id  and creating a var From local storage and if there is a saved inputs and then we can located the text area ( find ) and place that value inside )

var timeBlockId = $(this).attr('id');

var savedInputs = localStorage.getItem(timeBlockId);

        if (savedInputs){

$(this).find('textarea').val(savedInputs);

}})

});

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.