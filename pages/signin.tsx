/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Col, Form, Input, Row } from "antd";
import { signIn } from "next-auth/react";
import styled from 'styled-components';

function Login() {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const { email, password } = values;
    await signIn('credentials', { email, password, redirect: false });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Row>
        <Col lg={{ span: 6, offset: 9 }} xs={{ span: 16, offset: 4 }}>
          <HomepageWrapper>
            <LogoIcon>
              <Row justify="center" align="middle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="logo instagram"/>
              </Row>
            </LogoIcon>
            <Card bordered>
              <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item name="email" label="Email" required rules={[{ required: true }]}>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button type="link" htmlType="button">
                    Forgot password
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </HomepageWrapper>
        </Col>
      </Row>
    </>
  );
}

const HomepageWrapper = styled.div`
  margin-top: 100px;
`;
const LogoIcon = styled.div`
  margin-top: 100px;
  svg {
    width: 200px;
    padding: 0px 0px 50px 0;
  }
`;

export default Login;
