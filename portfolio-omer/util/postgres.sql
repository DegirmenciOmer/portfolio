-- Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    locale VARCHAR(10),
    img TEXT,
    live_url TEXT,
    demo_url TEXT,
    description_nl TEXT[],
    description_en TEXT[]
);

-- Technologies Table
CREATE TABLE technologies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img TEXT NOT NULL,
    icon VARCHAR(255) -- Optional: name reference for an icon if desired
);

-- Project_Technologies Table (join table)
CREATE TABLE project_technologies (
    project_id INT REFERENCES projects(id) ON DELETE CASCADE,
    technology_id INT REFERENCES technologies(id) ON DELETE CASCADE,
    PRIMARY KEY (project_id, technology_id)
);
