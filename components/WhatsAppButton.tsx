'use client'
import {MessageCircle} from 'lucide-react'
import {wa} from '@/lib/site'
// Botón flotante de WhatsApp, visible en todas las páginas.
export default function WhatsAppButton(){
return <a href={wa('Hola DualByte! Quiero consultar por un proyecto.')} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-110 md:bottom-7 md:right-7"><MessageCircle size={26}/></a>}