import Link from 'next/link';
export default async function(){return <div className='space-y-3'><h1 className='text-2xl font-bold'>Détail rapport</h1><div className='card'>Export PDF disponible en mode mock.</div><Link className='card inline-block' href='/api/reports/r1/pdf'>Générer PDF</Link></div>}
