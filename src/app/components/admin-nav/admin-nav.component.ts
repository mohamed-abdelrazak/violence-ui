import { Component } from '@angular/core';
import { AdminComponent } from "../../layouts/admin/admin.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-admin-nav',
  imports: [AdminComponent, FooterComponent],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.scss'
})
export class AdminNavComponent {

}
