import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const UserDetails = styled.div`
  margin-bottom: 2rem;
`;

const UserDetailItem = styled.div`
  margin-bottom: 1rem;
`;

const UserDetailLabel = styled.label`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const UserDetailValue = styled.span`
  font-size: 1.2rem;
`;

const EditButton = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  width: 400px;
  border-radius: 10px;
  position: relative;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
`;

const FileInput = styled.input`
  display: block;
  margin: 0.5rem 0;
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const OrdersSection = styled.div`
  margin-top: 2rem;
`;

const OrderCard = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const OrderImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
`;

const OrderDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const OrderTitle = styled.h3`
  margin: 0;
`;

const OrderPrice = styled.p`
  font-size: 1.2rem;
`;

const OrderStatus = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const OrderRating = styled.p`
  font-size: 1rem;
`;

const BuyAgainButton = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({
    name:'new user',
    email: 'user@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    profileImage: '/default-profile.jpg',
  });
  const [formData, setFormData] = useState({
    name:profile.name,
    email: profile.email,
    phoneNumber: profile.phoneNumber,
    address: profile.address,
    profileImage: null,
  });

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSave = () => {
    // Update profile with form data
    setProfile({
      name:formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      profileImage: URL.createObjectURL(formData.profileImage),
    });
    setShowModal(false);
  };

  return (
    <Container>
      <UserDetails>
        <ProfileImage src={profile.profileImage} alt="Profile" />
        <UserDetailItem>
          <UserDetailLabel>Name:</UserDetailLabel>
          <UserDetailValue>{profile.name}</UserDetailValue>
        </UserDetailItem>
        <UserDetailItem>
          <UserDetailLabel>Email:</UserDetailLabel>
          <UserDetailValue>{profile.email}</UserDetailValue>
        </UserDetailItem>
        <UserDetailItem>
          <UserDetailLabel>Phone Number:</UserDetailLabel>
          <UserDetailValue>{profile.phoneNumber}</UserDetailValue>
        </UserDetailItem>
        <UserDetailItem>
          <UserDetailLabel>Address:</UserDetailLabel>
          <UserDetailValue>{profile.address}</UserDetailValue>
        </UserDetailItem>
        <EditButton onClick={handleEditClick}>Update</EditButton>
      </UserDetails>

      {showModal && (
        <ModalOverlay>
          <Modal>
            <CloseIcon onClick={handleCloseModal} />
            <h2>Edit Profile</h2>
            <Form>
            <FormGroup>
                <Label>Name:</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email:</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Phone Number:</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Address:</Label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Profile Image:</Label>
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {formData.profileImage && (
                  <ProfileImage
                    src={URL.createObjectURL(formData.profileImage)}
                    alt="Profile Preview"
                  />
                )}
              </FormGroup>
              <SubmitButton onClick={handleSave}>Save</SubmitButton>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      <OrdersSection>
        <h2>Order History</h2>
        {/* Replace with actual order data */}
        <OrderCard>
          <OrderImage src="/plant3.jpg" alt="Order" />
          <OrderDetails>
            <OrderTitle>Plant 1</OrderTitle>
            <OrderPrice>$29.99</OrderPrice>
            <OrderStatus>Delivered</OrderStatus>
            <OrderRating>Rating: 4.5/5</OrderRating>
            <BuyAgainButton>Buy Again</BuyAgainButton>
          </OrderDetails>
        </OrderCard>
        <OrderCard>
          <OrderImage src="/plant4.jpg" alt="Order" />
          <OrderDetails>
            <OrderTitle>Plant 2</OrderTitle>
            <OrderPrice>$19.99</OrderPrice>
            <OrderStatus>Delivered</OrderStatus>
            <OrderRating>Rating: 4.0/5</OrderRating>
            <BuyAgainButton>Buy Again</BuyAgainButton>
            </OrderDetails>

          </OrderCard>
        </OrdersSection>
    </Container>
  );
};

export default UserDashboard;
