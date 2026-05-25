export type TenderStatus='new'|'analyzing'|'interesting'|'not_relevant'|'preparing'|'submitted'|'won'|'lost'|'archived';
export type ProjectStatus='planning'|'active'|'paused'|'completed'|'archived';
export interface Tender{ id:string; title:string; buyer:string; city:string; category:string; deadline:string; status:TenderStatus; score:number; text:string; }
export interface Project{ id:string; name:string; client:string; city:string; status:ProjectStatus; }
