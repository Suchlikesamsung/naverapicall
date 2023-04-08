import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';



const option = {
  url: 'enter your url',
  method: 'GET',
  header: {
    'X-Naver-Client-Id': '{enter your client id}',
    'X-Naver-Client-Secret': '{enter your client secret}'
  }
}



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const [data, setData] = useState([]);
  const [arrayLength, setArrayLength] = useState(0);

  useEffect(() => {
    axios.get('/v1/search/news?query=%EA%B9%80%EB%AC%B8%EC%88%98&display=100&start=1&sort=sim', {
      headers: {
        'X-Naver-Client-Id': 'J4LjTYVHkeLxwvGP0hfC',
        'X-Naver-Client-Secret': 'mryxjRmRnB'
      }
    })
      .then(response => {
        const newsData = response.data;
        setArrayLength(newsData.items.length);
        console.log(newsData.items.length)
        console.log(newsData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (

    <Container className='body'>
      {Array.from({ length: arrayLength }, () => 
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Col xs={2}>2022-09-01 07:22</Col>
        <Col xs={3}>타이틀</Col>
        <Col xs={6}>내용</Col>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          내용
        </Typography>
        <Row>
          <Col md={6}>버튼1</Col>
          <Col md={6}>버튼2</Col>
        </Row>
      </AccordionDetails>
    </Accordion>
      
      )}
    </Container>
  );


}


export default CustomizedAccordions;