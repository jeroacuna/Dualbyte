'use client'
import {motion} from 'motion/react'
export default function Reveal({children,className,d=0}:{children:React.ReactNode;className?:string;d?:number}){
return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.7,delay:d,ease:[.22,1,.36,1]}}>{children}</motion.div>}
