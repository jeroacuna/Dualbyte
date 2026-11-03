'use client'
import {useEffect,useRef} from 'react'
// Fondo global: grilla + resplandor que sigue al mouse (solo con mouse y sin "reduced motion").
export default function Backdrop(){
const ref=useRef<HTMLDivElement>(null)
useEffect(()=>{
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(pointer: fine)').matches)return
let raf=0,x=0,y=0
const on=(e:MouseEvent)=>{x=e.clientX;y=e.clientY
if(!raf)raf=requestAnimationFrame(()=>{raf=0;ref.current?.style.setProperty('--mx',`${x}px`);ref.current?.style.setProperty('--my',`${y}px`)})}
addEventListener('mousemove',on,{passive:true})
return()=>{removeEventListener('mousemove',on);cancelAnimationFrame(raf)}},[])
return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10"><div className="grid-bg absolute inset-0"/><div className="glow absolute inset-0"/></div>}