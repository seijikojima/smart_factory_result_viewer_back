FROM node:10

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションのソースをバンドルする
COPY . .

# Install packages
RUN npm install

EXPOSE 12345
CMD [ "node", "server.js" ]
