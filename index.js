/*step 1: take store the value of the span and p in a variable using DOM
step 2: using Date() function to get the current date and time and change the values using innerHTML
step 3: using setInterval() function to update the time every second 

*/


function updateTime(){
    //Creating a new Date object
    const currDate = new Date();
    //for the time part
    const currHours=currDate.getHours();
    const curMinutes= currDate.getMinutes();
    const currSeconds= currDate.getSeconds();
    document.querySelector('.hours').innerHTML=currHours.toString().padStart(2,'0')+" : ";
    document.querySelector('.minutes').innerHTML=curMinutes.toString().padStart(2,'0')+" : ";
    document.querySelector('.seconds').innerHTML=currSeconds.toString().padStart(2,'0');
    }

//every time this function is called the time is updated after 1 second
console.log(setInterval(updateTime,1000));

//For the date 

//We are taking an array because the output that we get from the getDay() and getMonth() is in the form of index but we want the actual day and month to be displayed
const currDate = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const currDay = days[currDate.getDay()];//that is sunday,monday ,etc..

const currMonth = months[currDate.getMonth()];//for month
const currYear =currDate.getFullYear();//for year
const Date1=currDate.getDate().toString().padStart(2,'0');//for date

document.querySelector('.date').innerHTML=Date1+" "+currMonth+" "+currYear+" , "+currDay;


