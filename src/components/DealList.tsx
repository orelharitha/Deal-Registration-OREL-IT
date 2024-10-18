import React, { useState, useEffect } from 'react';
import { Table, Message } from '@arco-design/web-react';
import axios from 'axios';

interface Deal {
  _id: string;
  companyName: string;
  contactName: string;
  email: string;
  dealValue: number;
  status: string;
}

const DealList: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      const response = await axios.get('/api/deals');
      setDeals(response.data);
      setLoading(false);
    } catch (error) {
      Message.error('Failed to fetch deals');
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Company Name',
      dataIndex: 'companyName',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Deal Value',
      dataIndex: 'dealValue',
      render: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registered Deals</h1>
      <Table columns={columns} data={deals} loading={loading} />
    </div>
  );
};

export default DealList;