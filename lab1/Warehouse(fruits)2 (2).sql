CREATE TABLE "Fruits_to_departured" (
  "id" integer PRIMARY KEY,
  "weight" float,
  "fruit" integer
);

CREATE TABLE "Categories" (
  "id_categories" integer PRIMARY KEY,
  "type" text,
  "categories" varchar
);

CREATE TABLE "Fruit" (
  "id" integer PRIMARY KEY,
  "country" text,
  "price" integer,
  "categories" varchar
);

CREATE TABLE "Storage" (
  "id" integer PRIMARY KEY,
  "storage" integer,
  "address" text
);

CREATE TABLE "Price" (
  "id" integer PRIMARY KEY,
  "price" integer,
  "fruit" text
);

CREATE TABLE "Departured_info" (
  "id" integer PRIMARY KEY,
  "date_in" date,
  "storage" text,
  "fruits_to_departured" integer
);

ALTER TABLE "Fruit" ADD FOREIGN KEY ("id") REFERENCES "Fruits_to_departured" ("fruit");

ALTER TABLE "Categories" ADD FOREIGN KEY ("id_categories") REFERENCES "Fruit" ("categories");

ALTER TABLE "Price" ADD FOREIGN KEY ("id") REFERENCES "Fruit" ("price");

ALTER TABLE "Storage" ADD FOREIGN KEY ("id") REFERENCES "Departured_info" ("storage");

ALTER TABLE "Fruits_to_departured" ADD FOREIGN KEY ("id") REFERENCES "Departured_info" ("fruits_to_departured");
