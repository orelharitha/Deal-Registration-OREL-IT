import React from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
import { FileText, PlusCircle } from 'lucide-react';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Deal Registration</div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="deals">
            <Link to="/" className="flex items-center">
              <FileText className="mr-2" size={18} />
              Deals
            </Link>
          </Menu.Item>
          <Menu.Item key="new-deal">
            <Link to="/new-deal" className="flex items-center">
              <PlusCircle className="mr-2" size={18} />
              New Deal
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
};

export default AppHeader;