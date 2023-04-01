import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Svg1 from './svgs/svg1';
import Svg2 from './svgs/svg2';
import Svg3 from './svgs/svg3';
import './App.css';

const Start = () => {
    return  (
    <div>    
    
    <div id="carouselExampleRide"  class="carousel carousel-dark slide" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <h5>  Choose the right colors for your project </h5>
                <Svg1 />         
            </div>
            <div class="carousel-item">
                <h5>Options suitable for designers and programmers</h5>
                <Svg2 />

            </div>
            <div class="carousel-item">
                <h5> Coordinating colors for geometric designs </h5>
                <Svg3 />
                
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <Button variant="outline-dark" href="/home"> get started </Button>
  </div>
  );
  };
  
  export default Start;