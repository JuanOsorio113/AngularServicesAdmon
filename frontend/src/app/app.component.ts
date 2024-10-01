import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {ChangeDetectionStrategy, Component,signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatExpansionModule,MatCardModule,MatGridListModule, RouterOutlet,MatSidenavModule,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'frontend';
  showFiller = false;
  tiles = ['Pruebas','Pruebas','Pruebas','Pruebas']
  readonly panelOpenState = signal(false);
  SideNav = signal(true);


  ToogleSide(){
    this.SideNav = signal(!this.SideNav())
    
  }


}
