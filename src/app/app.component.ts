import { ChangeDetectorRef, Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MaterialModule,
    CommonModule,
    RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'component-craft';
  @ViewChild('leftDrawer') leftDrawer!: MatSidenav;
  @ViewChild('rightDrawer') rightDrawer!: MatSidenav;
  menuItems = routes;
  currentTheme: any;
  isSpinning: boolean = false;
  isFlipped: boolean = false;

  // Define an array of themes
  themes = [
    { themeName: 'rose-pink-theme', label: 'Rose Balance', tooltip: 'Soft rose and vibrant red, evoking tenderness and energy.', leftColor: '#ba005c', rightColor: '#ffd9e1' },
    { themeName: 'azure-blue-theme', label: 'Serene Sky', tooltip: 'A calm blend of azure and deep blue, symbolizing serenity and strength.', leftColor: '#005cbb', rightColor: '#d7e3ff' },
    { themeName: 'yellow-olive-theme', label: 'Golden Olive', tooltip: 'A vibrant yellow blending into earthy olive, evoking the warmth of sunlight and natural richness.', leftColor: '#626200', rightColor: '#eaea00' },
    { themeName: 'orange-peach-theme', label: 'Amber Sunset', tooltip: 'A warm gradient of peach and rich amber, inspired by the glow of a serene sunset.', leftColor: '#964900', rightColor: '#ffb787' },
    { themeName: 'magenta-violet-theme', label: 'Violet Dream', tooltip: 'Whimsical magenta and rich violet, representing creativity and mystery.', leftColor: '#ffd7f5', rightColor: '#810081' },
    { themeName: 'brown-peach-theme', label: 'Sunset Spices', tooltip: 'A warm, earthy theme transitioning from peachy tones to rich, earthy brown.', leftColor: '#ffdcc7', rightColor: '#723600' },
    { themeName: 'forest-green-theme', label: 'Forest Glow', tooltip: 'A vibrant green merging with rich forest tones, capturing the essence of natures energy and tranquility.', leftColor: '#02e600', rightColor: '#254e25' },
    { themeName: 'cyan-aqua-theme', label: 'Aqua Depths', tooltip: 'A blend of vibrant cyan and dark teal, evoking a sense of refreshing waters and hidden depths.', leftColor: '#00dddd', rightColor: '#0e3232' },
    
  ];

  constructor(
    private router: Router,
    private observer: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
      const savedTheme = localStorage.getItem('theme') || 'rose-pink-theme';
      this.applyTheme(savedTheme);
  }

  applyTheme(selectedTheme: string) {
    const body = document.body;
    const themes = ['rose-pink-theme', 'azure-blue-theme', 'yellow-olive-theme', 'orange-peach-theme', 'magenta-violet-theme', 'brown-peach-theme', 'forest-green-theme', 'cyan-aqua-theme'];
    themes.forEach(t => this.renderer.removeClass(body, t));
    this.renderer.addClass(body, selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }

  toggleShaktimanSpin(): void {
    this.isSpinning = !this.isSpinning;
  }
  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  ngAfterViewInit() {
    // Ensure that sidenav is defined before observing breakpoints
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
          this.rightDrawer.open();         // Open the sidenav
          this.cdr.detectChanges();
        }
      });
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  capitalizeFirstLetter(path: any): string {
    if (!path) return 'Default';
    return path.charAt(0).toUpperCase() + path.slice(1);
  }


  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
