(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{65:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);var r=i(2),a=i.n(r),o=i(56),n=i.n(o),c=(i(65),i(11)),s=i(7),l=i(78),d=i(76),m=i(1),h=i(0);const p=m.a.header`
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
`,g=m.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,b=Object(m.a)(d.a.div)`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`,j=m.a.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`,x=Object(m.a)(d.a.a)`
  color: var(--light-color);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`,u=m.a.button`
  background: none;
  border: none;
  color: var(--light-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`,v=Object(m.a)(d.a.div)`
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
`,f=m.a.a`
  display: block;
  padding: 0.75rem 2rem;
  color: var(--light-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;var y=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const o=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Skills",path:"/skills"},{name:"Certifications",path:"/certifications"},{name:"Achievements",path:"/achievements"},{name:"Contact",path:"/contact"}];return Object(h.jsxs)(p,{scrolled:i,children:[Object(h.jsxs)(g,{children:[Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)(b,{className:"gradient-text",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Eric.dev"})}),Object(h.jsx)(j,{children:o.map((e=>Object(h.jsx)(c.b,{to:e.path,children:Object(h.jsx)(x,{whileHover:{y:-2},whileTap:{y:0},children:e.name})},e.name)))}),Object(h.jsx)(u,{onClick:()=>t(!e),children:e?Object(h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M6 18L18 6M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):Object(h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M4 6H20M4 12H20M4 18H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e&&Object(h.jsx)(v,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:o.map((e=>Object(h.jsx)(c.b,{to:e.path,children:Object(h.jsx)(f,{onClick:()=>t(!1),children:e.name})},e.name)))})]})};const w=m.a.footer`
  background: rgba(31, 34, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
`,O=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,k=m.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,A=m.a.div`
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,C=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,S=m.a.div`
  display: flex;
  gap: 1rem;
`,z=Object(m.a)(d.a.a)`
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
`,M=m.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,E=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,B=m.a.div`
  display: flex;
  gap: 1.5rem;
`,L=m.a.a`
  color: #a0a0a0;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;var P=()=>{const e=(new Date).getFullYear(),t=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(h.jsx)(w,{children:Object(h.jsxs)(O,{children:[Object(h.jsxs)(k,{children:[Object(h.jsxs)(A,{children:[Object(h.jsx)(c.b,{to:"/",children:Object(h.jsx)("h3",{className:"gradient-text",children:"Eric.dev"})}),Object(h.jsx)(C,{children:"AI/ML Developer & Problem Solver"})]}),Object(h.jsx)(S,{children:t.map(((e,t)=>Object(h.jsx)(z,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-3},whileTap:{y:0},children:e.icon},t)))})]}),Object(h.jsxs)(M,{children:[Object(h.jsxs)(E,{children:["\xa9 ",e," Bhekumusa Eric Ntshwenya. All rights reserved."]}),Object(h.jsxs)(B,{children:[Object(h.jsx)(L,{href:"/privacy",children:"Privacy Policy"}),Object(h.jsx)(L,{href:"/terms",children:"Terms of Service"})]})]})]})})};const I=m.a.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;var F=()=>{const e=Object(r.useRef)(null);return Object(r.useEffect)((()=>{const t=e.current,i=t.getContext("2d");let r;const a=()=>{t.width=window.innerWidth,t.height=window.innerHeight};a(),window.addEventListener("resize",a);const o=[],n=1e3;for(let e=0;e<200;e++)o.push({x:Math.random()*t.width-t.width/2,y:Math.random()*t.height-t.height/2,z:Math.random()*n,color:`rgba(${100*Math.random()+155}, ${100*Math.random()+155}, ${100*Math.random()+155}, ${.5*Math.random()+.5})`});const c=()=>{i.fillStyle="rgba(18, 18, 18, 0.2)",i.fillRect(0,0,t.width,t.height);const e=t.width/2,a=t.height/2;for(let r=0;r<200;r++){const c=o[r];c.z-=.5,c.z<=0&&(c.x=Math.random()*t.width-e,c.y=Math.random()*t.height-a,c.z=n);const s=n/(n+c.z),l=e+c.x*s,d=a+c.y*s,m=1.5*s;i.beginPath(),i.arc(l,d,m,0,2*Math.PI),i.fillStyle=c.color,i.fill()}r=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(r)}}),[]),Object(h.jsx)(I,{ref:e})},T=i(42),N=i(75),D=i(77);const W=Object(m.a)(d.a.div)`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
`,H=m.a.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`,R=m.a.div`
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
`,J=m.a.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
`,V=m.a.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`,_=m.a.div`
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
`,$=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,Y=m.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95rem;
`,q=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,G=m.a.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,Q=m.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,U=m.a.a`
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
`;var X=e=>{let{project:t}=e;const[i,a]=Object(r.useState)(!1),o=Object(r.useRef)(null),n=Object(T.a)(0),s=Object(T.a)(0),l=Object(N.a)(n,{stiffness:150,damping:15}),d=Object(N.a)(s,{stiffness:150,damping:15}),m=Object(D.a)(d,[-.5,.5],[10,-10]),p=Object(D.a)(l,[-.5,.5],[-10,10]);return Object(h.jsx)(W,{ref:o,whileHover:{scale:1.02},style:{rotateX:m,rotateY:p},onMouseMove:e=>{if(!o.current)return;const t=o.current.getBoundingClientRect(),i=t.width,r=t.height,a=(e.clientX-t.left)/i-.5,c=(e.clientY-t.top)/r-.5;n.set(a),s.set(c)},onMouseEnter:()=>a(!0),onMouseLeave:()=>{n.set(0),s.set(0),a(!1)},children:Object(h.jsxs)(H,{children:[Object(h.jsxs)(R,{hovered:i,children:[t.image?Object(h.jsx)("img",{src:""+t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)(J,{children:t.title.charAt(0)}),Object(h.jsx)(V,{children:"Project Preview"})]}),Object(h.jsx)(_,{hovered:i,children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)(J,{children:t.title.charAt(0)}),Object(h.jsx)(V,{children:"Click to view details"})]})})]}),Object(h.jsx)($,{className:"gradient-text",children:t.title}),Object(h.jsx)(Y,{children:t.description}),Object(h.jsx)(q,{children:t.technologies.map(((e,t)=>Object(h.jsx)(G,{children:e},t)))}),Object(h.jsxs)(Q,{children:[t.github&&Object(h.jsxs)(U,{href:t.github,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),"Code"]}),t.demo&&Object(h.jsxs)(U,{href:t.demo,target:"_blank",rel:"noopener noreferrer",style:{color:"#4CAF50"},children:[Object(h.jsxs)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"}),Object(h.jsx)("path",{d:"M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"})]}),"Demo"]}),Object(h.jsx)(c.b,{to:`/projects/${t.slug}`,children:Object(h.jsxs)(U,{as:"span",children:["Details",Object(h.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})})]})]})})};const K=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`,Z=Object(m.a)(d.a.div)`
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
`,ee=m.a.div`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`,te=m.a.span`
  white-space: nowrap;
`,ie=m.a.div`
  position: relative;
  display: inline-block;
`,re=m.a.div`
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
  
  ${ie}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;var ae=e=>{let{achievements:t=[]}=e;const i=t.length>0?t:[{id:1,text:"Sappas Hackathon Winner",type:"hackathon",icon:"\ud83c\udfc6",tooltip:"Won the prestigious Sappas Hackathon competition"},{id:2,text:"SAP Tech Consultant",type:"certification",icon:"\ud83c\udfe2",tooltip:"SAP Tech Consultant Certification - Enterprise Solutions Expert"},{id:3,text:"AI/ML Specialist",type:"certification",icon:"\ud83e\udd16",tooltip:"Machine Learning and AI Development Expert"},{id:4,text:"Full-Stack Developer",type:"project",icon:"\ud83d\udcbb",tooltip:"Proficient in both frontend and backend development"},{id:5,text:"Java Developer",type:"certification",icon:"\u2615",tooltip:"Recently added Java to professional toolkit"},{id:6,text:"C# Developer",type:"certification",icon:"#\ufe0f\u20e3",tooltip:"Recently mastered C# and .NET development"},{id:7,text:"Open Source Contributor",type:"recognition",icon:"\ud83c\udf1f",tooltip:"Active contributor to open source projects"},{id:8,text:"Cisco CCNA Certified",type:"certification",icon:"\ud83c\udf10",tooltip:"Cisco Certified Network Associate - Professional networking expertise"},{id:9,text:"WeThinkCode_ Student",type:"recognition",icon:"\ud83c\udf93",tooltip:"Studying at prestigious WeThinkCode_ academy"}];return Object(h.jsx)(K,{children:i.map(((e,t)=>Object(h.jsxs)(ie,{children:[Object(h.jsxs)(Z,{type:e.type,initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,delay:.1*t,type:"spring",stiffness:100},whileHover:{scale:1.05,y:-3},whileTap:{scale:.95},children:[Object(h.jsx)(ee,{children:e.icon}),Object(h.jsx)(te,{children:e.text})]}),Object(h.jsx)(re,{children:e.tooltip})]},e.id)))})};const oe=m.a.div`
  position: relative;
