import React from 'react';
import { Form, Input, InputNumber, Select, Button, Message } from '@arco-design/web-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormItem = Form.Item;

const DealForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await axios.post('/api/deals', values);
      Message.success('Deal registered successfully');
      navigate('/');
    } catch (error) {
      Message.error('Failed to register deal');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register New Deal</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <FormItem label="Company Name" field="companyName" rules={[{ required: true }]}>
          <Input placeholder="Enter company name" />
        </FormItem>
        <FormItem label="Contact Name" field="contactName" rules={[{ required: true }]}>
          <Input placeholder="Enter contact name" />
        </FormItem>
        <FormItem label="Email" field="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter email address" />
        </FormItem>
        <FormItem label="Deal Value" field="dealValue" rules={[{ required: true, type: 'number', min: 0 }]}>
          <InputNumber prefix="$" placeholder="Enter deal value" />
        </FormItem>
        <FormItem label="Status" field="status" rules={[{ required: true }]}>
          <Select placeholder="Select deal status">
            <Select.Option value="New">New</Select.Option>
            <Select.Option value="In Progress">In Progress</Select.Option>
            <Select.Option value="Closed">Closed</Select.Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Register Deal
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default DealForm;