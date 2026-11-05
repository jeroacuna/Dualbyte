const whatsappNumber='5493436958831' // 54 + 9 + código de área + número, sin el 15

export const site={
name:'DualByte',
url:'https://dualbyte.com.ar', // cambiar por el dominio real cuando lo tengan
emails:['dualbytedev@gmail.com'],
whatsapp:`https://wa.me/${whatsappNumber}`,
team:[
{name:'Jerónimo',github:'https://github.com/jeroacuna'},
{name:'Bautista',github:'https://github.com/bellodii'}],
}

// Arma un link de WhatsApp con el mensaje ya escrito.
export const wa=(text:string)=>`${site.whatsapp}?text=${encodeURIComponent(text)}`