`,ne=m.a.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
`,ce=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`,se=Object(m.a)(d.a.div)`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 3rem;
  }
`,le=m.a.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`,de=m.a.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,me=m.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  max-width: 600px;
`,he=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`,pe=Object(m.a)(d.a.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
`,ge=m.a.section`
  padding: 6rem 0;
`,be=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`,je=m.a.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`,xe=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 2rem;
`,ue=m.a.div`
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
`,ve=m.a.div`
  text-align: center;
  margin-top: 3rem;
`,fe=m.a.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(9, 105, 218, 0.1), rgba(9, 105, 218, 0.05));
  text-align: center;
`,ye=m.a.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`,we=m.a.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,Oe=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`,ke=[{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform that provides safe routes to destinations and detects danger in real-time.",technologies:["Python","Flet","Google Maps API","Firebase"],github:"https://github.com/BhekumusaEric/MSAIskillshackathon",demo:"https://github.com/BhekumusaEric/MSAIskillshackathon",image:"./images/projects/safeway-ai.jpg"},{id:2,title:"Smart Loan Approval Predictor",slug:"smart-loan-approval",description:"Mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using ML.",technologies:["Python","Kivy","Machine Learning"],github:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",demo:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",image:"./images/projects/loan-approval.jpg"},{id:3,title:"Eduwize",slug:"eduwize",description:"AI-powered learning platform designed to enhance student learning through personalized study material recommendations.",technologies:["Django","Azure Cognitive Services","Python"],github:"https://github.com/BhekumusaEric/Eduwize",demo:"https://github.com/BhekumusaEric/Eduwize",image:"./images/projects/eduwize.jpg"}];var Ae=()=>Object(h.jsxs)(oe,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(ne,{children:Object(h.jsxs)(ce,{children:[Object(h.jsxs)(se,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsxs)(le,{children:["Hi, I'm ",Object(h.jsx)("span",{className:"gradient-text",children:"Eric Ntshwenya"})]}),Object(h.jsx)(de,{children:"AI/ML Developer & Problem Solver"}),Object(h.jsx)(me,{children:"I build intelligent solutions that solve real-world problems. Specializing in AI, machine learning, and web development. \ud83c\udfc6 Recent Sappas Hackathon Winner with expertise in Java, C#, and cloud technologies."}),Object(h.jsx)("div",{style:{margin:"2rem 0"},children:Object(h.jsx)(ae,{})}),Object(h.jsxs)(he,{children:[Object(h.jsx)(c.b,{to:"/projects",children:Object(h.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"})}),Object(h.jsx)(c.b,{to:"/contact",children:Object(h.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Contact Me"})})]})]}),Object(h.jsx)(pe,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:Object(h.jsx)("div",{className:"glass-effect coin-container",style:{width:"100%",height:"100%",borderRadius:"50%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:Object(h.jsx)("img",{src:"/images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})})})]})}),Object(h.jsxs)(ge,{children:[Object(h.jsx)(be,{children:"Featured Projects"}),Object(h.jsx)(xe,{}),Object(h.jsx)(je,{children:"Check out some of my recent work. These projects showcase my skills in AI, web development, and problem-solving."}),Object(h.jsx)(ue,{children:ke.map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsx)(X,{project:e})},e.id)))}),Object(h.jsx)(ve,{children:Object(h.jsx)(c.b,{to:"/projects",children:Object(h.jsx)(d.a.button,{className:"btn btn-outline",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View All Projects"})})})]}),Object(h.jsx)(fe,{children:Object(h.jsx)(ye,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(we,{children:"Let's Work Together"}),Object(h.jsx)(Oe,{children:"I'm currently available for freelance work and full-time positions in AI/ML development."}),Object(h.jsx)(c.b,{to:"/contact",children:Object(h.jsx)(d.a.button,{className:"btn btn-primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get In Touch"})})]})})})]});const Ce=m.a.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`,Se=m.a.div`
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
`,ze=Object(m.a)(d.a.div)`
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
`,Me=m.a.div`
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
  ${ze}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  ${ze}:nth-child(even) & {
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
`,Ee=m.a.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
`,Be=m.a.div`
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
`,Le=m.a.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Pe=m.a.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`,Ie=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1rem;
`,Fe=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Te=m.a.span`
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;var Ne=e=>{let{experiences:t=[]}=e;const i=t.length>0?t:[{id:1,date:"2024",title:"Sappas Hackathon Winner",description:"Emerged victorious in the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive tech environment.",type:"achievement",icon:"\ud83c\udfc6",tags:["Competition","Innovation","Problem Solving"]},{id:2,date:"2024",title:"Java & C# Skill Expansion",description:"Successfully expanded programming expertise to include enterprise-level Java and C# development, adding significant value to full-stack development capabilities.",type:"skill",icon:"\ud83d\udcbb",tags:["Java","C#","Enterprise Development"]},{id:3,date:"2024",title:"Cloud Computing Certifications",description:"Achieved Microsoft Azure Fundamentals and AWS Cloud Practitioner certifications, validating expertise in modern cloud infrastructure and services.",type:"certification",icon:"\u2601\ufe0f",tags:["Azure","AWS","Cloud Architecture"]},{id:4,date:"2023-2024",title:"AI/ML Project Portfolio Development",description:"Developed multiple AI and machine learning projects including SafeWayAI, NeuroStrike, and Smart Loan Approval Predictor, showcasing practical AI application skills.",type:"project",icon:"\ud83e\udd16",tags:["Machine Learning","AI Development","Python"]},{id:5,date:"2023",title:"WeThinkCode_ Enrollment",description:"Accepted into the prestigious WeThinkCode_ software development academy, joining an elite program focused on practical coding skills and industry readiness.",type:"education",icon:"\ud83c\udf93",tags:["Education","Software Development","Practical Skills"]},{id:6,date:"2023",title:"Full-Stack Development Mastery",description:"Achieved proficiency in full-stack web development using React, Django, and modern web technologies, enabling end-to-end application development.",type:"skill",icon:"\ud83c\udf10",tags:["React","Django","Full-Stack","Web Development"]}];return Object(h.jsxs)(Ce,{children:[Object(h.jsx)(Se,{}),i.map(((e,t)=>Object(h.jsxs)(ze,{initial:{opacity:0,x:t%2===0?-50:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2*t,type:"spring",stiffness:100},whileHover:{scale:1.02},children:[Object(h.jsx)(Me,{type:e.type,children:Object(h.jsx)(Ee,{children:e.icon})}),Object(h.jsxs)(Be,{children:[Object(h.jsx)(Le,{children:e.date}),Object(h.jsx)(Pe,{children:e.title}),Object(h.jsx)(Ie,{children:e.description}),e.tags&&Object(h.jsx)(Fe,{children:e.tags.map(((e,t)=>Object(h.jsx)(Te,{children:e},t)))})]})]},e.id)))]})};const De=m.a.div`
  position: relative;
  padding-top: 80px;
`,We=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,He=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Re=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Je=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Ve=m.a.section`
  padding: 5rem 0;

  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,_e=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`,$e=m.a.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    ${e=>e.right?"margin-left: 3rem;":"margin-right: 3rem;"}
  }
