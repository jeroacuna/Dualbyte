'use client'
import {useRef,useState} from 'react'
import {motion,useScroll,useTransform} from 'motion/react'
import {Globe,AppWindow,Smartphone,PenTool,Cpu,Sparkles,Github,Mail,MessageCircle} from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import {sendLead} from '@/lib/send'
import {site} from '@/lib/site'
const wrap='wrap'
const h2='text-4xl font-semibold tracking-tight md:text-6xl'
export function About(){return(<section id="about" className={`${wrap} py-28`}><div className="grid gap-12 md:grid-cols-2">
<Reveal><h2 className={h2}>Dos programadores. Una cantidad innecesaria de ideas.</h2></Reveal>
<Reveal d={.1}><div className="space-y-5 text-lg text-mut"><p>DualByte nació de una coincidencia simple: dos personas a las que les gusta lo mismo, convertir una idea en algo que funciona.</p>
<p>Tenemos proyectos para clientes, proyectos propios y otros que empezaron porque queríamos ver hasta dónde podíamos llegar.</p>
<p>Trabajamos con pocas manos y mucho cuidado: charlamos la idea, la diseñamos, la construimos y la pulimos hasta que los detalles estén bien. Nos atraen los desafíos y las tecnologías nuevas, y cada proyecto nos deja algo para el siguiente.</p></div></Reveal></div></section>)}
export function Demo(){return(<section id="demo" className="border-y border-line py-28"><div className={wrap}>
<Reveal><h2 className={h2}>Primero la demo.<br/><span className="text-mut">Después decidís.</span></h2></Reveal>
<div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">{[['Hablamos','Nos contás qué hace tu negocio y qué necesitás que haga tu web.'],['Armamos una demo','Con tu nombre, tus colores y tu contenido, para que veas cómo quedaría.'],['Decidís con algo en la mano','Si te convence, la terminamos y la publicamos.']].map(([t,d],i)=>
<Reveal key={t} d={i*.1} className="bg-bg p-7"><p className="font-mono text-sm text-ac">0{i+1}</p><h3 className="mt-6 text-xl font-semibold">{t}</h3><p className="mt-2 text-mut">{d}</p></Reveal>)}</div></div></section>)}
const services=[[Globe,'Web development','Sitios rápidos, claros y hechos a medida.'],[AppWindow,'Web apps','Herramientas web para gestionar tu negocio.'],[Smartphone,'PWAs','Apps que se instalan desde el navegador.'],[PenTool,'UI/UX','Interfaces pensadas desde quien las usa.'],[Cpu,'Custom software','Software a medida para problemas concretos.'],[Sparkles,'Digital experiences','Interacciones y detalles que se recuerdan.']] as const
export function Services(){return(<section id="services" className={`${wrap} py-28`}><Reveal><h2 className={h2}>Qué hacemos.</h2></Reveal>
<div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">{services.map(([I,t,d])=>
<div key={t} className="group bg-bg p-7 transition hover:bg-card"><I className="text-ac transition group-hover:-translate-y-1" size={26}/><h3 className="mt-8 text-xl font-semibold">{t}</h3><p className="mt-2 text-mut">{d}</p></div>)}</div></section>)}
const steps=[['Discover','Entendemos la idea.'],['Design','Pensamos la experiencia.'],['Build','La convertimos en producto.'],['Refine','Probamos, mejoramos y pulimos.'],['Launch','La llevamos al mundo.']]
export function Approach(){
const r=useRef(null);const {scrollYProgress}=useScroll({target:r,offset:['start 70%','end 60%']})
return(<section id="approach" className="border-t border-line py-28"><div className={wrap}><Reveal><h2 className={h2}>Cómo trabajamos.</h2></Reveal>
<div ref={r} className="relative mt-14 pl-8 md:pl-12"><div className="absolute bottom-0 left-0 top-0 w-px bg-line"><motion.div style={{scaleY:scrollYProgress,transformOrigin:'top'}} className="h-full w-px bg-ac"/></div>
{steps.map(([t,d],i)=><Reveal key={t} className="pb-14 last:pb-0"><p className="font-mono text-sm text-mut">0{i+1}</p><h3 className="text-4xl font-semibold tracking-tight md:text-6xl">{t}</h3><p className="mt-2 text-lg text-mut">{d}</p></Reveal>)}</div></div></section>)}
export function Challenges(){
const r=useRef(null);const {scrollYProgress}=useScroll({target:r,offset:['start end','end start']})
const x=useTransform(scrollYProgress,[0,1],['10%','-30%']);const n=useTransform(scrollYProgress,[0,.6],[0,100])
const [v,setV]=useState(0);n.on('change',l=>setV(Math.round(l)))
return(<section ref={r} className="dark-sec relative overflow-hidden py-28 md:py-40"><div className="grid-bg absolute inset-0" aria-hidden/><div className="glow absolute inset-0" aria-hidden/><div className={`${wrap} relative`}>
<p className="text-[15vw] font-semibold leading-[.95] tracking-tighter md:hidden" aria-hidden>We like<br/>hard<br/>problems.</p>
<motion.p style={{x}} className="hidden whitespace-nowrap text-[clamp(4rem,16vw,14rem)] font-semibold leading-none tracking-tighter md:block" aria-hidden>We like hard problems.</motion.p>
<h2 className="sr-only">We like hard problems.</h2>
<div className="mt-16 grid gap-10 md:grid-cols-2"><div className="space-y-4 text-xl"><p>No buscamos solo proyectos fáciles de entregar.</p><p className="text-mut">Nos tira lo que todavía no sabemos resolver: ahí es donde aprendemos algo que no estaba en el plan.</p></div>
<p className="font-mono text-7xl text-ac md:text-8xl" aria-hidden>{v}%<span className="block text-base text-mut">curiosidad</span></p></div></div></section>)}
export function Why(){return(<section className={`${wrap} py-28`}><Reveal><h2 className={h2}>Por qué DualByte.</h2></Reveal>
<div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">{[['Comunicación directa','Hablás con quienes escriben el código, sin intermediarios.'],['Atención al detalle','Espaciados, tiempos, estados vacíos: lo chico también cuenta.'],['Soluciones a medida','Partimos de tu caso, no de una plantilla.'],['Mentalidad de producto','Pensamos en quién lo usa y para qué.'],['Aprendizaje constante','Si el proyecto lo pide, lo aprendemos.'],['Compromiso','Tu proyecto es uno de pocos: le dedicamos atención real.']].map(([t,d],i)=>
<Reveal key={t} d={(i%2)*.1}><div className="border-t border-line pt-5"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 text-mut">{d}</p></div></Reveal>)}</div></section>)}
export function FinalCta(){return(<section className="dark-sec relative overflow-hidden py-32 text-center"><div className="grid-bg absolute inset-0" aria-hidden/><div className="glow absolute inset-0" aria-hidden/><div className={`${wrap} relative`}><Reveal><h2 className="text-[clamp(2.8rem,9vw,8rem)] font-semibold leading-none tracking-tighter">¿Qué podemos construir juntos?</h2>
<p className="mx-auto mt-6 max-w-md text-lg text-mut">Contanos tu idea. Te respondemos nosotros, no un formulario.</p>
<div className="mt-10 flex flex-wrap justify-center gap-3"><Magnetic><a href="#contact" className="block rounded-full bg-fg px-7 py-3.5 text-bg">Start a project</a></Magnetic><Magnetic><a href={`mailto:${site.emails.join(',')}`} className="block rounded-full border border-line px-7 py-3.5">Contact us</a></Magnetic></div></Reveal></div></section>)}
const inp='w-full rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-ac'
export function Contact(){
const [st,setSt]=useState<'idle'|'sending'|'ok'>('idle')
async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const f=e.currentTarget;const d=Object.fromEntries(new FormData(f)) as Record<string,string>
setSt('sending');await sendLead({name:d.name,email:d.email,company:d.company,type:d.type,budget:d.budget,message:d.message});setSt('ok');f.reset()}
return(<section id="contact" className={`${wrap} grid gap-12 py-28 md:grid-cols-[1fr_1.2fr]`}><div><h2 className={h2}>Hablemos.</h2><p className="mt-4 text-lg text-mut">Contanos qué querés construir.</p>
<ul className="mt-8 space-y-3">{[...site.emails.map(e=>[Mail,e,`mailto:${e}`]),...site.team.map(t=>[Github,`GitHub · ${t.name}`,t.github]),...(site.whatsapp?[[MessageCircle,'WhatsApp',site.whatsapp]]:[])].map(([I,l,h])=>{const Ic=I as typeof Mail;return <li key={l as string}><a href={h as string} className="flex items-center gap-3 hover:text-ac"><Ic size={18}/>{l as string}</a></li>})}</ul></div>
<form onSubmit={submit} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm">Nombre<input required name="name" className={inp}/></label><label className="block text-sm">Email<input required type="email" name="email" className={inp}/></label></div>
<label className="block text-sm">Empresa (opcional)<input name="company" className={inp}/></label>
<div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm">Tipo de proyecto<select name="type" className={inp}>{['Sitio web','Web app','PWA','UI/UX','Otro'].map(o=><option key={o}>{o}</option>)}</select></label>
<label className="block text-sm">Presupuesto aproximado (opcional)<input name="budget" className={inp}/></label></div>
<label className="block text-sm">Mensaje<textarea required name="message" rows={5} className={inp}/></label>
<button disabled={st==='sending'} className="rounded-full bg-fg px-7 py-3.5 text-bg disabled:opacity-60">{st==='sending'?'Enviando…':'Start a project'}</button>
<p role="status" className={`text-sm ${st==='ok'?'text-ac':'text-mut'}`}>{st==='ok'?'Listo: se abrió WhatsApp con tu mensaje. Tocá enviar para que nos llegue.':'Al enviar, se abre WhatsApp con tu mensaje listo.'}</p></form></section>)}
export function Footer(){return(<footer className="border-t border-line py-8 text-sm text-mut"><div className={`${wrap} flex flex-wrap justify-between gap-2`}><span>© {new Date().getFullYear()} DualByte</span><span>Hecho por Jerónimo y Bautista</span></div></footer>)}