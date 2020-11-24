
// Написати розпорядок дня через функфію Callback і setTimeout

// function wakeUp(time, callback){
//     console.log("Hello World!!!");
//     setTimeout( () => {
//         console.log("Now Time is " + time);
//         if(time < 6){
//             callback("It is to soon", null);
//         } else {
//             callback(null, "Bohdan");
//         }
//     }, 1000)
// }


// function eatBreakfast(meal, callback){
//     console.log("Today is monday so I am going to eat " + meal);
//     setTimeout(()=> {
//         if(meal !== "eggs"){
//             callback("I don't want to eat ", null);
//         } else {
//             callback(null, "So I am eating ");
//         }
//     }, 1500)
// }

// function goToWork (time, callback) {
//     console.log("Now time is " + time);
//     setTimeout(() => {
//         if(time >= 7 && time <= 8){
//             callback(null, "BHB");
//         } else {
//             callback("It's too late to go to work", null)
//         }
//     }, 2000)    
// }

// function metMate (time, callback){
//     console.log(`This is ${time} o'clock`);
//     setTimeout(()=>{
//         if(time > 9){
//             callback("It's to late", null);
//         } else {
//             callback(null, "Dimas")
//         }
//     }, 2500)    
// }  

// function driveToCity(time, callback){
//     if(time <= 10){
//         callback(null, "Brody")
//     } else {
//         callback("We are delayed", null)
//     }
// }

// function goBack (do_work, callback){
//     if(!do_work){
//         callback("Today there are so mach work", null)
//     } else {
//         callback(null, "75%")
//     }
// }

// function goToMeeting(meeting, callback){
//     console.log("Today is monday so there must be meeting today");
//     if(meeting){
//         callback(null, "Vitala");
//     } else {
//         callback("My girlfriend today has a birthday", null);
//     }
// }


// wakeUp(9, (err, person) =>{
//     if(err){
//         console.log("I think thet:" + err);
//     } else {
//         console.log("Good morning " + person + "It's time to wake up");

//         eatBreakfast("eggs", (err, data) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(data);

//                 goToWork(8, (err, work) => {
//                     if(err){
//                         console.log("I see thet, " + err);
//                     } else {
//                         console.log("Be ready to go to work in " + work);
//                         metMate(9, (err, mate) =>{
//                             if(err){
//                                 console.log(err)
//                             } else {
//                                 console.log(mate + " will not wait for my, because I went at time");

//                                 driveToCity(10, (err, city) => {
//                                     if(err){
//                                         console.log(err);
//                                     } else {
//                                         console.log("We went to " + city + " at time");
//                                     }

//                                     goBack(true, (err, persent) => {
//                                         if(err) {
//                                             console.log("we are tired and " + err);
//                                         } else {
//                                             console.log("I done my tasks at " + persent);

//                                             goToMeeting(false, (err, result) => {
//                                                 if(err){
//                                                     console.log(err + " so I can't go to the office!!");
//                                                 } else {
//                                                     console.log(result + " said thet meetting will be at 7 o'cklok");
//                                                 }
//                                             })
//                                         }
//                                     })
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })


// Написати розклад денний за допомогою Promise

function wakeUp(time){
    return new Promise ((resolve, reject) =>{
        console.log("Hello World!!!");
        setTimeout (() => {
            if(time === 7){
                resolve(`Bohdan It's ${time}`);
            } else if (time > 7) {
                reject(`It's ${time} o'cklock in the morning, so it's too late`);
            } else if (time < 7){
                reject(`It's ${time} o'cklock in the morning,  so it's to soon`);
            }
        }, 2000)
    })
}


function eatFood(meal){
    return new Promise ((resolve, reject) =>{
        let item = prompt("What day is today?");
        setTimeout(()=>{
            console.log(`It's ${item}, so I am going to eat ... ${meal}`);
            if(meal === "oatmeal"){
                resolve("oatmeal");
            } else {
                reject("No, I don't want to eat this food");
            }
        }, 3000)
    })
}


function goToWork(time){
    return new Promise((resolve, reject) =>{
        console.log(`It's ${time} o'clock in the morning`)
        setTimeout(()=>{
            if(time === 8){
                resolve("BHB")
            } else if(time < 8){
                reject(`It's ${time} and it's to soon to go to work`)
            } else if (time > 8){
                reject(`It's ${time} and it's to late to go to work`)
            }
        }, 3500)
    })
}

function meetMate(status){
    return new Promise((resolve, reject) =>{
        console.log("I went to the place at the time")
        if(status){
            resolve("Dimas");
        } else {
            reject("My friend delayed so I mast to weit for him!!!")
        }
    })
}

function driveToCity(day){
    return new Promise((resolve, reject) =>{
        
        setTimeout(() =>{
            switch(day){
                case "Monday":
                    resolve("Pustomity")
                break;

                case "Tuesday":
                    resolve("Chervonograd")
                break;

                case "Wednesday":
                    resolve("Brody")
                break;
                
                case "Thuesday":
                    resolve("Yavorov")
                break;
                
                case "Friday":
                    resolve("Vinniky")
                break;

                case "Saturday":
                    reject("Today is Saturday, and I am of oxit today")
                break;
                
                case "Sunday":
                    reject("Today is Sunday, and I am of oxit today")    
            }
        }, 4000)
    })
}


function goBack(done_work){
    return new Promise((resolve, reject) =>{
        if(done_work){
            resolve("80%")
        } else {
            reject("I dont do my work so I need more time to do my tasks")
        }
    })
}

function goToOffice(value){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(value){
                resolve("Office in Plastova street");
            } else {
                reject("Our boss isn't present, so we don't have to go to office")
            }
        },2000)
    })
}

wakeUp(7)
    .then(person => {
        console.log(`${person} o'cklock in the morning so it's time to wake up!!!!`);

        return eatFood("oatmeal");
    })
    .then(value => {
        console.log(`I like eating ${value}`);

        return goToWork(+prompt("What time is it?"));
    })
    .then(work =>{
        console.log(`I am ready to go to ${work}`);

        return meetMate(true)
    })
    .then(mate => {
        console.log(`${mate} went at the time too so we are ready to go`);

        return driveToCity(day = prompt("What day it is today?"))
    })
    .then(city => {
        console.log(`As it is ${day} then we are driveing to ${city} today`);

        return goBack(true)
    })
    .then(persent => {
        console.log(`I done my tasks at ${persent}`);

        return goToOffice(true)
    })
    .then(place => {
        console.log(`We are going to the ${place}`)
    })
    .catch(reason => {
        console.log(reason);
    })