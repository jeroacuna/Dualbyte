'use client'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import {AnimatePresence,motion} from 'motion/react'
import {Menu,X,Sun,Moon,Monitor} from 'lucide-react'
const links=[['Home','/'],['About','/#about'],['Projects','/#projects'],['Services','/#services'],['Contact','/#contact']]
function Theme(){
const [t,setT]=useState('system')
useEffect(()=>setT(localStorage.getItem('theme')||'system'),[])
const set=(v:string)=>{setT(v);localStorage.setItem('theme',v);document.documentElement.classList.toggle('dark',v==='dark'||(v==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))}
const o=[['light',Sun,'Claro'],['dark',Moon,'Oscuro'],['system',Monitor,'Sistema']] as const
return <div role="group" aria-label="Tema" className="flex rounded-full border border-line p-0.5">{o.map(([v,I,l])=><button key={v} onClick={()=>set(v)} aria-label={l} aria-pressed={t===v} className={`grid h-7 w-7 place-items-center rounded-full ${t===v?'bg-fg text-bg':'text-mut'}`}><I size={14}/></button>)}</div>}
export default function Navbar(){
const [s,setS]=useState(false);const [open,setOpen]=useState(false)
useEffect(()=>{const f=()=>setS(scrollY>24);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
return(<header className={`fixed inset-x-0 top-0 z-50 transition-all ${s?'border-b border-line bg-bg/70 backdrop-blur-xl':''}`}>
<nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
<Link href="/" className="text-lg font-semibold tracking-tight">Dual<span className="text-ac">Byte</span></Link>
<ul className="hidden items-center gap-7 text-sm md:flex">{links.map(([l,h])=><li key={l}><Link href={h} className="text-mut hover:text-fg">{l}</Link></li>)}</ul>
<div className="flex items-center gap-3"><Theme/><Link href="/#contact" className="hidden rounded-full bg-fg px-4 py-2 text-sm text-bg md:block">Let&apos;s talk</Link>
<button className="md:hidden" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></nav>
<AnimatePresence>{open&&<motion.div initial={{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:.5,ease:[.76,0,.24,1]}} className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-bg px-5 pt-8 md:hidden">
{links.map(([l,h],i)=><motion.div key={l} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15+i*.06}}><Link onClick={()=>setOpen(false)} href={h} className="block border-b border-line py-4 text-4xl font-semibold tracking-tight">{l}</Link></motion.div>)}</motion.div>}</AnimatePresence></header>)}
