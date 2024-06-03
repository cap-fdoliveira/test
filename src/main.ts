import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Descrição da API')
    .setVersion('1.0')
    .addTag('API Campanha')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(3000)
}
bootstrap()
