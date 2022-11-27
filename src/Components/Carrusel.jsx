import Carousel from 'react-bootstrap/Carousel';

export function Carrusel() {
  return (
    
    <Carousel variant="dark" className='carrusel'  >
      <Carousel.Item>
        <img
        
          src="https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='carruseltitilo'>fiestas infantiles</h5>
          <p className='carruselparrafo'>fiestas infantiles tematicas,tematicas con mucha diversion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="https://images.unsplash.com/photo-1611142287927-64cede3148da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='carruseltitilo'>decoraciones</h5>
          <p className='carruselparrafoglobos'>decoraciones distintas y unicas con globos para tus fiestas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="https://images.unsplash.com/photo-1622445867515-8bbd673c85d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
         
        />
        <Carousel.Caption>
          <h5 className='carruseltitilo'>recreaciones</h5>
          <p className='carruselparrafo'>
          show de magia , payasos,globo flexias, pintucaritas y mucho mas
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

