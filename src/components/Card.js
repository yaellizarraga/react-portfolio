import React from "react";
import PropTypes from "prop-types";

function Card({ title, image, text, link}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={image} alt="My card" className="imgCard"/>
      </div>
      <div className="card-body">
          <h4 className="card-title text-light">{title}</h4>
          <p className="card-text text-secondary">
             {text ? text : 'Est in sint reprehenderit reprehenderit mollit irure incididunt qui. Deserunt commodo nulla eu nisi adipisicing. Velit ut ullamco mollit cillum eiusmod irure sunt ex in.'}
          </p>
          <a href={link ? link : '#!'} rel="noreferrer" target="_blank" className="btn btn-outline-secondary rounded-0">
            Go to this website
          </a>
      </div>
    </div>
    )
}


Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default Card;
