import { Routes } from '@angular/router';
import { MainPage} from './shared/pages/main-page/main-page';
import { Impressum } from './shared/pages/impressum/impressum';
import { Datenschutz } from './shared/pages/datenschutz/datenschutz';

export const routes: Routes = [
    {path: '', component:MainPage},
    {path: '**', redirectTo: ''},
    {path: 'impressum', component:Impressum},
    {path: 'datenschutz', component:Datenschutz},
];
