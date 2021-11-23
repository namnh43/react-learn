import React from "react";
import {Row, Col} from 'antd';
import { Form, Input, Button } from 'antd';
import {apiUser} from '../../services/login';
import { helper } from "../../helpers/common";
import { useHistory } from "react-router-dom";

const LoginMovies = () => {
    const history = useHistory();
    const onFinish = async (values) => {
        //console.log('Success:', values);
        const user = values.username;
        const pass = values.password;

        if (user !== '' && pass !== '') {
            const data = await apiUser.loginUser(user, pass);
            if (!helper.isEmptyObject(data)) {
                if (data.hasOwnProperty('token')) {
                    //Login thanh cong
                    //quay vao trang file
                    // luu data['token'] vao local storage
                    // khi logout can xoa bo token da luu trong local storage
                    history.push('/popular-movie');
                } else {
                    //Login that bai
                }
            }
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Row>
            <Col span={12} offset={6}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
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

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        
    )
}
export default React.memo(LoginMovies);