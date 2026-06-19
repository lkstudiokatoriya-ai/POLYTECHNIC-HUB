/* ========================================
   POLYTECHNIC HUB JAVASCRIPT PART 1
   ======================================== */

// Welcome Message

console.log("Welcome To Polytechnic Hub");

// Alert Message

window.onload = function(){

    alert("🎓 Welcome To Polytechnic Hub");

};

// Greeting System

let currentHour = new Date().getHours();

if(currentHour < 12){

    console.log("Good Morning Student");

}

else if(currentHour < 18){

    console.log("Good Afternoon Student");

}

else{

    console.log("Good Evening Student");

}

// Current Date

let currentDate = new Date();

console.log("Current Date : " + currentDate);

// Live Clock

function updateClock(){

    let now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

    let time =
        hours + ":" +
        minutes + ":" +
        seconds;

    console.log(time);

}

setInterval(updateClock,1000);

// Welcome Notification

function showWelcomeNotification(){

    console.log(
        "Thank You For Visiting Polytechnic Hub"
    );

}

showWelcomeNotification();

// Student Motivation

let motivationalMessages = [

    "Study Hard",
    "Stay Focused",
    "Believe In Yourself",
    "Success Is Coming",
    "Keep Learning",
    "Never Give Up"

];

let randomMessage =
motivationalMessages[
Math.floor(
Math.random()
*
motivationalMessages.length
)
];

console.log(randomMessage);

// Website Information

let websiteName =
"POLYTECHNIC HUB";

let websiteVersion =
"Version 1.0";

console.log(websiteName);
console.log(websiteVersion);

// Visitor Greeting

function visitorGreeting(){

    let studentName =
    "Student";

    console.log(
    "Welcome " +
    studentName
    );

}

visitorGreeting();

// Daily Study Reminder

function studyReminder(){

    console.log(
    "Don't Forget To Study Today"
    );

}

studyReminder();
/* ========================================
   POLYTECHNIC HUB JAVASCRIPT PART 2
   ======================================== */

/* Dark Mode */

function enableDarkMode(){

    document.body.style.background =
    "#121212";

    document.body.style.color =
    "white";

    console.log(
    "Dark Mode Enabled"
    );

}

function disableDarkMode(){

    document.body.style.background =
    "white";

    document.body.style.color =
    "black";

    console.log(
    "Dark Mode Disabled"
    );

}

/* Search System */

function searchNotes(){

    let keyword =
    prompt(
    "Enter Subject Name"
    );

    if(keyword){

        alert(
        "Searching For : " +
        keyword
        );

    }

}

/* Scroll To Top */

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* Student Counter */

let studentCounter = 0;

function increaseCounter(){

    studentCounter++;

    console.log(
    "Students : " +
    studentCounter
    );

}

setInterval(
increaseCounter,
5000
);

/* Notice Board */

let notices = [

    "New Notes Uploaded",

    "Semester Materials Available",

    "PYQ Updated",

    "Scholarship Information Added",

    "Exam Notification Released"

];

let noticeIndex = 0;

function showNotice(){

    console.log(
    notices[noticeIndex]
    );

    noticeIndex++;

    if(
    noticeIndex >= notices.length
    ){

        noticeIndex = 0;

    }

}

setInterval(
showNotice,
3000
);

/* Auto Text Changer */

let messages = [

    "Welcome To Polytechnic Hub",

    "Learn Every Day",

    "Prepare For Exams",

    "Improve Your Skills",

    "Build Your Future"

];

let messageIndex = 0;

function changeMessage(){

    console.log(
    messages[messageIndex]
    );

    messageIndex++;

    if(
    messageIndex >= messages.length
    ){

        messageIndex = 0;

    }

}

setInterval(
changeMessage,
4000
);

/* Online Status */

function onlineStatus(){

    if(
    navigator.onLine
    ){

        console.log(
        "Internet Connected"
        );

    }

    else{

        console.log(
        "Internet Disconnected"
        );

    }

}

