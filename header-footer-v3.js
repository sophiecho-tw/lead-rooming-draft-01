(() => {
 const room=/\/(pre|trip)-room\//.test(location.pathname), pre=location.pathname.includes('/pre-');
 const radio='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2"/><path d="M8.8 8.8a4.5 4.5 0 0 0 0 6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4M6 6a8.5 8.5 0 0 0 0 12M18 6a8.5 8.5 0 0 1 0 12"/></svg>';
 function apply(){const phone=document.querySelector('.phone'),nav=phone?.querySelector('.navbar');if(!nav)return;
  const title=nav.querySelector('h1');if(title)title.textContent=room?'分房表':'團大表';
  let back=nav.querySelector('.nav-back,[data-action="back"]');if(!back){back=document.createElement('button');back.type='button';back.className='nav-back';back.setAttribute('aria-label','返回');back.innerHTML='<svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg>';back.onclick=()=>history.back();nav.prepend(back)}
  let signal=nav.querySelector('.header-signal');if(!signal){signal=document.createElement('button');signal.className='header-signal';signal.type='button';signal.setAttribute('aria-label','通知');signal.innerHTML=radio;signal.onclick=()=>{if(typeof toast==='function')toast('通知功能示範')};nav.append(signal)}
  if(pre){const actions=phone.querySelector('.handover-actions');if(actions){const correction=actions.querySelector('[data-pre="correction"]'),confirm=actions.querySelector('[data-pre="confirm"]');if(correction)correction.textContent='問題回報';if(confirm&&!confirm.disabled)confirm.textContent='資料無誤';}}
 }
 const previous=render;render=function(){previous();apply()};apply();
 const style=document.createElement('style');style.textContent=`
 .navbar{position:relative!important;height:64px!important;padding:0 16px!important;gap:8px!important;background:#f5f5f5!important;border:0!important}
 .navbar h1{position:absolute;left:100px;right:100px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;font-size:17px!important;line-height:24px!important}
 .navbar .nav-back,.navbar [data-action="back"]{position:relative;z-index:1;display:grid;place-items:center;width:40px!important;height:40px!important;padding:8px!important;margin:0!important;border-radius:50%!important;background:#414545!important;color:white!important;flex:none}
 .navbar .nav-back svg,.navbar [data-action="back"] svg{width:24px;height:24px;stroke:white}
 .navbar .display-settings{margin-left:auto;width:40px!important;height:40px!important;border:1px solid #ddd!important;border-radius:50%!important;background:#fff!important;padding:8px!important;z-index:1}
 .navbar .header-signal{width:40px;height:40px;border-radius:50%!important;background:#ffe4e5;color:#f2384b;padding:8px;display:grid;place-items:center;z-index:1;flex:none}
 .header-signal svg{width:23px;height:23px;stroke:currentColor;fill:none;stroke-width:1.8}
 .handover-actions{position:fixed!important;left:0!important;right:0!important;bottom:0!important;display:flex!important;gap:10px!important;margin:0!important;padding:14px 16px calc(14px + env(safe-area-inset-bottom))!important;border:0!important;border-top:1px solid #eee!important;background:#fff!important;box-shadow:0 -2px 8px #0000000d!important}
 .handover-actions .compact-search{flex:0 0 44px!important;width:44px!important;padding:9px!important;color:#444!important;background:#fff!important;border:1px solid #ddd!important}
 .handover-actions button:not(.compact-search){flex:1!important;min-height:44px!important;border-radius:9px!important;box-shadow:none!important;font-weight:650!important}
 .handover-actions [data-pre="correction"]{border:1px solid #f0344b!important;background:#fff!important;color:#f0344b!important}
 .handover-actions [data-pre="confirm"]{border:1px solid #ee3347!important;background:#ee3347!important;color:#fff!important}
 .context-row .context-search{margin-left:auto;width:40px;height:40px;padding:9px;color:#555;display:grid;place-items:center}
 .context-search svg{width:21px;height:21px}
 .phone.pre-search-open .handover-actions{display:none!important}
 .phone.pre-search-open .review-tools{left:0!important;right:0!important;bottom:0!important;margin:0!important;padding:14px 16px calc(14px + env(safe-area-inset-bottom))!important;background:#fff!important;border-top:1px solid #eee!important;box-shadow:0 -2px 8px #0000000d!important}
 .phone{padding-bottom:calc(90px + env(safe-area-inset-bottom))}
 ${!pre ? `.floating-tools, .attendance-bottom { position:fixed!important; left:0!important; right:0!important; bottom:0!important; width:100%!important; max-width:none!important; margin:0!important; padding:14px 16px calc(14px + env(safe-area-inset-bottom))!important; background:#fff!important; border-top:1px solid #eee!important; box-shadow:0 -2px 8px #0000000d!important; }` : ''}
 `;document.head.append(style);
})();
