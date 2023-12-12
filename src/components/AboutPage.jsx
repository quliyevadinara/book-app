import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  const professionals = [
    {
      photo: "https://exprostudio.com/html/book_library/images/team/img-01.jpg",
      name: "Jude Morphew",
      job: "Online Retail Manager",
    },
    {
      photo: "https://exprostudio.com/html/book_library/images/team/img-02.jpg",
      name: "Book Burger",
      job: "Bookstore Director",
    },
    {
      photo: "https://exprostudio.com/html/book_library/images/team/img-03.jpg",
      name: "Book Ship & Co.",
      job: "Business Operations",
    },
  ];
  return (
    <div className="about-page">
      <h4>Our Pride Moments</h4>
      <h2>Journey Of Success</h2>

      <div className="image-text">
        <img
          src="https://exprostudio.com/html/book_library/images/img-01.jpg"
          alt=""
        />
        <div className="text">
          <p>June 27,2017</p>
          <h3>First Step Toward Succsess</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
            odit a veritatis culpa modi at nisi cupiditate qui accusantium,
            dignissimos laboriosam, enim tenetur! Ab consectetur eos distinctio
            facere nemo quasi!
          </p>
        </div>
      </div>
      <div className="professionals">
        <div className="about-header">
          <p>Team Behind Book Library</p>
          <h4>Meet Our Professionals</h4>
        </div>
        <div className="team">
          {professionals?.map((el) => (
            <div key={el.id} className="team-members">
              <img src={el.photo} alt="" />
              <h5>{el.name}</h5>
              <p>{el.job}</p>
              <div className="icons">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="contact-page">
        <div className="map-iframe">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <form class="tg-formtheme tg-formcontactus">
            <div class="form-group">
              <input
                type="text"
                name="first-name"
                class="form-control"
                placeholder="First Name*"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="text"
                name="first-name"
                class="form-control"
                placeholder="Last Name*"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="email"
                name="first-name"
                class="form-control"
                placeholder="Email*"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="text"
                name="first-name"
                class="form-control"
                placeholder="Subject (optional)*"
              ></input>
            </div>
            <div class="form-group tg-hastextarea">
            <textarea placeholder="Comment"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" class="tg-btn tg-active">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
