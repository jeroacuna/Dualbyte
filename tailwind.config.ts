import type {Config} from 'tailwindcss'
export default {darkMode:'class',content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
theme:{extend:{colors:{bg:'var(--bg)',fg:'var(--fg)',mut:'var(--mut)',line:'var(--line)',card:'var(--card)',ac:'var(--ac)'},
fontFamily:{sans:['var(--f-sans)','system-ui','sans-serif'],mono:['var(--f-mono)','monospace']}}},plugins:[]} satisfies Config
