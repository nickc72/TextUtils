import React from 'react'

function About() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/06/08/13/04/fichtelbergbahn-8049565_1280.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/06/29/12/22/snow-leopard-8096293_1280.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/04/28/10/03/chapel-7956274_1280.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   )
 //{/* <ul className="list-group">
//   <li className="list-group-item">An item</li>
//   <li className="list-group-item">A second item</li>
//   <li className="list-group-item">A third item</li>
//   <li className="list-group-item">A fourth item</li>
//   <li className="list-group-item">And a fifth one</li>
// </ul> */}

}

export default About


