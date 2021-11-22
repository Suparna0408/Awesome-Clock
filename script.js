// get the clock container by class
let clock = document.querySelector(".time");
let show = document.querySelector(".date");
// const options = {year: 'numeric', month: 'long', weekday: 'long', day: 'numeric'};
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() =>{
    let date = new Date();
    let time = date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds();
    console.log(time);
    // let dateShow = date.toLocaleDateString(undefined, options);
    let dateShow = week[date.getDay()] + "       "+ date.getDate() + "th " + "       " + month[date.getMonth()] + " " + date.getFullYear();
    clock.innerHTML = `${time}`
    show.innerHTML = `${dateShow}`;
    
},  1000);