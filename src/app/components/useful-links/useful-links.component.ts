import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';

@Component({
  selector: 'app-useful-links',
  standalone: true,
  imports: [MaterialModule, CommonModule, StickyCardComponent],
  templateUrl: './useful-links.component.html',
  styleUrl: './useful-links.component.scss'
})
export class UsefulLinksComponent {
  isCopied: boolean = false;
  HtmlCodeToCopy1: any;
  CSSCodeToCopy1: any;
  TsCodeToCopy1: any;

  constructor(private clipboard: Clipboard) { }

  copyCodeSection1(code_type: any) {
    if (code_type == 'html') {
      this.clipboard.copy(this.HtmlCodeToCopy1.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else if (code_type == 'ts') {
      this.clipboard.copy(this.TsCodeToCopy1.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else if (code_type == 'css') {
      this.clipboard.copy(this.CSSCodeToCopy1.trim());
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);

    } else {

    }

  }
    sections = [
      {
        title: 'Angular Material',
        items: [
          { name: 'All about theming', link: 'https://material.angular.io/guide/theming' },
          { name: 'Typography', link: 'https://material.angular.io/guide/typography' },
          { name: 'Theming your components', link: 'https://material.angular.io/guide/theming-your-components' },
        ]
      },
      {
        title: 'Icon Download',
        items: [
          { name: 'flaticon.com', link: 'https://www.flaticon.com/' },
          { name: 'iconscout.com', link: 'https://iconscout.com/' },
          { name: 'thenounproject.com', link: 'https://thenounproject.com/' },
          { name: 'freeicons.io', link: 'https://freeicons.io/' },
          { name: 'veryicon.com', link: 'https://www.veryicon.com/' },
          { name: 'boxicons.com', link: 'https://boxicons.com/' },
        ]
      },
      {
        title: 'Free Cheatsheets',
        items: [
          { name: 'QuickRef.Me', link: 'https://quickref.me/' },
          { name: 'The odin project', link: 'https://www.theodinproject.com/' },
          { name: 'PrepInsta', link: 'https://prepinsta.com/' },
          { name: 'Codecademy', link: 'https://www.codecademy.com/resources/cheatsheets/all' }
        ]
      },
      {
        title: 'Free SVG/Pattern',
        items: [
          { name: 'haikei', link: 'https://app.haikei.app/' },
          { name: 'Magic Pattern', link: 'https://magicpattern.design' },
          { name: 'iconify.design', link: 'https://iconify.design' },
          { name: 'svg backgrounds', link: 'https://svgbackgrounds.com' },
          { name: 'fffuel.co', link: 'https://fffuel.co' }
        ]
      },
      {
        title: 'Free UI Tools',
        items: [
          { name: 'Animate.css', link: 'https://animate.style/' },
          { name: 'Animista', link: 'https://animista.net/' },
          { name: 'Aceternity UI', link: 'https://ui.aceternity.com/components' },
          { name: 'All Online Tools in “One Box”', link: 'https://10015.io/' },
          { name: 'hype4.academy', link: 'https://hype4.academy/tools' },
          { name: 'uizard.io', link: 'https://uizard.io/' },
          { name: 'futurepedia.io', link: 'https://www.futurepedia.io/' },
          { name: 'toolify.ai', link: 'https://www.toolify.ai/' }
        ]
      },
      {
        title: 'Practice Frontend Skills',
        items: [
          { name: 'JavaScript30', link: 'https://javascript30.com/' },
          { name: 'CSSBattle', link: 'https://cssbattle.dev/' },
          { name: 'Codewars', link: 'https://www.codewars.com/' },
          { name: 'Frontend Mentor', link: 'https://www.frontendmentor.io/' }
        ]
      },
      {
        title: 'Read Free Books',
        items: [
          { name: 'Open Library', link: 'https://openlibrary.org/' },
          { name: 'manybooks.net', link: 'https://manybooks.net/' },
          { name: 'Project Gutenberg', link: 'https://gutenberg.org/' }
        ]
      },
      {
        title: 'Detection Tools',
        items: [
          { name: 'ZeroGPT', link: 'https://www.zerogpt.com/' },
          { name: 'crossplag', link: 'https://crossplag.com/' },
          { name: 'Copyleaks', link: 'https://copyleaks.com/' },
          { name: 'OpenAI', link: 'https://openai.com/' },
          { name: 'GPTZero', link: 'https://gptzero.me/plagiarism-checker' },
          { name: 'Sapling', link: 'https://sapling.ai' },
          { name: 'writer', link: 'https://writer.com' }
        ]
      },
      {
        title: 'YouTube - Animation',
        items: [
          { name: 'Online Tutorials', link: 'https://www.youtube.com/@OnlineTutorialsYT/playlists' },
          { name: 'Coding Artist', link: 'https://www.youtube.com/@CodingArtist' },
          { name: 'Code ka Bhooka', link: 'https://www.youtube.com/@codekabhooka' }
        ]
      }
    ];
  

}
