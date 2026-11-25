import { Project, Tender } from '@/types';
export const demoOrg={name:'Atlas Travaux & VRD SARL',city:'Casablanca'};
export const tenders:Tender[]=[
{id:'t1',title:'Travaux d’aménagement voirie à Marrakech',buyer:'Commune de Marrakech',city:'Marrakech',category:'VRD',deadline:'2026-06-12',status:'interesting',score:88,text:'DAO voirie, assainissement, bordures...'},
{id:'t2',title:'Construction d’un bloc sanitaire scolaire',buyer:'AREF',city:'Fès',category:'Bâtiment',deadline:'2026-06-05',status:'new',score:74,text:'Bloc sanitaire école primaire...'},
{id:'t3',title:'Réhabilitation réseau assainissement',buyer:'RADEEF',city:'Fès',category:'Assainissement',deadline:'2026-06-22',status:'preparing',score:91,text:'Réhabilitation collecteurs...'},
{id:'t4',title:'Travaux de peinture et étanchéité',buyer:'Province Settat',city:'Settat',category:'Second œuvre',deadline:'2026-06-09',status:'not_relevant',score:42,text:'Peinture intérieure, étanchéité toiture...'}
];
export const projects:Project[]=[{id:'p1',name:'Aménagement voirie quartier industriel',client:'Commune',city:'Marrakech',status:'active'},{id:'p2',name:'Construction dépôt logistique',client:'Privé',city:'Casablanca',status:'planning'},{id:'p3',name:'Réhabilitation école communale',client:'Province',city:'El Jadida',status:'active'}];
export const workers=['Chef chantier','Maçon','Électricien','Plombier','Manœuvre'];
