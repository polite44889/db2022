CREATE TABLE "Fruit" (
  "id" integer PRIMARY KEY,
  "weight" float,
  "country" text,
  "storage" integer
);

CREATE TABLE "Categories" (
  "id_categories" integer PRIMARY KEY,
  "type" text,
  "categories" varchar
);

CREATE TABLE "Country" (
  "id" integer PRIMARY KEY,
  "country" text,
  "manufacturer" text,
  "purchase_price" float,
  "categories" varchar
);

CREATE TABLE "Storage" (
  "id" integer PRIMARY KEY,
  "storage" integer,
  "address" text,
  "date_in" date
);

CREATE TABLE "Price" (
  "id" integer PRIMARY KEY,
  "price" integer,
  "fruit" text
);

ALTER TABLE "Storage" ADD FOREIGN KEY ("id") REFERENCES "Fruit" ("storage");

ALTER TABLE "Country" ADD FOREIGN KEY ("id") REFERENCES "Fruit" ("country");

ALTER TABLE "Categories" ADD FOREIGN KEY ("id_categories") REFERENCES "Country" ("categories");

ALTER TABLE "Price" ADD FOREIGN KEY ("id") REFERENCES "Country" ("purchase_price");
