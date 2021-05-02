import React from "react";
import { Tabs } from "antd";
import myPetsPhotos from "../All_Photos/Animals/MyPets";
import myPetsVideos from "../All Videos/Animals/myPets";
import { Container } from "react-bootstrap";
import GallerySkleton from "../GallerySkleton";
import IFrameSkleton from "../IFrameSkleton";
// import { Player, BigPlayButton, ControlBar } from "video-react";
const { TabPane } = Tabs;
const Animals = () => {
  return (
    <>
      <Container fluid>
        <Tabs defaultActiveKey="1" size="large" variant="pills">
          <TabPane tab="My Pets" key="1">
            <Tabs defaultActiveKey="1" size="large">
              <TabPane tab="Photos" key="1">
                <GallerySkleton photos={myPetsPhotos} />
              </TabPane>
              <TabPane tab="Videos" key="2">
                <IFrameSkleton videos={myPetsVideos} />
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="Cats" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Dogs" key="3">
            Content of tab 3
          </TabPane>
          <TabPane tab="The Special Ones" key="4">
            Content of tab 3
          </TabPane>
        </Tabs>
      </Container>
    </>
  );
};

export default Animals;
