import { Injectable } from '@nestjs/common';

@Injectable()
export class MailappService {
  getHello(): string {
    return 'Hola soy el microservicio mailapp ocupando el puerto: 3001';
  }
}