'use client'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AnimatePresence,motion} from 'motion/react'
import {projects,filters,type Project} from '@/data/projects'
import Reveal from './Reveal'
export function Mock({p,big}:{p:Project;big?:boolean}){
if(p.image)return <Image src={p.image} alt={`Imagen principal de ${p.name}`} width={1600} height={1000} className="h-full w-full rounded-2xl object-cover"/>
return(<div role="img" aria-label={`Vista previa de ${p.name} (placeholder, reemplazar con captura real)`} className={`relative overflow-hidden rounded-2xl ${big?'aspect-[16/9]':'aspect-[4/3]'}`} style={{background:`linear-gradient(135deg,hsl(${p.hue} 60% 90%),hsl(${p.hue+40} 50% 80%))`}}>
<div className="absolute inset-[12%] rounded-xl border border-black/10 bg-white/70 p-4 backdrop-blur"><div className="h-2 w-1/3 rounded bg-black/15"/><div className="mt-3 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className="h-12 rounded bg-black/10 md:h-20"/>)}</div></div></div>)}
export default function Portfolio(){
const [f,setF]=useState<string>('ALL');const list=projects.filter(p=>f==='ALL'||p.category===f)
return(<section id="projects" className="mx-auto max-w-6xl px-5 py-28 md:px-8">
<Reveal><h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-7xl">Cosas que construimos.</h2></Reveal>
<div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar proyectos">{filters.map(x=><button key={x} aria-pressed={f===x} onClick={()=>setF(x)} className={`rounded-full border px-4 py-1.5 text-sm transition ${f===x?'border-fg bg-fg text-bg':'border-line text-mut hover:text-fg'}`}>{x}</button>)}</div>
<motion.div layout className="mt-10 grid gap-8 md:grid-cols-2"><AnimatePresence mode="popLayout">{list.map((p,i)=>
<motion.div layout key={p.slug} initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} transition={{duration:.4}} className={i%3===0&&list.length>2?'md:col-span-2':''}>
<Link href={`/projects/${p.slug}`} className="group block"><div className="overflow-hidden rounded-2xl"><div className="transition duration-700 group-hover:scale-[1.04]"><Mock p={p} big={i%3===0&&list.length>2}/></div></div>
<div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.name}</h3><span className="rounded-full border border-line px-3 py-0.5 text-xs text-mut">{p.category}</span></div>
<p className="mt-1 text-mut">{p.summary}</p></Link></motion.div>)}</AnimatePresence></motion.div></section>)}
