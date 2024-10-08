export let BASE_URL: string;
if (process.env.NODE_ENV === 'development') {
    let BASE_URL = 'http://localhost:5173';
} else {
    let BASE_URL = '';
}


// Centralising app copy

export const HOME_PAGE = {
    HEADING: 'Hey there!',
    PARA_ONE: 'It\'s nice to see you here. This web application was built in response to Apron\'s ',
    LINK_ONE: {
        TEXT: 'Home Task',
        HREF: 'https://you.ashbyhq.com/apron/assignment/8e46fe00-0ebb-4146-88a2-18371078918f'
    },
    PARA_TWO: 'Experience the final product via the link below, or learn more about the developer on ',
    BUTTON: 'Check it out',
    LINK_GITHUB: {
        TEXT: 'GitHub',
        HREF: 'https://github.com/isobelyoung/',
    },
    LINK_LINKEDIN: {
        TEXT: 'LinkedIn',
        HREF: 'linkedin.com/in/isobel-h-young/',
    },
};

export const USERS_PAGE = {
    HEADING: 'Users',
    BUTTON_ADD_USER: 'Add user',
    BUTTON_EDIT: 'Edit',
    TABLE_COL_HEADINGS: [
        'Gender',
        'First name',
        'Last name',
        'Age',
        '',
    ],
}

export const USER_FORM = {
    HEADING: {
        ADD: 'Add user',
        EDIT: 'Edit user',
        DELETE: 'Are you sure you want to delete user?',
    },
    FIELDS: {
        GENDER: 'Gender',
        FIRST_NAME: 'First name',
        LAST_NAME: 'Last name',
        AGE: 'Age',
    },
    ERROR: {
        REQUIRED: 'Required',
        NAME_MIN_LENGTH: 'name must be more than 5 characters',
        NAME_MAX_LENGTH: 'name cannot exceed 20 characters',
        AGE_MIN: 'Age must be higher than 18',
        AGE_MAX: 'Age cannot exceed ',
    },
    BUTTON: {
        CANCEL: 'Cancel',
        ADD: 'Add',
        SAVE: 'Save',
        DELETE: 'Delete',
    }
}