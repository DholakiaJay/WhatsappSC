pName = document.getElementsByName("personName")[0];
image = document.getElementsByName("image")[0];
time = document.getElementsByName("time")[0];
time2 = document.getElementsByName("time2")[0];
date = document.getElementsByName("date")[0];
day = document.getElementsByName("day")[0];
batteryPt = document.getElementsByName("batterypt")[0];
createSC = document.getElementById("createSC");
chatbox = document.getElementsByClassName("chatbox")[0];

pmsg = document.getElementsByName("personMsg")[0];
ymsg = document.getElementsByName("yourMsg")[0];
pmsgtime = document.getElementsByName("personMsgTime")[0];
ymsgtime = document.getElementsByName("yourMsgTime")[0];

pmsg1 = document.getElementsByName("personMsg1")[0];
ymsg1 = document.getElementsByName("yourMsg1")[0];
pmsgtime1 = document.getElementsByName("personMsgTime1")[0];
ymsgtime1 = document.getElementsByName("yourMsgTime1")[0];

pmsg2 = document.getElementsByName("personMsg2")[0];
ymsg2 = document.getElementsByName("yourMsg2")[0];
pmsgtime2 = document.getElementsByName("personMsgTime2")[0];
ymsgtime2 = document.getElementsByName("yourMsgTime2")[0];

pAdd = document.getElementById("p-add");
yAdd = document.getElementById("y-add");
scbox = document.getElementsByClassName("scbox")[0];
loadbtn1 = document.getElementById("loadbtn");

createSC.addEventListener("click", (e) => {
  e.preventDefault();

  newEle = document.createElement("div");
  newEle.classList.add("phone");
  newEle.innerHTML = `
         
            <div class="screen">
              <div class="header">
                <span id="h-left">
                  <span>${time.value}</span>
                  <span><i class="fa-solid fa-comment"></i></span>
                </span>
                <span id="h-right">
                  <span><i class="fa-solid fa-wifi"></i></span>
                  <span><i class="fa-solid fa-signal"></i></span>
                  <span> ${batteryPt.value} %</span>
                  <span><i class="fa-solid fa-battery-three-quarters"></i></span>
                </span>
              </div>
              <!-- Top -->
              <div class="topbar">
                <span id="backbtn"><i class="fa-solid fa-arrow-left"></i></span>
                <div class="profile">
                  <img
                    src="${image.value}"
                    class="img-fluid rounded-top"
                    alt=""
                  />
                </div>
                <div class="name">
                  <span>${pName.value}</span>
                  <span>Online</span>
                </div>
                <div class="menu">
                  <span><i class="fa-solid fa-video"></i></span>
                  <span><i class="fa-solid fa-phone"></i></span>
                  <span><i class="fa-solid fa-ellipsis-vertical"></i></span>
                </div>
              </div>
    
              <!-- Date -->
              <div class="date"><span>${date.value}</span><i id="datebtn" class="fa-solid fa-xmark" style="color:red;" onclick="deleteDate(this)"></i></div>
              <!-- Day -->
              <div class="day"><span>${day.value}</span><i id="daybtn" class="fa-solid fa-xmark" style="color:red;" onclick="deleteDay(this)"></i></div>
              <div class="chatbox">
              
              
              <div class="msg-l">
              <div class="msgL"><span>${pmsg.value}</span><span>${pmsgtime.value}</span></div>
              </div>
              <div class="msg-r">
              <div class="msgR"><span>${ymsg.value}</span><span>${ymsgtime.value}<span class="material-symbols-outlined" style="font-size:14px; color:blue;">done_all</span></span></div>
              </div>
              <div class="msg-l">
              <div class="msgL"><span>${pmsg1.value}</span><span>${pmsgtime1.value}</span></div>
              </div>
              <div class="msg-r">
              <div class="msgR"></i><span>${ymsg1.value}</span><span>${ymsgtime1.value}<span class="material-symbols-outlined" style="font-size:14px; color:blue;">done_all</span></span></div>
              </div>
              <div class="msg-l">
              <div class="msgL"><span>${pmsg2.value}</span><span>${pmsgtime2.value}</span></div>
              </div>
              <div class="msg-r">
              <div class="msgR"><span>${ymsg2.value}</span><span>${ymsgtime2.value}<span class="material-symbols-outlined" style="font-size:14px; color:blue;">done_all</span></span></div>
              </div>



            </div>
   
           <div class="bottombar">
            <div class="wrapper">
              <span><i class="fa-regular fa-face-smile"></i></span>
              <input type="text" name="" placeholder="Message" />
              <span><i class="fa-solid fa-paperclip"></i></span>
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
              <span><i class="fa-solid fa-camera"></i></span>
            </div>
            <div class="mic">
              <span><i class="fa-solid fa-microphone"></i></span>
            </div>
          </div>
   </div>
          
        `;

        scbox.replaceChildren(newEle);
        // scbox.replaceChild(newNode, element.childNodes[0]);
  scbox.append(newEle);
});

function deleteDay(element)
{
 ele = element.parentElement;
  ele.style.cssText=`display:none;`;

}
function deleteDate(element)
{
 ele = element.parentElement;
  ele.style.cssText=`display:none;`;

}
function deleteMsg(element)
{
 ele = element.parentElement.parentElement;
  ele.style.cssText=`display:none;`;

}
// pAdd.addEventListener("click", (e) => {
//   e.preventDefault(e);
//   newMsgL = document.createElement("div");
//   newMsgL.classList.add("msg-l");
//   newMsgL.innerHTML = `
//             <div class="msgL"><span>${pmsg.value}</span><span>${pmsgtime.value}</span></div>
//         `;

//   chatbox.append(newMsgL);
// });

// yAdd.addEventListener("click", (e) => {
//   e.preventDefault(e);
//   newMsgR = document.createElement("div");
//   newMsgR.classList.add("msg-r");
//   newMsgR.innerHTML = `
//               <div class="msgR"><span>${ymsg.value}</span><span>${ymsgtime.value}</span></div>
//           `;

//   chatbox.append(newMsgR);
// });
