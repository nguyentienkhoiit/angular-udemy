import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learn Java Basics',
      summary:
        'Study the fundamentals of Java programming, including syntax, variables, and loops.',
      dueDate: '2024-01-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Python',
      summary:
        'Dive deep into Python for data analysis and machine learning projects.',
      dueDate: '2024-01-05',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Introduction to Databases',
      summary:
        'Learn SQL and database design principles using MySQL and PostgreSQL.',
      dueDate: '2024-01-10',
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Build a Portfolio Website',
      summary:
        'Create a personal website to showcase your projects and resume.',
      dueDate: '2024-01-15',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Explore React Framework',
      summary:
        'Understand the basics of React and build a simple web application.',
      dueDate: '2024-01-20',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
