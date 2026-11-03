const items=['Web development','Web apps','PWAs','UI/UX','Custom software','Digital experiences']
// Cinta que se desplaza sola entre el hero y el portfolio (decorativa).
export default function Marquee(){
return(<div aria-hidden className="overflow-hidden border-y border-line py-4"><div className="marquee flex w-max font-mono text-sm text-mut">{[...items,...items,...items,...items].map((t,i)=><span key={i} className="mr-10 flex items-center gap-10">{t}<i className="h-1 w-1 rounded-full bg-ac"/></span>)}</div></div>)}