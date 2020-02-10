FROM node:10

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションのソースをバンドルする
COPY . .

# Proxy configuration
RUN npm config set proxy http://172.16.98.151:8118
RUN npm config set https-proxy http://172.16.98.151:8118

# Install packages
RUN npm install

EXPOSE 12345
CMD [ "node", "server.js" ]
