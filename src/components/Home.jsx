import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import cosmetics from '../assets/icons/cosmetics.jpg';
import cosmetics2 from '../assets/icons/cosmetics2.jpg';
import cosmetics3 from '../assets/icons/cosmetics3.jpg';
import { Card, CardGroup } from 'react-bootstrap';
import { Box } from '@mui/system';
import brushes from '../assets/icons/brushes.jpg'
import { Button, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import lipstic from '../assets/icons/lipstic.jpg';
import mascara from '../assets/icons/mascara.jpg';
import eyeliner from '../assets/icons/eyeliners.jpg';
import toneCream from '../assets/icons/toneCream.jpg';

function Home() {
    return (
        <Box>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cosmetics}
                        alt="First slide"
                    />
                    <Carousel.Caption id='getStarted'>
                        <h1>Get Some Product</h1>
                        <Link href="/products">
                            <Button variant="contained" disabled >
                                <ArrowForwardIosIcon />
                            </Button>
                        </Link>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cosmetics2}
                        alt="Second slide"
                    />
                    <Carousel.Caption id='getStarted2'>
                        <h1>Get Some Product</h1>
                        <Link href="/products">
                            <Button id="homeButton2" variant="contained" disabled >
                                <ArrowForwardIosIcon />
                            </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={cosmetics3}
                        alt="Third slide"
                    />
                        <Carousel.Caption id='getStarted3'>
                        <h1>Get Some Product</h1>
                        <Link href="/products">
                            <Button variant="contained" disabled >
                                <ArrowForwardIosIcon />
                            </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2>About Us</h2>
            <Card>
                <Card.Img id="brushesImg" variant="top" src={brushes} />
                <Card.Body>
                    <Card.Text>
                        Our company "Personal Care" can help you to find good quality cosmetics which will you like to use. How often do you think about cosmetics, whith woun't harm your skin and will be not expensive?
                        And our company ready to help you with this. In our online store you can find a lot of cosmetics which will you like!
                    </Card.Text>
                </Card.Body>
            </Card>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={lipstic} />
                    <Card.Body>
                        <Card.Title>Lipsticks</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto voluptates similique, cum modi nihil dicta, molestias cupiditate sapiente consequatur corrupti animi vero amet saepe quaerat. Reprehenderit non a vitae.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={mascara} />
                    <Card.Body>
                        <Card.Title>Mascara</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium quasi ea pariatur repellat quos cum, a veritatis ipsa placeat enim vero assumenda est tenetur perspiciatis modi expedita. Dolore, quaerat!{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={eyeliner} />
                    <Card.Body>
                        <Card.Title>Eyeliners</Card.Title>
                        <Card.Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eos illum fugiat consectetur sit reiciendis dolore dolorem, distinctio, quam nulla voluptatibus accusantium exercitationem laboriosam totam provident explicabo iusto veritatis expedita.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={toneCream} />
                    <Card.Body>
                        <Card.Title>Tone Creams</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto voluptates similique, cum modi nihil dicta, molestias cupiditate sapiente consequatur corrupti animi vero amet saepe quaerat. Reprehenderit non a vitae.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Box>
    );
}

export default Home;