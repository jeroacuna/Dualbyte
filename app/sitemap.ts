import type {MetadataRoute} from 'next'
import {projects} from '@/data/projects'
import {rubros} from '@/data/rubros'
import {site} from '@/lib/site'
export default function sitemap():MetadataRoute.Sitemap{const d=new Date();return [{url:site.url,lastModified:d,priority:1},...rubros.map(r=>({url:`${site.url}/para/${r.slug}`,lastModified:d,priority:.8})),...projects.map(p=>({url:`${site.url}/projects/${p.slug}`,lastModified:d,priority:.6}))]}