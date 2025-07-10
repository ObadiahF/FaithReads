import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'edit/:id', component: EditBookComponent },
  { path: 'create', component: CreateBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
