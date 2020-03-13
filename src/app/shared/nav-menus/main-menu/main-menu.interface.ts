export interface MainMenuCategory {
    categoryName: string;
    categoryLabel: string;
    categoryOptions: MainMenuOption[];
}

export interface MainMenuOption {
    optionName: string;
    optionLabel: string;
    optionIcon: string;
    optionUrl: string;
}
