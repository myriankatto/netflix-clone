import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMacbook from '../images/tab-macbook.png';

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.2rem' }}>
            Watch TV show and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">Try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* TV image container */}
          <div>
            <img src={ImgTv} alt="tv" style={{ width: '18.75rem' }} />
            <h3>Watch on your TV</h3>
            <p>Smarts TVs, PlayStation, XBox, ChromeCast, Apple TV, Blue-ray players and more.</p>
          </div>
          {/* Tablet image container */}
          <div>
            <img
              src={ImgTablet}
              alt="tablet"
              style={{ width: '18.75rem', paddingTop: '0.625rem' }}
            />
            <h3>Watch on your TV</h3>
            <p>Smarts TVs, PlayStation, XBox, ChromeCast, Apple TV, Blue-ray players and more.</p>
          </div>
          {/* Macbook image container */}
          <div>
            <img
              src={ImgMacbook}
              alt="macbook"
              style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }}
            />
            <h3>Watch on your TV</h3>
            <p>Smarts TVs, PlayStation, XBox, ChromeCast, Apple TV, Blue-ray players and more.</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

// Main Tab content container

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  /*Tab top content */
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat (12, 1fr);
    justify-content: center;
    align-itens: center;
    padding: 2.5rem 0;
  }

  span {
    grid-column: 1/8;
  }
  .btn {
    margin: 0 1.25rem 1.25rem;
    grid-column: 10/12;
  }

  /* Tab Bottom Content */

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.2rem;
    text-align: center;
    margin-top: 2rem;
  }

h3{
  margin: 0.5rem 0;
}
  p{
    color: var(--main-grey);
    font-size: 0.8rem;
  }
`;
