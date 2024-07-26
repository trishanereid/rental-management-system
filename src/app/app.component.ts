import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HardwareItemManagementComponent } from "./pages/hardware-item-management/hardware-item-management.component";
import { RentalFormComponent } from "./pages/rental-form/rental-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HardwareItemManagementComponent, RentalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system';
}
