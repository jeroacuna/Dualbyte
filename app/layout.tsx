import type {Metadata} from 'next'
import {Space_Grotesk,JetBrains_Mono} from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import Smooth from '@/components/Smooth'
import Navbar from '@/components/Navbar'
import {Footer} from '@/components/Sections'
import {site} from '@/lib/site'
const sans=Space_Grotesk({subsets:['latin'],variable:'--f-sans',display:'swap'})
const mono=JetBrains_Mono({subsets:['latin'],variable:'--f-mono',display:'swap'})
const desc='Estudio de dos programadores. Diseñamos y construimos sitios web, apps y productos digitales a medida.'
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'DualByte — Estudio de desarrollo de software',template:'%s · DualByte'},description:desc,
openGraph:{title:'DualByte',description:desc,url:site.url,siteName:'DualByte',locale:'es_AR',type:'website'},icons:{icon:'/icon.svg'}}
const themeScript=`try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="es" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head>
<body><Loader/><Smooth/><Navbar/><main>{children}</main><Footer/></body></html>)}
