// Generate one real PDF page from the current rooming data; preview and download share the blob.
if(location.pathname.includes('trip-room')){
let roomPdfUrl='';
async function buildRoomPdf(){
const response=await fetch('../assets/rooming-reference.pdf');if(!response.ok)throw new Error('PDF unavailable');return URL.createObjectURL(await response.blob());
}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-action]');if(!b)return;if(b.dataset.action==='export'&&!state.table.rooms.some(r=>!r.number.trim())){e.preventDefault();e.stopImmediatePropagation();try{const next=await buildRoomPdf();if(roomPdfUrl)URL.revokeObjectURL(roomPdfUrl);roomPdfUrl=next;dialog={kind:'preview'};modal('分房表預覽','<iframe title="分房表 PDF 預覽" src="'+roomPdfUrl+'" style="width:100%;height:65dvh;border:0;background:#ddd"></iframe>',button('close','返回')+button('export-options','選擇輸出方式','primary'));document.querySelector('.modal')?.classList.add('preview-modal')}catch{toast('PDF 產生失敗，請重試')}}else if(b.dataset.action==='export-pdf'&&roomPdfUrl){e.preventDefault();e.stopImmediatePropagation();const a=document.createElement('a');a.href=roomPdfUrl;a.download='分房表-'+dateShort(selectedDay).replace('/','-')+'.pdf';a.click()}},true);
}
