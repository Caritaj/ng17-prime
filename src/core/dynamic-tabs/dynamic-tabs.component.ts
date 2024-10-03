import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Tab {
  label: string;
  route: string;
  icon: string;
}
@Component({
  selector: 'app-dynamic-tabs',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './dynamic-tabs.component.html',
  styleUrl: './dynamic-tabs.component.scss'
})
export class DynamicTabsComponent {

  @Input() tabs: Tab[] = [];
  @Input() selectedIndex: number = 0;
  @Input() fixedTabIndex: number | null = null;

  @Output() tabClose = new EventEmitter<number>();
  @Output() selectedIndexChange = new EventEmitter<number>();

  closeTab(event: MouseEvent, index: number) {
    event.stopPropagation();
    this.tabClose.emit(index);
  }

  onTabChange(event: number) {
    this.selectedIndex = event;
    this.selectedIndexChange.emit(this.selectedIndex);
  }
}
