
var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("9AM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='0'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("10AM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='1'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("11AM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='2'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("12PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='3'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("1PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='4'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("2PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='5'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("3PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='6'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("4PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='7'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var rowEl = $("<div class = row ></div>");
var divEl = $("<div class='col-lg-1 hour'></div>");
divEl.text("4PM");
rowEl.append(divEl);
var planEl = $("<textarea class='col-lg-10 event'></textarea>");
rowEl.append(planEl);
var saveBtnEl = $("<button type='submit' class='col- saveBtn' index='8'></button>");
var saveImageEl = $("<i class='fa fa-save'></i>");
saveBtnEl.append(saveImageEl);
rowEl.append(saveBtnEl);
$('#container').append(rowEl);

var dayEl = document.getElementById("currentDay");
var blockEventEl = document.querySelectorAll(".event")
var hourEl = document.querySelectorAll(".hour");


function init(){
    dayEl.textContent = moment().format("dddd, MMMM Do");
    var currentHour = moment().format("HH");
    var currentDate = moment().format("YYYYMMDD");
    var storedDate = localStorage.getItem("date");

    if(storedDate !== null){
        if(storedDate !== currentDate){
            localStorage.setItem("date", currentDate);
            clearLocal();
            } 
        } else {
            localStorage.setItem("date", currentDate);
        }
    
        for (var i = 0; i < hourEl.length; i++){
            var schedulerHour = moment(hourEl[i].textContent.trim(), "hA").format("HH");
            if(schedulerHour < currentHour){
                blockEventEl[i].classList.add("past");
            } else if (schedulerHour > currentHour){
                blockEventEl[i].classList.add("future");
            } else {
                blockEventEl[i].classList.add("present");
            }
        }

        renderPlans();

}

function renderPlans(){
    var savedEvent = "";
    for (var i = 0;  i < hourEl.length; i++){
        savedEvent = localStorage.getItem(hourEl[i].textContent.trim());
        if (savedEvent !== null) {
            blockEventEl[i].value = savedEvent;
        }
    }
}



function onButtonClick(){
    var target = $(event.target);

    if(target.is("button")) {
        var index = target.attr("index");
    } else if (target.is("i")) {
        var index = target.parent("button").attr("index");
    } else{
        return;
    }

    var timeBlockEl = document.querySelectorAll(".hour");
    var eventBlockEl = document.querySelectorAll(".event");

    if (eventBlockEl[index].value.trim()) {
        localStorage.setItem(timeBlockEl[index].textContent.trim(), eventBlockEl[index].value.trim());
    } else if (eventBlockEl[index].value.trim() ==="") {
        if (localStorage.getItem(timeBlockEl[index].textContent.trim()) !== null){
            localStorage.removeItem(timeBlockEl[index].textContent.trim());
        }
    }
}

function clearLocal(){
    for (var i = 0; i < hourEl.length; i++){
        if(localStorage.getItem(hourEl[i].textContent) !== null){
            localStorage.removeItem(hourEl[i].textContent.trim());
        }
    }
}

$('#container').on('click', '.saveBtn', onButtonClick);

init();