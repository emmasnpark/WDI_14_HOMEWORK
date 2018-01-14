CREATE DATABASE movie;

CREATE TABLE moviess (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  year VARCHAR(300),
  released VARCHAR(400),
  runtime VARCHAR(300),
  genre VARCHAR(300),
  director VARCHAR(300),
  awards VARCHAR(500),
  plot VARCHAR(800)
);

INSERT INTO dishes (name, img_url) VALUES ('pudding',
  'http://housebeautiful.cdnds.net/15/51/1450289315-image0032.png');
