import type {MetadataRoute} from 'next'
import {projects} from '@/data/projects'
import {site} from '@/lib/site'
export default function sitemap():MetadataRoute.Sitemap{return [{url:site.url},...projects.map(p=>({url:`${site.url}/projects/${p.slug}`}))]}
