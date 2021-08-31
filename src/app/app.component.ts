import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDataService } from './_services/user-data.service';
import { UserProfile } from './common/model/user-profile';
import { ProductsDemosService } from './_services/products-demos.service';
import { ProjectDemo } from './common/model/project-demo';
import { UserProfileVO } from './common/model/user-profile-vo';
// import "@patternfly/pfe-card";
// import "@patternfly/pfe-cta";
//import "@patternfly/pfe-accordion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("accordion") accordion!: ElementRef;

  user = new UserProfileVO;
  productDemos = Array<ProjectDemo>();

  constructor(private userDataService: UserDataService, private productsDemosService: ProductsDemosService) { }

  // ngAfterViewInit() {
  //   this.accordion.nativeElement.toggle(0);
  // }

  ngOnInit(): void {
    this.userDataService.getUser()
      .subscribe((userData: UserProfile) => {
        this.user = userData;
      });

    this.productsDemosService.getProductDemos()
      .subscribe((demos: ProjectDemo[]) => {
        this.productDemos = demos;
      });
  }
}
