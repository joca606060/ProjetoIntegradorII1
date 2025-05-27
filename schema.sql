-- Products Table
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Orders Table
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

-- Order Items Table
CREATE TABLE order_items (
    order_item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    price_at_time_of_order DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Sample Products
INSERT INTO products (name, description, price) VALUES
('The Lord of the Rings', 'Epic fantasy novel by J.R.R. Tolkien', 25.99),
('Dark Roast Beans', '1kg bag of premium dark roast coffee beans', 15.50),
('Notebook', 'A5 lined notebook, 200 pages', 7.25);

-- Sample Orders
INSERT INTO orders (customer_name, order_date, total_amount) VALUES
('Alice Wonderland', '2023-10-26', 0.00),
('Bob The Builder', '2023-10-27', 0.00),
('Charlie Brown', '2023-10-28', 0.00);

-- Sample Order Items
-- Order 1: Alice Wonderland
INSERT INTO order_items (order_id, product_id, quantity, price_at_time_of_order) VALUES
(1, 1, 1, 25.99), -- The Lord of the Rings
(1, 2, 2, 15.50); -- Dark Roast Beans (2 bags)

-- Order 2: Bob The Builder
INSERT INTO order_items (order_id, product_id, quantity, price_at_time_of_order) VALUES
(2, 3, 5, 7.25); -- Notebook (5 notebooks)

-- Order 3: Charlie Brown
INSERT INTO order_items (order_id, product_id, quantity, price_at_time_of_order) VALUES
(3, 1, 1, 25.99); -- The Lord of the Rings

-- Update total_amount for orders based on order_items
-- For Order 1 (Alice Wonderland)
UPDATE orders
SET total_amount = (SELECT SUM(price_at_time_of_order * quantity) FROM order_items WHERE order_id = 1)
WHERE order_id = 1;

-- For Order 2 (Bob The Builder)
UPDATE orders
SET total_amount = (SELECT SUM(price_at_time_of_order * quantity) FROM order_items WHERE order_id = 2)
WHERE order_id = 2;

-- For Order 3 (Charlie Brown)
UPDATE orders
SET total_amount = (SELECT SUM(price_at_time_of_order * quantity) FROM order_items WHERE order_id = 3)
WHERE order_id = 3;
