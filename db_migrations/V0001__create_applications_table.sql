CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    parent_name VARCHAR(255) NOT NULL,
    child_name VARCHAR(255) NOT NULL,
    child_age VARCHAR(100) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_applications_created_at ON applications(created_at DESC);