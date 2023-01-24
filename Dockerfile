FROM ianwalter/puppeteer:latest
WORKDIR /enklare
ADD . /enklare

RUN npm install

CMD npx wdio run ./wdio.conf.js 