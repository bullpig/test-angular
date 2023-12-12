import { Component } from '@angular/core';

import { SharedModule } from '@shared';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class TestFormComponent {}
