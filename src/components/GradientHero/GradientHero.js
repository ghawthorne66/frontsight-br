import React from "react";
import "./GradientHero.css";
import Banner from "../Banner"
import Image from "../../images/book-placeholder.png"

export default () => (
    <div className="hero-container blhero2 skhero1">
      <span className="hero-wave" />
      <div className="hero-content">
        <div className="row">
          <div className="col-md-8" />
          <h1 className="bold-headline margin-top0 hero-item">
            Drive your business to thrive 
          </h1>
         
          <div className="hero-item text-left">
            <p>
              Hvac Contractors <br></br>
              <span class="form-lightbox-open form-lightbox-open-span">
                  2020 Marketing Playbook.
              </span>
            </p>
          </div>
        </div>
        {/* <div className="buttons-container margin-top20 hero-item u-margin-top-sm">
          <a href="/free-trial/" class="btn cta-btn large orange-light">
            Try GitLab for FREE{" "}
          </a>
          <a
            href="/demo/"
            className="btn cta-btn large btn-white flex-container align-center"
          >
            <div className="i fas fa-play play-icon" />
            Watch a demo
          </a>
        </div> */}

        <div className="col-md-4 special-link form-lightbox-open">
          <p>
            <a>
              <img className="image"
                src= {Image}
                alt="Remote playbook cover rotated"/>
              <span>Download the Playbook</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );

