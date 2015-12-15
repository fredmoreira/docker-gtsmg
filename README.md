# docker-gtsmg

Esta é uma api simples para demonstração da palestra Docker para testers - um passeio fora da caixa

Evento - 2º Encontro - Comunidade de Teste de Software - Belo Horizonte

GTS-MG https://www.facebook.com/groups/581665251916934/

Para rodar o container da api basta usar os comandos:

```docker build -t apigtsmg .```

```docker run -d -p 5000:5000 --name api apigtsmg```

Se preferir usar o docker-compose:

```docker-compose up -d```



