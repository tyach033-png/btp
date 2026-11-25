import { NextResponse } from 'next/server';
export async function GET(){const content='BTPilot AI - Rapport PDF mock'; return new NextResponse(content,{headers:{'Content-Type':'application/pdf','Content-Disposition':'attachment; filename=rapport.pdf'}})}
