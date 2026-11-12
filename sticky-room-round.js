(() => {
  const style = document.createElement('style');
  style.textContent = `.mode-view .room-head.is-stuck, .mode-view .room-head.is-stuck::after, .group-head.is-stuck, .group-head.is-stuck::after { border-radius: 9px !important; } .mode-view .room-head.is-stuck { box-shadow: 0 1px 0 #ddd; }`;
  document.head.append(style);
  let pending = false;
  function update() {
    pending = false;
    document.querySelectorAll('.mode-view .room-head, .group-head').forEach(head => {
      const room = head.closest('.room');
      const top = parseFloat(getComputedStyle(head).top);
      const headRect = head.getBoundingClientRect();
      const roomRect = room.getBoundingClientRect();
      head.classList.toggle('is-stuck', Number.isFinite(top) && roomRect.top < top && roomRect.bottom <= top + headRect.height + 2 && headRect.top <= top + 1);
    });
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule);
  new MutationObserver(schedule).observe(document.getElementById('app'), {childList:true, subtree:true});
  schedule();
})();
