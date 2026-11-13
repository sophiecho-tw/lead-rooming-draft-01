// Bilingual hotel heading for the rooming views.
if(location.pathname.includes('pre-room')||location.pathname.includes('trip-room')){
const hotelHeadingStyle=document.createElement('style');hotelHeadingStyle.textContent='.hotel-heading{padding:0 12px 4px;color:#333}.hotel-heading h2{margin:0;font-size:20px;line-height:1.25;font-weight:700}.hotel-heading p{margin:0;font-size:13px;line-height:1.2;color:#777;overflow-wrap:anywhere}';document.head.append(hotelHeadingStyle);
function syncHotelHeading(){const rooms=document.querySelector('main.rooms');if(!rooms||rooms.querySelector('.hotel-heading'))return;const hotel=Number(selectedDay)%2===0?['HF 伊帕內瑪花園飯店','HF IPANEMA PARK']:['梅利亞布蘭科堡飯店','MELIA CASTELO BRANCO'];const section=document.createElement('section');section.className='hotel-heading';section.setAttribute('aria-label','住宿飯店');section.innerHTML='<h2>'+hotel[0]+'</h2><p>'+hotel[1]+'</p>';rooms.prepend(section)}
new MutationObserver(syncHotelHeading).observe(document.getElementById('app'),{childList:true,subtree:true});syncHotelHeading();
}
