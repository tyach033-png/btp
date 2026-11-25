import { analyzeTender } from '@/lib/ai/provider';
import { tenders } from '@/lib/mock/data';
export default async function({params}:{params:Promise<{id:string}>}){const {id}=await params; const t=tenders.find(x=>x.id===id)??tenders[0]; const a=analyzeTender({title:t.title,city:t.city,text:t.text}); return <div className='space-y-3'><h1 className='text-2xl font-bold'>Analyse IA</h1><div className='card'><p>{a.summaryFr}</p><p className='mt-2 text-right'>{a.summaryAr}</p><p className='mt-2'>Score: {a.score}/100</p><p>Décision: {a.decision}</p></div></div>}
