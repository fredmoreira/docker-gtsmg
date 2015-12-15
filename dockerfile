FROM readytalk/nodejs

COPY start.sh /

RUN git clone https://github.com/fredmoreira/docker-gtsmg.git && \
	cd docker-gtsmg && \
	npm install

ENTRYPOINT ./start.sh
