'use client'
import {useEffect} from 'react'
import Lenis from 'lenis'
export default function Smooth(){useEffect(()=>{
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
const l=new Lenis({lerp:.1});let r=0;const f=(t:number)=>{l.raf(t);r=requestAnimationFrame(f)};r=requestAnimationFrame(f)
return()=>{cancelAnimationFrame(r);l.destroy()}},[]);return null}
