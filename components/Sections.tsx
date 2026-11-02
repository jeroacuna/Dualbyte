'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AnimatePresence,motion} from 'motion/react'
import {projects,filters,type Project} from '@/data/projects'
import Reveal from './Reveal'
export function Mock({p,big}:{p:Project;big?:boolean}){
if(p.image)return <div className={`relative overflow-hidden rounded-2xl ${big?'aspect-[16/9]':'aspect-[16/10]'}`}><Image src={p.image} alt={`Captura de ${p.name}`} fill sizes={big?'100vw':'(min-width:768px) 50vw,100vw'} quality={90} className="object-cover object-top"/></div>
return(<div role="img" aria-label={`Vista previa de ${p.name} (placeholder, reemplazar con captura real)`} className={`relative overflow-hidden rounded-2xl ${big?'aspect-[16/9]':'aspect-[16/10]'}`} style={{background:`linear-gradient(135deg,hsl(${p.hue} 60% 90%),hsl(${p.hue+40} 50% 80%))`}}>
<div className="absolute inset-[12%] rounded-xl border border-black/10 bg-white/70 p-4 backdrop-blur"><div className="h-2 w-1/3 rounded bg-black/15"/><div className="mt-3 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className="h-12 rounded bg-black/10 md:h-20"/>)}</div></div></div>)}
export default function Portfolio(){
const [f,setF]=useState<string>('ALL')
// ALL muestra solo los destacados; al filtrar por categoría aparecen todos los de esa categoría.
const list=projects.filter(p=>f==='ALL'?p.featured:p.category===f)
return(<section id="projects" className="wrap py-28">
<Reveal><h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-7xl">Cosas que construimos.</h2></Reveal>
<div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos">{filters.map(x=><button key={x} aria-pressed={f===x} onClick={()=>setF(x)} className={`rounded-full border px-4 py-1.5 text-sm transition ${f===x?'border-fg bg-fg text-bg':'border-line text-mut hover:text-fg'}`}>{x}</button>)}</div>
<p className="mt-4 font-mono text-xs text-mut" aria-live="polite">{f==='ALL'?'// destacados · filtrá por categoría para ver más':`// ${list.length} ${list.length===1?'proyecto':'proyectos'} en ${f}`}</p>
<motion.div layout className="mt-8 grid gap-8 md:grid-cols-2"><AnimatePresence mode="popLayout">{list.length===0&&<p key="empty" className="text-mut">Todavía no hay proyectos en esta categoría.</p>}{list.map((p,i)=>
<motion.div layout key={p.slug} initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} transition={{duration:.4}} className={i%3===0&&list.length>2?'md:col-span-2':''}>
<Link href={`/projects/${p.slug}`} className="group block"><div className="hud-h overflow-hidden rounded-2xl"><div className="transition duration-700 group-hover:scale-[1.04]"><Mock p={p} big={i%3===0&&list.length>2}/></div></div>
<div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight md:text-3xl"><span className="mr-3 font-mono text-sm font-normal text-ac">0{i+1}</span>{p.name}</h3><span className="rounded-full border border-line px-3 py-0.5 font-mono text-xs text-mut">{p.category}</span></div>
<p className="mt-1 text-mut">{p.summary}</p></Link></motion.div>)}</AnimatePresence></motion.div></section>)}