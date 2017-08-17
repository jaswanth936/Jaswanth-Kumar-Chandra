import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [
    {
        path: 'book',
        component: BookComponent
    },
    {
        path: 'add-book',
        component: AddbookComponent,
        outlet: 'bookPopup'
    },
    {
        path: 'update-book/:book-id',
        component: BookUpdateComponent,
        outlet: 'bookPopup'
    },
    {
        path: 'book-detail',
        component: BookDetailComponent,
        outlet: 'bookList'
    },
    {
        path: '',
        redirectTo: '/book',
        pathMatch: 'full'
    }
];
@NgModule({
  imports: [
          RouterModule.forRoot(routes)
  ],
  exports: [
          RouterModule
  ]
})
export class AppRoutingModule {
}
