// Display the same complete traveler card in all four views.
const fullProfileOriginal=profile;
profile=function(id){
 fullProfileOriginal(id);
 const p=guests.find(x=>x.id===id),body=document.querySelector('#overlay .modal-body');if(!p||!body)return;
 const existing={};body.querySelectorAll('.profile-field').forEach(el=>{const key=el.querySelector('small')?.textContent?.trim();if(key)existing[key]=el.querySelector('p')?.textContent?.trim()||'';el.remove()});
 const birthdays=['1982-05-16','1987-08-22','1959-03-08','1978-09-11','1981-12-19','1990-04-06','1992-07-28','1971-02-04','1989-10-17','2014-01-09','2010-11-24','2020-06-12'];
 const i=guests.indexOf(p),birth=p.birthday||existing['生日']||birthdays[i]||'',years=birth&&birth!=='未提供'?`${2026-Number(birth.slice(0,4))-(('11-06'<birth.slice(5))?1:0)} 歲`:'';
 const val=(...values)=>values.find(x=>x!==undefined&&x!==null&&String(x).trim()&&x!=='未提供'&&x!=='無')||'未提供';
 const date=x=>x&&x!=='未提供'?String(x).replaceAll('-','/'):'未提供';
 const link=(value,type)=>value!=='未提供'?`<a href="${type}:${esc(value)}">${esc(value)}</a>`:esc(value);
 const combine=(a,b,formatDate=false)=>`${esc(val(a))}${b&&b!=='未提供'?` <span class="profile-divider">｜</span> ${esc(formatDate?date(b):b)}`:''}`;
 const note=val(typeof guestSetting==='function'?guestSetting(p).note:'',p.note,existing['備註']);
 const phone=val(p.phone,existing['旅客電話']),mail=val(p.email),emergency=val(p.emergencyContact),emergencyPhone=val(p.emergencyPhone);
 const sections=[
  [['PNR',esc(val(p.pnr)),true],['身分證',esc(val(p.identity)),true],['台胞',combine(p.taiwanPermit,p.taiwanPermitExpiry,true),true],['護照',combine(p.passport,p.passportExpiry,true),true]],
  [['巴士',combine(p.bus,p.seat),true],['上車',esc(val(p.boardingPoint)),true],['下車',esc(val(p.alightingPoint)),true],['房型',esc(val(p.roomType,p.hotel)),true]],
  [['需求',esc(val(p.needs))],['飲食',esc(val(p.diet,existing['餐食']))],['備註',esc(note)],['OP 備註',esc(val(p.op))]],
  [['信箱',link(mail,'mailto')],['地址',esc(val(p.address))],['聯絡人',`${esc(emergency)}${emergencyPhone!=='未提供'?` <span class="profile-divider">｜</span> ${link(emergencyPhone,'tel')}`:''}`],['訂單',esc(val(p.order,existing['訂單編號']))],['房間',esc(val(existing['房間']))]]];
 const container=document.createElement('div');container.className='full-profile-card';container.innerHTML=`<div class="profile-basics"><div>${esc(date(birth))}${years?` <span class="profile-divider">｜</span> ${esc(years)}`:''}</div><div>${link(phone,'tel')}</div></div>`+sections.map(rows=>`<div class="profile-section">${rows.map(([label,value,strong])=>`<div class="profile-row"><span class="profile-label">${esc(label)}</span><span class="profile-value${strong?' emphasis':''}">${value}</span></div>`).join('')}</div>`).join('');
 const editor=body.querySelector('.star-setting,.note-editor');if(editor)editor.before(container);else body.append(container);
};
const fullProfileStyle=document.createElement('style');fullProfileStyle.textContent=`#overlay .modal-body .profile-name{font-size:20px;line-height:1.35;margin:0 0 4px;color:#242424}#overlay .modal-body .profile-english{font-size:16px;line-height:1.45;margin:0 0 10px;color:#292929}.full-profile-card{font-size:15px;color:#242424;line-height:1.55}.profile-basics>div{margin:5px 0}.profile-section{border-top:1px solid #ddd;padding:10px 0;margin-top:10px}.profile-row{display:grid;grid-template-columns:65px minmax(0,1fr);gap:8px;align-items:start;margin:5px 0}.profile-label{color:#777;white-space:nowrap}.profile-value{min-width:0;overflow-wrap:anywhere;white-space:pre-wrap}.profile-value.emphasis{font-weight:650}.profile-divider{font-weight:400}.full-profile-card a{color:#2c9bd3;text-decoration:underline;overflow-wrap:anywhere}.full-profile-card a:focus-visible{outline:2px solid #69b8e0}`;document.head.append(fullProfileStyle);
