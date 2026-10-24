const form=document.getElementById('searchForm');
const input=document.getElementById('searchInput');
const toast=document.getElementById('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
function searchWikipedia(query){const clean=query.trim();if(!clean){showToast('Type a topic first, and let curiosity take over.');input.focus();return}window.open('https://en.wikipedia.org/w/index.php?search='+encodeURIComponent(clean),'_blank','noopener,noreferrer')}
form.addEventListener('submit',e=>{e.preventDefault();searchWikipedia(input.value)});
document.querySelectorAll('[data-query]').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.query;searchWikipedia(button.dataset.query)}));
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('light');const isLight=document.body.classList.contains('light');document.getElementById('themeToggle').textContent=isLight?'☾':'☼';document.getElementById('themeToggle').setAttribute('aria-label',isLight?'Switch to dark theme':'Switch to light theme');showToast(isLight?'Light mode enabled':'Dark mode enabled')});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id==='#'){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}));
