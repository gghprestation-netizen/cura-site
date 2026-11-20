import{j as e,L as o}from"./react-cvTyn8en.js";import{c as n,T as h,H as d,by as m,A as u,a9 as p,bI as x}from"./index-Dj2C-wAv.js";import{u as k}from"./i18n-DJy7pM82.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=n("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]),y={client:m,direction:b,operator:f,counselor:d,pharmacy:v,courier:h};function j(){const{profile:t}=p();return x(t==null?void 0:t.roles)}function M({current:t,heading:c=!0}){const{t:s}=k(),l=j();if(l.length===0)return null;const i=[...l,{role:"client",to:"/compte",label:s("account.title"),text:s("account.spaces_client_text")}].filter(a=>a.to!==t);return e.jsxs("section",{"aria-label":c?void 0:s("account.spaces_title"),"aria-labelledby":c?"mes-espaces":void 0,className:"mb-8",children:[c&&e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"mes-espaces",className:"mb-1 text-xl font-bold text-navy-900",children:s("account.spaces_title")}),e.jsx("p",{className:"mb-3 text-sm text-ink-700",children:s("account.spaces_text")})]}),e.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:i.map(a=>{const r=y[a.role];return e.jsxs(o,{to:a.to,className:"flex min-h-20 items-center gap-4 rounded-card bg-navy-900 p-4 text-white transition-colors hover:bg-navy-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-focus",children:[e.jsx("span",{className:"inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15",children:e.jsx(r,{className:"h-6 w-6",strokeWidth:1.75,"aria-hidden":!0})}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block text-lg font-bold leading-tight",children:a.label}),e.jsx("span",{className:"block text-sm text-white/85",children:a.text})]}),e.jsx(u,{className:"h-5 w-5 shrink-0","aria-hidden":!0})]},a.to)})})]})}export{M as S,j as u};
