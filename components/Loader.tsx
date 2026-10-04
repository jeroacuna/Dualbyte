'use client'
import {useEffect,useState} from 'react'
import {AnimatePresence,motion} from 'motion/react'
export default function Loader(){
const [n,setN]=useState(0);const [done,setDone]=useState(false)
useEffect(()=>{const t=setInterval(()=>setN(v=>{if(v>=100){clearInterval(t);setTimeout(()=>setDone(true),250);return 100}return v+5}),45);return()=>clearInterval(t)},[])
return(<AnimatePresence>{!done&&<motion.div exit={{y:'-100%'}} transition={{duration:.7,ease:[.76,0,.24,1]}} className="dark-sec fixed inset-0 z-[100] flex flex-col items-center justify-center" aria-hidden>
<p className="text-4xl font-semibold tracking-tight md:text-6xl">DualByte</p>
<p className="mt-3 font-mono text-sm text-mut">iniciando {String(n).padStart(3,'0')}%</p>
<div className="mt-6 h-px w-40 bg-line"><div className="h-px bg-ac" style={{width:`${n}%`}}/></div></motion.div>}</AnimatePresence>)}
