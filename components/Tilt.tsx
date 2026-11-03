'use client'
import {motion,useMotionValue,useSpring,useTransform} from 'motion/react'
// Inclina apenas el contenido hacia el mouse (solo con mouse, no en pantallas táctiles).
export default function Tilt({children}:{children:React.ReactNode}){
const px=useMotionValue(0),py=useMotionValue(0)
const sx=useSpring(px,{stiffness:150,damping:18}),sy=useSpring(py,{stiffness:150,damping:18})
const ry=useTransform(sx,v=>v*6),rx=useTransform(sy,v=>v*-6)
return <motion.div style={{rotateX:rx,rotateY:ry,transformPerspective:900}} onPointerMove={e=>{if(e.pointerType!=='mouse')return;const b=e.currentTarget.getBoundingClientRect();px.set((e.clientX-b.left)/b.width-.5);py.set((e.clientY-b.top)/b.height-.5)}} onPointerLeave={()=>{px.set(0);py.set(0)}}>{children}</motion.div>}