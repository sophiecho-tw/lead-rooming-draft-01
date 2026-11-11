function searchNorm(value){return String(value??'').normalize('NFKC').toLocaleLowerCase().replace(/[\s,，、\/\-_.|｜]+/g,'');}
function searchTerms(value){return String(value??'').normalize('NFKC').trim().split(/\s+/).map(searchNorm).filter(Boolean);}
function searchMatches(query,values){const fields=values.map(searchNorm);return searchTerms(query).every(term=>fields.some(value=>value.includes(term)));}
const displayOptions=[['passport','護照號碼、效期'],['pnr','PNR'],['note','備註'],['bus','巴士車號／座位'],['boardingPoint','上車地點'],['alightingPoint','下車地點'],['hotel','飯店／房型'],['identity','身分證字號'],['taiwan_permit','台胞證、效期'],['traveler_review','旅客詳情'],['evisa','電說']];
function roomDisplayFields(){const prefs=JSON.parse(localStorage.getItem('layout-display-'+location.pathname)||'null');return prefs?.fields||(prefs?.travelerNote===false?[]:['note']);}
function roomExtraFields(p){return displayOptions.filter(([id])=>id!=='note'&&roomDisplayFields().includes(id)).map(([,label])=>`<span class="detail-line">${label} · 未提供</span>`).join('');}
