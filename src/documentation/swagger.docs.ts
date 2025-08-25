import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const config = new DocumentBuilder().setTitle('vehicle-api').setDescription('API Documentation').addBearerAuth().build();

export function swaggerStart(app: INestApplication) {
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/docs', app, document)
}