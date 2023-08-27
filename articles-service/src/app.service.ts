import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkServer(): string {
    return 'Server is running';
  }
}
