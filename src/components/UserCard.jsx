import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.darkGreen};
  margin: 0;
`;

const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  margin: 0.5rem 0;
`;

const StatusButton = styled.button`
  background: ${({ isActive, theme }) => (isActive ? theme.colors.success : theme.colors.error)};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ isActive, theme }) => (isActive ? theme.colors.successDark : theme.colors.errorDark)};
  }
`;

const UserCard = ({ user, onToggleStatus }) => {
  return (
    <Card>
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <StatusButton isActive={user.isActive} onClick={() => onToggleStatus(user.id, user.isActive)}>
        {user.isActive ? 'Deactivate' : 'Activate'}
      </StatusButton>
    </Card>
  );
};

export default UserCard;