`,Ye=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,qe=m.a.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`,Ge=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Qe=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,Ue=m.a.p`
  color: #a0a0a0;
`,Xe=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ke=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Ze=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`,et=m.a.ul`
  list-style: none;
`,tt=m.a.li`
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
`;var it=()=>{const e={technical:["Python","JavaScript","Java","C#","React","Django","Flask","TensorFlow","Machine Learning","Neural Networks","Data Analysis","AWS","Azure","Cloud Computing","Git","HTML/CSS","Blockchain","Data Science","AI Development","Full-Stack Development"],soft:["Problem Solving","Communication","Teamwork","Leadership","Adaptability","Time Management","Critical Thinking","Competitive Programming","Innovation","Project Management"]};return Object(h.jsxs)(De,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(We,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(He,{children:"About Me"}),Object(h.jsx)(Re,{}),Object(h.jsx)(Je,{children:"Get to know more about me, my background, and what drives me as a developer."})]})}),Object(h.jsx)(Ve,{children:Object(h.jsxs)(_e,{children:[Object(h.jsx)($e,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(h.jsx)(Ye,{className:"gradient-text",children:"My Story"}),Object(h.jsx)(qe,{children:"I'm Bhekumusa Eric Ntshwenya, a passionate software developer and hackathon winner with expertise spanning AI/ML, web development, and enterprise programming. My journey in tech began with curiosity about solving real-world problems and has evolved into a proven track record of innovative solutions and competitive success."}),Object(h.jsx)(qe,{children:"Currently studying at WeThinkCode_, I've recently expanded my technical arsenal to include Java and C# development, adding enterprise-level programming capabilities to my existing expertise in Python, JavaScript, and AI technologies. This expansion reflects my commitment to staying current with industry demands and versatile problem-solving approaches."}),Object(h.jsx)(qe,{children:"My recent victory in the prestigious Sappas hackathon demonstrates my ability to innovate under pressure and deliver exceptional results in competitive environments. This achievement, combined with my growing portfolio of AI-powered applications like SafeWayAI and NeuroStrike, showcases my capability to transform complex ideas into practical, impactful solutions."}),Object(h.jsx)(qe,{children:"What drives me is the intersection of cutting-edge technology and meaningful impact. Whether developing cloud-based data processing systems on AWS, creating neural network implementations, or building full-stack web applications, I'm passionate about leveraging diverse technologies to create solutions that matter. My work spans from AI safety applications to enterprise development frameworks, reflecting both technical depth and breadth."}),Object(h.jsx)(qe,{children:"Beyond coding, I'm committed to continuous learning and professional growth. My recent certifications in cloud computing and expansion into Java and C# development demonstrate my dedication to staying at the forefront of technology trends and industry best practices."})]})}),Object(h.jsx)($e,{right:!0,children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:[Object(h.jsx)("div",{className:"glass-effect coin-container",style:{marginBottom:"2rem",borderRadius:"50%",overflow:"hidden",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)",width:"250px",height:"250px",margin:"0 auto 2rem"},children:Object(h.jsx)("img",{src:"/images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})}),Object(h.jsx)(Ye,{className:"gradient-text",children:"Quick Facts"}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Location"}),Object(h.jsx)(Ue,{children:"Johannesburg, South Africa"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Focus Areas"}),Object(h.jsx)(Ue,{children:"AI/ML Development, Enterprise Java/C#, Cloud Computing, Full-Stack Development"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Recent Achievement"}),Object(h.jsx)(Ue,{children:"\ud83c\udfc6 Sappas Hackathon Winner 2024"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Programming Languages"}),Object(h.jsx)(Ue,{children:"Python, JavaScript, Java, C#, SQL"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Languages"}),Object(h.jsx)(Ue,{children:"English (Fluent), Zulu (Native)"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Certifications"}),Object(h.jsx)(Ue,{children:"SAP Tech Consultant, Cisco CCNA, Cisco IT Essentials A+, Java & C# Certified"})]}),Object(h.jsxs)(Ge,{children:[Object(h.jsx)(Qe,{children:"Interests"}),Object(h.jsx)(Ue,{children:"AI Research, Competitive Programming, Open Source, Cloud Architecture"})]}),Object(h.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(h.jsx)(Qe,{style:{textAlign:"center",marginBottom:"1rem"},children:"Major Achievements"}),Object(h.jsx)(ae,{})]})]})})]})}),Object(h.jsx)(Ve,{children:Object(h.jsx)(_e,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{width:"100%"},children:[Object(h.jsx)(Ye,{className:"gradient-text",style:{textAlign:"center",marginBottom:"2rem"},children:"My Skills"}),Object(h.jsxs)(Xe,{children:[Object(h.jsxs)(Ke,{children:[Object(h.jsx)(Ze,{children:"Technical Skills"}),Object(h.jsx)(et,{children:e.technical.map(((e,t)=>Object(h.jsx)(tt,{children:e},t)))})]}),Object(h.jsxs)(Ke,{children:[Object(h.jsx)(Ze,{children:"Soft Skills"}),Object(h.jsx)(et,{children:e.soft.map(((e,t)=>Object(h.jsx)(tt,{children:e},t)))})]})]})]})})}),Object(h.jsx)(Ve,{children:Object(h.jsx)(_e,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{width:"100%"},children:[Object(h.jsx)(Ye,{className:"gradient-text",style:{textAlign:"center",marginBottom:"3rem"},children:"Professional Journey"}),Object(h.jsx)(Ne,{})]})})})]})};const rt=m.a.div`
  position: relative;
  padding-top: 80px;
