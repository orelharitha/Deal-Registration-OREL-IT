import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '@arco-design/web-react';
import Header from './components/Header';
import DealList from './components/DealList';
import DealForm from './components/DealForm';
import '@arco-design/web-react/dist/css/arco.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header />
        <Content className="p-6">
          <Routes>
            <Route path="/" element={<DealList />} />
            <Route path="/new-deal" element={<DealForm />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;