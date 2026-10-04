// Punto único para conectar un backend (Resend, Formspree, API propia).
export type Lead={name:string;email:string;company?:string;type:string;budget?:string;message:string}
export async function sendLead(data:Lead){ await new Promise(r=>setTimeout(r,700)); console.log('lead',data); return {ok:true} }
