(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{65:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);var r=i(2),a=i.n(r),o=i(56),n=i.n(o),c=(i(65),i(11)),s=i(7),l=i(78),d=i(77),m=i(1),h=i(0);const p=m.a.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${e=>e.scrolled?"0.75rem 0":"1.5rem 0"};
  background: ${e=>e.scrolled?"rgba(11, 12, 16, 0.85)":"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(15px)":"none"};
  box-shadow: ${e=>e.scrolled?"0 10px 30px rgba(0, 0, 0, 0.3)":"none"};
  border-bottom: ${e=>e.scrolled?"1px solid rgba(255, 255, 255, 0.05)":"none"};
`,b=m.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,g=Object(m.a)(d.a.div)`
  font-size: 1.75rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: -0.5px;
`,j=m.a.nav`
  display: none;
  
  @media (min-width: 992px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`,x=Object(m.a)(d.a.div)`
  position: relative;
`,u=Object(m.a)(c.b)`
  color: ${e=>e.active?"var(--primary-color)":"var(--light-color)"};
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: ${e=>e.active?"rgba(0, 122, 255, 0.1)":"transparent"};
  
  &:hover {
    color: var(--primary-color);
    background: rgba(0, 122, 255, 0.05);
  }

  svg {
    font-size: 1.2rem;
  }
`,v=Object(m.a)(d.a.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
  border-radius: 2px;
`,f=m.a.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--light-color);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 992px) {
    display: none;
  }
`,y=Object(m.a)(d.a.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: rgba(11, 12, 16, 0.98);
  backdrop-filter: blur(20px);
  padding: 5rem 2rem 2rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
`,O=Object(m.a)(c.b)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: ${e=>e.active?"var(--primary-color)":"var(--light-color)"};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 12px;
  background: ${e=>e.active?"rgba(0, 122, 255, 0.1)":"transparent"};
  
  &:hover {
    color: var(--primary-color);
    background: rgba(0, 122, 255, 0.05);
  }
