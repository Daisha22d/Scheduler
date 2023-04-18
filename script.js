$(function () {
  $(".saveBtn").click(function() {
    var id = $(this).closest(".time-block").attr("id");
  });
  
  var currentHour = dayjs().hour();

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var savedText = localStorage.getItem("hour-" + blockHour);
    if (savedText !== null) {
      $(this).find(".description").val(savedText);
    }
  });

  $(".saveBtn").click(function() {
    var id = $(this).closest(".time-block").attr("id");
    var text = $(this).closest(".time-block").find(".description").val();
    localStorage.setItem("hour-" + id.split("-")[1], text);
  });
  
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
  
  var businessHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
  var timeBlocksContainer = document.getElementById('timeBlocks');
  
  businessHours.forEach(hour => {
    var timeBlock = document.createElement('div');
    timeBlock.classList.add('row', 'time-block');
    timeBlock.setAttribute('id', 'hour-' + hour.split(/[^\d]/)[0]);
    
    var hourCol = document.createElement('div');
    hourCol.classList.add('col-md-1', 'hour');
    hourCol.textContent = hour;
    
    var eventCol = document.createElement('textarea');
    eventCol.classList.add('col-md-10', 'description');
    
    var saveCol = document.createElement('button');
    saveCol.classList.add('col-md-1', 'saveBtn');
    saveCol.innerHTML = '<i class="fas fa-save"></i>';
    
    timeBlock.appendChild(hourCol);
    timeBlock.appendChild(eventCol);
    timeBlock.appendChild(saveCol);
    
    timeBlocksContainer.appendChild(timeBlock);
  });
  
  var currentHour = dayjs().hour();
  
  var timeBlocks = document.getElementsByClassName('time-block');
  for (let i = 0; i < timeBlocks.length; i++) {
    var hour = parseInt(timeBlocks[i].getAttribute('id').split('-')[1]);
    if (hour < currentHour) {
      timeBlocks[i].classList.add('past');
    } else if (hour === currentHour) {
      timeBlocks[i].classList.add('present');
    } else {
      timeBlocks[i].classList.add('future');
    }
  }
  
  var saveButtons = document.getElementsByClassName('saveBtn');
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', function() {
      var event = this;
    });
  }
});

