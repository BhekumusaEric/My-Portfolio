(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{65:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);var r=i(1),a=i.n(r),n=i(56),o=i.n(n),c=(i(65),i(11)),l=i(7),s=i(79),d=i(77),h=i(3),m=i(0);const p=h.a.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  padding: ${e=>e.scrolled?"0.5rem 0":"1rem 0"};
  background: ${e=>e.scrolled?"rgba(31, 34, 46, 0.8)":"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(10px)":"none"};
  box-shadow: ${e=>e.scrolled?"0 4px 30px rgba(0, 0, 0, 0.1)":"none"};
`,b=h.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,j=Object(h.a)(d.a.div)`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`,g=h.a.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,x=Object(h.a)(d.a.a)`
  color: var(--light-color);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,u=h.a.button`
  background: none;
  border: none;
  color: var(--light-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`,v=Object(h.a)(d.a.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(31, 34, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  
  @media (min-width: 768px) {
    display: none;
  }
`,y=h.a.a`
  display: block;
  padding: 0.75rem 2rem;
  color: var(--light-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;var f=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const n=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Skills",path:"/skills"},{name:"Contact",path:"/contact"}];return Object(m.jsxs)(p,{scrolled:i,children:[Object(m.jsxs)(b,{children:[Object(m.jsx)(c.b,{to:"/",children:Object(m.jsx)(j,{className:"gradient-text",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Eric.dev"})}),Object(m.jsx)(g,{children:n.map((e=>Object(m.jsx)(c.b,{to:e.path,children:Object(m.jsx)(x,{whileHover:{y:-2},whileTap:{y:0},children:e.name})},e.name)))}),Object(m.jsx)(u,{onClick:()=>t(!e),children:e?Object(m.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M6 18L18 6M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):Object(m.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M4 6H20M4 12H20M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e&&Object(m.jsx)(v,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:n.map((e=>Object(m.jsx)(c.b,{to:e.path,children:Object(m.jsx)(y,{onClick:()=>t(!1),children:e.name})},e.name)))})]})};const O=h.a.footer`
  background: rgba(31, 34, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
`,w=h.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,k=h.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,z=h.a.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,A=h.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,M=h.a.div`
  display: flex;
  gap: 1rem;
`,C=Object(h.a)(d.a.a)`
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
`,L=h.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,S=h.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,I=h.a.div`
  display: flex;
  gap: 1.5rem;
`,B=h.a.a`
  color: #a0a0a0;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;var E=()=>{const e=(new Date).getFullYear(),t=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(m.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(m.jsx)(O,{children:Object(m.jsxs)(w,{children:[Object(m.jsxs)(k,{children:[Object(m.jsxs)(z,{children:[Object(m.jsx)(c.b,{to:"/",children:Object(m.jsx)("h3",{className:"gradient-text",children:"Eric.dev"})}),Object(m.jsx)(A,{children:"AI/ML Developer & Problem Solver"})]}),Object(m.jsx)(M,{children:t.map(((e,t)=>Object(m.jsx)(C,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-3},whileTap:{y:0},children:e.icon},t)))})]}),Object(m.jsxs)(L,{children:[Object(m.jsxs)(S,{children:["\xa9 ",e," Bhekumusa Eric Ntshwenya. All rights reserved."]}),Object(m.jsxs)(I,{children:[Object(m.jsx)(B,{href:"/privacy",children:"Privacy Policy"}),Object(m.jsx)(B,{href:"/terms",children:"Terms of Service"})]})]})]})})};const T=h.a.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;var F=()=>{const e=Object(r.useRef)(null);return Object(r.useEffect)((()=>{const t=e.current,i=t.getContext("2d");let r;const a=()=>{t.width=window.innerWidth,t.height=window.innerHeight};a(),window.addEventListener("resize",a);const n=[],o=1e3;for(let e=0;e<200;e++)n.push({x:Math.random()*t.width-t.width/2,y:Math.random()*t.height-t.height/2,z:Math.random()*o,color:`rgba(${100*Math.random()+155}, ${100*Math.random()+155}, ${100*Math.random()+155}, ${.5*Math.random()+.5})`});const c=()=>{i.fillStyle="rgba(18, 18, 18, 0.2)",i.fillRect(0,0,t.width,t.height);const e=t.width/2,a=t.height/2;for(let r=0;r<200;r++){const c=n[r];c.z-=.5,c.z<=0&&(c.x=Math.random()*t.width-e,c.y=Math.random()*t.height-a,c.z=o);const l=o/(o+c.z),s=e+c.x*l,d=a+c.y*l,h=1.5*l;i.beginPath(),i.arc(s,d,h,0,2*Math.PI),i.fillStyle=c.color,i.fill()}r=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(r)}}),[]),Object(m.jsx)(T,{ref:e})},H=i(42),P=i(76),N=i(78);const R=Object(h.a)(d.a.div)`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,W=h.a.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`,D=h.a.div`
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
`,V=h.a.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
`,$=h.a.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`,_=h.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,G=h.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95rem;
`,q=h.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,J=h.a.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,Y=h.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Q=h.a.a`
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
`;var K=e=>{let{project:t}=e;const[i,a]=Object(r.useState)(!1),n=Object(r.useRef)(null),o=Object(H.a)(0),l=Object(H.a)(0),s=Object(P.a)(o,{stiffness:150,damping:15}),d=Object(P.a)(l,{stiffness:150,damping:15}),h=Object(N.a)(d,[-.5,.5],[10,-10]),p=Object(N.a)(s,[-.5,.5],[-10,10]);return Object(m.jsx)(R,{ref:n,whileHover:{scale:1.02},style:{rotateX:h,rotateY:p},onMouseMove:e=>{if(!n.current)return;const t=n.current.getBoundingClientRect(),i=t.width,r=t.height,a=(e.clientX-t.left)/i-.5,c=(e.clientY-t.top)/r-.5;o.set(a),l.set(c)},onMouseEnter:()=>a(!0),onMouseLeave:()=>{o.set(0),l.set(0),a(!1)},children:Object(m.jsxs)(W,{children:[Object(m.jsx)(D,{hovered:i,children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)(V,{children:t.title.charAt(0)}),Object(m.jsx)($,{children:"Project Preview"})]})}),Object(m.jsx)(_,{className:"gradient-text",children:t.title}),Object(m.jsx)(G,{children:t.description}),Object(m.jsx)(q,{children:t.technologies.map(((e,t)=>Object(m.jsx)(J,{children:e},t)))}),Object(m.jsxs)(Y,{children:[t.github&&Object(m.jsxs)(Q,{href:t.github,target:"_blank",rel:"noopener noreferrer",children:[Object(m.jsx)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),"Code"]}),Object(m.jsx)(c.b,{to:`/projects/${t.slug}`,children:Object(m.jsxs)(Q,{as:"span",children:["View Details",Object(m.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]})]})})};const X=h.a.div`
  position: relative;
`,Z=h.a.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
`,U=h.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`,ee=Object(h.a)(d.a.div)`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 3rem;
  }
`,te=h.a.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,ie=h.a.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,re=h.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  max-width: 600px;
`,ae=h.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,ne=Object(h.a)(d.a.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
`,oe=h.a.section`
  padding: 6rem 0;
`,ce=h.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`,le=h.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`,se=h.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 2rem;
`,de=h.a.div`
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
`,he=h.a.div`
  text-align: center;
  margin-top: 3rem;
`,me=h.a.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(9, 105, 218, 0.1), rgba(9, 105, 218, 0.05));
  text-align: center;
`,pe=h.a.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,be=h.a.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,je=h.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`,ge=[{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform that provides safe routes to destinations and detects danger in real-time.",technologies:["Python","Flet","Google Maps API","Firebase"],github:"https://github.com/BhekumusaEric/MSAIskillshackathon"},{id:2,title:"Smart Loan Approval Predictor",slug:"smart-loan-approval",description:"Mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using ML.",technologies:["Python","Kivy","Machine Learning"],github:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor"},{id:3,title:"Eduwize",slug:"eduwize",description:"AI-powered learning platform designed to enhance student learning through personalized study material recommendations.",technologies:["Django","Azure Cognitive Services","Python"],github:"https://github.com/BhekumusaEric/Eduwize"}];var xe=()=>Object(m.jsxs)(X,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(Z,{children:Object(m.jsxs)(U,{children:[Object(m.jsxs)(ee,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsxs)(te,{children:["Hi, I'm ",Object(m.jsx)("span",{className:"gradient-text",children:"Eric Ntshwenya"})]}),Object(m.jsx)(ie,{children:"AI/ML Developer & Problem Solver"}),Object(m.jsx)(re,{children:"I build intelligent solutions that solve real-world problems. Specializing in AI, machine learning, and web development."}),Object(m.jsxs)(ae,{children:[Object(m.jsx)(c.b,{to:"/projects",children:Object(m.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"})}),Object(m.jsx)(c.b,{to:"/contact",children:Object(m.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Contact Me"})})]})]}),Object(m.jsx)(ne,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:Object(m.jsx)("div",{className:"glass-effect",style:{width:"100%",height:"100%",borderRadius:"20px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:Object(m.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"20px",transition:"transform 0.5s ease"},onMouseOver:e=>e.target.style.transform="scale(1.05)",onMouseOut:e=>e.target.style.transform="scale(1)"})})})]})}),Object(m.jsxs)(oe,{children:[Object(m.jsx)(ce,{children:"Featured Projects"}),Object(m.jsx)(se,{}),Object(m.jsx)(le,{children:"Check out some of my recent work. These projects showcase my skills in AI, web development, and problem-solving."}),Object(m.jsx)(de,{children:ge.map(((e,t)=>Object(m.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(m.jsx)(K,{project:e})},e.id)))}),Object(m.jsx)(he,{children:Object(m.jsx)(c.b,{to:"/projects",children:Object(m.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View All Projects"})})})]}),Object(m.jsx)(me,{children:Object(m.jsx)(pe,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsx)(be,{children:"Let's Work Together"}),Object(m.jsx)(je,{children:"I'm currently available for freelance work and full-time positions in AI/ML development."}),Object(m.jsx)(c.b,{to:"/contact",children:Object(m.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get In Touch"})})]})})})]});const ue=h.a.div`
  position: relative;
  padding-top: 80px;
`,ve=h.a.div`
  text-align: center;
  padding: 4rem 0;
`,ye=h.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,fe=h.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Oe=h.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,we=h.a.section`
  padding: 5rem 0;

  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,ke=h.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`,ze=h.a.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    ${e=>e.right?"margin-left: 3rem;":"margin-right: 3rem;"}
  }
`,Ae=h.a.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,Me=h.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`,Ce=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Le=h.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Se=h.a.p`
  color: #a0a0a0;
`,Ie=h.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Be=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Ee=h.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,Te=h.a.ul`
  list-style: none;
`,Fe=h.a.li`
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
`;var He=()=>{const e={technical:["Python","JavaScript","React","Django","Flask","TensorFlow","Machine Learning","Data Analysis","Azure","Git","HTML/CSS"],soft:["Problem Solving","Communication","Teamwork","Adaptability","Time Management","Critical Thinking"]};return Object(m.jsxs)(ue,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(ve,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsx)(ye,{children:"About Me"}),Object(m.jsx)(fe,{}),Object(m.jsx)(Oe,{children:"Get to know more about me, my background, and what drives me as a developer."})]})}),Object(m.jsx)(we,{children:Object(m.jsxs)(ke,{children:[Object(m.jsx)(ze,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(m.jsx)(Ae,{className:"gradient-text",children:"My Story"}),Object(m.jsx)(Me,{children:"I'm Bhekumusa Eric Ntshwenya, a passionate software developer with a focus on AI and machine learning technologies. My journey in tech began with a curiosity about how software could solve real-world problems and make people's lives better."}),Object(m.jsx)(Me,{children:"Currently studying at WeThinkCode_, I'm constantly expanding my knowledge and skills in software development. I have a particular interest in artificial intelligence and its applications across different industries."}),Object(m.jsx)(Me,{children:"What drives me is the opportunity to create innovative solutions that have a meaningful impact. Whether it's developing an AI-powered safety app or building a machine learning model to predict loan approvals, I'm always looking for ways to leverage technology for good."}),Object(m.jsx)(Me,{children:"When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, and sharing my knowledge with others in the tech community."})]})}),Object(m.jsx)(ze,{right:!0,children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[Object(m.jsx)("div",{className:"glass-effect",style:{marginBottom:"2rem",borderRadius:"12px",overflow:"hidden",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)"},children:Object(m.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",style:{width:"100%",height:"auto",display:"block"}})}),Object(m.jsx)(Ae,{className:"gradient-text",children:"Quick Facts"}),Object(m.jsxs)(Ce,{children:[Object(m.jsx)(Le,{children:"Location"}),Object(m.jsx)(Se,{children:"Johannesburg, South Africa"})]}),Object(m.jsxs)(Ce,{children:[Object(m.jsx)(Le,{children:"Focus Areas"}),Object(m.jsx)(Se,{children:"AI/ML Development, Web Development, Mobile Apps"})]}),Object(m.jsxs)(Ce,{children:[Object(m.jsx)(Le,{children:"Languages"}),Object(m.jsx)(Se,{children:"English (Fluent), Zulu (Native)"})]}),Object(m.jsxs)(Ce,{children:[Object(m.jsx)(Le,{children:"Interests"}),Object(m.jsx)(Se,{children:"AI Research, Open Source, Continuous Learning"})]})]})})]})}),Object(m.jsx)(we,{children:Object(m.jsx)(ke,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{width:"100%"},children:[Object(m.jsx)(Ae,{className:"gradient-text",style:{textAlign:"center",marginBottom:"2rem"},children:"My Skills"}),Object(m.jsxs)(Ie,{children:[Object(m.jsxs)(Be,{children:[Object(m.jsx)(Ee,{children:"Technical Skills"}),Object(m.jsx)(Te,{children:e.technical.map(((e,t)=>Object(m.jsx)(Fe,{children:e},t)))})]}),Object(m.jsxs)(Be,{children:[Object(m.jsx)(Ee,{children:"Soft Skills"}),Object(m.jsx)(Te,{children:e.soft.map(((e,t)=>Object(m.jsx)(Fe,{children:e},t)))})]})]})]})})})]})};const Pe=h.a.div`
  position: relative;
  padding-top: 80px;
`,Ne=h.a.div`
  text-align: center;
  padding: 4rem 0;
`,Re=h.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,We=h.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,De=h.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Ve=h.a.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 4rem;
  padding: 0 2rem;
`,$e=h.a.button`
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
`,_e=h.a.div`
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
`,Ge=h.a.div`
  text-align: center;
  padding: 5rem 0;
  grid-column: 1 / -1;
`,qe=h.a.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1rem;
`,Je=h.a.p`
  color: #777;
  max-width: 500px;
  margin: 0 auto;
`,Ye=[{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents. The app integrates with Google Maps and uses real crime data to analyze route safety.",technologies:["Python","Flet","Google Maps API","Firebase","Machine Learning"],category:"AI/ML",github:"https://github.com/BhekumusaEric/MSAIskillshackathon"},{id:2,title:"Smart Loan Approval Predictor",slug:"smart-loan-approval",description:"A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning. The app analyzes user data to determine loan eligibility.",technologies:["Python","Kivy","Machine Learning","SQLite"],category:"AI/ML",github:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor"},{id:3,title:"Eduwize",slug:"eduwize",description:"AI-powered learning platform designed to enhance student learning through personalized study material recommendations, quizzes with performance tracking, and resource management.",technologies:["Django","Azure Cognitive Services","Python","PostgreSQL"],category:"Web Development",github:"https://github.com/BhekumusaEric/Eduwize"},{id:4,title:"My Phone Repair Website",slug:"phone-repair-website",description:"A personal website for a mobile repair shop, showcasing services and allowing customers to book repairs online.",technologies:["HTML","CSS","JavaScript"],category:"Web Development",github:"https://github.com/BhekumusaEric/myphonerepairwebsite"},{id:5,title:"CharityBlockchain",slug:"charity-blockchain",description:"Ethereum blockchain project aimed at ensuring complete transparency in charity transactions. Integrates a solidity contract with a metamask wallet on Ganache interfaced accounts and deployment using Node.js.",technologies:["Blockchain","Solidity","Ethereum","Node.js"],category:"Blockchain",github:"https://github.com/BhekumusaEric/CharityBlockchain"},{id:6,title:"TruBudget",slug:"trubudget",description:"A blockchain-based workflow tool for efficient and transparent project management.",technologies:["Blockchain","JavaScript","React"],category:"Blockchain",github:"https://github.com/BhekumusaEric/TruBudget"}];var Qe=()=>{const[e,t]=Object(r.useState)("All"),i="All"===e?Ye:Ye.filter((t=>t.category===e));return Object(m.jsxs)(Pe,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(Ne,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsx)(Re,{children:"My Projects"}),Object(m.jsx)(We,{}),Object(m.jsx)(De,{children:"Explore my portfolio of projects spanning AI/ML, web development, and blockchain technologies."})]})}),Object(m.jsx)(Ve,{children:["All","AI/ML","Web Development","Blockchain"].map(((i,r)=>Object(m.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*r},children:Object(m.jsx)($e,{active:e===i,onClick:()=>t(i),children:i})},r)))}),Object(m.jsx)(_e,{children:i.length>0?i.map(((e,t)=>Object(m.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(m.jsx)(K,{project:e})},e.id))):Object(m.jsx)(Ge,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[Object(m.jsx)(qe,{children:"No projects found"}),Object(m.jsx)(Je,{children:"No projects match the selected filter. Try selecting a different category."})]})})})]})};const Ke=h.a.div`
  position: relative;
  padding-top: 80px;
`,Xe=h.a.div`
  text-align: center;
  padding: 4rem 0;
`,Ze=h.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Ue=h.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,et=h.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,tt=h.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,it=h.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,rt=h.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,at=h.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${e=>e.columns||2}, 1fr);
  }
`,nt=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,ot=h.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,ct=h.a.div`
  margin-bottom: 1.5rem;
`,lt=h.a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,st=h.a.span`
  font-weight: 500;
`,dt=h.a.span`
  color: #a0a0a0;
`,ht=h.a.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`,mt=h.a.div`
  height: 100%;
  background: ${e=>e.color||"var(--primary-color)"};
  border-radius: 4px;
  width: ${e=>e.level}%;
  transition: width 1s ease-in-out;
`,pt=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,bt=h.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`,jt=h.a.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`,gt=h.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,xt=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,ut=h.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,vt=h.a.ul`
  list-style: none;
`,yt=h.a.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #a0a0a0;
  
  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;var ft=()=>{const e={current:["Advanced Deep Learning Techniques","Cloud Architecture on Azure","Blockchain Development","Next.js and Modern React Patterns"],future:["Quantum Computing","Augmented Reality Development","Edge Computing and IoT","Advanced Natural Language Processing"]};return Object(m.jsxs)(Ke,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(Xe,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsx)(Ze,{children:"My Skills"}),Object(m.jsx)(Ue,{}),Object(m.jsx)(et,{children:"A comprehensive overview of my technical expertise and professional capabilities."})]})}),Object(m.jsx)(tt,{children:Object(m.jsxs)(it,{children:[Object(m.jsx)(rt,{className:"gradient-text",children:"Technical Skills"}),Object(m.jsx)(at,{children:[{category:"Programming Languages",skills:[{name:"Python",level:95,color:"#3776AB"},{name:"JavaScript",level:85,color:"#F7DF1E"},{name:"HTML",level:90,color:"#E34F26"},{name:"CSS",level:85,color:"#1572B6"},{name:"SQL",level:80,color:"#4479A1"}]},{category:"AI & Machine Learning",skills:[{name:"TensorFlow",level:85,color:"#FF6F00"},{name:"Scikit-Learn",level:90,color:"#F7931E"},{name:"Natural Language Processing",level:80,color:"#8BC34A"},{name:"Computer Vision",level:75,color:"#9C27B0"},{name:"Data Analysis",level:85,color:"#03A9F4"}]},{category:"Web Development",skills:[{name:"React",level:80,color:"#61DAFB"},{name:"Django",level:85,color:"#092E20"},{name:"Flask",level:90,color:"#000000"},{name:"RESTful APIs",level:85,color:"#FF5722"},{name:"Responsive Design",level:80,color:"#9C27B0"}]},{category:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,color:"#F05032"},{name:"Azure",level:75,color:"#0078D4"},{name:"Docker",level:70,color:"#2496ED"},{name:"VS Code",level:95,color:"#007ACC"},{name:"Linux",level:80,color:"#FCC624"}]}].map(((e,t)=>Object(m.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(m.jsxs)(nt,{children:[Object(m.jsx)(ot,{children:e.category}),e.skills.map(((e,t)=>Object(m.jsxs)(ct,{children:[Object(m.jsxs)(lt,{children:[Object(m.jsx)(st,{children:e.name}),Object(m.jsxs)(dt,{children:[e.level,"%"]})]}),Object(m.jsx)(ht,{children:Object(m.jsx)(mt,{level:e.level,color:e.color})})]},t)))]})},t)))})]})}),Object(m.jsx)(tt,{children:Object(m.jsxs)(it,{children:[Object(m.jsx)(rt,{className:"gradient-text",children:"Soft Skills"}),Object(m.jsx)(at,{columns:3,children:[{name:"Problem Solving",description:"Analytical approach to breaking down complex problems into manageable components."},{name:"Communication",description:"Clear and effective communication of technical concepts to both technical and non-technical audiences."},{name:"Teamwork",description:"Collaborative mindset with experience working in diverse teams on various projects."},{name:"Adaptability",description:"Quick to learn new technologies and adapt to changing project requirements."},{name:"Time Management",description:"Efficient prioritization of tasks to meet deadlines and deliver high-quality work."},{name:"Critical Thinking",description:"Ability to evaluate information objectively and make sound decisions."}].map(((e,t)=>Object(m.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(m.jsxs)(pt,{children:[Object(m.jsx)(bt,{children:e.name}),Object(m.jsx)(jt,{children:e.description})]})},t)))})]})}),Object(m.jsx)(tt,{children:Object(m.jsxs)(it,{children:[Object(m.jsx)(rt,{className:"gradient-text",children:"Continuous Learning"}),Object(m.jsxs)(gt,{children:[Object(m.jsx)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:Object(m.jsxs)(xt,{children:[Object(m.jsx)(ut,{children:"Currently Learning"}),Object(m.jsx)(vt,{children:e.current.map(((e,t)=>Object(m.jsxs)(yt,{children:[Object(m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(m.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),Object(m.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Object(m.jsx)("span",{children:e})]},t)))})]})}),Object(m.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(m.jsxs)(xt,{children:[Object(m.jsx)(ut,{children:"Future Interests"}),Object(m.jsx)(vt,{children:e.future.map(((e,t)=>Object(m.jsxs)(yt,{children:[Object(m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--accent-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(m.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(m.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Object(m.jsx)("span",{children:e})]},t)))})]})})]})]})})]})};const Ot=h.a.div`
  position: relative;
  padding-top: 80px;
`,wt=h.a.div`
  text-align: center;
  padding: 4rem 0;
`,kt=h.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,zt=h.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,At=h.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Mt=h.a.section`
  padding: 2rem 0 6rem;
`,Ct=h.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
  }
`,Lt=h.a.div`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`,St=h.a.div`
  flex: 2;
`,It=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Bt=h.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,Et=h.a.div`
  display: flex;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Tt=h.a.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(9, 105, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`,Ft=h.a.div``,Ht=h.a.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
`,Pt=h.a.p`
  color: #a0a0a0;
`,Nt=h.a.a`
  color: #a0a0a0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`,Rt=h.a.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,Wt=Object(h.a)(d.a.a)`
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
`,Dt=h.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Vt=h.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,$t=h.a.form``,_t=h.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Gt=h.a.div`
  margin-bottom: 1.5rem;
`,qt=h.a.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #a0a0a0;
  font-size: 0.95rem;
`,Jt=h.a.input`
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
`,Yt=h.a.textarea`
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
`,Qt=Object(h.a)(d.a.button)`
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
`,Kt=Object(h.a)(d.a.div)`
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;var Xt=()=>{const[e,t]=Object(r.useState)({name:"",email:"",subject:"",message:""}),[i,a]=Object(r.useState)(!1),[n,o]=Object(r.useState)(!1),c=e=>{const{name:i,value:r}=e.target;t((e=>({...e,[i]:r})))},l=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(m.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(m.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(m.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(m.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(m.jsxs)(Ot,{children:[Object(m.jsx)(F,{}),Object(m.jsx)(wt,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(m.jsx)(kt,{children:"Get In Touch"}),Object(m.jsx)(zt,{}),Object(m.jsx)(At,{children:"Have a question or want to work together? Feel free to reach out!"})]})}),Object(m.jsx)(Mt,{children:Object(m.jsxs)(Ct,{children:[Object(m.jsx)(Lt,{children:Object(m.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(m.jsx)(It,{children:Object(m.jsx)("div",{style:{borderRadius:"12px",overflow:"hidden",marginBottom:"1.5rem",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.2)"},children:Object(m.jsx)("img",{src:"./images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",style:{width:"100%",height:"auto",display:"block"}})})}),Object(m.jsxs)(It,{children:[Object(m.jsx)(Bt,{children:"Contact Information"}),Object(m.jsxs)(Et,{children:[Object(m.jsx)(Tt,{children:Object(m.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(m.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Object(m.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),Object(m.jsxs)(Ft,{children:[Object(m.jsx)(Ht,{children:"Email"}),Object(m.jsx)(Nt,{href:"mailto:bhntshwcjc025@student.wethinkcode.co.za",children:"bhntshwcjc025@student.wethinkcode.co.za"})]})]}),Object(m.jsxs)(Et,{children:[Object(m.jsx)(Tt,{children:Object(m.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(m.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Object(m.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),Object(m.jsxs)(Ft,{children:[Object(m.jsx)(Ht,{children:"Location"}),Object(m.jsx)(Pt,{children:"Johannesburg, South Africa"})]})]}),Object(m.jsx)(Bt,{style:{marginTop:"2rem"},children:"Connect With Me"}),Object(m.jsx)(Rt,{children:l.map(((e,t)=>Object(m.jsx)(Wt,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-5},whileTap:{y:0},children:e.icon},t)))})]}),Object(m.jsxs)(It,{children:[Object(m.jsx)(Bt,{children:"Resume"}),Object(m.jsx)(Pt,{style:{marginBottom:"1.5rem"},children:"View my professional resume to learn more about my experience and skills."}),Object(m.jsxs)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[Object(m.jsxs)(d.a.a,{href:"./static/ats-resume.html",target:"_blank",whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(m.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(m.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(m.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(m.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"ATS-Friendly Resume"]}),Object(m.jsxs)(d.a.a,{href:"./static/resume.html",target:"_blank",whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(m.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(m.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(m.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(m.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Visual Resume"]})]})]})]})}),Object(m.jsx)(St,{children:Object(m.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(m.jsxs)(Dt,{children:[Object(m.jsx)(Vt,{children:"Send Me a Message"}),n&&Object(m.jsx)(Kt,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:"Your message has been sent successfully! I'll get back to you soon."}),Object(m.jsxs)($t,{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout((()=>{a(!1),o(!0),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{o(!1)}),5e3)}),1500)},children:[Object(m.jsxs)(_t,{children:[Object(m.jsxs)(Gt,{children:[Object(m.jsx)(qt,{htmlFor:"name",children:"Your Name"}),Object(m.jsx)(Jt,{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"John Doe",required:!0})]}),Object(m.jsxs)(Gt,{children:[Object(m.jsx)(qt,{htmlFor:"email",children:"Your Email"}),Object(m.jsx)(Jt,{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"john@example.com",required:!0})]})]}),Object(m.jsxs)(Gt,{children:[Object(m.jsx)(qt,{htmlFor:"subject",children:"Subject"}),Object(m.jsx)(Jt,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"Project Inquiry",required:!0})]}),Object(m.jsxs)(Gt,{children:[Object(m.jsx)(qt,{htmlFor:"message",children:"Message"}),Object(m.jsx)(Yt,{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Your message here...",required:!0})]}),Object(m.jsx)(Qt,{type:"submit",disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:i?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"animate-spin",children:[Object(m.jsx)("circle",{cx:"12",cy:"12",r:"10",opacity:"0.25"}),Object(m.jsx)("path",{d:"M12 2a10 10 0 0 1 10 10"})]}),"Sending..."]}):"Send Message"})]})]})})})]})})]})};const Zt=Object(h.a)(d.a.button)`
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
`,Ut=Object(h.a)(d.a.div)`
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
`,ei=h.a.div`
  background-color: var(--primary-color);
  padding: 1rem;
  color: white;
`,ti=h.a.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,ii=h.a.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
`,ri=h.a.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ai=h.a.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  ${e=>"bot"===e.sender?"\n    align-self: flex-start;\n    background-color: #2a2d3a;\n    border-bottom-left-radius: 4px;\n    color: white;\n  ":"\n    align-self: flex-end;\n    background-color: var(--primary-color);\n    border-bottom-right-radius: 4px;\n    color: white;\n  "}
`,ni=h.a.form`
  display: flex;
  padding: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,oi=h.a.input`
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
`,ci=h.a.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;var li=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)([{id:1,text:"Hi there! I'm Eric's AI assistant. How can I help you learn more about Eric's skills and projects?",sender:"bot"}]),[n,o]=Object(r.useState)(""),c=Object(r.useRef)(null);Object(r.useEffect)((()=>{(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()}),[i,e]);const l=e=>{const t=e.toLowerCase();return t.includes("project")||t.includes("work")?"Eric has worked on several impressive projects including SafeWayAI (an AI-powered emergency detection platform), Smart Loan Approval Predictor, Eduwize (an AI learning platform), and more. You can check them out in the Projects section!":t.includes("skill")||t.includes("technology")?"Eric is skilled in Python, JavaScript, React, TensorFlow, Django, Flask, Azure, and more. He specializes in AI/ML development and has experience with mobile app development using Kivy.":t.includes("contact")||t.includes("hire")||t.includes("email")?"You can contact Eric through the Contact form on this website, or connect with him on LinkedIn at linkedin.com/in/bhekumusaerickelvinntshwenya/":t.includes("education")||t.includes("background")?"Eric is a software developer with expertise in AI, mobile applications, and web development. He's currently studying at WeThinkCode and continuously learning about AI, machine learning, and cloud technologies.":t.includes("hello")||t.includes("hi")||t.includes("hey")?"Hello! I'm Eric's AI assistant. What would you like to know about Eric's skills, projects, or experience?":"I'm not sure I understand. Would you like to know about Eric's projects, skills, education, or how to contact him?"};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Zt,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>t(!e),children:e?Object(m.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(m.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),Object(m.jsx)(s.a,{children:e&&Object(m.jsxs)(Ut,{initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.9},transition:{duration:.2},children:[Object(m.jsxs)(ei,{children:[Object(m.jsx)(ti,{children:"Eric's AI Assistant"}),Object(m.jsx)(ii,{children:"Ask me anything about Eric!"})]}),Object(m.jsxs)(ri,{children:[i.map((e=>Object(m.jsx)(ai,{sender:e.sender,children:e.text},e.id))),Object(m.jsx)("div",{ref:c})]}),Object(m.jsxs)(ni,{onSubmit:e=>{if(e.preventDefault(),!n.trim())return;const t={id:i.length+1,text:n,sender:"user"};a([...i,t]),o(""),setTimeout((()=>{const e={id:i.length+2,text:l(n),sender:"bot"};a((t=>[...t,e]))}),500)},children:[Object(m.jsx)(oi,{type:"text",value:n,onChange:e=>o(e.target.value),placeholder:"Type a message..."}),Object(m.jsx)(ci,{type:"submit",children:Object(m.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})]})})]})};i(73);var si=function(){return Object(m.jsx)(c.a,{children:Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(f,{}),Object(m.jsx)("main",{className:"main-content",children:Object(m.jsx)(s.a,{exitBeforeEnter:!0,children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:xe}),Object(m.jsx)(l.a,{path:"/about",component:He}),Object(m.jsx)(l.a,{path:"/projects",component:Qe}),Object(m.jsx)(l.a,{path:"/skills",component:ft}),Object(m.jsx)(l.a,{path:"/contact",component:Xt})]})})}),Object(m.jsx)(li,{}),Object(m.jsx)(E,{})]})})};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(si,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.d880c8b0.chunk.js.map