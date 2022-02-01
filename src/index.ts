import App from './api/app';
import config from './config/default';
import ProductController from './api/controller/product.controller';

const app = new App(
    [
      new ProductController(),
    ],
    config.port,
    config.url
  );
   
  app.listen();