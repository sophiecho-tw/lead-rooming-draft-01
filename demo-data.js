// Stable fictitious examples so every traveler can be previewed consistently.
const demoNameCodes={};
function getDemoTraveler(p){
 let seed=Array.from(p.name||'旅客').reduce((n,c)=>(n*33+c.codePointAt(0))>>>0,5381),pick=a=>a[seed%a.length];
 const code=String(seed%900+100),seat=String(2+seed%20)+['A','B','C','D'][seed%4];
 const places=['台北車站東三門','板橋車站南一門','桃園機場第二航廈','台中高鐵站六號出口','高雄車站東出口'];
 const hotels=['京都四條飯店／雙人房','大阪市區飯店／雙床房','奈良公園飯店／三人房','神戶港灣飯店／雙人房'];
 const needs=['需協助安排行李','希望安排靠近電梯','需要低樓層房間','行動較慢，集合時請留意'];
 const diets=['一般餐','不吃牛肉','全素','不吃海鮮'];
 const boarding=pick(places),alighting=places[(seed+2)%places.length],hotel=pick(hotels);
 return {identity:'DEMO-ID-'+code,passport:'DEMO-P-'+code,passportExpiry:`203${2+seed%5}-0${1+seed%9}-15`,taiwanPermit:'DEMO-TW-'+code,taiwanPermitExpiry:`203${1+seed%5}-0${1+(seed+2)%9}-20`,pnr:'DM'+code+'X',bus:'DEMO-'+(1+seed%3),seat,boarding,boardingPoint:boarding,alightingPoint:alighting,hotel,roomType:hotel.split('／')[1],needs:pick(needs),diet:pick(diets),op:'示範：請協助確認住宿及餐食安排。',email:'traveler'+code+'@example.com',address:`台北市示範區旅遊路 ${1+seed%99} 號`,emergencyContact:pick(['陳先生（親友）','林小姐（親友）','王先生（家人）','張小姐（家人）']),emergencyPhone:`0900-000-${code}`,traveler_review:'已確認旅客資料',order_review:'已確認訂單內容',evisa:'已完成行前電話說明',birthday:`19${70+seed%25}-0${1+seed%9}-15`,order:`2026-${10000+seed%80000}`};
}
guests.forEach(p=>{const demo=getDemoTraveler(p);for(const [key,value] of Object.entries(demo))if(p[key]===undefined||p[key]===null||p[key]==='')p[key]=value;});
render();
