import React from "react";
import Table from "react-bootstrap/Table";
import "./postItem.css"

const BookList = (props) => {
    const onTrClick = (i) => {
        props.setBookTitle(props.searchBookList[i][0]);
        props.setBookImage(props.searchBookList[i][3]);
        props.setShowBookList(false);
    }

    return (
        <div className="book-list">
            <Table bordered hover size="sm">
                <tbody>
                    {props.searchBookList && props.searchBookList.map((item, i) => (
                        <tr key={i} onClick={(e) => {e.stopPropagation(); onTrClick(i)}}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default BookList