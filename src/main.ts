import {AppModule} from './container/core/js/app.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule).then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));;
