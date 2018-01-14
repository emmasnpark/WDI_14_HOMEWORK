CREATE DATABASE movie;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  poster VARCHAR(800),
  year VARCHAR(300),
  released VARCHAR(400),
  runtime VARCHAR(300),
  genre VARCHAR(300),
  director VARCHAR(300),
  awards VARCHAR(500),
  plot VARCHAR(800)
);

INSERT INTO movies (plot) VALUES ('can''t');
