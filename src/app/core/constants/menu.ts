import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'sideBar.title',
      separator: true,
      items: [
        {
          icon: 'fa fa-home',
          label: 'sideBar.first_link', // Home
          route: '/home/page1',
        },
        {
          icon: 'fa fa-file-alt', // Text icon
          label: 'sideBar.second_link', // Text Search System
          route: '/home/page2',
        },
        {
          icon: 'fas fa-database', // Database icon for SQL
          label: 'sideBar.third_link', // SQL Search System
          route: '/home/page3',
        },
        {
          icon: 'fa fa-file-excel', // Excel icon
          label: 'sideBar.fourth_link', // Excel Search System
          route: '/home/page4',
        },
      ],
    },
    {
      group: 'sideBar.config',
      separator: false,
      items: [
        {
          icon: 'fa fa-cog',
          label: 'sideBar.settings', // Settings
          route: '/settings',
        },
      ],
    },
  ];
}
