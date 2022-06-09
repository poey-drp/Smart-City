function datetimeUpdate() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var dateString = weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
    var hourString = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minuteString = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var secondsString = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var timeString = hourString + ":" + minuteString + ":" + secondsString;
    var datetimeString = dateString + " " + timeString;
    $("#datetime-display").html(datetimeString);
}

function main(){
    datetimeUpdate();
    setInterval(datetimeUpdate, 1000);
}

const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');

const chart = {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
const myChart1 = new Chart(ctx1, chart);
const myChart2 = new Chart(ctx2, chart);
const myChart3 = new Chart(ctx3, chart);
const myChart4 = new Chart(ctx4, chart);

$(document).ready(main);