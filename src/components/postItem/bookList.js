import React from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import "./postItem.css"
import nlKey from "../../properties/nlKey";

const BookList = (props) => {
    const nl = (keyword) => {
        return axios.create({
            baseURL: "https://www.nl.go.kr/NL/search/openApi/search.do",
            params: { key: nlKey, kwd: keyword }
        });
    }

    async function nlSearch (keyword) {
        try {
            const nlRes = await nl(keyword).get();
            const parser = new DOMParser(); 
            const xmlDoc = parser.parseFromString(nlRes.data, "text/html");

            const item = xmlDoc.getElementsByTagName("item")[0]
            const kdc_name_1s = item.getElementsByTagName("kdc_name_1s")[0].innerHTML; //"<!--[CDATA[문학]]-->"
            const kdc = kdc_name_1s.split("[")[2].slice(0, -5);
            props.setBookKdc(kdc);
        } catch (error) {
            console.log(error);
        }
    }

    const onTrClick = (i) => {
        let pickedTitle = props.searchBookList[i][0];
        if (pickedTitle.indexOf('(') !== -1) {
            pickedTitle = pickedTitle.substring(0, pickedTitle.indexOf('('));
        }
        nlSearch(pickedTitle);
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