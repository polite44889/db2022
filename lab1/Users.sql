CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL ON DATABASE "lab1" TO admin;
CREATE USER consumer WITH PASSWORD 'consumer'
GRANT connect ON DATABASE "lab1" TO consumer;
