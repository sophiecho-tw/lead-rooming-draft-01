// Internal rooming handover notes, kept separate from traveler information.
let roomFinalOpen=false;
const roomFinalBaseRender=render;
render=function(){
 roomFinalBaseRender();
 const list=document.querySelector('.phone.mode-view main.rooms');
 if(!list)return;
 const panel=document.createElement('details');
 panel.className='room-final';
 panel.open=roomFinalOpen;
 panel.innerHTML=`<summary><span>分房 Final</span><span class="room-final-arrow" aria-hidden="true">⌄</span></summary><div class="room-final-content">26SVN12VNJ5 T 出團 客製越南 4 日<br>11/12 ～ 11/15<br>6TWN＋1TRP＋2SGL＝9 ROOMS<br>14ADT＋2CHD＋1TL＝17 PAX<br>TL：陳先生 0900-000-001<br>接機後補<br>VN571　2026/11/12　07:45／10:25　TPE／SGN<br>VN570　2026/11/15　16:45／21:10　SGN／TPE</div>`;
 panel.addEventListener('toggle',()=>{roomFinalOpen=panel.open});
 list.prepend(panel);
};
const roomFinalStyle=document.createElement('style');roomFinalStyle.textContent=`.room-final{min-width:0;border:1px solid #e5e5e5;border-radius:16px;background:#fff;overflow:hidden}.room-final summary{display:flex;align-items:center;justify-content:space-between;min-height:52px;padding:0 16px;font-size:16px;font-weight:650;cursor:pointer;list-style:none}.room-final summary::-webkit-details-marker{display:none}.room-final-arrow{font-size:20px;color:#888;transition:transform .15s}.room-final[open] .room-final-arrow{transform:rotate(180deg)}.room-final-content{border-top:1px solid #eee;padding:14px 16px;color:#555;font-size:14px;line-height:1.8;overflow-wrap:anywhere}.room-final summary:focus-visible{outline:2px solid #ffb5c0;outline-offset:-3px}`;document.head.append(roomFinalStyle);
render();
