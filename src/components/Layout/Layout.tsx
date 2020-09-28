/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Col, List, Row } from "antd";
import React, { Fragment, useState } from "react";
import { OpenAPIEditorModal } from "./OpenAPIEditorModal/OpenAPIEditor";

export const Layout = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [openAPIList, setOpenAPIList] = useState<any[]>([]);

  const finishAddingAnAPI = (formPayload: any) => {
    console.log(formPayload);

    const openAPIListCopy = [...openAPIList, formPayload].map((x) => ({
      ...x,
      primaryColor: x.primaryColor.replace("#", ""),
    }));

    setOpenAPIList(openAPIListCopy);
    setModalVisibility(false);
  };

  const generateListOfOpenAPIs = () => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={openAPIList}
        renderItem={(item) => (
          <List.Item actions={[<a href="#"> Edit </a>, <a href="#"> X </a>]}>
            <a
              href={`apidoc?url=${item.swaggerURL}&primary=${item.primaryColor}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.swaggerURL}
            </a>
          </List.Item>
        )}
      />
    );
  };

  return (
    <Fragment>
      <OpenAPIEditorModal
        modalVisibility={modalVisibility}
        onFinish={finishAddingAnAPI}
      />
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          List of OpenAPI Specifications
          {generateListOfOpenAPIs()}
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            onClick={() => setModalVisibility(!modalVisibility)}
          >
            Add OpenAPI Specification
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};
