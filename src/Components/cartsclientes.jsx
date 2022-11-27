import React from 'react'
import { Card } from 'react-bootstrap'

const Cartsclientes = () => {
  return(
    <div className="carts-clientes">
    <Card style={{ width: "18rem" }}>
   <Card.Img variant="top" src="https://dam.muyinteresante.com.mx/wp-content/uploads/2018/05/extranos-pueden-elegir-mejores-fotos-de-perfil.jpg" />
   <Card.Body>
     <Card.Title><h1 className='title-card-clienetes'>luisa maria perez</h1></Card.Title>
     <Card.Text>
       "gracias a la empresa partydise,nos divertimos mucho ,los
       reacreadores hicieron todas las actividades con la mejor actitud"
     </Card.Text>
     
   </Card.Body>
 </Card>
 <Card style={{ width: "18rem" }}>
   <Card.Img variant="top" src="https://2.bp.blogspot.com/-Pfyr6_N6Js0/WHQf1Fx6WsI/AAAAAAAAXhM/csjGS94GCHciqIUxAwa7lLvFRKCyds8HACLcB/s1600/fotos%252Bde%252Bhombres.jpg" />
   <Card.Body>
     <Card.Title>
      <h1 className='title-card-clienetes'>jose luis maldonado</h1>
     </Card.Title>
     <Card.Text>
      "me diverti muchisimo con la recreacion, la decoración estuvo espectacular 
       gracias partydise"
     </Card.Text>
     
   </Card.Body>
 </Card>
 <Card style={{ width: "18rem" }}>
   <Card.Img variant="top" src="http://tusimagenesde.com/wp-content/uploads/2017/09/foto-de-perfil-3.jpg" />
   <Card.Body>
     <Card.Title><h1 className='title-card-clienetes'>maria carmen luiscano</h1> </Card.Title>
     <Card.Text>
       "ellos vinieron a recrear el cumpleaños numero 5 de mi hijo,fue muy divertido el show de payasos y los titeres todos quedamos fasinados"
     </Card.Text>
     
   </Card.Body>
 </Card>
 
 <Card style={{ width: "18rem" }}>
   <Card.Img variant="top" src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43c9755611.jpeg" />
   <Card.Body>
     <Card.Title>
      <h1 className='title-card-clienetes'>maria carmen luiscano</h1>
     </Card.Title>
     <Card.Text>
       " ¡los juegos de beby shower son muy divertidos!.
       ellos me ayudaron con la reacreacion en nuestra beby shower y mi esposa y yo estamos muy contentos"
     </Card.Text>
     
   </Card.Body>
 </Card>
</div>
  )
}

export default Cartsclientes
