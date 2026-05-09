-- Run this in: Supabase Dashboard → SQL Editor → New query → Run.
-- Creates the `messages` table that the contact form writes to,
-- and locks down access with Row Level Security so only YOU can read.

create table if not exists public.messages (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null check (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  message     text not null check (char_length(message) between 1 and 5000)
);

-- Turn on RLS. Without this, the anon key could read everyone's messages.
alter table public.messages enable row level security;

-- Allow anonymous visitors to INSERT a message (the contact form).
-- Reading, updating and deleting are NOT granted — only the table owner
-- (you, in the Supabase dashboard) can do those.
drop policy if exists "anyone can submit a message" on public.messages;
create policy "anyone can submit a message"
  on public.messages
  for insert
  to anon
  with check (
    char_length(name) between 1 and 120
    and char_length(message) between 1 and 5000
    and email ~* '^[^@]+@[^@]+\.[^@]+$'
  );
