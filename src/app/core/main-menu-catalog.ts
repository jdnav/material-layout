import { MainMenuCategory } from '../shared/nav-menus/main-menu/main-menu.interface';

export const NAV_MAIN_MENU_CATALOG: MainMenuCategory[] = [
    {
        categoryName: 'firstCategory',
        categoryLabel: 'First Category',
        categoryOptions: [
            {
                optionName: 'optionOne',
                optionLabel: 'Option One',
                optionIcon: 'insert_drive_file',
                optionUrl: '/route-one'
            }
        ]
    },
    {
        categoryName: 'secondCategory',
        categoryLabel: 'Second Category',
        categoryOptions: [
            {
                optionName: 'optionTwo',
                optionLabel: 'Option Two',
                optionIcon: 'person_add_disabled',
                optionUrl: '/option-two'
            },
            {
                optionName: 'optionThree',
                optionLabel: 'Option Three',
                optionIcon: 'person_add_disabled',
                optionUrl: '/option-three'
            }
        ]
    },
];
