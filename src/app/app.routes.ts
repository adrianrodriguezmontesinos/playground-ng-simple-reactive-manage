import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'mkw-trainers', pathMatch: 'full' },
    { 
        path: 'mkw-trainers', 
        loadComponent: () => import('./pages/gallery/gallery.component').then(c => c.GalleryComponent)
    },
    { path: '**', redirectTo: 'mkw-trainers' }
];
