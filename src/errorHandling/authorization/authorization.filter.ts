import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  public catch(
    exception: UnauthorizedException,
    host: ArgumentsHost,
  ): Response {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    return response
      .status(401)
      .json({ statusCode: 401, message: exception.message });
  }
}
