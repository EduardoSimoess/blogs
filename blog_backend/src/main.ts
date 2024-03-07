declare const module: any;
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog')
  .setDescription('API test Blog')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('APP', app, document);

  app.enableCors();
  const http_adapter = app.get(HttpAdapterHost);
  /* app.useGlobalFilters(new AllExceptionsFilte(http_adapter)); */
  const port = process.env.PORT || 3000
  await app.listen(port, () => {
    console.log(`Start Api server: http:/localhost:${port}/APP`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
