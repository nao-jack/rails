const timer = document.getElementById(`timer`);
const start = document.getElementById(`start`);
const stop = document.getElementById(`stop`);
const reset = document.getElementById(`reset`);

let time = 0;
let timerId = null;
$("#stop,#reset").prop("disabled", true);
//分、秒のフォーマット
function formatTime() {
  let msec = (time % 1000);
  let tempSec = Math.floor(time / 1000);
  let sec = tempSec % 60;
  let min = Math.floor(tempSec / 60);
 //0埋め
  let strMsec = msec.toString().padStart(3, 0);
  let strSec = sec.toString().padStart(2, 0);
  let strMin = min.toString().padStart(2, 0);
 timer.innerHTML = `${strMin}:${strSec}:${strMsec}`;
}

//start処理
start.addEventListener(`click`, (stopwatch) =>{
 
  let startTime = Date.now();
  timerId = setInterval(() =>{ 
  let now = Date.now();
  time += now - startTime;//stop押してstart押しても０から始まらないようにする。
  formatTime();//上のフォーマット関数表示。
  startTime = now;//一つ前のサイクルの時間を代入し、引き続き計測できるようにする。
  }, 10);
  $("#start").prop("disabled", true);
  $("#stop,#reset").prop("disabled", false);
});

//stop処理
stop.addEventListener(`click`, (stopwatch) =>{
  clearInterval(timerId);
  $("#stop").prop("disabled", true);
  $("#start,reset").prop("disabled", false);
});

//reset処理
reset.addEventListener(`click`, (stopwatch) =>{
  time = 0;
  formatTime();
  $("#reset").prop("disabled", true);
  $("#start,stop").prop("disabled", false);
});


//装飾
const $button = document.getElementsByTagName(`button`);
//startボタン
 document.getElementsByTagName(`button`)[0].addEventListener(`click`,() => {
  $button[0].innerHTML = "今、測っとるで";
  $button[1].innerHTML = "ちょい待ち！";
  $button[2].innerHTML = "がんばれー";
 });
//stopボタン
document.getElementsByTagName(`button`)[1].addEventListener(`click`,() => {
  $button[0].innerHTML = "ほな、いこかー";
  $button[1].innerHTML = "ちょい待ち！";
  $button[2].innerHTML = "もっかいいっとく？";
});
//resetボタン
document.getElementsByTagName(`button`)[2].addEventListener(`click`,() => {
  $button[0].innerHTML = "ほな、いこかー";
  $button[1].innerHTML = "もうええやろ";
  $button[2].innerHTML = "ちゃんと働いてね";
});