`,at=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,ot=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,nt=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,ct=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,st=m.a.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 4rem;
  padding: 0 2rem;
`,lt=m.a.button`
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
`,dt=m.a.div`
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
`,mt=m.a.div`
  text-align: center;
  padding: 5rem 0;
  grid-column: 1 / -1;
`,ht=m.a.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1rem;
`,pt=m.a.p`
  color: #777;
  max-width: 500px;
  margin: 0 auto;
`,gt=[{id:1,title:"SafeWayAI",slug:"safeway-ai",description:"AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents. The app integrates with Google Maps and uses real crime data to analyze route safety.",technologies:["Python","Flet","Google Maps API","Firebase","Machine Learning"],category:"AI/ML",github:"https://github.com/BhekumusaEric/MSAIskillshackathon",demo:"https://github.com/BhekumusaEric/MSAIskillshackathon",image:"/images/projects/safeway-ai.jpg"},{id:2,title:"Smart Loan Approval Predictor",slug:"smart-loan-approval",description:"A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning. The app analyzes user data to determine loan eligibility.",technologies:["Python","Kivy","Machine Learning","SQLite"],category:"AI/ML",github:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",demo:"https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor",image:"/images/projects/loan-approval.jpg"},{id:3,title:"Eduwize",slug:"eduwize",description:"AI-powered learning platform designed to enhance student learning through personalized study material recommendations, quizzes with performance tracking, and resource management.",technologies:["Django","Azure Cognitive Services","Python","PostgreSQL"],category:"Web Development",github:"https://github.com/BhekumusaEric/Eduwize",demo:"https://github.com/BhekumusaEric/Eduwize",image:"/images/projects/eduwize.jpg"},{id:4,title:"My Phone Repair Website",slug:"phone-repair-website",description:"A personal website for a mobile repair shop, showcasing services and allowing customers to book repairs online.",technologies:["HTML","CSS","JavaScript"],category:"Web Development",github:"https://github.com/BhekumusaEric/myphonerepairwebsite",demo:"https://bhekumusaeric.github.io/myphonerepairwebsite/",image:"/images/projects/phone-repair.jpg"},{id:5,title:"CharityBlockchain",slug:"charity-blockchain",description:"Ethereum blockchain project aimed at ensuring complete transparency in charity transactions. Integrates a solidity contract with a metamask wallet on Ganache interfaced accounts and deployment using Node.js.",technologies:["Blockchain","Solidity","Ethereum","Node.js"],category:"Blockchain",github:"https://github.com/BhekumusaEric/CharityBlockchain",demo:"https://github.com/BhekumusaEric/CharityBlockchain",image:"/images/projects/charity-blockchain.jpg"},{id:6,title:"TruBudget",slug:"trubudget",description:"A blockchain-based workflow tool for efficient and transparent project management.",technologies:["Blockchain","JavaScript","React"],category:"Blockchain",github:"https://github.com/BhekumusaEric/TruBudget",demo:"https://github.com/BhekumusaEric/TruBudget",image:"/images/projects/trubudget.jpg"},{id:7,title:"TrainJava",slug:"train-java",description:"Java training and practice repository showcasing object-oriented programming concepts, data structures, and algorithms. Demonstrates proficiency in Java development and enterprise programming patterns.",technologies:["Java","OOP","Data Structures","Algorithms"],category:"Java Development",github:"https://github.com/BhekumusaEric/TrainJava",demo:"https://github.com/BhekumusaEric/TrainJava",image:"/images/projects/placeholder.jpg"},{id:8,title:"QuickStats",slug:"quickstats",description:"Statistical analysis and data visualization tool for quick insights. Features data processing capabilities and interactive charts for business intelligence and data-driven decision making.",technologies:["Python","Data Analysis","Visualization","Statistics"],category:"Data Science",github:"https://github.com/BhekumusaEric/QuickStats",demo:"https://github.com/BhekumusaEric/QuickStats",image:"/images/projects/placeholder.jpg"},{id:9,title:"AWS Data Code",slug:"aws-data-code",description:"Cloud-based data processing and analytics solution built on AWS infrastructure. Demonstrates cloud computing expertise and scalable data pipeline development.",technologies:["AWS","Python","Cloud Computing","Data Processing"],category:"Cloud Development",github:"https://github.com/BhekumusaEric/aws_data_code",demo:"https://github.com/BhekumusaEric/aws_data_code",image:"/images/projects/placeholder.jpg"},{id:10,title:"NeuroStrike",slug:"neurostrike",description:"Advanced neural network implementation for pattern recognition and machine learning applications. Showcases deep learning expertise and AI model development capabilities.",technologies:["Python","Neural Networks","Deep Learning","AI"],category:"AI/ML",github:"https://github.com/BhekumusaEric/NeuroStrike",demo:"https://github.com/BhekumusaEric/NeuroStrike",image:"/images/projects/placeholder.jpg"},{id:11,title:"HYDRA",slug:"hydra",description:"Multi-purpose development framework and toolkit. Demonstrates advanced software architecture and system design capabilities with modular and scalable components.",technologies:["Python","Framework Development","System Design","Architecture"],category:"Framework",github:"https://github.com/BhekumusaEric/HYDRA",demo:"https://github.com/BhekumusaEric/HYDRA",image:"/images/projects/placeholder.jpg"},{id:12,title:"AdmissionApply",slug:"admission-apply",description:"Application platform designed to help students apply for educational opportunities. Features user management, application tracking, and automated processing workflows.",technologies:["Web Development","Database Management","User Authentication","Workflow Automation"],category:"Web Development",github:"https://github.com/BhekumusaEric/AdmissionApply",demo:"https://github.com/BhekumusaEric/AdmissionApply",image:"/images/projects/placeholder.jpg"}];var bt=()=>{const[e,t]=Object(r.useState)("All"),i="All"===e?gt:gt.filter((t=>t.category===e));return Object(h.jsxs)(rt,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(at,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(ot,{children:"My Projects"}),Object(h.jsx)(nt,{}),Object(h.jsx)(ct,{children:"Explore my portfolio of projects spanning AI/ML, web development, and blockchain technologies."})]})}),Object(h.jsx)(st,{children:["All","AI/ML","Web Development","Blockchain","Java Development","Data Science","Cloud Development","Framework"].map(((i,r)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*r},children:Object(h.jsx)(lt,{active:e===i,onClick:()=>t(i),children:i})},r)))}),Object(h.jsx)(dt,{children:i.length>0?i.map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsx)(X,{project:e})},e.id))):Object(h.jsx)(mt,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[Object(h.jsx)(ht,{children:"No projects found"}),Object(h.jsx)(pt,{children:"No projects match the selected filter. Try selecting a different category."})]})})})]})};const jt=m.a.div`
  position: relative;
  padding-top: 80px;
  min-height: 100vh;
