Commands for setup

Run NPM RUN DEV from /server

Run YARN START from /client

Ensure Docker is running

Open up Pixel Device in Android Studio

Press 'a' in client terminal to open in Android Emulator

When running locally, you need to expose your server port with localtunnel:

lt --port 3030 --subdomain questionanswer


npm run dev --prefix server
yarn start --prefix client
lt --port 3030 --subdomain questionanswer

When using the Expo Dev app on device, you need to start the client with --tunnel flag to make it work