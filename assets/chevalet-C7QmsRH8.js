import{bB as a}from"./index-CZXUOM1k.js";import{q as r}from"./qr-Z2cvSDB-.js";function l(e,t){const i=encodeURIComponent(t);return`${e}/etablissement/${i}?utm_source=qr&utm_medium=chevalet&utm_campaign=${i}`}function n(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function m(e){const t=r(e.url,{scale:6}),i=e.url.replace(/^https?:\/\//,"").replace(/\?.*$/,"");return`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Chevalet ${n(e.name)}</title>
<style>
@page { size: A6 portrait; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; color: ${a.ink}; }
.card { width: 105mm; height: 148mm; padding: 9mm 8mm; display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; }
.brand { font-size: 26pt; font-weight: 600; letter-spacing: -0.5pt; }
h1 { font-size: 13pt; margin: 2mm 0 0; font-weight: 600; }
p { margin: 1.5mm 0; font-size: 10pt; line-height: 1.35; }
.qr svg { width: 52mm; height: 52mm; }
.small { font-size: 8pt; color: ${a.inkSoft}; word-break: break-all; }
.langs { font-size: 8.5pt; color: ${a.inkSoft}; }
</style></head><body><div class="card">
<div><div class="brand">cura</div><h1>${n(e.name)}</h1></div>
<div><p><strong>Vos soins et produits de parapharmacie livrés ici</strong></p>
<p class="langs">Delivered to you · Entregado aquí</p></div>
<div class="qr">${t}</div>
<div><p>Scannez avec l'appareil photo de votre téléphone</p>
<p class="small">${n(i)}</p>
${e.phone?`<p>Ou appelez le ${n(e.phone)}</p>`:""}</div>
</div><script>window.onload = function () { setTimeout(function () { window.print() }, 300) }<\/script></body></html>`}export{n as a,m as c,l as e};
