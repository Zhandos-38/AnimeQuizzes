drop table if exists entries;
create table entries (
  id integer primary key,
  name text not null,
  score integer not null,
  anime text not null
);