import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = environment.apiToken;

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        'X-Auth-Token': token,
      },
    });

    return next(cloned);
  }

  return next(req);
};
