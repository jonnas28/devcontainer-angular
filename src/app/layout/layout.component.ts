import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sideBarVisible=true;
  constructor(
    private sidebarService: NbSidebarService,
    private themeService:NbThemeService
    ){
    
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');
    this.sideBarVisible=!this.sideBarVisible;
  }

  themeChanged(e:any){
    if(e){
      this.themeService.changeTheme('dark')
    }else{
      this.themeService.changeTheme('default')
    }
  }
}
