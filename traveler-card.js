// Shared presentation for all four traveler lists; actions and data remain page-owned.
function unifyTravelerCards(){
 document.querySelectorAll('.handover-person').forEach(row=>{
  const note=row.querySelector('.attention-reason p'),content=row.querySelector('.guest-content');
  if(note&&content){const text=document.createElement('span');text.className='guest-note';text.textContent=note.textContent;content.append(text);row.querySelector('.attention-reason').remove();}
 });
 document.querySelectorAll('.mode-view main .guest').forEach(row=>{if(!row.querySelector('.guest-check,.card-chevron')&&!row.querySelector(':scope > svg'))row.insertAdjacentHTML('beforeend','<svg class="card-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 7 7-7 7"/></svg>');});
 document.querySelectorAll('main .room').forEach(room=>{
  const rows=[...room.querySelectorAll('.handover-person,.guest')].filter(row=>!row.matches('.guest')||!row.closest('.handover-person'));
  rows.forEach((row,i)=>row.classList.toggle('traveler-alternate',i%2===1));
 });
}
const travelerCardStyle=document.createElement('style');travelerCardStyle.textContent=`
main.rooms .guest,main.rooms .handover-person{background:#fff;min-width:0}
main.rooms .guest{padding:16px;gap:12px;align-items:center}
main.rooms .handover-person>.guest{background:transparent;padding:16px}
main.rooms .traveler-alternate{background:#f5f5f5}
main.rooms .traveler-alternate>.guest{background:transparent}
main.rooms .guest-content{display:block;flex:1;min-width:0;padding:0;text-align:left}
main.rooms .guest-name{display:flex;align-items:center;gap:6px;font-size:16px;font-weight:650;line-height:24px;letter-spacing:0;flex-wrap:wrap}
main.rooms .guest-name .gender-symbol{font-family:Arial,sans-serif;font-size:19px;font-weight:400;line-height:24px;margin:0;flex:none}
main.rooms .guest-name .traveler-star{font-size:17px;line-height:24px;margin:0;color:#dcaa3b;flex:none}
main.rooms .guest-english{display:block;font-size:14px;font-weight:400;line-height:22px;color:#444;margin-top:2px;overflow-wrap:anywhere}
main.rooms .guest-note{display:block;font-size:12px;font-weight:400;line-height:20px;color:#555;margin-top:6px;padding:0;background:none;border:0;border-radius:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
main.rooms .guest>.card-chevron{transform:none}
main.rooms .guest>svg{width:14px;height:14px;color:#aaa;flex:none}
main.rooms .detail-line{font-size:12px;line-height:20px;color:#666;margin-top:6px}
.hide-traveler-note main.rooms .guest-note{display:none}
`;document.head.append(travelerCardStyle);
const travelerCardRender=render;render=function(){travelerCardRender();unifyTravelerCards()};unifyTravelerCards();
