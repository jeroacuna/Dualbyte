'use client'
import {useState} from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'
// Para usar fotos reales: pasá `src="/jero.jpg"` y listo.
export default function Avatar({name,role,hue,src}:{name:string;role:string;hue:number;src?:string}){
const [p,setP]=useState({x:0,y:0})
return(<div onMouseMove={e=>{const b=e.currentTarget.getBoundingClientRect();setP({x:(e.clientX-b.left)/b.width-.5,y:(e.clientY-b.top)/b.height-.5})}} onMouseLeave={()=>setP({x:0,y:0})}
className="relative aspect-[4/5] overflow-hidden rounded-3xl" style={{background:`linear-gradient(160deg,hsl(${hue} 45% 92%),hsl(${hue} 30% 78%))`}}>
{src?<Image src={src} alt={`${name}, ${role}`} fill className="object-cover"/>:
<motion.svg role="img" aria-label={`Ilustración de ${name}`} viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" animate={{x:p.x*10,y:p.y*8}} transition={{type:'spring',stiffness:80,damping:15}}>
<path d="M30 250c0-52 30-80 70-80s70 28 70 80z" fill={`hsl(${hue} 30% 18%)`}/><rect x="88" y="140" width="24" height="34" rx="10" fill={`hsl(${hue} 35% 72%)`}/>
<ellipse cx="100" cy="108" rx="34" ry="40" fill={`hsl(${hue} 35% 76%)`}/><path d="M64 104c-4-40 28-52 52-42 20 8 24 26 20 42-10-18-26-24-40-22-14 2-26 8-32 22z" fill={`hsl(${hue} 30% 16%)`}/>
<rect x="76" y="100" width="22" height="16" rx="6" fill="none" stroke={`hsl(${hue} 30% 16%)`} strokeWidth="2.5"/><rect x="104" y="100" width="22" height="16" rx="6" fill="none" stroke={`hsl(${hue} 30% 16%)`} strokeWidth="2.5"/></motion.svg>}
<motion.span aria-hidden animate={{x:p.x*-26,y:p.y*-20}} className="absolute right-4 top-6 rounded-lg bg-card/80 px-2.5 py-1 font-mono text-xs backdrop-blur">{'</>'}</motion.span>
<motion.span aria-hidden animate={{x:p.x*-16,y:p.y*-30}} className="absolute bottom-6 left-4 rounded-lg bg-card/80 px-2.5 py-1 font-mono text-xs backdrop-blur">npm run dev</motion.span></div>)}
