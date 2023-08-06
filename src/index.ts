import { hello } from "@/hello";

function bootstrap() {
  const str = hello();

  // eslint-disable-next-line no-console
  console.log(str);
}

bootstrap();
