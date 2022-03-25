# ayo_connect
gate way ayo

git Clone https://github.com/donkuku/ayo_connect/

cd directory/ayo_connect

Update name file .config.env => .env 

Set Parameter in file .env

# run command line

npm i
npm i pm2 -g
pm2 start index.js -name ayo_connect -i 2
pm2 startup
