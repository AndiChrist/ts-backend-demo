# ts-backend-demo
Demo for DB interaction by TypeScript

# start MySQL DB
```zsh
 brew services start mysql
```

# stop MySQL DB
```zsh
 brew services stop mysql
```

# DB initialization
```mysql
CREATE DATABASE demo;

USE demo;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');
```

# run application
```zsh
 npm run dev
```

# open in browser
http://localhost:3000/users