`,w=Object(m.a)(d.a.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 98;
`;var k=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)(!1),o=Object(s.f)();Object(r.useEffect)((()=>{const e=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const n=[{name:"Home",path:"/",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})},{name:"About",path:"/about",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})},{name:"Projects",path:"/projects",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})},{name:"Skills",path:"/skills",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})},{name:"Certifications",path:"/certifications",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})},{name:"Achievements",path:"/achievements",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"})})},{name:"Contact",path:"/contact",icon:Object(h.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}];return Object(h.jsxs)(p,{scrolled:i,children:[Object(h.jsxs)(b,{children:[Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)(g,{className:"gradient-text",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Eric.dev"})}),Object(h.jsx)(j,{children:n.map((e=>Object(h.jsxs)(x,{children:[Object(h.jsxs)(u,{to:e.path,active:o.pathname===e.path?1:0,children:[e.icon,e.name]}),o.pathname===e.path&&Object(h.jsx)(v,{layoutId:"nav-indicator"})]},e.name)))}),Object(h.jsx)(f,{onClick:()=>t(!e),children:e?Object(h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:Object(h.jsx)("path",{d:"M6 18L18 6M6 6L18 18",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):Object(h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:Object(h.jsx)("path",{d:"M4 6H20M4 12H20M4 18H20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Object(h.jsx)(l.a,{children:e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1)}),Object(h.jsxs)(y,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},children:[Object(h.jsx)("div",{style:{marginBottom:"2rem"},children:Object(h.jsx)(g,{className:"gradient-text",children:"Eric.dev"})}),n.map((e=>Object(h.jsxs)(O,{to:e.path,active:o.pathname===e.path?1:0,onClick:()=>t(!1),children:[e.icon,e.name]},e.name)))]})]})})]})};const A=m.a.footer`
  background: rgba(31, 34, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
`,C=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,z=m.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,S=m.a.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,M=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,P=m.a.div`
  display: flex;
  gap: 1rem;
`,L=Object(m.a)(d.a.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #2a2d3a;
  border-radius: 50%;
  color: #a0a0a0;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,I=m.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,B=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,E=m.a.div`
  display: flex;
  gap: 1.5rem;
`,T=m.a.a`
  color: #a0a0a0;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;var F=()=>{const e=(new Date).getFullYear(),t=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(h.jsx)(A,{children:Object(h.jsxs)(C,{children:[Object(h.jsxs)(z,{children:[Object(h.jsxs)(S,{children:[Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)("h3",{className:"gradient-text",children:"Eric.dev"})}),Object(h.jsx)(M,{children:"AI/ML Developer & Problem Solver"})]}),Object(h.jsx)(P,{children:t.map(((e,t)=>Object(h.jsx)(L,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-3},whileTap:{y:0},children:e.icon},t)))})]}),Object(h.jsxs)(I,{children:[Object(h.jsxs)(B,{children:["\xa9 ",e," Bhekumusa Eric Ntshwenya. All rights reserved."]}),Object(h.jsxs)(E,{children:[Object(h.jsx)(T,{href:"/privacy",children:"Privacy Policy"}),Object(h.jsx)(T,{href:"/terms",children:"Terms of Service"})]})]})]})})};const N=m.a.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;var W=()=>{const e=Object(r.useRef)(null);return Object(r.useEffect)((()=>{const t=e.current,i=t.getContext("2d");let r;const a=()=>{t.width=window.innerWidth,t.height=window.innerHeight};a(),window.addEventListener("resize",a);const o=[],n=1e3;for(let e=0;e<200;e++)o.push({x:Math.random()*t.width-t.width/2,y:Math.random()*t.height-t.height/2,z:Math.random()*n,color:`rgba(${100*Math.random()+155}, ${100*Math.random()+155}, ${100*Math.random()+155}, ${.5*Math.random()+.5})`});const c=()=>{i.fillStyle="rgba(18, 18, 18, 0.2)",i.fillRect(0,0,t.width,t.height);const e=t.width/2,a=t.height/2;for(let r=0;r<200;r++){const c=o[r];c.z-=.5,c.z<=0&&(c.x=Math.random()*t.width-e,c.y=Math.random()*t.height-a,c.z=n);const s=n/(n+c.z),l=e+c.x*s,d=a+c.y*s,m=1.5*s;i.beginPath(),i.arc(l,d,m,0,2*Math.PI),i.fillStyle=c.color,i.fill()}r=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(r)}}),[]),Object(h.jsx)(N,{ref:e})},D=i(42),H=i(76),R=i(79);const $=Object(m.a)(d.a.div)`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,V=m.a.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`,J=m.a.div`
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2a2d3a 0%, #1a1c24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  transform: ${e=>e.hovered?"scale(1.05)":"scale(1)"};
  position: relative;
`,_=m.a.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
`,Y=m.a.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`,G=m.a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.hovered?"0":"1"};
  transition: opacity 0.3s ease;
`,q=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,Q=m.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95rem;
`,U=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,X=m.a.span`
  background: rgba(0, 122, 255, 0.1);
  color: var(--primary-color);
  padding: 0.35rem 0.85rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(0, 122, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 122, 255, 0.2);
    border-color: var(--primary-color);
  }
`,K=m.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z=m.a.a`
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;var ee=e=>{let{project:t}=e;const[i,a]=Object(r.useState)(!1),o=Object(r.useRef)(null),n=Object(D.a)(0),s=Object(D.a)(0),l=Object(H.a)(n,{stiffness:150,damping:15}),d=Object(H.a)(s,{stiffness:150,damping:15}),m=Object(R.a)(d,[-.5,.5],[10,-10]),p=Object(R.a)(l,[-.5,.5],[-10,10]);return Object(h.jsx)($,{ref:o,whileHover:{scale:1.02},style:{rotateX:m,rotateY:p},onMouseMove:e=>{if(!o.current)return;const t=o.current.getBoundingClientRect(),i=t.width,r=t.height,a=(e.clientX-t.left)/i-.5,c=(e.clientY-t.top)/r-.5;n.set(a),s.set(c)},onMouseEnter:()=>a(!0),onMouseLeave:()=>{n.set(0),s.set(0),a(!1)},children:Object(h.jsxs)(V,{children:[Object(h.jsxs)(J,{hovered:i,children:[t.image?Object(h.jsx)("img",{src:"."+t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)(_,{children:t.title.charAt(0)}),Object(h.jsx)(Y,{children:"Project Preview"})]}),Object(h.jsx)(G,{hovered:i,children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)(_,{children:t.title.charAt(0)}),Object(h.jsx)(Y,{children:"Click to view details"})]})})]}),Object(h.jsx)(q,{className:"gradient-text",children:t.title}),Object(h.jsx)(Q,{children:t.description}),Object(h.jsx)(U,{children:t.technologies.map(((e,t)=>Object(h.jsx)(X,{children:e},t)))}),Object(h.jsxs)(K,{children:[t.github&&Object(h.jsxs)(Z,{href:t.github,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),"Code"]}),t.demo&&Object(h.jsxs)(Z,{href:t.demo,target:"_blank",rel:"noopener noreferrer",style:{color:"#4CAF50"},children:[Object(h.jsxs)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"}),Object(h.jsx)("path",{d:"M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"})]}),"Demo"]}),Object(h.jsx)(c.b,{to:`/projects/${t.slug}`,children:Object(h.jsxs)(Z,{as:"span",children:["Details",Object(h.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]})]})})};const te=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`,ie=Object(m.a)(d.a.div)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Badge type styling - different colors for different achievements */
  background: ${e=>{switch(e.type){case"hackathon":return"linear-gradient(135deg, #FFD700, #FFA500)";case"certification":return"linear-gradient(135deg, #4CAF50, #45a049)";case"project":return"linear-gradient(135deg, #2196F3, #1976D2)";case"recognition":return"linear-gradient(135deg, #9C27B0, #7B1FA2)";default:return"linear-gradient(135deg, var(--primary-color), var(--accent-color))"}}};
  
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`,re=m.a.div`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`,ae=m.a.span`
  white-space: nowrap;
`,oe=m.a.div`
  position: relative;
  display: inline-block;
`,ne=m.a.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
  
  ${oe}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;var ce=e=>{let{achievements:t=[]}=e;const i=t.length>0?t:[{id:1,text:"Sappas Hackathon Winner",type:"hackathon",icon:"\ud83c\udfc6",tooltip:"Won the prestigious Sappas Hackathon competition"},{id:2,text:"SAP Tech Consultant",type:"certification",icon:"\ud83c\udfe2",tooltip:"SAP Tech Consultant Certification - Enterprise Solutions Expert"},{id:3,text:"AI/ML Specialist",type:"certification",icon:"\ud83e\udd16",tooltip:"Machine Learning and AI Development Expert"},{id:4,text:"Full-Stack Developer",type:"project",icon:"\ud83d\udcbb",tooltip:"Proficient in both frontend and backend development"},{id:5,text:"Java Developer",type:"certification",icon:"\u2615",tooltip:"Recently added Java to professional toolkit"},{id:6,text:"C# Developer",type:"certification",icon:"#\ufe0f\u20e3",tooltip:"Recently mastered C# and .NET development"},{id:7,text:"Open Source Contributor",type:"recognition",icon:"\ud83c\udf1f",tooltip:"Active contributor to open source projects"},{id:8,text:"Cisco CCNA Certified",type:"certification",icon:"\ud83c\udf10",tooltip:"Cisco Certified Network Associate - Professional networking expertise"}];return Object(h.jsx)(te,{children:i.map(((e,t)=>Object(h.jsxs)(oe,{children:[Object(h.jsxs)(ie,{type:e.type,initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,delay:.1*t,type:"spring",stiffness:100},whileHover:{scale:1.05,y:-3},whileTap:{scale:.95},children:[Object(h.jsx)(re,{children:e.icon}),Object(h.jsx)(ae,{children:e.text})]}),Object(h.jsx)(ne,{children:e.tooltip})]},e.id)))})};const se=m.a.div`
  position: relative;
`,le=m.a.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
`,de=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`,me=Object(m.a)(d.a.div)`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 3rem;
  }
`,he=m.a.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,pe=m.a.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,be=m.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  max-width: 600px;
`,ge=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,je=Object(m.a)(d.a.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
`,xe=m.a.section`
  padding: 6rem 0;
`,ue=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`,ve=m.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`,fe=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 2rem;
`,ye=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Oe=m.a.div`
  text-align: center;
  margin-top: 3rem;
`,we=m.a.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(9, 105, 218, 0.1), rgba(9, 105, 218, 0.05));
  text-align: center;
`,ke=m.a.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,Ae=m.a.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,Ce=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`,ze=[{id:101,title:"Apply4Me",slug:"apply4me",description:"Flagship automation platform serving 10,000+ users with advanced web scraping and process automation.",technologies:["React","Python","Automation"],github:"https://github.com/BhekumusaEric/",demo:"https://apply4me-eta.vercel.app/",image:"/images/projects/apply4me.jpg"},{id:102,title:"SAAIO Training Grounds",slug:"saaio-training",description:"Interactive AI education platform with an in-browser Python environment for high school students.",technologies:["React","Pyodide","AI/ML"],github:"https://github.com/BhekumusaEric/",demo:"https://ai-learning-system-ten.vercel.app/",image:"/images/projects/saaio.jpg"},{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform providing safe routes and real-time danger alerts.",technologies:["Python","Flet","ML"],github:"https://github.com/BhekumusaEric/MSAIskillshackathon",demo:"https://github.com/BhekumusaEric/MSAIskillshackathon",image:"/images/projects/safeway-ai.jpg"}];var Se=()=>Object(h.jsxs)(se,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(le,{children:Object(h.jsxs)(de,{children:[Object(h.jsxs)(me,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsxs)(he,{children:["Hi, I'm ",Object(h.jsx)("span",{className:"gradient-text",children:"Bhekumusa Eric Ntshwenya"})]}),Object(h.jsx)(pe,{children:"Software Developer & Problem Solver"}),Object(h.jsxs)(be,{children:["I build intelligent automation solutions that solve real-world problems. Specializing in Python, automation, and full-stack development. \ud83c\udfc6 ",Object(h.jsx)("strong",{style:{color:"var(--primary-color)"},children:"4-time Hackathon Winner"})," (Microsoft, Amazon, Meta, W&R SETA) with a track record of delivering high-impact products like Apply4Me (10,000+ users)."]}),Object(h.jsx)("div",{style:{margin:"2rem 0"},children:Object(h.jsx)(ce,{})}),Object(h.jsxs)(ge,{children:[Object(h.jsx)(c.b,{to:"/projects",children:Object(h.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"})}),Object(h.jsx)(c.b,{to:"/contact",children:Object(h.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Contact Me"})})]})]}),Object(h.jsx)(je,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:Object(h.jsx)("div",{className:"glass-effect coin-container",style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:Object(h.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})})})]})}),Object(h.jsxs)(xe,{children:[Object(h.jsx)(ue,{children:"Featured Projects"}),Object(h.jsx)(fe,{}),Object(h.jsx)(ve,{children:"Check out some of my recent work. These projects showcase my skills in AI, web development, and problem-solving."}),Object(h.jsx)(ye,{children:ze.map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsx)(ee,{project:e})},e.id)))}),Object(h.jsx)(Oe,{children:Object(h.jsx)(c.b,{to:"/projects",children:Object(h.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View All Projects"})})})]}),Object(h.jsx)(we,{children:Object(h.jsx)(ke,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Ae,{children:"Let's Work Together"}),Object(h.jsx)(Ce,{children:"I'm currently available for freelance work and full-time positions in AI/ML development."}),Object(h.jsx)(c.b,{to:"/contact",children:Object(h.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get In Touch"})})]})})})]});const Me=m.a.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`,Pe=m.a.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  transform: translateX(-50%);
  border-radius: 2px;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`,Le=Object(m.a)(d.a.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
  
  /* Alternating layout for desktop */
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 80px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    text-align: left;
    
    @media (max-width: 768px) {
      padding-left: 80px;
    }
  }
`,Ie=m.a.div`
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid var(--bg-color);
  z-index: 2;
  
  /* Color coding based on milestone type */
  background: ${e=>{switch(e.type){case"education":return"#4CAF50";case"certification":return"#2196F3";case"project":return"#FF9800";case"achievement":return"#FFD700";case"skill":return"#9C27B0";default:return"var(--primary-color)"}}};
  
  /* Positioning for alternating layout */
  ${Le}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  ${Le}:nth-child(even) & {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  /* Hover effect */
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`,Be=m.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
`,Ee=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
`,Te=m.a.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Fe=m.a.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`,Ne=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1rem;
`,We=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,De=m.a.span`
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;var He=e=>{let{experiences:t=[]}=e;const i=t.length>0?t:[{id:1,date:"2024",title:"Sappas Hackathon Winner",description:"Emerged victorious in the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive tech environment.",type:"achievement",icon:"\ud83c\udfc6",tags:["Competition","Innovation","Problem Solving"]},{id:2,date:"2024",title:"Java & C# Skill Expansion",description:"Successfully expanded programming expertise to include enterprise-level Java and C# development, adding significant value to full-stack development capabilities.",type:"skill",icon:"\ud83d\udcbb",tags:["Java","C#","Enterprise Development"]},{id:3,date:"2024",title:"Cloud Computing Certifications",description:"Achieved Microsoft Azure Fundamentals and AWS Cloud Practitioner certifications, validating expertise in modern cloud infrastructure and services.",type:"certification",icon:"\u2601\ufe0f",tags:["Azure","AWS","Cloud Architecture"]},{id:4,date:"2023-2024",title:"AI/ML Project Portfolio Development",description:"Developed multiple AI and machine learning projects including SafeWayAI, NeuroStrike, and Smart Loan Approval Predictor, showcasing practical AI application skills.",type:"project",icon:"\ud83e\udd16",tags:["Machine Learning","AI Development","Python"]},{id:5,date:"2023",title:"WeThinkCode_ Enrollment",description:"Accepted into the prestigious WeThinkCode_ software development academy, joining an elite program focused on practical coding skills and industry readiness.",type:"education",icon:"\ud83c\udf93",tags:["Education","Software Development","Practical Skills"]},{id:6,date:"2023",title:"Full-Stack Development Mastery",description:"Achieved proficiency in full-stack web development using React, Django, and modern web technologies, enabling end-to-end application development.",type:"skill",icon:"\ud83c\udf10",tags:["React","Django","Full-Stack","Web Development"]}];return Object(h.jsxs)(Me,{children:[Object(h.jsx)(Pe,{}),i.map(((e,t)=>Object(h.jsxs)(Le,{initial:{opacity:0,x:t%2===0?-50:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2*t,type:"spring",stiffness:100},whileHover:{scale:1.02},children:[Object(h.jsx)(Ie,{type:e.type,children:Object(h.jsx)(Be,{children:e.icon})}),Object(h.jsxs)(Ee,{children:[Object(h.jsx)(Te,{children:e.date}),Object(h.jsx)(Fe,{children:e.title}),Object(h.jsx)(Ne,{children:e.description}),e.tags&&Object(h.jsx)(We,{children:e.tags.map(((e,t)=>Object(h.jsx)(De,{children:e},t)))})]})]},e.id)))]})};const Re=m.a.div`
  position: relative;
  padding-top: 80px;
`,$e=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,Ve=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Je=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,_e=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Ye=m.a.section`
  padding: 5rem 0;

  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,Ge=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`,qe=m.a.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    ${e=>e.right?"margin-left: 3rem;":"margin-right: 3rem;"}
  }
`,Qe=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,Ue=m.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`,Xe=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Ke=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Ze=m.a.p`
  color: #a0a0a0;
`,et=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,tt=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,it=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,rt=m.a.ul`
  list-style: none;
`,at=m.a.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin-right: 0.75rem;
  }
`;var ot=()=>{const e={technical:["Python","JavaScript","Java","C#","React","Django","Flask","TensorFlow","Machine Learning","Neural Networks","Data Analysis","AWS","Azure","Cloud Computing","Git","HTML/CSS","Blockchain","Data Science","AI Development","Full-Stack Development"],soft:["Problem Solving","Communication","Teamwork","Leadership","Adaptability","Time Management","Critical Thinking","Competitive Programming","Innovation","Project Management"]};return Object(h.jsxs)(Re,{children:[Object(h.jsx)(W,{}),Object(h.jsx)($e,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Ve,{children:"About Me"}),Object(h.jsx)(Je,{}),Object(h.jsx)(_e,{children:"Get to know more about me, my background, and what drives me as a developer."})]})}),Object(h.jsx)(Ye,{children:Object(h.jsxs)(Ge,{children:[Object(h.jsx)(qe,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(h.jsx)(Qe,{className:"gradient-text",children:"My Story"}),Object(h.jsxs)(Ue,{children:["I'm Bhekumusa Eric Ntshwenya, a passionate software developer and ",Object(h.jsx)("strong",{children:"4-time hackathon winner"})," with expertise in Python, automation, and full-stack development. My journey in tech is driven by a desire to solve real-world problems through innovative code and intelligent systems."]}),Object(h.jsxs)(Ue,{children:["I've successfully built and launched projects like ",Object(h.jsx)("strong",{children:"Apply4Me"}),", an automation platform that has served over 10,000 users, and ",Object(h.jsx)("strong",{children:"SAAIO Training Grounds"}),", an interactive AI education platform for international olympiad students."]}),Object(h.jsxs)(Ue,{children:["My competitive success includes 1st place wins at the ",Object(h.jsx)("strong",{children:"Microsoft SAPPAS"}),", ",Object(h.jsx)("strong",{children:"Amazon Q"}),", ",Object(h.jsx)("strong",{children:"Meta LLAMA"}),", and ",Object(h.jsx)("strong",{children:"W&R SETA"})," hackathons. These experiences have honed my ability to innovate under pressure and deliver high-impact solutions."]}),Object(h.jsx)(Ue,{children:"Currently, I am proficient in Python and have a solid foundation in Java and C# development. While I am still growing my professional experience in Machine Learning, I am passionate about applying AI concepts to create meaningful tools and platforms."}),Object(h.jsx)(Ue,{children:"Beyond coding, I'm committed to continuous learning and professional growth. My recent certifications in cloud computing and expansion into Java and C# development demonstrate my dedication to staying at the forefront of technology trends and industry best practices."})]})}),Object(h.jsx)(qe,{right:!0,children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[Object(h.jsx)("div",{className:"glass-effect coin-container",style:{marginBottom:"2rem",borderRadius:"50%",overflow:"hidden",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",width:"250px",height:"250px",margin:"0 auto 2rem"},children:Object(h.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})}),Object(h.jsx)(Qe,{className:"gradient-text",children:"Quick Facts"}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Location"}),Object(h.jsx)(Ze,{children:"Johannesburg, South Africa"})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Focus Areas"}),Object(h.jsx)(Ze,{children:"AI/ML Development, Enterprise Java/C#, Cloud Computing, Full-Stack Development"})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Recent Achievement"}),Object(h.jsxs)(Ze,{children:["\ud83c\udfc6 ",Object(h.jsx)("strong",{children:"4-time Hackathon Winner"})," (Microsoft, Amazon, Meta, W&R SETA)"]})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Programming Languages"}),Object(h.jsx)(Ze,{children:"Python (Proficient), JavaScript, Java (Good), C# (Beginner)"})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Languages"}),Object(h.jsx)(Ze,{children:"English (Fluent), Zulu (Native)"})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Certifications"}),Object(h.jsx)(Ze,{children:"SAP Tech Consultant, Cisco CCNA, Cisco IT Essentials A+"})]}),Object(h.jsxs)(Xe,{children:[Object(h.jsx)(Ke,{children:"Interests"}),Object(h.jsx)(Ze,{children:"AI Research, Competitive Programming, Open Source, Cloud Architecture"})]}),Object(h.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(h.jsx)(Ke,{style:{textAlign:"center",marginBottom:"1rem"},children:"Major Achievements"}),Object(h.jsx)(ce,{})]})]})})]})}),Object(h.jsx)(Ye,{children:Object(h.jsx)(Ge,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{width:"100%"},children:[Object(h.jsx)(Qe,{className:"gradient-text",style:{textAlign:"center",marginBottom:"2rem"},children:"My Skills"}),Object(h.jsxs)(et,{children:[Object(h.jsxs)(tt,{children:[Object(h.jsx)(it,{children:"Technical Skills"}),Object(h.jsx)(rt,{children:e.technical.map(((e,t)=>Object(h.jsx)(at,{children:e},t)))})]}),Object(h.jsxs)(tt,{children:[Object(h.jsx)(it,{children:"Soft Skills"}),Object(h.jsx)(rt,{children:e.soft.map(((e,t)=>Object(h.jsx)(at,{children:e},t)))})]})]})]})})}),Object(h.jsx)(Ye,{children:Object(h.jsx)(Ge,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{width:"100%"},children:[Object(h.jsx)(Qe,{className:"gradient-text",style:{textAlign:"center",marginBottom:"3rem"},children:"Professional Journey"}),Object(h.jsx)(He,{})]})})})]})};const nt=m.a.div`
  position: relative;
  padding-top: 80px;
`,ct=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,st=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,lt=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,dt=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,mt=m.a.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 4rem;
  padding: 0 2rem;
`,ht=m.a.button`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  background-color: ${e=>e.active?"var(--primary-color)":"rgba(31, 34, 46, 0.7)"};
  color: ${e=>e.active?"white":"#a0a0a0"};

  &:hover {
    background-color: ${e=>e.active?"var(--primary-color)":"rgba(31, 34, 46, 0.9)"};
  }
`,pt=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,bt=m.a.div`
  text-align: center;
  padding: 5rem 0;
  grid-column: 1 / -1;
`,gt=m.a.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1rem;
`,jt=m.a.p`
  color: #777;
  max-width: 500px;
  margin: 0 auto;
`,xt=[{id:101,title:"Apply4Me",slug:"apply4me",description:"The flagship automation platform revolutionizing South African higher education applications through advanced web scraping and process automation. Served 10,000+ users.",technologies:["React","Node.js","Python","Web Scraping","Automation"],category:"Full Stack / Automation",github:"https://github.com/BhekumusaEric/",demo:"https://apply4me-eta.vercel.app/",image:"/images/projects/apply4me.jpg",featured:!0,stats:"10,000+ Users Served"},{id:102,title:"SAAIO Training Grounds",slug:"saaio-training",description:'An interactive AI education platform for students competing in the International Olympiad in AI. Features a "Read \u2192 Practice" pattern with an in-browser Python environment (Pyodide).',technologies:["React","Python","Pyodide","AI/ML"],category:"AI / EdTech",github:"https://github.com/BhekumusaEric/",demo:"https://ai-learning-system-ten.vercel.app/",image:"/images/projects/saaio.jpg",featured:!0},{id:103,title:"Digital Inclusion Program (DIP)",slug:"dip",description:"A coding literacy platform built pro bono for WeThinkCode_ \xd7 IDC SEF partnership to train communities across South Africa in Python and basic ML.",technologies:["React","Python","EdTech"],category:"Social Impact / EdTech",github:"https://github.com/BhekumusaEric/",demo:"https://ai-learning-system-ten.vercel.app/dip/login",image:"/images/projects/dip.jpg"},{id:104,title:"Work Readiness Program (WRP)",slug:"wrp",description:"A workplace skills platform featuring interactive modules, an AI mock interview bot, and a CV builder, built pro bono for WeThinkCode_ community rollout.",technologies:["React","AI Bot","Web Development"],category:"Social Impact / Web",github:"https://github.com/BhekumusaEric/",demo:"https://ai-learning-system-ten.vercel.app/wrp/login",image:"/images/projects/wrp.jpg"},{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents.",technologies:["Python","Flet","Google Maps API","Firebase","Machine Learning"],category:"AI/ML",github:"https://github.com/BhekumusaEric/MSAIskillshackathon",demo:"https://github.com/BhekumusaEric/MSAIskillshackathon",image:"/images/projects/safeway-ai.jpg"},{id:2,title:"Smart Loan Approval Predictor",slug:"smart-loan-approval",description:"A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning.",technologies:["Python","Kivy","Machine Learning","SQLite"],category:"AI/ML",github:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",demo:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",image:"/images/projects/loan-approval.jpg"},{id:3,title:"Eduwize",slug:"eduwize",description:"AI-powered learning platform designed to enhance student learning through personalized study material recommendations and performance tracking.",technologies:["Django","Azure Cognitive Services","Python","PostgreSQL"],category:"Web Development",github:"https://github.com/BhekumusaEric/Eduwize",demo:"https://github.com/BhekumusaEric/Eduwize",image:"/images/projects/eduwize.jpg"}];var ut=()=>{const[e,t]=Object(r.useState)("All"),i="All"===e?xt:xt.filter((t=>t.category===e));return Object(h.jsxs)(nt,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(ct,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(st,{children:"My Projects"}),Object(h.jsx)(lt,{}),Object(h.jsx)(dt,{children:"Explore my portfolio of projects spanning AI/ML, web development, and blockchain technologies."})]})}),Object(h.jsx)(mt,{children:["All","AI/ML","Web Development","Blockchain","Java Development","Data Science","Cloud Development","Framework"].map(((i,r)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*r},children:Object(h.jsx)(ht,{active:e===i,onClick:()=>t(i),children:i})},r)))}),Object(h.jsx)(pt,{children:i.length>0?i.map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsx)(ee,{project:e})},e.id))):Object(h.jsx)(bt,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[Object(h.jsx)(gt,{children:"No projects found"}),Object(h.jsx)(jt,{children:"No projects match the selected filter. Try selecting a different category."})]})})})]})};const vt=m.a.div`
  position: relative;
  padding-top: 80px;
  min-height: 100vh;
`,ft=Object(m.a)(c.b)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
`,yt=m.a.div`
  margin-bottom: 3rem;
`,Ot=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,wt=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`,kt=m.a.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
`,At=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
  }
`,Ct=m.a.div`
  color: #a0a0a0;
  font-size: 1.1rem;
  line-height: 1.8;
`,zt=m.a.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`,St=m.a.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &.primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: #0056b3;
    }
  }
  
  &.secondary {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background: rgba(9, 105, 218, 0.1);
    }
  }
`,Mt=m.a.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #2a2d3a 0%, #1a1c24 100%);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pt=m.a.div`
  font-size: 5rem;
  font-weight: 800;
  color: var(--primary-color);
`,Lt=m.a.div`
  text-align: center;
  padding: 5rem 0;
`,It=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;var Bt=()=>{const{slug:e}=Object(s.g)(),[t,i]=Object(r.useState)(null),[a,o]=Object(r.useState)(!0);return Object(r.useEffect)((()=>{const t=xt.find((t=>t.slug===e));i(t),o(!1)}),[e]),a?Object(h.jsxs)(vt,{children:[Object(h.jsx)(W,{}),Object(h.jsx)("div",{className:"container mx-auto px-4 py-8",children:Object(h.jsx)("div",{className:"text-center",children:"Loading..."})})]}):t?Object(h.jsxs)(vt,{children:[Object(h.jsx)(W,{}),Object(h.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[Object(h.jsxs)(ft,{to:"/projects",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]}),Object(h.jsx)(yt,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Ot,{className:"gradient-text",children:t.title}),Object(h.jsx)(wt,{children:t.technologies.map(((e,t)=>Object(h.jsx)(kt,{children:e},t)))})]})}),Object(h.jsxs)(At,{children:[Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(Ct,{children:[Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)(zt,{children:[t.github&&Object(h.jsxs)(St,{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"secondary",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),"View Code"]}),t.demo&&Object(h.jsxs)(St,{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"primary",children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"}),Object(h.jsx)("path",{d:"M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"})]}),"Live Demo"]})]})]})}),Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:Object(h.jsx)(Mt,{children:t.image?Object(h.jsx)("img",{src:"."+t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):Object(h.jsx)(Pt,{children:t.title.charAt(0)})})})]})]})]}):Object(h.jsxs)(vt,{children:[Object(h.jsx)(W,{}),Object(h.jsx)("div",{className:"container mx-auto px-4 py-8",children:Object(h.jsxs)(Lt,{children:[Object(h.jsx)(It,{children:"Project Not Found"}),Object(h.jsx)("p",{children:"The project you're looking for doesn't exist or has been removed."}),Object(h.jsxs)(ft,{to:"/projects",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]})]})})]})};const Et=m.a.div`
  position: relative;
  padding-top: 80px;
`,Tt=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,Ft=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Nt=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Wt=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Dt=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,Ht=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Rt=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,$t=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${e=>e.columns||2}, 1fr);
  }
`,Vt=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,Jt=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,_t=m.a.div`
  margin-bottom: 1.5rem;
`,Yt=m.a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,Gt=m.a.span`
  font-weight: 500;
`,qt=m.a.span`
  color: #a0a0a0;
`,Qt=m.a.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`,Ut=m.a.div`
  height: 100%;
  background: ${e=>e.color||"var(--primary-color)"};
  border-radius: 4px;
  width: ${e=>e.level}%;
  transition: width 1s ease-in-out;
`,Xt=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,Kt=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`,Zt=m.a.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`,ei=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,ti=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,ii=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ri=m.a.ul`
  list-style: none;
`,ai=m.a.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #a0a0a0;
  
  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;var oi=()=>{const e={current:["Advanced Java Enterprise Development","C# and .NET Framework Mastery","Advanced Deep Learning Techniques","Cloud Architecture on Azure","Blockchain Development","Next.js and Modern React Patterns"],future:["Spring Boot and Microservices","ASP.NET Core Development","Quantum Computing","Augmented Reality Development","Edge Computing and IoT","Advanced Natural Language Processing"]};return Object(h.jsxs)(Et,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(Tt,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Ft,{children:"My Skills"}),Object(h.jsx)(Nt,{}),Object(h.jsx)(Wt,{children:"A comprehensive overview of my technical expertise and professional capabilities."})]})}),Object(h.jsx)(Dt,{children:Object(h.jsxs)(Ht,{children:[Object(h.jsx)(Rt,{className:"gradient-text",children:"Technical Skills"}),Object(h.jsx)($t,{children:[{category:"Programming Languages",skills:[{name:"Python",level:95,color:"#3776AB"},{name:"JavaScript",level:85,color:"#F7DF1E"},{name:"Java",level:70,color:"#ED8B00"},{name:"C#",level:40,color:"#239120"},{name:"HTML",level:90,color:"#E34F26"},{name:"CSS",level:85,color:"#1572B6"},{name:"SQL",level:80,color:"#4479A1"}]},{category:"AI & Machine Learning (Foundations)",skills:[{name:"Neural Networks (Concepts)",level:40,color:"#9C27B0"},{name:"Python for Data Science",level:70,color:"#03A9F4"},{name:"AI Problem Solving",level:60,color:"#8BC34A"}]},{category:"Web Development",skills:[{name:"React",level:80,color:"#61DAFB"},{name:"Django",level:85,color:"#092E20"},{name:"Flask",level:90,color:"#000000"},{name:"RESTful APIs",level:85,color:"#FF5722"},{name:"Responsive Design",level:80,color:"#9C27B0"}]},{category:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,color:"#F05032"},{name:"SAP",level:80,color:"#0FAAFF"},{name:"Docker",level:70,color:"#2496ED"},{name:"VS Code",level:95,color:"#007ACC"},{name:"Linux",level:80,color:"#FCC624"}]},{category:"Networking & Infrastructure",skills:[{name:"Cisco CCNA",level:85,color:"#1BA0D7"},{name:"Network Security",level:80,color:"#FF5722"},{name:"Routing & Switching",level:85,color:"#1BA0D7"},{name:"IT Troubleshooting",level:90,color:"#4CAF50"},{name:"Network Administration",level:80,color:"#9C27B0"}]}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(Vt,{children:[Object(h.jsx)(Jt,{children:e.category}),e.skills.map(((e,t)=>Object(h.jsxs)(_t,{children:[Object(h.jsxs)(Yt,{children:[Object(h.jsx)(Gt,{children:e.name}),Object(h.jsxs)(qt,{children:[e.level,"%"]})]}),Object(h.jsx)(Qt,{children:Object(h.jsx)(Ut,{level:e.level,color:e.color})})]},t)))]})},t)))})]})}),Object(h.jsx)(Dt,{children:Object(h.jsxs)(Ht,{children:[Object(h.jsx)(Rt,{className:"gradient-text",children:"Soft Skills"}),Object(h.jsx)($t,{columns:3,children:[{name:"Problem Solving",description:"Analytical approach to breaking down complex problems into manageable components."},{name:"Communication",description:"Clear and effective communication of technical concepts to both technical and non-technical audiences."},{name:"Teamwork",description:"Collaborative mindset with experience working in diverse teams on various projects."},{name:"Adaptability",description:"Quick to learn new technologies and adapt to changing project requirements."},{name:"Time Management",description:"Efficient prioritization of tasks to meet deadlines and deliver high-quality work."},{name:"Critical Thinking",description:"Ability to evaluate information objectively and make sound decisions."}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(Xt,{children:[Object(h.jsx)(Kt,{children:e.name}),Object(h.jsx)(Zt,{children:e.description})]})},t)))})]})}),Object(h.jsx)(Dt,{children:Object(h.jsxs)(Ht,{children:[Object(h.jsx)(Rt,{className:"gradient-text",children:"Continuous Learning"}),Object(h.jsxs)(ei,{children:[Object(h.jsx)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:Object(h.jsxs)(ti,{children:[Object(h.jsx)(ii,{children:"Currently Learning"}),Object(h.jsx)(ri,{children:e.current.map(((e,t)=>Object(h.jsxs)(ai,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),Object(h.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Object(h.jsx)("span",{children:e})]},t)))})]})}),Object(h.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(ti,{children:[Object(h.jsx)(ii,{children:"Future Interests"}),Object(h.jsx)(ri,{children:e.future.map(((e,t)=>Object(h.jsxs)(ai,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--accent-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(h.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Object(h.jsx)("span",{children:e})]},t)))})]})})]})]})})]})};const ni=m.a.div`
  position: relative;
  padding-top: 80px;
`,ci=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,si=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,li=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,di=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,mi=m.a.section`
  padding: 2rem 0 6rem;
`,hi=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
  }
`,pi=m.a.div`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`,bi=m.a.div`
  flex: 2;
`,gi=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,ji=m.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,xi=m.a.div`
  display: flex;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,ui=m.a.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(9, 105, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`,vi=m.a.div``,fi=m.a.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
`,yi=m.a.p`
  color: #a0a0a0;
`,Oi=m.a.a`
  color: #a0a0a0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`,wi=m.a.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,ki=Object(m.a)(d.a.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(31, 34, 46, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0a0a0;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`,Ai=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Ci=m.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,zi=m.a.form``,Si=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Mi=m.a.div`
  margin-bottom: 1.5rem;
`,Pi=m.a.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #a0a0a0;
  font-size: 0.95rem;
`,Li=m.a.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(31, 34, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,Ii=m.a.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(31, 34, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`,Bi=Object(m.a)(d.a.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    margin-right: 0.5rem;
  }
`,Ei=Object(m.a)(d.a.div)`
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;var Ti=()=>{const[e,t]=Object(r.useState)({name:"",email:"",subject:"",message:""}),[i,a]=Object(r.useState)(!1),[o,n]=Object(r.useState)(!1),c=e=>{const{name:i,value:r}=e.target;t((e=>({...e,[i]:r})))},s=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(h.jsxs)(ni,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(ci,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(si,{children:"Get In Touch"}),Object(h.jsx)(li,{}),Object(h.jsx)(di,{children:"Have a question or want to work together? Feel free to reach out!"})]})}),Object(h.jsx)(mi,{children:Object(h.jsxs)(hi,{children:[Object(h.jsx)(pi,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(h.jsx)(gi,{children:Object(h.jsx)("div",{className:"coin-container",style:{borderRadius:"50%",overflow:"hidden",marginBottom:"1.5rem",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.2)",width:"200px",height:"200px",margin:"0 auto 1.5rem"},children:Object(h.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})})}),Object(h.jsxs)(gi,{children:[Object(h.jsx)(ji,{children:"Contact Information"}),Object(h.jsxs)(xi,{children:[Object(h.jsx)(ui,{children:Object(h.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Object(h.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),Object(h.jsxs)(vi,{children:[Object(h.jsx)(fi,{children:"Email"}),Object(h.jsx)(Oi,{href:"mailto:bhntshwcjc025@student.wethinkcode.co.za",children:"bhntshwcjc025@student.wethinkcode.co.za"})]})]}),Object(h.jsxs)(xi,{children:[Object(h.jsx)(ui,{children:Object(h.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Object(h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),Object(h.jsxs)(vi,{children:[Object(h.jsx)(fi,{children:"Location"}),Object(h.jsx)(yi,{children:"Johannesburg, South Africa"})]})]}),Object(h.jsx)(ji,{style:{marginTop:"2rem"},children:"Connect With Me"}),Object(h.jsx)(wi,{children:s.map(((e,t)=>Object(h.jsx)(ki,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-5},whileTap:{y:0},children:e.icon},t)))})]}),Object(h.jsxs)(gi,{children:[Object(h.jsx)(ji,{children:"Resume"}),Object(h.jsx)(yi,{style:{marginBottom:"1.5rem"},children:"View my professional resume to learn more about my experience and skills."}),Object(h.jsxs)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[Object(h.jsxs)(d.a.a,{href:"./static/ats-resume.html",target:"_blank",whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(h.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(h.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(h.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"ATS-Friendly Resume"]}),Object(h.jsxs)(d.a.a,{href:"./resume.docx",download:!0,whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(h.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(h.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(h.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Download Resume (.docx)"]})]})]})]})}),Object(h.jsx)(bi,{children:Object(h.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(Ai,{children:[Object(h.jsx)(Ci,{children:"Send Me a Message"}),o&&Object(h.jsx)(Ei,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:"Your message has been sent successfully! I'll get back to you soon."}),Object(h.jsxs)(zi,{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout((()=>{a(!1),n(!0),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{n(!1)}),5e3)}),1500)},children:[Object(h.jsxs)(Si,{children:[Object(h.jsxs)(Mi,{children:[Object(h.jsx)(Pi,{htmlFor:"name",children:"Your Name"}),Object(h.jsx)(Li,{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"John Doe",required:!0})]}),Object(h.jsxs)(Mi,{children:[Object(h.jsx)(Pi,{htmlFor:"email",children:"Your Email"}),Object(h.jsx)(Li,{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"john@example.com",required:!0})]})]}),Object(h.jsxs)(Mi,{children:[Object(h.jsx)(Pi,{htmlFor:"subject",children:"Subject"}),Object(h.jsx)(Li,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"Project Inquiry",required:!0})]}),Object(h.jsxs)(Mi,{children:[Object(h.jsx)(Pi,{htmlFor:"message",children:"Message"}),Object(h.jsx)(Ii,{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Your message here...",required:!0})]}),Object(h.jsx)(Bi,{type:"submit",disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"animate-spin",children:[Object(h.jsx)("circle",{cx:"12",cy:"12",r:"10",opacity:"0.25"}),Object(h.jsx)("path",{d:"M12 2a10 10 0 0 1 10 10"})]}),"Sending..."]}):"Send Message"})]})]})})})]})})]})};const Fi=m.a.div`
  position: relative;
  padding-top: 80px;
`,Ni=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,Wi=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Di=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Hi=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Ri=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,$i=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Vi=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,Ji=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,_i=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,Yi=m.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,Gi=m.a.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${e=>e.bgColor||"var(--primary-color)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`,qi=m.a.div`
  flex: 1;
`,Qi=m.a.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`,Ui=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`,Xi=m.a.p`
  color: #777;
  font-size: 0.8rem;
`,Ki=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Zi=m.a.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`,er=m.a.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: var(--accent-color);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;var tr=()=>Object(h.jsxs)(Fi,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(Ni,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Wi,{children:"Certifications & Achievements"}),Object(h.jsx)(Di,{}),Object(h.jsx)(Hi,{children:"Professional certifications and achievements that validate my expertise and commitment to continuous learning."})]})}),Object(h.jsx)(Ri,{children:Object(h.jsxs)($i,{children:[Object(h.jsx)(Vi,{className:"gradient-text",children:"Professional Certifications"}),Object(h.jsx)(Ji,{children:[{id:1,title:"SAP Tech Consultant Certification",provider:"SAP",date:"2024",description:"Professional certification in SAP enterprise solutions, demonstrating expertise in business process optimization and enterprise software implementation.",skills:["SAP","Enterprise Solutions","Business Process Optimization","ERP Systems"],icon:"SAP",bgColor:"#0FAAFF",verifyUrl:"#"},{id:3,title:"Python Programming Certifications",provider:"Cisco Netacad & IBM",date:"2024",description:"Advanced Python programming skills including OOP, data structures, and algorithms.",skills:["Python","OOP","Data Structures"],icon:"PY",bgColor:"#3776AB",verifyUrl:"#"},{id:7,title:"Cisco CCNA (Cisco Certified Network Associate)",provider:"Cisco",date:"2024",description:"Professional-level networking certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",skills:["Networking","Network Security","Routing & Switching","Network Troubleshooting"],icon:"NET",bgColor:"#1BA0D7",verifyUrl:"#"},{id:8,title:"Cisco IT Essentials A+",provider:"Cisco",date:"2024",description:"Comprehensive IT fundamentals certification covering computer hardware, software, networking, security, and troubleshooting essentials.",skills:["IT Fundamentals","Hardware Troubleshooting","Network Basics","Security Fundamentals"],icon:"IT",bgColor:"#1BA0D7",verifyUrl:"#"}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(_i,{children:[Object(h.jsxs)(Yi,{children:[Object(h.jsx)(Gi,{bgColor:e.bgColor,children:e.icon}),Object(h.jsxs)(qi,{children:[Object(h.jsx)(Qi,{children:e.title}),Object(h.jsx)(Ui,{children:e.provider}),Object(h.jsxs)(Xi,{children:["Earned: ",e.date]})]})]}),Object(h.jsx)(Ki,{children:e.description}),Object(h.jsx)("div",{style:{marginBottom:"1rem"},children:e.skills.map(((e,t)=>Object(h.jsx)(Zi,{children:e},t)))}),Object(h.jsxs)(er,{href:e.verifyUrl,target:"_blank",rel:"noopener noreferrer",children:["Verify Certificate",Object(h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),Object(h.jsx)("polyline",{points:"15 3 21 3 21 9"}),Object(h.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})},e.id)))})]})})]});const ir=m.a.div`
  position: relative;
  padding-top: 80px;
`,rr=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,ar=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,or=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,nr=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,cr=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,sr=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,lr=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,dr=m.a.div`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
  }
`,mr=m.a.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,hr=m.a.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,pr=m.a.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,br=m.a.div`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
`,gr=m.a.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &:before {
      left: 20px;
    }
  }
`,jr=m.a.div`
  position: relative;
  margin-bottom: 3rem;
  
  /* Use prop for alignment instead of nth-child on the item itself */
  padding-right: ${e=>e.index%2===0?"50%":"0"};
  padding-left: ${e=>e.index%2===0?"0":"50%"};
  text-align: ${e=>e.index%2===0?"right":"left"};
  
  @media (max-width: 768px) {
    padding-right: 0 !important;
    padding-left: 60px !important;
    text-align: left !important;
  }
`,xr=m.a.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid var(--bg-color);
  
  /* Position based on alignment */
  right: ${e=>e.index%2===0?"-10px":"auto"};
  left: ${e=>e.index%2===0?"auto":"-10px"};
  
  @media (max-width: 768px) {
    left: 10px !important;
    right: auto !important;
  }
`,ur=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
  }
`,vr=m.a.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,fr=m.a.div`
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 0.75rem;
`,yr=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
  font-size: 0.95rem;
`,Or=m.a.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-top: -2rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,wr=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 30px rgba(0, 122, 255, 0.1);
  }
`,kr=m.a.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Ar=m.a.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,Cr=m.a.p`
  font-size: 0.9rem;
  color: #a0a0a0;
`;var zr=()=>Object(h.jsxs)(ir,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(rr,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(ar,{children:"Achievements & Recognition"}),Object(h.jsx)(or,{}),Object(h.jsx)(nr,{children:"Celebrating milestones, victories, and recognition earned through dedication and innovation in technology."})]})}),Object(h.jsx)(cr,{children:Object(h.jsxs)(sr,{children:[Object(h.jsx)(d.a.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6},children:Object(h.jsxs)(dr,{children:[Object(h.jsx)(mr,{children:"\ud83c\udfc6"}),Object(h.jsx)(hr,{children:"Microsoft SAPPAS Hackathon Winner"}),Object(h.jsx)(pr,{children:"Emerged victorious in the prestigious Microsoft SAPPAS Hackathon, developing an AI-powered safety solution. This achievement demonstrates the ability to work under pressure, collaborate effectively, and deliver exceptional results in a highly competitive environment."}),Object(h.jsx)(br,{children:"2025"})]})}),Object(h.jsx)(Or,{children:[{id:102,title:"Amazon Q Hackathon",date:"2025",description:"1st Place Winner - AI Assisted Development",icon:"\ud83e\udd47"},{id:103,title:"Meta LLAMA Hackathon",date:"2025",description:"1st Place Winner - Innovative LLM Applications",icon:"\ud83d\ude80"},{id:104,title:"W&R SETA Hackathon",date:"2025",description:"1st Place Winner - Community Impact Tech",icon:"\ud83c\udf1f"}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(wr,{children:[Object(h.jsx)(kr,{children:e.icon}),Object(h.jsx)(Ar,{children:e.title}),Object(h.jsx)(Cr,{children:e.description}),Object(h.jsx)("div",{style:{fontSize:"0.8rem",color:"var(--primary-color)",marginTop:"0.5rem"},children:e.date})]})},e.id)))})]})}),Object(h.jsx)(cr,{children:Object(h.jsxs)(sr,{children:[Object(h.jsx)(lr,{className:"gradient-text",children:"Achievement Highlights"}),Object(h.jsx)(ce,{})]})}),Object(h.jsx)(cr,{children:Object(h.jsxs)(sr,{children:[Object(h.jsx)(lr,{className:"gradient-text",children:"Achievement Timeline"}),Object(h.jsx)(gr,{children:[{id:105,title:"TeensInAI SA Mentor (2nd Place)",date:"2025",description:"Mentored a brilliant group of students who secured 2nd place in the TeensInAI SA competition.",icon:"\ud83e\udd1d"},{id:3,title:"SAP Tech Consultant Certification",date:"2025",description:"Professional certification in SAP enterprise solutions, demonstrating expertise in business process optimization."},{id:7,title:"CCNA",date:"2025",description:"Professional-level networking certification covering network fundamentals and security."},{id:8,title:"IT Essentials A+",date:"2025",description:"Comprehensive IT fundamentals certification covering computer hardware and software essentials."},{id:6,title:"Python Programming Certification",date:"2025",description:"Advanced Python programming skills including OOP, data structures, and algorithms."},{id:5,title:"WeThinkCode_ Enrollment",date:"2024",description:"Accepted into the prestigious WeThinkCode_ software development academy."}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,x:t%2===0?-50:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2*t},children:Object(h.jsxs)(jr,{index:t,children:[Object(h.jsx)(xr,{index:t}),Object(h.jsxs)(ur,{children:[Object(h.jsx)(vr,{children:e.title}),Object(h.jsx)(fr,{children:e.date}),Object(h.jsx)(yr,{children:e.description})]})]})},e.id)))})]})})]});const Sr=Object(m.a)(d.a.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(9, 105, 218, 0.3);
`,Mr=Object(m.a)(d.a.div)`
  position: fixed;
  bottom: 6.5rem;
  right: 2rem;
  width: 320px;
  height: 450px;
  background: rgba(31, 34, 46, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,Pr=m.a.div`
  background-color: var(--primary-color);
  padding: 1rem;
  color: white;
`,Lr=m.a.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,Ir=m.a.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
`,Br=m.a.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Er=m.a.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  ${e=>"bot"===e.sender?"\n    align-self: flex-start;\n    background-color: #2a2d3a;\n    border-bottom-left-radius: 4px;\n    color: white;\n  ":"\n    align-self: flex-end;\n    background-color: var(--primary-color);\n    border-bottom-right-radius: 4px;\n    color: white;\n  "}
`,Tr=m.a.form`
  display: flex;
  padding: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Fr=m.a.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 20px 0 0 20px;
  background-color: #2a2d3a;
  color: white;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Nr=m.a.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;var Wr=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)([{id:1,text:"Hi there! I'm Eric's AI assistant. How can I help you learn more about Eric's skills and projects?",sender:"bot"}]),[o,n]=Object(r.useState)(""),c=Object(r.useRef)(null);Object(r.useEffect)((()=>{(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()}),[i,e]);const s=e=>{const t=e.toLowerCase();return t.includes("project")||t.includes("work")?"Eric has worked on several impressive projects including SafeWayAI (an AI-powered emergency detection platform), Smart Loan Approval Predictor, Eduwize (an AI learning platform), and more. You can check them out in the Projects section!":t.includes("skill")||t.includes("technology")?"Eric is skilled in Python, JavaScript, React, TensorFlow, Django, Flask, Azure, and more. He specializes in AI/ML development and has experience with mobile app development using Kivy.":t.includes("contact")||t.includes("hire")||t.includes("email")?"You can contact Eric through the Contact form on this website, or connect with him on LinkedIn at linkedin.com/in/bhekumusaerickelvinntshwenya/":t.includes("education")||t.includes("background")?"Eric is a software developer with expertise in AI, mobile applications, and web development. He's currently studying at WeThinkCode and continuously learning about AI, machine learning, and cloud technologies.":t.includes("hello")||t.includes("hi")||t.includes("hey")?"Hello! I'm Eric's AI assistant. What would you like to know about Eric's skills, projects, or experience?":"I'm not sure I understand. Would you like to know about Eric's projects, skills, education, or how to contact him?"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Sr,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>t(!e),children:e?Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),Object(h.jsx)(l.a,{children:e&&Object(h.jsxs)(Mr,{initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.9},transition:{duration:.2},children:[Object(h.jsxs)(Pr,{children:[Object(h.jsx)(Lr,{children:"Eric's AI Assistant"}),Object(h.jsx)(Ir,{children:"Ask me anything about Eric!"})]}),Object(h.jsxs)(Br,{children:[i.map((e=>Object(h.jsx)(Er,{sender:e.sender,children:e.text},e.id))),Object(h.jsx)("div",{ref:c})]}),Object(h.jsxs)(Tr,{onSubmit:e=>{if(e.preventDefault(),!o.trim())return;const t={id:i.length+1,text:o,sender:"user"};a([...i,t]),n(""),setTimeout((()=>{const e={id:i.length+2,text:s(o),sender:"bot"};a((t=>[...t,e]))}),500)},children:[Object(h.jsx)(Fr,{type:"text",value:o,onChange:e=>n(e.target.value),placeholder:"Type a message..."}),Object(h.jsx)(Nr,{type:"submit",children:Object(h.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})]})})]})};i(73);var Dr=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(k,{}),Object(h.jsx)("main",{className:"main-content",children:Object(h.jsx)(l.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",component:Se}),Object(h.jsx)(s.a,{path:"/about",component:ot}),Object(h.jsx)(s.a,{exact:!0,path:"/projects",component:ut}),Object(h.jsx)(s.a,{path:"/projects/:slug",component:Bt}),Object(h.jsx)(s.a,{path:"/skills",component:oi}),Object(h.jsx)(s.a,{path:"/certifications",component:tr}),Object(h.jsx)(s.a,{path:"/achievements",component:zr}),Object(h.jsx)(s.a,{path:"/contact",component:Ti})]})})}),Object(h.jsx)(Wr,{}),Object(h.jsx)(F,{})]})})};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Dr,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d18718a9.chunk.js.map