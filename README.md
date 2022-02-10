# Implementación del patrón Saga con Nodejs Microservices

![diagrama](https://user-images.githubusercontent.com/20560926/153483237-6771742b-9a01-4a66-9a8c-2c4c056c54d6.png)

## Requisitos

 - [Kafka](https://kafka.apache.org/downloads)
 - [Nodejs](https://nodejs.org/en/download/)
 - [mongoDB](https://www.mongodb.com/try/download/community)


## Instalación

### Instalar y ejecutar MongoDB

Descargar e instalar [mongoDB](https://www.mongodb.com/try/download/community).
Una vez terminado ejecutar MondoDB.

Con esto estará lista la base de datos donde se guardaran los procesos.

### Instalar y ejecutar Kafka

Descargar desde la página de [Kafka](https://kafka.apache.org/downloads).

Descomprimir en la ruta que prefieras.

Abrir una ventana de la consola, ir a la ruta donde esta la carpeta kafka y ejecutar:
```
/bin/zookeeper-server-start.sh /config/zookeeper.properties
```
Abrir otra ventana de consola y ejecutar:
```
/bin/kafka-server-start.sh /config/server.properties
```

Con esto tendremos listo el sistema de mensajería que permite publicar, almacenar y procesar flujos de datos en tiempo real, con el objetivo de comunicar los diferentes servicios.


### Instalación y ejecución de los servicios

Abrir un terminal para cada servicio: kafkaBroker, orchestatorService, orderService, paymentService, stockService.

#### Kafka Broker
Iniciamos por el servicio de kafkaBroker, el cual creara los distintos canales o tópicos para realizar las comunicaciones entre servicios, también tiene la integración de kafka con nodeJs para producir y consumir los mensajes.

```
cd kafkaBroker
```

```
 node kafkaBootstrap.js
```

#### Orchestator Service

```
cd orchestatorService && npm install && npm run dev
```

#### orderService Service

```
cd orderService && npm install && npm run dev
```

#### paymentService Service

```
cd paymentService && npm install && npm run dev
```

#### stockService Service
cd stockService && npm install && npm run dev

Ya estarían todos los proyectos iniciados a la espera de un llamado.

### Ejecutar petición Post
Ahora ejecutar esta solicitud post para iniciar el flujo de peticiones y llamadas entre los diferentes servicios.

```
curl --location --request POST 'http://127.0.0.1:3000/createorder' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "order-01",
    "itemCount": "200",
    "amount":"200"
}'
```


En las diferentes terminales se vera cuando se produce y se consume los mensajes.

MongoDB, Kafka y servicios en ejecución:
![image](https://user-images.githubusercontent.com/20560926/153474860-2645ccdc-7b9a-48c9-a8ba-a2466c919204.png)

Petición post enviada y los mensajes publicados entre los distintos servisios:
![image](https://user-images.githubusercontent.com/20560926/153474906-2137f4f2-e486-4c1b-a478-40e464f63181.png)

