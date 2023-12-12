import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './test-form.component';

const routes: Routes = [{ path: 'test-form', component: TestFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFormModule {}
