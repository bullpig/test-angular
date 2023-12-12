import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, MatIconModule],
  exports: [MatIconModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class TestFormModule {}
