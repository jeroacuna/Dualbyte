'use client'
import {useEffect,useRef} from 'react'
// Fondo global: grilla fija + resplandor que sigue al puntero.
// Es luz suave, no movimiento brusco, así que sigue activo aunque el sistema tenga "reducir movimiento".
export default function Backdrop(){
const ref=useRef<HTMLDivElement>(null)
useEffect(()=>{
let raf=0,x=0,y=0
const on=(e:PointerEvent)=>{x=e.clientX;y=e.clientY
if(!raf)raf=requestAnimationFrame(()=>{raf=0;const r=document.documentElement.style;r.setProperty('--mx',`${x}px`);r.setProperty('--my',`${y}px`)})}
addEventListener('pointermove',on,{passive:true})
return()=>{removeEventListener('pointermove',on);cancelAnimationFrame(raf)}},[])
return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10"><div className="grid-bg absolute inset-0"/><div className="glow absolute inset-0"/></div>}