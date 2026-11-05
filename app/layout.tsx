import type {Metadata,Viewport} from 'next'
import {Space_Grotesk,JetBrains_Mono} from 'next/font/google'
import './globals.css'
import Loader from '@/components/Loader'
import Smooth from '@/components/Smooth'
import Backdrop from '@/components/Backdrop'
import ScrollBar from '@/components/ScrollBar'
import Cursor from '@/components/Cursor'
import WhatsAppButton from '@/components/WhatsAppButton'
import {Analytics} from '@vercel/analytics/next'
import Navbar from '@/components/Navbar'
import {Footer} from '@/components/Sections'
import {site} from '@/lib/site'

const sans=Space_Grotesk({subsets:['latin'],variable:'--f-sans',display:'swap'})
const mono=JetBrains_Mono({subsets:['latin'],variable:'--f-mono',display:'swap'})
const desc='DualByte es un estudio de desarrollo web y software en Paraná, Entre Ríos. Diseñamos y programamos sitios web, aplicaciones web, PWAs y software a medida.'
export const metadata:Metadata={
metadataBase:new URL(site.url),
title:{default:'DualByte — Estudio de desarrollo web y software en Paraná',template:'%s · DualByte'},
description:desc,
keywords:['DualByte','Dual Byte','desarrollo web','desarrollo de software','diseño web','páginas web','aplicaciones web','PWA','software a medida','Paraná','Entre Ríos','Argentina'],
authors:[{name:'Jerónimo'},{name:'Bautista'}],
alternates:{canonical:'/'},
robots:{index:true,follow:true},
openGraph:{title:'DualByte — Estudio de desarrollo web y software',description:desc,url:'/',siteName:'DualByte',locale:'es_AR',type:'website',images:[{url:'/logo/og.png',width:1200,height:630,alt:'DualByte — Estudio de desarrollo web y software'}]},
twitter:{card:'summary_large_image',title:'DualByte — Estudio de desarrollo web y software',description:desc,images:['/logo/og.png']},
icons:{icon:[{url:'/logo/favicon.ico',sizes:'any'},{url:'/logo/icon.png',type:'image/png',sizes:'512x512'}],apple:'/logo/apple-icon.png'},
// verification:{google:'PEGAR_ACA_EL_CODIGO_DE_SEARCH_CONSOLE'},
}
export const viewport:Viewport={themeColor:'#2b3161'}
const logo=`${site.url}/logo/logo-512.png`
const jsonLd={'@context':'https://schema.org','@type':'Organization',name:'DualByte',url:site.url,logo,image:logo,description:desc,email:site.emails[0],areaServed:'AR',
founder:site.team.map(t=>({'@type':'Person',name:t.name,sameAs:t.github})),sameAs:site.team.map(t=>t.github)}
const themeScript=`try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="es-AR" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head>
<body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><Loader/><Smooth/><Backdrop/><ScrollBar/><Cursor/><Navbar/><main>{children}</main><Footer/><WhatsAppButton/><Analytics/></body></html>)}