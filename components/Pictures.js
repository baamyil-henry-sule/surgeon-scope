import React, { useState } from 'react'
import { observer } from "mobx-react-lite"
import { Image, Card, List, Modal, Button } from 'antd';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

import { Picture } from '../models/pictures';

import Filter, { applyFilter } from './Filter';

export default observer(({ cursor, pictures }) => {
  const [taking, setTaking] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const props = {};
  if (!cursor.isSet) {
    props.disabled = true
  }

  return <>
    <Modal
      title="Upload a new document or take a picture"
      visible={taking}
      centered={true}
      closeable={true}
      footer={null}
      onCancel={() => setTaking(false)}
      width='100%'
    >
      <Camera
        onTakePhotoAnimationDone={(data) => {
          setTaking(false);
          pictures.add(new Picture(data, [...cursor.coords]))
          cursor.erase();
        }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
      />
      <input
        type="file"
        name="myDocument"
        onChange={(event) => {
          setTaking(false);
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          pictures.add(new Picture(URL.createObjectURL(event.target.files[0]), [...cursor.coords]))
          cursor.erase();
        }}
      />
    </Modal>

    <h3> Surgery Documents </h3>

    <Button style={{ marginBottom: '10px' }} type="primary"
      {...props}
      onClick={() => { setTaking(true) }}
    >
      Upload new document
    </Button>
    <h3> History </h3>
    <Filter />
    <List
      itemLayout="vertical"
      size="large"
      grid={{ gutter: 0, column: 2 }}
      dataSource={pictures.pictures.filter(applyFilter)}
      pagination={{
        pageSize: 6
      }}
      renderItem={item => (
        <List.Item
          key={item.content}
        >
          <Card title={new Date(item.date).toUTCString()}>
            <Image
              width={'100%'}
              src={item.content}
            />
          </Card>
        </List.Item>
      )}
    />
  </>;
});

