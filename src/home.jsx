import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
      const [data,setData]=useState([]);
      const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
          });
      }
      useEffect(()=>{
        getData()
      },[])
  
 

    return (
    <div>
      <Container >
        <Row className="justify-content-center">
          <br/><br/>
          {
            data.map((e)=>{
              return (
            <Col lg={3} md={5} sm={9} xs={8} className="contaner">
            <div  style={{'background-color': '#' + e.c1 , 'color':'#'+e.c2  }} className="color-div color-div-top">#{e.c1}</div>
            <div className="color-div" style={{'background-color': '#' + e.c2 , 'color':'#' + e.c3}}>#{e.c2}</div>
            <div className="color-div color-div-down" style={{'background-color': '#' + e.c3 , 'color':'#' + e.c1}} >#{e.c3}</div>
          </Col>);})}
        </Row>
      </Container>
    </div>
    );
  };
  
  export default Home;