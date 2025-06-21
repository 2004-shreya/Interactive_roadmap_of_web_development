document.querySelectorAll('.step').forEach(step=>{
    step.addEventListener('mouseenter',()=>{
        const tooltipText=step.getAttribute('data-tooltip');
        const tooltip=document.createElement('div');
        tooltip.className='tooltip';
        tooltip.innerText=tooltipText;
        step.appendChild(tooltip);
        tooltip.style.display='block';
        });
        step.addEventListener('mouseleave',()=>{
            const tooltip=step.querySelector('.tooltip');
            if(tooltip) tooltip.remove();
        });
});

function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }