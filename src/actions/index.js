export const POST_CLUB = 'POST_CLUB';
export const DELETE_CLUB = 'DELETE_CLUB';

let nextId = 1;

export const postClub = (clubTitle, clubDescription, bookTitle, clubTime, bookImage) => {
    return {
        type: POST_CLUB,
        club: {
            id: nextId++,
            clubTitle,
            clubDescription,
            bookTitle,
            clubTime,
            bookImage
        }
    };
}

export const deleteClub = (id) => {
    return {
        type: DELETE_CLUB,
        id
    }
}

