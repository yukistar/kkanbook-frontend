import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BookSearch from "../postItem/bookSearch";
import ClubDate from "../postItem/clubDate";
import Alert from "../common/alert";
import "./clubPost.css";

const ClubFrom = (props) => {
    return (
        <div className='club-form'>
            <Form style={{marginTop:"15px"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>📚 독서토론회 제목</Form.Label>
                    <Form.Control 
                        as="textarea" rows={1} className="system-font"
                        value={props.clubTitle}
                        onChange={e => props.setClubTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>📚 독서토론회 소개</Form.Label>
                    <Form.Control
                        as="textarea" rows={5} className="system-font"
                        value={props.clubDescription}
                        onChange={e => props.setClubDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>📚 독서토론회 도서</Form.Label>
                    <BookSearch
                        bookTitle={props.bookTitle} setBookTitle={props.setBookTitle}
                        bookImage={props.bookImage} setBookImage={props.setBookImage}
                        bookKind={props.bookKind} setBookKind={props.setBookKind}
                        searchCheck={props.searchCheck} setSearchCheck={props.setSearchCheck}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>📚 독서토론회 시간</Form.Label>
                    <ClubDate clubTime={props.clubTime} setClubTime={props.setClubTime}/>
                </Form.Group>
                <Button
                    variant="outline-secondary"
                    className="basic-button"
                    onClick={props.handleSubmit}
                >Submit</Button>
            </Form>
            {props.alertMessage !== "" ? 
                <Alert showAlert={true} alertMessage={props.alertMessage} setAlertMessage={props.setAlertMessage} /> 
            : null}
        </div>
    )
}

export default ClubFrom