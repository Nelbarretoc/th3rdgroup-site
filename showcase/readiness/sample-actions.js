const status=document.querySelector('[data-report-status]');
document.querySelectorAll('.toolbar button').forEach(button=>button.disabled=false);
document.querySelector('[data-copy-report]').addEventListener('click',async()=>{
try{await navigator.clipboard.writeText(location.href);status.textContent="Sample link copied. No private report access is granted.";}
catch{status.textContent="Could not copy automatically. Copy the address from your browser to share this sample.";}
});
document.querySelector('[data-print-report]').addEventListener('click',()=>window.print());
const language=document.querySelector('[data-report-language]');
const preserveSection=()=>{const target=new URL(language.href);target.hash=location.hash;language.href=target.href;};
preserveSection();window.addEventListener('hashchange',preserveSection);
