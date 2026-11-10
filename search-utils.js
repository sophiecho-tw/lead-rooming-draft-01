function searchNorm(value){return String(value??'').normalize('NFKC').toLocaleLowerCase().replace(/[\s,，、\/\-_.|｜]+/g,'');}
function searchTerms(value){return String(value??'').normalize('NFKC').trim().split(/\s+/).map(searchNorm).filter(Boolean);}
function searchMatches(query,values){const fields=values.map(searchNorm);return searchTerms(query).every(term=>fields.some(value=>value.includes(term)));}
const displayOptions=[['bus','巴士座位'],['note','備註'],['boarding','上下車地點'],['hotel','飯店／房型'],['identity','身分證號'],['passport','護照號碼'],['traveler_review','旅客評'],['order_review','訂單評'],['evisa','電批']];
function roomDisplayFields(){const prefs=JSON.parse(localStorage.getItem('layout-display-'+location.pathname)||'null');return prefs?.fields||(prefs?.travelerNote===false?[]:['note']);}
function roomExtraFields(p){return displayOptions.filter(([id])=>id!=='note'&&roomDisplayFields().includes(id)).map(([,label])=>`<span class="detail-line">${label} · 未提供</span>`).join('');}
