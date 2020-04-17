import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import {iosWorldOutline} from 'react-icons-kit/ionicons/iosWorldOutline'
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown'

class Footer extends Component {
  state = {
    langContent: false
  }

  handleToggle = e => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent
    })
  }
  render() {
    return (
      <FooterContainer>
        <span>
          Questions? <Link>Call 8823-0000</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Comporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Redeem Git Cards</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Buy Gift Cards</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>
          {/* Language Buttom */}
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorldOutline} size={20} />
            English
            <Icon icon={androidArrowDropdown} size={20}/>
          </div>
        </div>
        {/* Toggle Language Content */}
        {this.state.langContent && (
        <div className="lang-toggle">
          <ul>
            <li>Spanish</li>
          </ul>
          <ul>
            <li>French</li>
          </ul>
        </div>
        )}
        {/* <span style={{ marginLeft:'18%', fontSize: '0.9rem'}}>Netflix Canada</span> */}
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  a {
    color: #999;
    line-height: 2.5;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  span {
    margin-left: 18%;
    font-size: 1.125rem;
  }

  /* Language Button */
  .lang-btn{
    background: transparent;
    border: 0.9px solid #333;
    padding: 0.5rem;
    width: 8rem; 
    display: grid;
    margin-left: 18%;
    margin: 0 20% 0; 
    grid-template-columns:repeat(3, 1fr);
  }

  /* Toggle Language Content */
.lang-toggle{
  margin-left: 18%;
  position: absolute;
  margin-top: 0;
  margin-bottom: 0;

}

.lang-toggle ul {

  background:var(--main-deep-dark);
  width: 8.125rem;
  border: 1px solid #333;
  padding: 0.5rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  &:hover{
    background:var(--main-red);
    color: #fff;
  }
}
`;

