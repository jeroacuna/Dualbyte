import Link from 'next/link'
export default function NotFound(){return(<section className="wrap flex min-h-[80svh] flex-col items-start justify-center pt-24">
<p className="font-mono text-sm text-ac">// error 404</p>
<h1 className="mt-4 text-[clamp(3rem,10vw,9rem)] font-semibold leading-none tracking-tighter">Esta página no existe.</h1>
<p className="mt-6 max-w-md text-lg text-mut">Puede que el link esté mal o que la hayamos movido. Volvé al inicio o contanos qué estabas buscando.</p>
<div className="mt-8 flex flex-wrap gap-3"><Link href="/" className="rounded-full bg-fg px-6 py-3 text-bg">Volver al inicio</Link><Link href="/#contact" className="rounded-full border border-line px-6 py-3">Contacto</Link></div></section>)}