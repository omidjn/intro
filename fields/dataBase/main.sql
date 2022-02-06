SELECT * FROM customers;
SELECT FirstName, LastName FROM customers;INSERT INTO customers(FirstName, LastName, address, email)
VALUES ('Jason', 'Dsouza', 'McLaren Vale, South Australia', 'test@fakeGmail.com');
CREATE INDEX
CREATE INDEX idx_test
ON users (first_name, surname);
CREATE UNIQUE INDEX
CREATE UNIQUE INDEX idx_test
ON users (first_name, surname);
DROP INDEX
ALTER TABLE users
DROP INDEX idx_test;

