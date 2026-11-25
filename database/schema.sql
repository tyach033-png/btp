-- Core schema with organization isolation
create table organizations (id uuid primary key, name text not null);
create table users (id uuid primary key, email text not null unique);
create table organization_members (id uuid primary key, organization_id uuid not null, user_id uuid not null, role text not null);
create table projects (id uuid primary key, organization_id uuid not null, name text not null);
create table tenders (id uuid primary key, organization_id uuid not null, title text not null);
create table tender_analyses (id uuid primary key, organization_id uuid not null, tender_id uuid not null);
create table tender_checklist_items (id uuid primary key, organization_id uuid not null, tender_id uuid not null);
create table tender_documents (id uuid primary key, organization_id uuid not null, tender_id uuid not null);
create table chantier_reports (id uuid primary key, organization_id uuid not null, project_id uuid not null);
create table report_photos (id uuid primary key, organization_id uuid not null, report_id uuid not null);
create table workers (id uuid primary key, organization_id uuid not null, full_name text not null);
create table worker_attendance (id uuid primary key, organization_id uuid not null, worker_id uuid not null);
create table materials (id uuid primary key, organization_id uuid not null, name text not null);
create table equipment (id uuid primary key, organization_id uuid not null, name text not null);
create table generated_documents (id uuid primary key, organization_id uuid not null);
create table generated_pdfs (id uuid primary key, organization_id uuid not null);
create table billing_subscriptions (id uuid primary key, organization_id uuid not null, plan text not null);
create table audit_logs (id uuid primary key, organization_id uuid not null, action text not null, created_at timestamptz default now());
