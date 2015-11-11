# docker-uaitest

Esta é uma api simples para demonstração da palestra Docker para testers - um passeio fora da caixa

Evento UAITest - http://uaitest.com.br/

Para rodar o container da api basta usar os comandos:

```docker build -t apiuaitest .```

```docker run -d -p 5000:5000 --name api apiuaitest```

Se preferir usar o docker-compose:

```docker-compose up -d```



