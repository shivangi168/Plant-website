import React, { useState } from 'react';
import UserList from './UserList';
import SellerList from './SellerList';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background: ${({ active }) => (active ? '#ddd' : 'transparent')};
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 1rem;

  &:hover {
    background: #eee;
  }
`;

const SuperadminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <DashboardContainer>
      <Tabs>
        <Tab active={activeTab === 'users'} onClick={() => setActiveTab('users')}>Registered Users</Tab>
        <Tab active={activeTab === 'sellers'} onClick={() => setActiveTab('sellers')}>Sellers</Tab>
      </Tabs>

      {activeTab === 'users' && <UserList />}
      {activeTab === 'sellers' && <SellerList />}
    </DashboardContainer>
  );
};

export default SuperadminDashboard;
