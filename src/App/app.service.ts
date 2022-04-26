import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import{tap, Observable} from 'rxjs'

let serverTime: any;
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getResponseTime(): any{
    return serverTime;
  }
}

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(tap(()=> serverTime = Date.now() - now));
  }
}