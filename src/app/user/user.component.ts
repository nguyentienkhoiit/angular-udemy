import { Component, computed, Input, output } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;

  select = output<string>();

  imagePath = computed(() => `assets/users/${this.user.avatar}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
