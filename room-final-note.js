// Rooming Final is a read-only internal note in both rooming views.
const roomFinalBaseRender=render;
render=function(){
 roomFinalBaseRender();
 const row=document.querySelector('.phone.mode-view .context-row');
 if(!row)return;
 const button=document.createElement('button');
 button.className='room-final-trigger';button.type='button';button.innerHTML='<svg class="room-final-info" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 10.5v5M12 7.5h.01"/></svg><span>分房 Final</span>';
 button.setAttribute('aria-haspopup','dialog');
 button.addEventListener('click',openRoomFinal);
 row.append(button);
};
function openRoomFinal(){
 const previous=document.activeElement;
 const backdrop=document.createElement('div');backdrop.className='room-final-backdrop';
 backdrop.innerHTML=`<section class="room-final-sheet" role="dialog" aria-modal="true" aria-labelledby="room-final-title"><div class="room-final-handle"></div><header><h2 id="room-final-title">分房 Final</h2><button class="room-final-close" type="button" aria-label="關閉">×</button></header><div class="room-final-content">26SVN12VNJ5 T 出團 客製越南 4 日<br>11/12 ～ 11/15<br>6TWN＋1TRP＋2SGL＝9 ROOMS<br>14ADT＋2CHD＋1TL＝17 PAX<br>TL：陳先生 0900-000-001<br>接機後補<br>VN571　2026/11/12　07:45／10:25　TPE／SGN<br>VN570　2026/11/15　16:45／21:10　SGN／TPE</div></section>`;
 const close=()=>{backdrop.remove();document.removeEventListener('keydown',onKey);previous?.focus()};
 const onKey=e=>{if(e.key==='Escape')close()};
 backdrop.addEventListener('click',e=>{if(e.target===backdrop||e.target.closest('.room-final-close'))close()});
 document.addEventListener('keydown',onKey);document.body.append(backdrop);backdrop.querySelector('.room-final-close').focus();
}
const roomFinalStyle=document.createElement('style');roomFinalStyle.textContent=`.room-final-trigger{display:inline-flex;align-items:center;gap:5px;margin-left:auto;min-height:40px;padding:0 4px 0 12px;color:#209bd3;font-size:14px;font-weight:600;white-space:nowrap}.room-final-info{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;flex:none}.room-final-backdrop{position:fixed;inset:0;z-index:1000;background:#0006;display:flex;align-items:flex-end;justify-content:center}.room-final-sheet{width:100%;max-width:540px;max-height:85dvh;background:white;border-radius:22px 22px 0 0;display:flex;flex-direction:column;animation:room-final-slide .2s ease-out}.room-final-handle{width:36px;height:4px;border-radius:4px;background:#ddd;margin:10px auto 0;flex:none}.room-final-sheet header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px}.room-final-sheet h2{font-size:18px;margin:0}.room-final-close{font-size:28px;color:#888;line-height:1;width:40px;height:40px}.room-final-content{padding:0 20px calc(24px + env(safe-area-inset-bottom));overflow-y:auto;overscroll-behavior:contain;color:#444;font-size:14px;line-height:1.9;overflow-wrap:anywhere}@keyframes room-final-slide{from{transform:translateY(100%)}to{transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.room-final-sheet{animation:none}}`;document.head.append(roomFinalStyle);
render();
