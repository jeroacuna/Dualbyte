// Para sumar un proyecto: agregá un objeto acá. Aparece en el portfolio, filtros y /projects/[slug].
export type Category='WEB'|'APPLICATION'|'PWA'|'UI/UX'
export type Project={slug:string;name:string;category:Category;kind:'Cliente'|'Proyecto propio';year:string;summary:string;description:string;tech:string[];image?:string;gallery?:string[];url?:string;github?:string;hue:number}
export const projects:Project[]=[
{slug:'redt',name:'REDT',category:'PWA',kind:'Cliente',year:'2025',summary:'PWA para la gestión de un gimnasio.',description:'REDT es una aplicación web progresiva pensada para el día a día de un gimnasio: se instala en el celular como una app y funciona como herramienta de gestión.',tech:['PWA'],hue:220},
{slug:'padel',name:'Padel Management',category:'APPLICATION',kind:'Proyecto propio',year:'2025',summary:'Gestión de complejos de pádel.',description:'Sistema para administrar complejos de pádel: canchas, reservas, horarios, usuarios e información del complejo en un solo lugar.',tech:[],hue:160},
{slug:'gym',name:'Gym Website',category:'WEB',kind:'Cliente',year:'2025',summary:'Sitio informativo y responsive para un gimnasio.',description:'Web institucional para un gimnasio: diseño propio, servicios, información y contacto, pensada para verse bien en cualquier pantalla.',tech:[],hue:260},
{slug:'cafeteria',name:'Cafetería',category:'UI/UX',kind:'Proyecto propio',year:'2025',summary:'Plantilla web con foco en estética y menú.',description:'Plantilla para cafeterías centrada en la experiencia visual: menú, estética cuidada, responsive y contacto.',tech:[],hue:30}]
export const filters=['ALL','WEB','APPLICATION','PWA','UI/UX'] as const
