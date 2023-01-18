CREATE TABLE learner (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    usercode TEXT NOT NULL,
    data_balance INTEGER DEFAULT 500
);

CREATE TABLE application (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    usage_per_minute INTEGER NOT NULL
);

CREATE TABLE learner_application_usage (
    id SERIAL PRIMARY KEY,
    learner_id INTEGER NOT NULL,
    app_id INTEGER NOT NULL,
    minutes_used INTEGER NOT NULL,
    FOREIGN KEY (learner_id) REFERENCES learner(id),
    FOREIGN KEY (app_id) REFERENCES application(id)
);

INSERT INTO application (name, usage_per_minute) VALUES ('YouTube', 8);
INSERT INTO application (name, usage_per_minute) VALUES ('Spotify', 5);
INSERT INTO application (name, usage_per_minute) VALUES ('Zoom', 10);
INSERT INTO application (name, usage_per_minute) VALUES ('Slack', 3);
INSERT INTO application (name, usage_per_minute) VALUES ('Khan Academy', 4);
