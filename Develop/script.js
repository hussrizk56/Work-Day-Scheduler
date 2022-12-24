$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

