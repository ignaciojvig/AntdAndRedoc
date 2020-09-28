import { Button, Form, Input, Modal, Popover, Row } from "antd";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

interface IOpenAPIEditorModal {
  modalVisibility: boolean;
  onFinish: (formPayload: any) => void;
}

export const OpenAPIEditorModal: React.FC<IOpenAPIEditorModal> = ({
  modalVisibility,
  onFinish,
}: IOpenAPIEditorModal) => {
  const [primaryColor, setPrimaryColor] = useState("#e30613");

  return (
    <Modal
      title="Add your Swagger API"
      centered={true}
      maskClosable={true}
      visible={modalVisibility}
      footer={null}
    >
      <Form
        onFinish={(values) => onFinish(values)}
        initialValues={{
          primaryColor: primaryColor,
          swaggerURL: "https://petstore.swagger.io/v2/swagger.json", // "http://172.25.40.20:32701/api/v1/v2/api-docs",
        }}
      >
        <Form.Item
          name="swaggerURL"
          label="Please insert the Swagger URL"
          rules={[{ required: true, message: "The Swagger URL is required" }]}
        >
          <Input
            size="middle"
            maxLength={50}
            placeholder="http://.../api/v1/v2/api-docs"
          />
        </Form.Item>
        <Form.Item
          name="primaryColor"
          label="Primary Color"
          rules={[{ required: true }]}
        >
          <Popover
            content={
              <SketchPicker
                color={primaryColor}
                onChangeComplete={(color) => setPrimaryColor(color.hex)}
                presetColors={[
                  "#E30613",
                  "#575665",
                  "#373737",
                  "#00CCCC",
                  "#003399",
                ]}
              />
            }
            placement="right"
            trigger="click"
          >
            <Input
              size="middle"
              maxLength={50}
              placeholder={primaryColor}
              value={primaryColor}
              style={{
                borderColor: primaryColor,
                color: primaryColor,
              }}
            />
          </Popover>
        </Form.Item>
        <Button htmlType="submit"> Add </Button>
      </Form>
    </Modal>
  );
};
