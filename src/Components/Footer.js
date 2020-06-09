import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { companyInformation } from "../constants/companyInformation";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  margin-top: -2rem;
  padding-top: 40px;
  padding-bottom: 15px;
  padding-left: 35px;
  padding-right: 35px;
  font-size: 16px;
  font-weight: 600;
  @media (min-width: 1000px) {
    padding-left: 80px;
    padding-right: 80px;
    display: grid;
    grid-template-columns: 5px 1fr 1fr 1fr 1fr 5px;
    .brandingSection {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }
  .linkList {
    color: white;
    margin-bottom: 20px;
    a p {
      color: #999;
      margin-bottom: 0px;
    }
    .listTitle {
      margin-bottom: 8px;
    }
  }
  .socialLinks {
    grid-column: 2/5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (min-width: 1000px) {
      grid-row: 1/2;
      grid-column: 2/3;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      text-align: left;
    }
    div {
      @media (max-width: 1000px) {
        text-align: center;
      }
      text-align: left;
      a,
      a:focus,
      a:active,
      a:hover {
        font-size: 22px;
        color: white;
        text-decoration: none;
      }
    }
  }
  .tradeMark {
    grid-column: 1/6;
    text-align: center;
    padding-bottom: 25px;
    color: #999;
    font-size: 15px;
    @media (min-width: 1000px) {
      padding-top: 50px;
    }
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterWrapper>
        <div />
        <p className="brandingSection">
          © 2020 {companyInformation.companyName}, Inc
        </p>
        <div className="linkList"></div>
        <div className="linkList" id="footerLinks">
          <p className="listTitle">Find Out More</p>
          <Link to="/">
            <p>Our Mission</p>
          </Link>
          <Link to="/">
            <p>Frequently asked questions</p>
          </Link>
          <Link to="/">
            <p>Regulations</p>
          </Link>
        </div>
        <div className="linkList">
          <p className="listTitle">Join the clothing revolution</p>
        </div>
        <div className="socialLinks">
          <div />
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>

          <div>
            <a href="/" id="instagramLogo">
              <FontAwesomeIcon icon={faInstagram} className="faStyle" />
            </a>
          </div>
          <div />
        </div>
        <div className="tradeMark">
          © 2020 {companyInformation.companyName}, Inc. All rights reserved
        </div>
      </FooterWrapper>
    </React.Fragment>
  );
};

export default Footer;
