import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrice from './tabs_nav/TabPrice';
import TabContentOne from '../components/TabContentOne';
import TabContentTwo from '../components/TabContentTwo';
import TabContentThree from '../components/TabContentThree';

import '../css/TabsNav.css';

class TabComponent extends Component {
  state = {
    tabIndex: 0,
  };
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
              <TabDoor />
              <p>
                <strong>
                  No commitments <br />
                  Cancel onlone at anytime
                </strong>
              </p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
              <TabDevices />
              <p style={{ marginTop: '-5.3125rem' }}>
                <strong>Watch Anywhere</strong>
              </p>
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
              <TabPrice />
              <p>
                <strong>Pick your price</strong>
              </p>
            </Tab>
          </TabList>
          {/* Tabs Content */}
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentThree />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
