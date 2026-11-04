import {notFound} from 'next/navigation'
import Link from 'next/link'
import type {Metadata} from 'next'
import {rubros} from '@/data/rubros'
import {projects} from '@/data/projects'
import {Mock} from '@/components/Portfolio'
import {wa} from '@/lib/site'
export const dynamicParams=false
export function generateStaticParams(){return rubros.map(r=>({rubro:r.slug}))}
type P={params:Promise<{rubro:string}>}
export async function generateMetadata({params}:P):Promise<Metadata>{
const {rubro}=await params;const r=rubros.find(x=>x.slug===rubro)
return r?{title:`${r.title} en Paraná`,description:r.intro,alternates:{canonical:`/para/${r.slug}`}}:{}}
export default async function Page({params}:P){
const {rubro}=await params;const r=rubros.find(x=>x.slug===rubro);if(!r)notFound()
const list=projects.filter(p=>r.projects.includes(p.slug))
return(<article className="wrap pb-24 pt-32">
<Link href="/" className="text-sm text-mut hover:text-fg">← Inicio</Link>
<h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">{r.title}</h1>
<p className="mt-5 max-w-2xl text-xl text-mut">{r.intro}</p>
<ul className="mt-10 grid gap-4 md:grid-cols-3">{r.points.map(t=><li key={t} className="rounded-2xl border border-line bg-card/60 p-6 backdrop-blur">{t}</li>)}</ul>
<h2 className="mt-16 text-3xl font-semibold tracking-tight md:text-5xl">Proyectos relacionados</h2>
<div className="mt-8 grid gap-8 md:grid-cols-2">{list.map(p=><Link key={p.slug} href={`/projects/${p.slug}`} className="group block"><Mock p={p}/><h3 className="mt-4 text-2xl font-semibold">{p.name}</h3><p className="text-mut">{p.summary}</p></Link>)}</div>
<div className="mt-16 rounded-3xl border border-line bg-card/60 p-8 backdrop-blur md:p-12"><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Primero la demo. Después decidís.</h2>
<p className="mt-3 max-w-xl text-lg text-mut">Contanos sobre tu negocio y te mostramos cómo podría quedar tu web.</p>
<a href={wa(`Hola DualByte! Quiero pedir una demo. Rubro: ${r.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-full bg-fg px-7 py-3.5 text-bg">Pedir mi demo por WhatsApp</a></div></article>)}