`,xt=Object(m.a)(c.b)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
`,ut=m.a.div`
  margin-bottom: 3rem;
`,vt=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,ft=m.a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`,yt=m.a.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
`,wt=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
  }
`,Ot=m.a.div`
  color: #a0a0a0;
  font-size: 1.1rem;
  line-height: 1.8;
`,kt=m.a.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`,At=m.a.a`
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
`,Ct=m.a.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #2a2d3a 0%, #1a1c24 100%);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`,St=m.a.div`
  font-size: 5rem;
  font-weight: 800;
  color: var(--primary-color);
`,zt=m.a.div`
  text-align: center;
  padding: 5rem 0;
`,Mt=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;var Et=()=>{const{slug:e}=Object(s.f)(),[t,i]=Object(r.useState)(null),[a,o]=Object(r.useState)(!0);return Object(r.useEffect)((()=>{const t=gt.find((t=>t.slug===e));i(t),o(!1)}),[e]),a?Object(h.jsxs)(jt,{children:[Object(h.jsx)(F,{}),Object(h.jsx)("div",{className:"container mx-auto px-4 py-8",children:Object(h.jsx)("div",{className:"text-center",children:"Loading..."})})]}):t?Object(h.jsxs)(jt,{children:[Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[Object(h.jsxs)(xt,{to:"/projects",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]}),Object(h.jsx)(ut,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(vt,{className:"gradient-text",children:t.title}),Object(h.jsx)(ft,{children:t.technologies.map(((e,t)=>Object(h.jsx)(yt,{children:e},t)))})]})}),Object(h.jsxs)(wt,{children:[Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(Ot,{children:[Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)(kt,{children:[t.github&&Object(h.jsxs)(At,{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"secondary",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),"View Code"]}),t.demo&&Object(h.jsxs)(At,{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"primary",children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:[Object(h.jsx)("path",{d:"M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"}),Object(h.jsx)("path",{d:"M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"})]}),"Live Demo"]})]})]})}),Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:Object(h.jsx)(Ct,{children:t.image?Object(h.jsx)("img",{src:""+t.image,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):Object(h.jsx)(St,{children:t.title.charAt(0)})})})]})]})]}):Object(h.jsxs)(jt,{children:[Object(h.jsx)(F,{}),Object(h.jsx)("div",{className:"container mx-auto px-4 py-8",children:Object(h.jsxs)(zt,{children:[Object(h.jsx)(Mt,{children:"Project Not Found"}),Object(h.jsx)("p",{children:"The project you're looking for doesn't exist or has been removed."}),Object(h.jsxs)(xt,{to:"/projects",children:[Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Projects"]})]})})]})};const Bt=m.a.div`
  position: relative;
  padding-top: 80px;
`,Lt=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,Pt=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,It=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Ft=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Tt=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,Nt=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Dt=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,Wt=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${e=>e.columns||2}, 1fr);
  }
`,Ht=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,Rt=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,Jt=m.a.div`
  margin-bottom: 1.5rem;
`,Vt=m.a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,_t=m.a.span`
  font-weight: 500;
`,$t=m.a.span`
  color: #a0a0a0;
`,Yt=m.a.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`,qt=m.a.div`
  height: 100%;
  background: ${e=>e.color||"var(--primary-color)"};
  border-radius: 4px;
  width: ${e=>e.level}%;
  transition: width 1s ease-in-out;
