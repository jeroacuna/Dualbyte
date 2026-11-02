import {site} from './site'

export type Lead={name:string;email:string;company?:string;type:string;budget?:string;message:string}

export function whatsappUrl(d:Lead){
const lines=[
'Hola DualByte! Quiero consultar por un proyecto.','',
`Nombre: ${d.name}`,
`Email: ${d.email}`,
d.company?`Empresa: ${d.company}`:false,
`Tipo de proyecto: ${d.type}`,
d.budget?`Presupuesto aprox.: ${d.budget}`:false,'',
`Mensaje: ${d.message}`].filter(l=>l!==false)
return `${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}

// Abre WhatsApp con el mensaje armado. Hay que llamarla directo desde el click/submit.
export async function sendLead(d:Lead){
const url=whatsappUrl(d)
const w=window.open(url,'_blank','noopener,noreferrer')
if(!w)window.location.href=url
return {ok:true}
};