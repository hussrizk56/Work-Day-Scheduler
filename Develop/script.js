$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

//Global array variale to store localstorage data
var schedule=[];

//Audit all schedules
var auditSchedule = function(rowEl) {
    // get time from schedule element
    var scheduletime = $(rowEl).attr("id");
    var past = moment(scheduletime ,"hha");
    var t = past.format('LTS');
    
    // get current time
    var prtime = moment().format('LTS');
    var textEl = $(rowEl).find("textarea");

    var a = moment(t,'hh:mm:ss a');
    var b = moment(prtime, 'hh:mm:ss a');
    if(a.isAfter(b,'hours'))
    {
        $(textEl).addClass("future"); 
    }
    else if(a.isBefore(b,'hours')){
        $(textEl).addClass("past");
    }
    else if(a.isSame(b,'hours')){
        $(textEl).addClass("present");  
    }    
  };




  

