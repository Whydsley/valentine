import React, { useState, useEffect } from "react";
import "../css/body.css";
import Timer from "./Timer";
import Acumulated from "./Acumulated";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import bg from "../assets/bg.png";

const images = [img1, img2, img3, img4, img5, img6];

// const images = [
//   "../assets/1.jpg",
//   "../assets/2.jpg",
//   "../assets/3.jpg",
//   "../assets/4.jpg",
//   "../assets/5.jpg",
//   "../assets/6.jpg",
// ];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="carousel-container">
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="carousel-image"
        onClick={() => handleImageClick(images[current])}
      />

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Zoom" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}

function Body() {
  return (
    <>
      <div className="content">
        <img className="bg" src={bg} alt="Background" />
        <div className="text">
          <h3>O quão rápido 8 anos se passaram... "🖤"</h3>
          <p>
            E essa é a nossa história! Anos que se parecem com meses... Meses
            que se parecem com dias... Dias que se parecem com horas... E horas
            que ao seu lado, parecem minutos, e cada segundo... Que eu gostaria
            que fossem eternos ao seu lado. <br /> <br />
            Você despertou o meu melhor, e me faz acordar todos os dias querendo
            mostrar uma versão melhor de mim. <br /> <br />E agora nós já
            conhecemos o mais íntimo e profundo um do outro, nossas virtudes e
            nossos defeitos, e mesmo assim, eu ainda vejo no fundo dos seus
            olhos a mesma menina perfeita que eu conheci. Obrigado por
            compartilhar esses 8 anos ao meu lado. Muitas vezes nós nos pegamos
            reclamando da vida, por conta das adversidades... Mas se eu tivesse
            a chance de recomeçar, eu faria tudo exatamente como foi, porque no
            fim, eu encontraria você, e poderia contemplar o melhor da vida
            novamente. <br /> <br /> E poder compartilhar isso com você é a
            coisa mais extraordinária que eu tenho o prazer de experimentar
            todos os dias, desde que acordo até o momento em que nos deitamos.
            Você é a minha vida, meu tesouro, meu mundo, meu porto seguro. Eu te
            amo mais do que qualquer palavra possa expressar, e espero que eu
            tenha conseguido fazer você ter a certeza disso. <br /> <br />{" "}
            Pois... Eu que não era bom em nada, fui bom em te fazer sorrir. Eu
            te amo!
          </p>
        </div>
        <Carousel />
        <Acumulated />
        <Timer />
      </div>
    </>
  );
}

export default Body;
