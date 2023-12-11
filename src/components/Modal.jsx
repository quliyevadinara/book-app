import React from "react";

const Modal = (show,item) => {
    if(!show)
    {
return null;
    }
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="inner-box">
            <img src="./images/book.jpg" alt="" />
            <div className="info">
              <h1>Book of the Year</h1>
              <h3> James McBride</h3>
              <br />
              <h4>
                The Written Word Company Ltd <span>12-10-2023</span>
              </h4>
              <br />
              <a href="#">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
            From the author of Deacon King Kong and National Book Award winner
            The Good Lord Bird comes the Barnes & Noble 2023 Book of the Year,
            The Heaven & Earth Grocery Store, a stunning novel about a small
            town and the bonds of community that are formed between marginalized
            groups in order to survive. Learn more about The Heaven & Earth
            Grocery Store on Poured Over: The B&N Podcast and read more about
            James McBride on B&N Reads.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
