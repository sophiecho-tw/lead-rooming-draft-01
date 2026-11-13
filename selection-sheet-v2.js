// Version 2: bottom sheet single-choice menus.
(()=>{
const style=document.createElement('style');style.textContent=`
#date-popover-backdrop,#group-popover-backdrop{background:#0006!important;z-index:100!important;display:flex;align-items:flex-end}
#date-popover-backdrop .date-popover,#group-popover-backdrop .date-popover{position:relative!important;inset:auto!important;width:100%!important;max-height:75dvh!important;border-radius:18px 18px 0 0!important;padding-bottom:env(safe-area-inset-bottom);animation:sheetIn .22s ease-out}
.sheet-title{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;font-size:18px;font-weight:700;flex:none}
.sheet-title::before{content:'';position:absolute;top:7px;left:calc(50% - 18px);width:36px;height:4px;border-radius:4px;background:#ddd}
.date-popover .sheet-close{width:36px!important;min-height:36px!important;padding:0!important;text-align:center!important;font-size:24px!important;border:0!important;background:transparent!important}
.date-popover .popover-dates{max-height:none!important;flex:1;overflow:auto}
.date-popover .popover-dates button{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:56px;background:#fff!important;padding:14px 20px!important}
.date-popover .popover-dates button::after{content:'';width:18px;height:18px;border:1px solid #bbb;border-radius:50%;flex:none}
.date-popover .popover-dates button[aria-current]::after{border:5px solid #fa405c;box-sizing:border-box}
.date-popover .popover-dates button[aria-current]{color:#ed3852;background:#fff5f7!important}
.date-popover .sheet-last-row button::after{display:none}.date-popover .sheet-last-row button{color:#ed3852!important;border-top:1px solid #ddd;font-weight:500!important}.date-popover-secondary{background:white;flex:none;padding:4px 0}
.date-popover-secondary button{min-height:50px!important;font-size:16px!important}
@keyframes sheetIn{from{transform:translateY(100%)}to{transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.date-popover{animation:none!important}}
`;document.head.append(style);
function enhance(wrap){if(wrap.dataset.sheetReady)return;wrap.dataset.sheetReady='true';const panel=wrap.querySelector('section');if(!panel)return;panel.setAttribute('aria-modal','true');const group=wrap.id==='group-popover-backdrop';
const secondary=panel.querySelector('.date-popover-secondary');if(secondary){panel.querySelector('.popover-dates').append(secondary);secondary.classList.add('sheet-last-row')}
const title=document.createElement('div');title.className='sheet-title';title.innerHTML=`<span>${group?'切換檢視方式':'切換住宿日期'}</span><button class="sheet-close" aria-label="關閉">×</button>`;panel.prepend(title);
title.querySelector('button').onclick=e=>{e.stopPropagation();group?closeGroupMenu():closeDateMenu()};
if(group)panel.querySelectorAll('[data-action="view"]').forEach(b=>{if(b.dataset.id===view)b.setAttribute('aria-current','true');b.textContent=b.textContent.replace(/\s*✓/g,'')});
requestAnimationFrame(()=>{const selected=panel.querySelector('[aria-current]');if(selected){const list=panel.querySelector('.popover-dates');list.scrollTop=Math.max(0,selected.offsetTop-list.offsetTop-list.clientHeight/2+selected.offsetHeight/2)}});
}
new MutationObserver(()=>document.querySelectorAll('#date-popover-backdrop,#group-popover-backdrop').forEach(enhance)).observe(document.body,{childList:true});
})();
