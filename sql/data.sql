create database usagetracker;
create role tracker login password 'tracker123';
grant all privileges on database usagetracker to tracker;