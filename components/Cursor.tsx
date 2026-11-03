'use client'
import {useEffect,useState} from 'react'
import {motion,useMotionValue,useSpring} from 'motion/react'
// Anillo que sigue al mouse (solo con mouse). Crece sobre links, botones y campos.
export default function Cursor(){
const x=useMotionValue(-100),y=useMotionValue(-100)
const sx=useSpring(x,{stiffness:260,damping:26,mass:.4}),sy=useSpring(y,{stiffness:260,damping:26,mass:.4})
const [on,setOn]=useState(false);const [big,setBig]=useState(false)
useEffect(()=>{
if(!matchMedia('(hover: hover) and (pointer: fine)').matches)return
setOn(true)
const mv=(e:PointerEvent)=>{x.set(e.clientX);y.set(e.clientY);setBig(!!(e.target as Element)?.closest?.('a,button,input,select,textarea,label,[role=button]'))}
addEventListener('pointermove',mv,{passive:true})
return()=>removeEventListener('pointermove',mv)},[x,y])
if(!on)return null
return <motion.div aria-hidden style={{x:sx,y:sy}} className="pointer-events-none fixed left-0 top-0 z-[90]"><motion.div animate={{scale:big?1.8:1,opacity:big?.9:.6}} transition={{type:'spring',stiffness:300,damping:22}} className="-ml-4 -mt-4 h-8 w-8 rounded-full border border-ac" style={{background:big?'color-mix(in srgb,var(--ac) 12%,transparent)':'transparent'}}/></motion.div>}