import Category from "../models/Category";

const CATEGORY = [
    new Category(
        '1',
        'History',
        'Questions Related to Sri Lankan History',
        require('../assets/img/category/history-category.jpg'),
    ),
    new Category(
        '2',
        'Technology',
        'Question Related to Technology ',
        require('../assets/img/category/technology-category.jpg'),
    ),
    new Category(
        '3',
        'Agriculture',
        'Questions Related to Sri Lankan Agriculture',
        require('../assets/img/category/agriculture-category.jpg'),
    ),
];

export default CATEGORY;