`,Gt=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`,Qt=m.a.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`,Ut=m.a.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`,Xt=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Kt=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Zt=m.a.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ei=m.a.ul`
  list-style: none;
`,ti=m.a.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #a0a0a0;
  
  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;var ii=()=>{const e={current:["Advanced Java Enterprise Development","C# and .NET Framework Mastery","Advanced Deep Learning Techniques","Cloud Architecture on Azure","Blockchain Development","Next.js and Modern React Patterns"],future:["Spring Boot and Microservices","ASP.NET Core Development","Quantum Computing","Augmented Reality Development","Edge Computing and IoT","Advanced Natural Language Processing"]};return Object(h.jsxs)(Bt,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(Lt,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Pt,{children:"My Skills"}),Object(h.jsx)(It,{}),Object(h.jsx)(Ft,{children:"A comprehensive overview of my technical expertise and professional capabilities."})]})}),Object(h.jsx)(Tt,{children:Object(h.jsxs)(Nt,{children:[Object(h.jsx)(Dt,{className:"gradient-text",children:"Technical Skills"}),Object(h.jsx)(Wt,{children:[{category:"Programming Languages",skills:[{name:"Python",level:95,color:"#3776AB"},{name:"JavaScript",level:85,color:"#F7DF1E"},{name:"Java",level:80,color:"#ED8B00"},{name:"C#",level:75,color:"#239120"},{name:"HTML",level:90,color:"#E34F26"},{name:"CSS",level:85,color:"#1572B6"},{name:"SQL",level:80,color:"#4479A1"}]},{category:"AI & Machine Learning",skills:[{name:"TensorFlow",level:85,color:"#FF6F00"},{name:"Scikit-Learn",level:90,color:"#F7931E"},{name:"Natural Language Processing",level:80,color:"#8BC34A"},{name:"Computer Vision",level:75,color:"#9C27B0"},{name:"Data Analysis",level:85,color:"#03A9F4"}]},{category:"Web Development",skills:[{name:"React",level:80,color:"#61DAFB"},{name:"Django",level:85,color:"#092E20"},{name:"Flask",level:90,color:"#000000"},{name:"RESTful APIs",level:85,color:"#FF5722"},{name:"Responsive Design",level:80,color:"#9C27B0"}]},{category:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,color:"#F05032"},{name:"SAP",level:80,color:"#0FAAFF"},{name:"Docker",level:70,color:"#2496ED"},{name:"VS Code",level:95,color:"#007ACC"},{name:"Linux",level:80,color:"#FCC624"}]},{category:"Networking & Infrastructure",skills:[{name:"Cisco CCNA",level:85,color:"#1BA0D7"},{name:"Network Security",level:80,color:"#FF5722"},{name:"Routing & Switching",level:85,color:"#1BA0D7"},{name:"IT Troubleshooting",level:90,color:"#4CAF50"},{name:"Network Administration",level:80,color:"#9C27B0"}]}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(Ht,{children:[Object(h.jsx)(Rt,{children:e.category}),e.skills.map(((e,t)=>Object(h.jsxs)(Jt,{children:[Object(h.jsxs)(Vt,{children:[Object(h.jsx)(_t,{children:e.name}),Object(h.jsxs)($t,{children:[e.level,"%"]})]}),Object(h.jsx)(Yt,{children:Object(h.jsx)(qt,{level:e.level,color:e.color})})]},t)))]})},t)))})]})}),Object(h.jsx)(Tt,{children:Object(h.jsxs)(Nt,{children:[Object(h.jsx)(Dt,{className:"gradient-text",children:"Soft Skills"}),Object(h.jsx)(Wt,{columns:3,children:[{name:"Problem Solving",description:"Analytical approach to breaking down complex problems into manageable components."},{name:"Communication",description:"Clear and effective communication of technical concepts to both technical and non-technical audiences."},{name:"Teamwork",description:"Collaborative mindset with experience working in diverse teams on various projects."},{name:"Adaptability",description:"Quick to learn new technologies and adapt to changing project requirements."},{name:"Time Management",description:"Efficient prioritization of tasks to meet deadlines and deliver high-quality work."},{name:"Critical Thinking",description:"Ability to evaluate information objectively and make sound decisions."}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(Gt,{children:[Object(h.jsx)(Qt,{children:e.name}),Object(h.jsx)(Ut,{children:e.description})]})},t)))})]})}),Object(h.jsx)(Tt,{children:Object(h.jsxs)(Nt,{children:[Object(h.jsx)(Dt,{className:"gradient-text",children:"Continuous Learning"}),Object(h.jsxs)(Xt,{children:[Object(h.jsx)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:Object(h.jsxs)(Kt,{children:[Object(h.jsx)(Zt,{children:"Currently Learning"}),Object(h.jsx)(ei,{children:e.current.map(((e,t)=>Object(h.jsxs)(ti,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),Object(h.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),Object(h.jsx)("span",{children:e})]},t)))})]})}),Object(h.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(Kt,{children:[Object(h.jsx)(Zt,{children:"Future Interests"}),Object(h.jsx)(ei,{children:e.future.map(((e,t)=>Object(h.jsxs)(ti,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"var(--accent-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(h.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Object(h.jsx)("span",{children:e})]},t)))})]})})]})]})})]})};const ri=m.a.div`
  position: relative;
  padding-top: 80px;
`,ai=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,oi=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,ni=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,ci=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,si=m.a.section`
  padding: 2rem 0 6rem;
`,li=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
  }
`,di=m.a.div`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`,mi=m.a.div`
  flex: 2;
`,hi=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,pi=m.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,gi=m.a.div`
  display: flex;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,bi=m.a.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(9, 105, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`,ji=m.a.div``,xi=m.a.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
`,ui=m.a.p`
  color: #a0a0a0;
`,vi=m.a.a`
  color: #a0a0a0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`,fi=m.a.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,yi=Object(m.a)(d.a.a)`
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
`,wi=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,Oi=m.a.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`,ki=m.a.form``,Ai=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ci=m.a.div`
  margin-bottom: 1.5rem;
`,Si=m.a.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #a0a0a0;
  font-size: 0.95rem;
`,zi=m.a.input`
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
`,Mi=m.a.textarea`
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
`,Ei=Object(m.a)(d.a.button)`
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
`,Bi=Object(m.a)(d.a.div)`
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;var Li=()=>{const[e,t]=Object(r.useState)({name:"",email:"",subject:"",message:""}),[i,a]=Object(r.useState)(!1),[o,n]=Object(r.useState)(!1),c=e=>{const{name:i,value:r}=e.target;t((e=>({...e,[i]:r})))},s=[{name:"GitHub",url:"https://github.com/BhekumusaEric",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})},{name:"LinkedIn",url:"https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Twitter",url:"https://x.com/NoahEric_",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})},{name:"Facebook",url:"https://www.facebook.com/profile.php?id=100085082100956",icon:Object(h.jsx)("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}];return Object(h.jsxs)(ri,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(ai,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(oi,{children:"Get In Touch"}),Object(h.jsx)(ni,{}),Object(h.jsx)(ci,{children:"Have a question or want to work together? Feel free to reach out!"})]})}),Object(h.jsx)(si,{children:Object(h.jsxs)(li,{children:[Object(h.jsx)(di,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[Object(h.jsx)(hi,{children:Object(h.jsx)("div",{className:"coin-container",style:{borderRadius:"50%",overflow:"hidden",marginBottom:"1.5rem",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.2)",width:"200px",height:"200px",margin:"0 auto 1.5rem"},children:Object(h.jsx)("img",{src:"/images/54499080440_5b468ec2b6_o.jpg",alt:"Bhekumusa Eric Ntshwenya",className:"coin-rotate",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",borderRadius:"50%"}})})}),Object(h.jsxs)(hi,{children:[Object(h.jsx)(pi,{children:"Contact Information"}),Object(h.jsxs)(gi,{children:[Object(h.jsx)(bi,{children:Object(h.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),Object(h.jsx)("polyline",{points:"22,6 12,13 2,6"})]})}),Object(h.jsxs)(ji,{children:[Object(h.jsx)(xi,{children:"Email"}),Object(h.jsx)(vi,{href:"mailto:bhntshwcjc025@student.wethinkcode.co.za",children:"bhntshwcjc025@student.wethinkcode.co.za"})]})]}),Object(h.jsxs)(gi,{children:[Object(h.jsx)(bi,{children:Object(h.jsxs)("svg",{width:"24",height:"24",fill:"none",stroke:"var(--primary-color)",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),Object(h.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),Object(h.jsxs)(ji,{children:[Object(h.jsx)(xi,{children:"Location"}),Object(h.jsx)(ui,{children:"Johannesburg, South Africa"})]})]}),Object(h.jsx)(pi,{style:{marginTop:"2rem"},children:"Connect With Me"}),Object(h.jsx)(fi,{children:s.map(((e,t)=>Object(h.jsx)(yi,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.name,whileHover:{y:-5},whileTap:{y:0},children:e.icon},t)))})]}),Object(h.jsxs)(hi,{children:[Object(h.jsx)(pi,{children:"Resume"}),Object(h.jsx)(ui,{style:{marginBottom:"1.5rem"},children:"View my professional resume to learn more about my experience and skills."}),Object(h.jsxs)("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[Object(h.jsxs)(d.a.a,{href:"/static/ats-resume.html",target:"_blank",whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(h.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(h.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(h.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"ATS-Friendly Resume"]}),Object(h.jsxs)(d.a.a,{href:"/static/resume.html",target:"_blank",whileHover:{scale:1.05},whileTap:{scale:.95},style:{display:"inline-flex",alignItems:"center",color:"var(--primary-color)"},children:[Object(h.jsxs)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:[Object(h.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),Object(h.jsx)("polyline",{points:"7 10 12 15 17 10"}),Object(h.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Visual Resume"]})]})]})]})}),Object(h.jsx)(mi,{children:Object(h.jsx)(d.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.2},children:Object(h.jsxs)(wi,{children:[Object(h.jsx)(Oi,{children:"Send Me a Message"}),o&&Object(h.jsx)(Bi,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:"Your message has been sent successfully! I'll get back to you soon."}),Object(h.jsxs)(ki,{onSubmit:e=>{e.preventDefault(),a(!0),setTimeout((()=>{a(!1),n(!0),t({name:"",email:"",subject:"",message:""}),setTimeout((()=>{n(!1)}),5e3)}),1500)},children:[Object(h.jsxs)(Ai,{children:[Object(h.jsxs)(Ci,{children:[Object(h.jsx)(Si,{htmlFor:"name",children:"Your Name"}),Object(h.jsx)(zi,{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"John Doe",required:!0})]}),Object(h.jsxs)(Ci,{children:[Object(h.jsx)(Si,{htmlFor:"email",children:"Your Email"}),Object(h.jsx)(zi,{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"john@example.com",required:!0})]})]}),Object(h.jsxs)(Ci,{children:[Object(h.jsx)(Si,{htmlFor:"subject",children:"Subject"}),Object(h.jsx)(zi,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"Project Inquiry",required:!0})]}),Object(h.jsxs)(Ci,{children:[Object(h.jsx)(Si,{htmlFor:"message",children:"Message"}),Object(h.jsx)(Mi,{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Your message here...",required:!0})]}),Object(h.jsx)(Ei,{type:"submit",disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:i?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"animate-spin",children:[Object(h.jsx)("circle",{cx:"12",cy:"12",r:"10",opacity:"0.25"}),Object(h.jsx)("path",{d:"M12 2a10 10 0 0 1 10 10"})]}),"Sending..."]}):"Send Message"})]})]})})})]})})]})};const Pi=m.a.div`
  position: relative;
  padding-top: 80px;
`,Ii=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,Fi=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Ti=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,Ni=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,Di=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,Wi=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Hi=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,Ri=m.a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Ji=m.a.div`
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
`,Vi=m.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,_i=m.a.div`
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
`,$i=m.a.div`
  flex: 1;
`,Yi=m.a.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`,qi=m.a.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`,Gi=m.a.p`
  color: #777;
  font-size: 0.8rem;
`,Qi=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Ui=m.a.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`,Xi=m.a.a`
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
`;var Ki=()=>Object(h.jsxs)(Pi,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(Ii,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(Fi,{children:"Certifications & Achievements"}),Object(h.jsx)(Ti,{}),Object(h.jsx)(Ni,{children:"Professional certifications and achievements that validate my expertise and commitment to continuous learning."})]})}),Object(h.jsx)(Di,{children:Object(h.jsxs)(Wi,{children:[Object(h.jsx)(Hi,{className:"gradient-text",children:"Professional Certifications"}),Object(h.jsx)(Ri,{children:[{id:1,title:"SAP Tech Consultant Certification",provider:"SAP",date:"2024",description:"Professional certification in SAP enterprise solutions, demonstrating expertise in business process optimization and enterprise software implementation.",skills:["SAP","Enterprise Solutions","Business Process Optimization","ERP Systems"],icon:"SAP",bgColor:"#0FAAFF",verifyUrl:"#"},{id:3,title:"Python Programming Certification",provider:"Python Institute",date:"2023",description:"Advanced Python programming skills including OOP, data structures, and algorithms.",skills:["Python","OOP","Data Structures"],icon:"PY",bgColor:"#3776AB",verifyUrl:"#"},{id:4,title:"Machine Learning Specialization",provider:"Coursera - Stanford University",date:"2023",description:"Comprehensive understanding of machine learning algorithms and their applications.",skills:["Machine Learning","TensorFlow","Neural Networks"],icon:"ML",bgColor:"#FF6F00",verifyUrl:"#"},{id:5,title:"Java Programming Certification",provider:"Oracle",date:"2024",description:"Professional-level Java programming skills and enterprise development practices.",skills:["Java","Spring Framework","Enterprise Development"],icon:"JV",bgColor:"#ED8B00",verifyUrl:"#"},{id:6,title:"C# Programming Certification",provider:"Microsoft",date:"2024",description:"Advanced C# programming and .NET framework development capabilities.",skills:["C#",".NET Framework","ASP.NET"],icon:"C#",bgColor:"#239120",verifyUrl:"#"},{id:7,title:"Cisco CCNA (Cisco Certified Network Associate)",provider:"Cisco",date:"2024",description:"Professional-level networking certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",skills:["Networking","Network Security","Routing & Switching","Network Troubleshooting"],icon:"NET",bgColor:"#1BA0D7",verifyUrl:"#"},{id:8,title:"Cisco IT Essentials A+",provider:"Cisco",date:"2024",description:"Comprehensive IT fundamentals certification covering computer hardware, software, networking, security, and troubleshooting essentials.",skills:["IT Fundamentals","Hardware Troubleshooting","Network Basics","Security Fundamentals"],icon:"IT",bgColor:"#1BA0D7",verifyUrl:"#"}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:Object(h.jsxs)(Ji,{children:[Object(h.jsxs)(Vi,{children:[Object(h.jsx)(_i,{bgColor:e.bgColor,children:e.icon}),Object(h.jsxs)($i,{children:[Object(h.jsx)(Yi,{children:e.title}),Object(h.jsx)(qi,{children:e.provider}),Object(h.jsxs)(Gi,{children:["Earned: ",e.date]})]})]}),Object(h.jsx)(Qi,{children:e.description}),Object(h.jsx)("div",{style:{marginBottom:"1rem"},children:e.skills.map(((e,t)=>Object(h.jsx)(Ui,{children:e},t)))}),Object(h.jsxs)(Xi,{href:e.verifyUrl,target:"_blank",rel:"noopener noreferrer",children:["Verify Certificate",Object(h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),Object(h.jsx)("polyline",{points:"15 3 21 3 21 9"}),Object(h.jsx)("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]})},e.id)))})]})})]});const Zi=m.a.div`
  position: relative;
  padding-top: 80px;
`,er=m.a.div`
  text-align: center;
  padding: 4rem 0;
`,tr=m.a.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,ir=m.a.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`,rr=m.a.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`,ar=m.a.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`,or=m.a.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,nr=m.a.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`,cr=m.a.div`
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
`,sr=m.a.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`,lr=m.a.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,dr=m.a.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,mr=m.a.div`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
`,hr=m.a.div`
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
`,pr=m.a.div`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    
    @media (max-width: 768px) {
      padding-left: 60px;
    }
  }
`,gr=m.a.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid var(--bg-color);
  
  ${pr}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
  
  ${pr}:nth-child(even) & {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
`,br=m.a.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`,jr=m.a.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`,xr=m.a.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`,ur=m.a.p`
  color: #a0a0a0;
  line-height: 1.6;
`;var vr=()=>Object(h.jsxs)(Zi,{children:[Object(h.jsx)(F,{}),Object(h.jsx)(er,{children:Object(h.jsxs)(d.a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[Object(h.jsx)(tr,{children:"Achievements & Recognition"}),Object(h.jsx)(ir,{}),Object(h.jsx)(rr,{children:"Celebrating milestones, victories, and recognition earned through dedication and innovation in technology."})]})}),Object(h.jsx)(ar,{children:Object(h.jsxs)(or,{children:[Object(h.jsx)(nr,{className:"gradient-text",children:"Achievement Highlights"}),Object(h.jsx)(ae,{})]})}),Object(h.jsx)(ar,{children:Object(h.jsx)(or,{children:Object(h.jsx)(d.a.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6},children:Object(h.jsxs)(cr,{children:[Object(h.jsx)(sr,{children:"\ud83c\udfc6"}),Object(h.jsx)(lr,{children:"Sappas Hackathon Winner"}),Object(h.jsx)(dr,{children:"Emerged victorious in the competitive Sappas hackathon, showcasing innovative problem-solving and technical excellence. This achievement demonstrates the ability to work under pressure, collaborate effectively, and deliver exceptional results in a competitive environment."}),Object(h.jsx)(mr,{children:"2024"})]})})})}),Object(h.jsx)(ar,{children:Object(h.jsxs)(or,{children:[Object(h.jsx)(nr,{className:"gradient-text",children:"Achievement Timeline"}),Object(h.jsx)(hr,{children:[{id:1,title:"Sappas Hackathon Winner",date:"2024",description:"Won the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive environment."},{id:2,title:"Java & C# Skill Expansion",date:"2024",description:"Successfully expanded programming expertise to include Java and C# development, adding enterprise-level programming capabilities to the toolkit."},{id:3,title:"Azure Cloud Certification",date:"2024",description:"Achieved Microsoft Azure Fundamentals certification, validating cloud computing knowledge and modern infrastructure understanding."},{id:4,title:"AI/ML Project Portfolio",date:"2023-2024",description:"Developed multiple AI and machine learning projects including SafeWayAI and Smart Loan Approval Predictor, showcasing practical AI application skills."},{id:5,title:"WeThinkCode_ Enrollment",date:"2023",description:"Accepted into the prestigious WeThinkCode_ software development academy, joining an elite program focused on practical coding skills."}].map(((e,t)=>Object(h.jsx)(d.a.div,{initial:{opacity:0,x:t%2===0?-50:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2*t},children:Object(h.jsxs)(pr,{children:[Object(h.jsx)(gr,{}),Object(h.jsxs)(br,{children:[Object(h.jsx)(jr,{children:e.title}),Object(h.jsx)(xr,{children:e.date}),Object(h.jsx)(ur,{children:e.description})]})]})},e.id)))})]})})]});const fr=Object(m.a)(d.a.button)`
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
`,yr=Object(m.a)(d.a.div)`
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
`,wr=m.a.div`
  background-color: var(--primary-color);
  padding: 1rem;
  color: white;
`,Or=m.a.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,kr=m.a.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  opacity: 0.8;
`,Ar=m.a.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cr=m.a.div`
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  
  ${e=>"bot"===e.sender?"\n    align-self: flex-start;\n    background-color: #2a2d3a;\n    border-bottom-left-radius: 4px;\n    color: white;\n  ":"\n    align-self: flex-end;\n    background-color: var(--primary-color);\n    border-bottom-right-radius: 4px;\n    color: white;\n  "}
`,Sr=m.a.form`
  display: flex;
  padding: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,zr=m.a.input`
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
`,Mr=m.a.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;var Er=()=>{const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)([{id:1,text:"Hi there! I'm Eric's AI assistant. How can I help you learn more about Eric's skills and projects?",sender:"bot"}]),[o,n]=Object(r.useState)(""),c=Object(r.useRef)(null);Object(r.useEffect)((()=>{(()=>{var e;null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})})()}),[i,e]);const s=e=>{const t=e.toLowerCase();return t.includes("project")||t.includes("work")?"Eric has worked on several impressive projects including SafeWayAI (an AI-powered emergency detection platform), Smart Loan Approval Predictor, Eduwize (an AI learning platform), and more. You can check them out in the Projects section!":t.includes("skill")||t.includes("technology")?"Eric is skilled in Python, JavaScript, React, TensorFlow, Django, Flask, Azure, and more. He specializes in AI/ML development and has experience with mobile app development using Kivy.":t.includes("contact")||t.includes("hire")||t.includes("email")?"You can contact Eric through the Contact form on this website, or connect with him on LinkedIn at linkedin.com/in/bhekumusaerickelvinntshwenya/":t.includes("education")||t.includes("background")?"Eric is a software developer with expertise in AI, mobile applications, and web development. He's currently studying at WeThinkCode and continuously learning about AI, machine learning, and cloud technologies.":t.includes("hello")||t.includes("hi")||t.includes("hey")?"Hello! I'm Eric's AI assistant. What would you like to know about Eric's skills, projects, or experience?":"I'm not sure I understand. Would you like to know about Eric's projects, skills, education, or how to contact him?"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(fr,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>t(!e),children:e?Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(h.jsx)("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),Object(h.jsx)(l.a,{children:e&&Object(h.jsxs)(yr,{initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.9},transition:{duration:.2},children:[Object(h.jsxs)(wr,{children:[Object(h.jsx)(Or,{children:"Eric's AI Assistant"}),Object(h.jsx)(kr,{children:"Ask me anything about Eric!"})]}),Object(h.jsxs)(Ar,{children:[i.map((e=>Object(h.jsx)(Cr,{sender:e.sender,children:e.text},e.id))),Object(h.jsx)("div",{ref:c})]}),Object(h.jsxs)(Sr,{onSubmit:e=>{if(e.preventDefault(),!o.trim())return;const t={id:i.length+1,text:o,sender:"user"};a([...i,t]),n(""),setTimeout((()=>{const e={id:i.length+2,text:s(o),sender:"bot"};a((t=>[...t,e]))}),500)},children:[Object(h.jsx)(zr,{type:"text",value:o,onChange:e=>n(e.target.value),placeholder:"Type a message..."}),Object(h.jsx)(Mr,{type:"submit",children:Object(h.jsx)("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})]})})]})};i(73);var Br=function(){return Object(h.jsx)(c.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(y,{}),Object(h.jsx)("main",{className:"main-content",children:Object(h.jsx)(l.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",component:Ae}),Object(h.jsx)(s.a,{path:"/about",component:it}),Object(h.jsx)(s.a,{exact:!0,path:"/projects",component:bt}),Object(h.jsx)(s.a,{path:"/projects/:slug",component:Et}),Object(h.jsx)(s.a,{path:"/skills",component:ii}),Object(h.jsx)(s.a,{path:"/certifications",component:Ki}),Object(h.jsx)(s.a,{path:"/achievements",component:vr}),Object(h.jsx)(s.a,{path:"/contact",component:Li})]})})}),Object(h.jsx)(Er,{}),Object(h.jsx)(P,{})]})})};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Br,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.af2a7f21.chunk.js.map