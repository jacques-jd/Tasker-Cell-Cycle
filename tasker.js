//this is for a tasker program. It calculates the start date of cycle in ms and today's date in ms.

//cell cycle starts on the following date:
let dateStarting = 3;

let date = new Date(Date.now());
let curYear = date.getFullYear();
let curMonth = date.getMonth();
let curDate = date.getDate();
let todayMs = date.getTime();
let daysLeft;
let startMs;

if(curDate >= dateStarting)
{ //currently in new cycle, this cycle restarts next month on the third
	startMs = new Date(curYear, curMonth, 03).getTime();
}

if(curDate < dateStarting)
{ //currently in new month but old cycle, it restarts on the 3rd
	startMs = new Date(curYear - (curMonth > 0 ? 0 : 1), curMonth - (curMonth > 0 ? 1 : -11), dateStarting).getTime();
}

console.log(new Date(startMs) + " - " + new Date(todayMs));