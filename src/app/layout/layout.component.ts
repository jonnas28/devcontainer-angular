import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { navigation } from '../app-navigation';
import { filter, lastValueFrom, map } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sideBarVisible=true;
  navigationList = navigation;

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private themeService:NbThemeService,
    private nbMenuService: NbMenuService,
    private authService:NbAuthService,
    private router:Router
    ){
    
  }
  isDark:boolean=false;
  async ngOnInit(): Promise<void> {

    const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches
    this.isDark = isDark;
    if(isDark){
      this.themeService.changeTheme('dark');
    }else{
      this.themeService.changeTheme('default')
    }
    
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(async (title) => {
        if(title==='Logout'){
          this.authService.logout('email').subscribe(x=>{
            // console.log(x);
            this.router.navigate([x.getRedirect]).then(x=>{
              window.location.reload();
            })
          })
        }
      });
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
