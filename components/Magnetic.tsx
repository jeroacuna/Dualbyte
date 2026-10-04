'use client'
import {useRef} from 'react'
import {motion,useMotionValue,useSpring} from 'motion/react'
export default function Magnetic({children}:{children:React.ReactNode}){
const r=useRef<HTMLDivElement>(null);const x=useSpring(useMotionValue(0),{stiffness:200,damping:15});const y=useSpring(useMotionValue(0),{stiffness:200,damping:15})
return <motion.div ref={r} className="inline-block" style={{x,y}} onMouseMove={e=>{const b=r.current!.getBoundingClientRect();x.set((e.clientX-b.left-b.width/2)*.25);y.set((e.clientY-b.top-b.height/2)*.25)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
