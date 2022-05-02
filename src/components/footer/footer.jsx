import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-black position-fixed bottom-0 ">
        <div className="row d-flex justify-content-center">
          <nav className="nav col-12 justify-content-around fs-6">
            <a className="nav-link" href="https://www.instagram.com/">
              Instagram
            </a>
            <a className="nav-link" href="https://www.twitter.com/">
              Twitter
            </a>
            <a className="nav-link" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </nav>
          <div className="col-12 text-white fs-6 text-center p-0">
            Copyrigth Fidel Parabacuto
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
