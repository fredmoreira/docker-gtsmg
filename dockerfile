FROM readytalk/nodejs

COPY start.sh /

RUN git clone https://github.com/fredmoreira/docker-uaitest.git && \
	cd docker-uaitest && \
	npm install

ENTRYPOINT ./start.sh