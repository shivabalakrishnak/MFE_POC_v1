import React from "react";

import "./CarsX.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function CarsX() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Audi</Tab>
          <Tab>Benz</Tab>
        </TabList>

        <TabPanel>
          <div className="cars-container flex flex-wrap justify-evenly">
            <div className="card">
              <p>BMW 3 Series</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-3-series-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Volkswagen Golf</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-volkswagen-golf-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Mercedes-Benz C-Class</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-mercedes-benz-c-class-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi TT</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-tt-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Porsche 911</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-porsche-911-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Mercedes-Benz S-Class</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-mercedes-benz-s-class-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi Q5</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-q5-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>BMW 1 Series</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-1-series-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi A3</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-a3-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>BMW X3</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-x3-1280x720px.ashx" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="cars-container flex flex-wrap justify-evenly">
            <div className="card">
              <p>Mercedes-Benz S-Class</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-mercedes-benz-s-class-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi Q5</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-q5-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>BMW 1 Series</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-1-series-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi A3</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-a3-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>BMW X3</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-x3-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>BMW 3 Series</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-bmw-3-series-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Volkswagen Golf</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-volkswagen-golf-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Mercedes-Benz C-Class</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-mercedes-benz-c-class-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Audi TT</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-audi-tt-1280x720px.ashx" />
            </div>
            <div className="card">
              <p>Porsche 911</p>
              <img src="https://www.stratstone.com/-/media/stratstone/blog/2021/best-used-german-cars/used-porsche-911-1280x720px.ashx" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default CarsX;
