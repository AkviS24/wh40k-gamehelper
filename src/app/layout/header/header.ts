import { Component } from '@angular/core';
import { NavigationBar } from '../../shared/components/navigation-bar/navigation-bar';

@Component({
  selector: 'app-header',
  imports: [NavigationBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
