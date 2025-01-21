import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CodeTabDesignComponent } from '../code-tab-design/code-tab-design.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule, StickyCardComponent, CodeTabDesignComponent, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;
  HtmlCodeToCopy2: any;
  CSSCodeToCopy2: any;
  TsCodeToCopy2: any;
  HtmlCodeToCopy3: any;
  CSSCodeToCopy3: any;
  TsCodeToCopy3: any;
  HtmlCodeToCopy4: any;
  CSSCodeToCopy4: any;
  TsCodeToCopy4: any;
  HtmlCodeToCopy5: any;
  CSSCodeToCopy5: any;
  TsCodeToCopy5: any;

  menuItems = [
    { menuName: 'Home', menuPath: '' },
    { menuName: 'About', menuPath: '' },
    { menuName: 'Contact', menuPath: '' },
  ];

  selectedMenu: string = '';

  selectMenu(menuName: string): void {
    this.selectedMenu = menuName;
  }

    constructor(
      private observer: BreakpointObserver,
      private cdr: ChangeDetectorRef,
    ) { }

  @ViewChild('menuDrawer') menuDrawer!: MatSidenav;
  @ViewChild('leftDrawer') leftDrawer!: MatSidenav;
  @ViewChild('rightDrawer') rightDrawer!: MatSidenav;
  @ViewChild('expandableDrawer') expandableDrawer!: MatSidenav;
  @ViewChild('panelDrawer') panelDrawer!: MatSidenav;
  

  ngAfterViewInit() {
    // Ensure that sidenav is defined before observing breakpoints
    if (this.menuDrawer) {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.menuDrawer.mode = 'over';  // Switch mode to 'over'
          this.menuDrawer.close();        // Close the menuDrawer
          this.cdr.detectChanges();
        } else {
          this.menuDrawer.mode = 'side';  // Switch mode to 'side'
          this.menuDrawer.open();         // Open the sidenav
          this.cdr.detectChanges();
        }
      });
    }

    if (this.leftDrawer) {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.leftDrawer.mode = 'over';  // Switch mode to 'over'
          this.leftDrawer.close();        // Close the leftDrawer
          this.cdr.detectChanges();
        } else {
          this.leftDrawer.mode = 'side';  // Switch mode to 'side'
          this.leftDrawer.open();         // Open the sidenav
          this.cdr.detectChanges();
        }
      });
    }

    if (this.rightDrawer) {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.rightDrawer.mode = 'over';  // Switch mode to 'over'
          this.rightDrawer.close();        // Close the sidenav
          this.cdr.detectChanges();
        } else {
          this.rightDrawer.mode = 'side';  // Switch mode to 'side'
          // this.rightDrawer.open();         // Open the sidenav
          // this.cdr.detectChanges();
        }
      });
    }

    if (this.expandableDrawer) {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.expandableDrawer.mode = 'over';  // Switch mode to 'over'
          this.expandableDrawer.close();        // Close the expandableDrawer
          this.cdr.detectChanges();
        } else {
          this.expandableDrawer.mode = 'side';  // Switch mode to 'side'
          this.expandableDrawer.open();         // Open the sidenav
          this.cdr.detectChanges();
        }
      });
    }

    if (this.panelDrawer) {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.panelDrawer.mode = 'over';  // Switch mode to 'over'
          this.panelDrawer.close();        // Close the panelDrawer
          this.cdr.detectChanges();
        } else {
          this.panelDrawer.mode = 'side';  // Switch mode to 'side'
          this.panelDrawer.open();         // Open the sidenav
          this.cdr.detectChanges();
        }
      });
    }
  }

  pickedMode: 'over' | 'push' | 'side' = 'side'; // Default mode
  onModeChange(event:any) {
    this.pickedMode = event.value;
  }

  toggleRightDrawer(drawer: any): void {
    drawer.toggle();
  }

  multipleMenuItems:any[] = [
    {
      menuName: 'Home',
      subMenu: null,
    },
    {
      menuName: 'About',
      subMenu: [
        { menuName: 'Team' },
        { menuName: 'Company' },
        { menuName: 'Careers' },
      ],
    },
    {
      menuName: 'Contact',
      subMenu: [
        { menuName: 'Email' }
      ],
    },
  ];

  multipleMenuItems2:any[] = [
    {
      "menuName": "Dashboard",
      "subMenu": null
    },
    {
      "menuName": "Products",
      "subMenu": [
        {
          "menuName": "Categories",
          "subMenu": [
            { "menuName": "Electronics", "subMenu": null },
            { "menuName": "Furniture", "subMenu": null }
          ]
        },
        {
          "menuName": "Inventory",
          "subMenu": [
            { "menuName": "Stock Levels", "subMenu": null },
            { "menuName": "Suppliers", "subMenu": null }
          ]
        }
      ]
    },
    {
      "menuName": "Orders",
      "subMenu": [
        {
          "menuName": "Order Management",
          "subMenu": [
            { "menuName": "Pending Orders", "subMenu": null },
            { "menuName": "Completed Orders", "subMenu": null }
          ]
        },
        {
          "menuName": "Shipping",
          "subMenu": null
        }
      ]
    },
    {
      "menuName": "Users",
      "subMenu": [
        {
          "menuName": "Profiles",
          "subMenu": [
            { "menuName": "Admins", "subMenu": null },
            { "menuName": "Customers", "subMenu": null }
          ]
        },
        {
          "menuName": "Permissions",
          "subMenu": null
        }
      ]
    },
    {
      "menuName": "Settings",
      "subMenu": [
        {
          "menuName": "Account Settings",
          "subMenu": [
            { "menuName": "Profile", "subMenu": null },
            { "menuName": "Security", "subMenu": null }
          ]
        },
        {
          "menuName": "System Settings",
          "subMenu": null
        }
      ]
    },
    {
      "menuName": "Reports",
      "subMenu": [
        {
          "menuName": "Daily Reports",
          "subMenu": null
        },
        {
          "menuName": "Monthly Reports",
          "subMenu": [
            { "menuName": "Sales", "subMenu": null },
            { "menuName": "Revenue", "subMenu": null }
          ]
        },
        {
          "menuName": "Yearly Reports",
          "subMenu": null
        }
      ]
    },
    {
      "menuName": "Help",
      "subMenu": null
    }
  ];  

  toggleSubMenu(menuItem: any): void {
    // Toggle submenu visibility
    if (menuItem.subMenu) {
      menuItem.expanded = !menuItem.expanded;
    }
  }


}
