export const ADD_CLUB = 'ADD_CLUB';
export const DELETE_CLUB = 'DELETE_CLUB';
export const EDIT_CLUB = 'EDIT_CLUB';

let nextId = Math.floor(Math.random() * 10000000);

export const addClub = (clubTitle, clubDescription, bookTitle, clubTime, bookImage, bookKdc) => {
    return {
        type: ADD_CLUB,
        clubId: nextId++,
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