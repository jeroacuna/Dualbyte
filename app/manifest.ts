import type {MetadataRoute} from 'next'
export default function manifest():MetadataRoute.Manifest{return{
name:'DualByte',short_name:'DualByte',description:'Estudio de desarrollo web y software en Paraná, Entre Ríos.',
start_url:'/',display:'standalone',background_color:'#101114',theme_color:'#2b3161',lang:'es-AR',
icons:[{src:'/logo/logo-192.png',sizes:'192x192',type:'image/png'},{src:'/logo/logo-512.png',sizes:'512x512',type:'image/png'}]}}