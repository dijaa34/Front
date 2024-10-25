import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'sideBar.title',
      separator: true,
      items: [
        {
          icon: 'fa fa-home',
          label: 'sideBar.first_link',
          route: '/home/page1',
        },
        {
          icon: 'fa fa-th-large',
          label: 'sideBar.second_link',
          route: '/home/page2',
        },
        {
          icon: 'fas fa-user-cog',
          label: 'sideBar.third_link',
          route: '/home/page3',
        },
        {
          icon: 'fas fa-project-diagram',
          label: 'sideBar.fourth_link',
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
          label: 'sideBar.settings',
          route: '/settings',
        },
      ],
    },
  ];
}
