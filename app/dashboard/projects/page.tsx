import Link from 'next/link'; import { projects } from '@/lib/mock/data';
export default function(){return <div><h1 className='text-2xl font-bold mb-4'>Chantiers</h1>{projects.map(p=><div className='card mb-2' key={p.id}><Link href={`/dashboard/projects/${p.id}`}>{p.name}</Link> - {p.city}</div>)}</div>}
