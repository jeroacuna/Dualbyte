'use client'
import Link from 'next/link'
import {motion,useMotionValue,useSpring,useTransform} from 'motion/react'
import Magnetic from './Magnetic'
const lines=['Dos mentes.','Un mismo código.']
export default function Hero(){
const mx=useSpring(useMotionValue(0),{stiffness:60,damping:20});const my=useSpring(useMotionValue(0),{stiffness:60,damping:20})
const rx=useTransform(mx,v=>v*-24);const ry=useTransform(my,v=>v*-24)
return(<section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20" onMouseMove={e=>{mx.set(e.clientX/innerWidth-.5);my.set(e.clientY/innerHeight-.5)}}>
<div className="wrap grid w-full items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
<div><h1 className="text-[clamp(2.8rem,9vw,8rem)] font-semibold leading-[.95] tracking-tighter">
{lines.map((l,i)=><span key={l} className="block overflow-hidden pb-2"><motion.span className="block" initial={{y:'110%'}} animate={{y:0}} transition={{delay:1.9+i*.12,duration:.9,ease:[.22,1,.36,1]}}>{l}</motion.span></span>)}</h1>
<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}} className="mt-8 max-w-md text-lg text-mut">Somos Jerónimo y Bautista. Diseñamos y programamos sitios, apps y productos a medida, y trabajás directo con quienes los construyen.</motion.p>
<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.7}} className="mt-10 flex flex-wrap gap-3">
<Magnetic><Link href="#projects" className="block rounded-full bg-fg px-6 py-3 text-bg">Ver proyectos</Link></Magnetic>
<Magnetic><Link href="#contact" className="block rounded-full border border-line px-6 py-3">Hablemos</Link></Magnetic></motion.div></div>
<motion.div style={{x:rx,y:ry}} initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:2.4,duration:.8}} className="hidden lg:block" aria-hidden>
<div className="rounded-2xl border border-line bg-card p-5 font-mono text-sm shadow-xl shadow-black/5">
<div className="mb-4 flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-line"/><i className="h-2.5 w-2.5 rounded-full bg-ac"/></div>
<p><span className="text-ac">const</span> dualbyte = {'{'}</p><p className="pl-4">devs: [<span className="text-ac">&quot;Jerónimo&quot;</span>, <span className="text-ac">&quot;Bautista&quot;</span>],</p>
<p className="pl-4">obsesión: <span className="text-ac">&quot;construir&quot;</span>,</p><p className="pl-4">próximo: <span className="text-ac">&quot;tu idea&quot;</span></p><p>{'}'}</p></div></motion.div></div></section>)}
