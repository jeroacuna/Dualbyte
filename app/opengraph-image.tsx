import {ImageResponse} from 'next/og'
export const alt='DualByte — Estudio de desarrollo web y software'
export const size={width:1200,height:630}
export const contentType='image/png'
export default function Image(){
return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:72,background:'#101114',color:'#f1f1ed'}}>
<div style={{display:'flex',alignItems:'center',fontSize:36}}><div style={{width:18,height:18,borderRadius:9,background:'#7ea0ff',marginRight:14}}/>DualByte</div>
<div style={{display:'flex',flexDirection:'column',fontSize:96,lineHeight:1,letterSpacing:-3}}><span>Dos mentes.</span><span style={{color:'#7ea0ff'}}>Un mismo código.</span></div>
<div style={{display:'flex',fontSize:30,color:'#9b9ca2'}}>Estudio de desarrollo web y software · Paraná, Entre Ríos</div></div>,size)}