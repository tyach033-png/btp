import { projects } from '@/lib/mock/data';
export default async function({params}:{params:Promise<{id:string}>}){const {id}=await params; const p=projects.find(x=>x.id===id)??projects[0]; return <div className='space-y-3'><h1 className='text-2xl font-bold'>{p.name}</h1><div className='card'>Vue projet: rapports, photos, ouvriers, matériaux, timeline.</div></div>}