setInterval(
onlineStatus,
5000
);

/* Exam Countdown Example */

let examDays = 30;

function countdown(){

    console.log(
    "Exam In " +
    examDays +
    " Days"
    );

    examDays--;

}

setInterval(
countdown,
10000
);

/* Theme System */

let theme = "Light";

function switchTheme(){

    if(
    theme === "Light"
    ){

        theme = "Dark";

        enableDarkMode();

    }

    else{

        theme = "Light";

        disableDarkMode();

    }

}

/* ========================================
   POLYTECHNIC HUB JAVASCRIPT PART 3
   ======================================== */

/* Loading Screen */

window.addEventListener(
"load",
function(){

    console.log(
    "Website Loaded Successfully"
    );

}
);

/* Visitor Counter */

let visitors =
Math.floor(
Math.random() * 10000
);

console.log(
"Total Visitors : " +
visitors
);

/* Download Counter */

let downloads = 0;

function increaseDownloads(){

    downloads++;

    console.log(
    "Downloads : " +
    downloads
    );

}

/* Quiz Timer */

let quizTime = 60;

function startQuizTimer(){

    let timer =
    setInterval(

    function(){

        console.log(
        "Time Left : " +
        quizTime +
        " Seconds"
        );

        quizTime--;

        if(
        quizTime < 0
        ){

            clearInterval(
            timer
            );

            console.log(
            "Quiz Finished"
            );

        }

    },

    1000

    );

}

/* Typing Animation */

let typingText =
"Welcome To Polytechnic Hub";

let typingIndex = 0;

function typingEffect(){

    if(
    typingIndex <
    typingText.length
    ){

        console.log(
        typingText.substring(
        0,
        typingIndex + 1
        )
        );

        typingIndex++;

    }

}

setInterval(
typingEffect,
200
);

/* Notification Popup */

function showNotification(){

    alert(
    "📢 New Educational Update Available"
    );

}

/* Progress System */

let progress = 0;

function studyProgress(){

    progress += 10;

    console.log(
    "Study Progress : " +
    progress +
    "%"
    );

    if(
    progress >= 100
    ){

        console.log(
        "Course Completed"
        );

    }

}

setInterval(
studyProgress,
5000
);

/* Student Rank Generator */

function generateRank(){

    let rank =

    Math.floor(
    Math.random() * 100
    ) + 1;

    console.log(
    "Your Rank : " +
    rank
    );

}

generateRank();

/* Daily Quote System */

let quotes = [

"Success Comes To Those Who Work Hard",

"Knowledge Is Power",

"Never Stop Learning",

"Dream Big And Achieve Big",

"Education Builds The Future",

"Stay Positive And Keep Studying",

"Consistency Beats Talent"

];

function showQuote(){

    let randomQuote =

    quotes[

    Math.floor(

    Math.random()
    *
    quotes.length

    )

    ];

    console.log(
    randomQuote
    );

}

showQuote();

/* Subject Recommendation */

let subjects = [

"Applied Mathematics",

"Applied Physics",

"Applied Chemistry",

"Engineering Mechanics",

"Electrical Circuit & Network",

"Electrical Machines",

"Digital Electronics"

];

function recommendSubject(){

    let subject =

    subjects[

    Math.floor(

    Math.random()
    *
    subjects.length

    )

    ];

    console.log(
    "Recommended Subject : " +
    subject
    );

}

recommendSubject();

/* Academic Status */

function academicStatus(){

    let percentage =

    Math.floor(
    Math.random() * 100
    );

    console.log(
    "Current Percentage : " +
    percentage +
    "%"
    );

}

academicStatus();

/* System Information */

console.log(
"POLYTECHNIC HUB"
);

console.log(
"JavaScript Version 1.0"
);

console.log(
"Educational Platform Active"
);
