import { bootstrap }    from '@angular/platform-browser-dynamic';
import { JSONP_PROVIDERS } from '@angular/http';
import { FormDocApp } from './app/app.component';

bootstrap(AppComponent, [JSONP_PROVIDERS]).catch(err => console.error(err));
