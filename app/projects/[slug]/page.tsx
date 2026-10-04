import {notFound} from 'next/navigation'
import Link from 'next/link'
import type {Metadata} from 'next'
import {projects} from '@/data/projects'
import {Mock} from '@/components/Portfolio'
export const dynamicParams=false
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
type P={params:Promise<{slug:string}>}
export async function generateMetadata({params}:P):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return {title:p?.name,description:p?.summary}}
export default async function Page({params}:P){
const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound()
const i=projects.indexOf(p);const next=projects[(i+1)%projects.length]
return(<article className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-8">
<Link href="/#projects" className="text-sm text-mut hover:text-fg">← Volver a proyectos</Link>
<h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-8xl">{p.name}</h1>
<p className="mt-4 max-w-xl text-lg text-mut">{p.summary}</p>
<div className="mt-10"><Mock p={p} big/></div>
<dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-4 text-sm">
<div><dt className="text-mut">Categoría</dt><dd>{p.category}</dd></div><div><dt className="text-mut">Tipo</dt><dd>{p.kind}</dd></div>
<div><dt className="text-mut">Año</dt><dd>{p.year}</dd></div>{p.tech.length>0&&<div><dt className="text-mut">Tecnologías</dt><dd>{p.tech.join(', ')}</dd></div>}</dl>
<p className="mt-10 max-w-2xl text-xl leading-relaxed">{p.description}</p>
<div className="mt-8 flex gap-3">{p.url&&<a className="rounded-full bg-fg px-5 py-2.5 text-bg" href={p.url}>Ver sitio</a>}{p.github&&<a className="rounded-full border border-line px-5 py-2.5" href={p.github}>GitHub</a>}</div>
<Link href={`/projects/${next.slug}`} className="mt-20 block border-t border-line pt-8 text-3xl font-semibold hover:text-ac md:text-5xl">Siguiente: {next.name} →</Link></article>)}
