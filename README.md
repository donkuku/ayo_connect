# ayo_connect
install node and git

git clone https://github.com/donkuku/ayo_connect.git

cd directory/ayo_connect

Update name file .config.env => .env 

Set Parameter in file .env

# Execute SQL File

connect database mysql

execute sql file in folder /database/ayo_connect.sql

update PROCEDURE in mysql 

delete line 1 "DEFINER=`root`@`%`"

save PROCEDURE

# run command line

npm i

npm i pm2 -g

pm2 start index.js -name ayo_connect -i 2

pm2 startup
