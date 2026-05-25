const docs=['Attestation fiscale','CNSS','Registre de commerce','ICE','Mémoire technique','Bordereau des prix','Caution provisoire'];
export default function(){return <div><h1 className='text-2xl font-bold mb-4'>Préparation dossier</h1><div className='grid gap-2'>{docs.map(d=><label key={d} className='card flex gap-2'><input type='checkbox'/> {d}</label>)}</div></div>}
