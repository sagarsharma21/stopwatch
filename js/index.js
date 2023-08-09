// const endDate = "31 July 2023 06:00 AM ";

// // console.log(endDate + ` line1 `);
// // const x="Hey there";

// const btn = document.getElementById("btn1");
// const inputs = document.querySelectorAll("input");
// console.log(inputs +` Inputs list here`);
// console.log(btn `Btn here`);


// function myclock() {
//     const end = new Date(endDate);
//     const now = new Date();

//     // console.log(end);
//     // console.log(`Here`);

//     const diff_in_seconds = (end-now) / 1000; //to seconds
//     console.log(end-now);
    
//     //Calculate into days, etc.
//     const daysraw = (diff_in_seconds / 3600/24);
//     const days = Math.floor(daysraw);
//     console.log(days+` Days`);

      

    
//     const hoursraw = (diff_in_seconds / 3600 % 24);
//     const hours = Math.floor(hoursraw);
//     console.log(hours+` Hours`);

    
//     const minutesraw = (diff_in_seconds / 60 % 60);
//     const minutes = Math.floor(minutesraw);
//     console.log(minutes+` Minutes`);
    


// //    const seconds = (diff_in_seconds/3600)
//     const secondsraw = (diff_in_seconds % 60);
//     const seconds = Math.floor(secondsraw);
//     console.log(seconds+` Seconds`);

//     //setting in placeholders
// inputs[0].value = days;
// inputs[1].value = hours;
// inputs[2].value = minutes;
// inputs[3].value = seconds;


// }

// myclock();

const endDate = "15 August 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;

const inputs =  document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now ) / 1000;
   
    if ( diff < 0) {return};

    console.log(end, now);
    console.log(diff); // in seconds
     
    //consvert into days
    inputs[0].value = Math.floor( diff / 3600 / 24) ;
    inputs[1].value = Math.floor(diff / 3600 ) % 24 ;
    inputs[2].value = Math.floor(diff / 60 ) % 60 ;
    inputs[3].value = Math.floor(diff) % 60 ;

}

clock();    

setInterval(
    () => {
        clock()
    },
5000);



