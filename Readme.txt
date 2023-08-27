Create a Backend project:

B1: npm install -g yarn / yarn init
B2: yarn add express / yarn add nodemon mysql2 cors 
B3: add type in package.json => "type": "module", 
start => "scripts": {
                    "start": "nodemon src/index.js"
                    },
B4: yarn add sequelize