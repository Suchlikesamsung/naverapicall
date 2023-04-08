import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewsList() {
    return (
        <Container className='body'>
            <Row>
                <Col xs={2}>등록일</Col>
                <Col xs={3}>타이틀</Col>
                <Col xs={6}>내용</Col>
                <Col xs={1}>비고</Col>
            </Row>
        </Container>
    )
}



export default NewsList;