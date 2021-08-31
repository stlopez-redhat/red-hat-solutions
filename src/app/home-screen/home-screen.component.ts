import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ProductBenefits } from '../common/model/product-benefits';
import { ProductsDemosService } from '../_services/products-demos.service';
import { ProjectDemo } from '../common/model/project-demo';
import { UserProfile } from '../common/model/user-profile';
import { UserDataService } from '../_services/user-data.service';
import { RedhatTechnologies } from '../../app/common/model/redhat-technologies';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  animations: [
    trigger('flyInLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyInRight', [
      state('in', style({ transform: 'translateX(0)' })),
      // transition(':enter', [
      //   style({ height: '0px', 'padding-top': '0', 'padding-bottom': '0'}),  // initial
      //   animate('0.5s',
      //     style({ height: '*', 'padding-top': '*', 'padding-bottom': '*'}))  // final
      // ]),
      // transition(':leave', [
      //   style({ height: '*', 'padding-top': '*', 'padding-bottom': '*', opacity: 1}),  // initial
      //   animate('0.5s',
      //     style({ height: '0px', 'padding-top': '0', 'padding-bottom': '0', opacity: 0}))  // final
      // ])
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({ transform: 'translateX(100%)' }))
      ]),
    ])
  ]
})
export class HomeScreenComponent implements OnInit {
  @ViewChild('panel', { read: ElementRef }) public panel!: ElementRef<any>;
  productBenefits!: ProductBenefits[] | null;
  productDemos!: ProjectDemo[] | null;
  productDemo!: ProjectDemo | null;
  systemUsers!: UserProfile | null;
  selectedUser!: UserProfile | null;
  selectedProject!: ProjectDemo | null;
  users!: UserProfile[] | null;
  redhatTech!: RedhatTechnologies[] | null;
  projectTech = new Array<any>();
  projectCards = new Array<any>();

  constructor(private productsDemosService: ProductsDemosService, private userDataService: UserDataService) { }

  ngOnInit() {
    // user data
    this.userDataService.getSystemUsers()
      .subscribe((userData: UserProfile[]) => {
        this.users = userData;
      });

    // card information
    this.productsDemosService.getProductBenefits()
    .subscribe((benefits: ProductBenefits[]) => {
      this.productBenefits = benefits;
    });

    // all project types
    this.productsDemosService.getProductDemos()
      .subscribe((demos: ProjectDemo[]) => {
        this.productDemos = demos;
      });

    // selected project
    this.productsDemosService.getSelectedDemo()
    .subscribe((projectDemo: ProjectDemo) => {
      this.productDemo = projectDemo;
      // this.setProject();
    });

    this.productsDemosService.getRedHatTechnologies()
      .subscribe((redhatTechnologies: RedhatTechnologies[]) => {
        this.redhatTech = redhatTechnologies;
      });
  }

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollLeft -= 200;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollLeft += 200;
  }

  getProductBenefits() {
    return this.productBenefits;
  }

  getUsers() {
    return this.systemUsers;
  }

  setUser() {
    if (this.selectedUser != null) {
      this.userDataService.setUser(this.selectedUser);
    }
  }

  setProject() {
    this.selectedProject != null ?
      this.productsDemosService.setSelectedDemo(this.selectedProject) :
      null;
    this.filterRedHatTech();
    this.filterCards();
  }

  private filterRedHatTech() {
    this.projectTech = [];
    if(this.selectedProject != null && this.redhatTech != null){
      for (let i = 0; i < this.selectedProject.redhatTechId.length; i++) {
      // this.selectedProject.redhatTechId.forEach(function(value: number) {
        this.projectTech.push(this.redhatTech[this.selectedProject.redhatTechId[i]]);
      }
    }
  }

  private filterCards() {
    this.projectCards = [];
    if (this.selectedProject != null && this.productBenefits != null) {
      for (let i = 0; i < this.selectedProject.productBenefitsId.length; i++) {
        // this.selectedProject.redhatTechId.forEach(function(value: number) {
        this.projectCards.push(this.productBenefits[this.selectedProject.productBenefitsId[i]]);
      }
    }
  }

}
