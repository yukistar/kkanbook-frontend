export const ADD_CLUB = 'ADD_CLUB';
export const DELETE_CLUB = 'DELETE_CLUB';
export const EDIT_CLUB = 'EDIT_CLUB';

export const SIGNUP_USER = 'SIGNUP_USER';
export const ADD_PARTICIPATE_CLUB = 'ADD_PARTICIPATE_CLUB';
export const DELETE_PARTICIPATE_CLUB = 'DELETE_PARTICIPATE_CLUB';

export const EDIT_USER_NAME = "EDIT_USER_NAME";
export const EDIT_USER_PASSWORD = "EDIT_USER_PASSWORD";

let nextId = Math.floor(Math.random() * 10000000);

export const addClub = (clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc) => {
    return {
        type: ADD_CLUB,
        clubId: "club" + String(nextId++),
        club: {
            clubTitle,
            clubDescription,
            bookTitle,
            clubTime,
            bookImage,
            bookKdc
        }
    };
}

export const deleteClub = (clubId) => {
    return {
        type: DELETE_CLUB,
        clubId
    }
}

export const editClub = (clubId, clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc) => {
    return {
        type: EDIT_CLUB,
        clubId: clubId,
        club: {
            clubTitle,
            clubDescription,
            bookTitle,
            clubTime,
            bookImage,
            bookKdc
        }
    };
}

export const signupUser = (userId, userPassword, userName, participateClubs) => {
    return {
        type: SIGNUP_USER,
        userId: userId,
        user: {
            userPassword,
            userName,
            participateClubs
        }
    };
}

export const editUserName = (userId, userName) => {
    return {
        type: EDIT_USER_NAME,
        userId: userId,
        userName: userName
    }
}

export const editUserPassword = (userId, userPassword) => {
    return {
        type: EDIT_USER_PASSWORD,
        userId: userId,
        userPassword: userPassword
    }
}

export const addParticipateClub = (userId, clubId) => {
    return {
        type: ADD_PARTICIPATE_CLUB,
        userId: userId,
        clubId: clubId
    };
}

export const deleteParticipateClub = (userId, clubId) => {
    return {
        type: DELETE_PARTICIPATE_CLUB,
        userId: userId,
        clubId: clubId
    };
}