CREATE DATABASE questionanswer;
USE questionanswer;

-- user info, including id, display name, email address
CREATE TABLE user_profile(
    id integer PRIMARY KEY AUTO_INCREMENT,
    display_name VARCHAR(50),
    email_address VARCHAR(50),
    date_of_birth  DATE
);

CREATE TABLE responses(
    response_id integer PRIMARY KEY AUTO_INCREMENT,
    user_id integer,
    text_content VARCHAR(160) NOT NULL,
    created_datetime TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES user_profile(id)
);



INSERT INTO user_profile(id, display_name, email_address, date_of_birth)
VALUES
('1','Nick H', 'nick@humberstone.uk','1995-01-02'),
('2', 'Klaudia S','klaudiasajewicz8@gmail.com', '1995-01-01');

INSERT INTO responses(response_id, user_id, text_content)
VALUES
('1','1','The first response on this app wow'),
('2','2','Ugh, wish I was first response, but Im second');