const status=document.querySelector('[data-report-status]');
document.querySelectorAll('.toolbar button').forEach(button=>button.disabled=false);
document.querySelector('[data-copy-report]').addEventListener('click',async()=>{
try{await navigator.clipboard.writeText(location.href);status.textContent="Enlace del ejemplo copiado. No da acceso a informes privados.";}
catch{status.textContent="No se pudo copiar automáticamente. Puedes compartir el ejemplo copiando la dirección del navegador.";}
});
document.querySelector('[data-print-report]').addEventListener('click',()=>window.print());
const language=document.querySelector('[data-report-language]');
const preserveSection=()=>{const target=new URL(language.href);target.hash=location.hash;language.href=target.href;};
preserveSection();window.addEventListener('hashchange',preserveSection);
