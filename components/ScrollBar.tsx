'use client'
import {motion,useScroll,useSpring} from 'motion/react'
// Línea fina arriba de todo que se llena a medida que bajás por la página.
export default function ScrollBar(){
const {scrollYProgress}=useScroll();const s=useSpring(scrollYProgress,{stiffness:120,damping:30})
return <motion.div aria-hidden style={{scaleX:s,transformOrigin:'0 50%'}} className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-ac"/>}