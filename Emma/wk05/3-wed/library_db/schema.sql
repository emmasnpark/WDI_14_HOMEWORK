DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  nationality VARCHAR(255),
  birth_year INTEGER
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  publication_date INTEGER,
  author_id INTEGER
);

SELECT * FROM authors;
SELECT name, birth_year FROM authors;
SELECT * FROM authors WHERE birth_year >= 1900;
SELECT * FROM authors WHERE nationality = 'United States of America';
DELETE FROM authors WHERE name = 'Emma';

SELECT * FROM books WHERE publication_date = 1989;
SELECT * FROM books WHERE publication_date < 1989;
SELECT title FROM books;
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
SELECT * FROM books WHERE title LIKE '%the%';
INSERT INTO authors (name, nationality, birth_year) VALUES ('Emma', 'South Korea', 1887);
INSERT INTO books (title, publication_date, author_id) VALUES ('Ruby Basic', '2018', 12);
INSERT INTO books (title, publication_date, author_id) VALUES ('JavaScript Basic', '2018', 12);
UPDATE books SET title = 'Fun Ruby' WHERE title = 'Ruby Basic';
DELETE FROM books WHERE title = 'JavaScript Basic';
DELETE FROM books WHERE title = 'Fun Ruby';
