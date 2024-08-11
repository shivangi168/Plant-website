import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FileInput = styled(Input).attrs({ type: 'file' })`
  border: none;
  padding: 0;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  display: block;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const VendorRegistrationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: null,
    description: '',
    services: '',
    categories: 'indoor',
    businessName: '',
    companyAddress: '',
    organizationName: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    onClose(); // Close the modal after submission
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>Vendor Registration</ModalHeader>
        <p style={{ textAlign: 'center' }}>
          Complete the form below to sign up as a vendor.
        </p>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="organizationName">Organization/Business Name</Label>
            <Input type="text" id="organizationName" name="organizationName" value={formData.organizationName} onChange={handleChange} required />
          </FormGroup>
         
          <FormGroup>
            <Label htmlFor="categories">Category</Label>
            <Select id="categories" name="categories" value={formData.categories} onChange={handleChange} required>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="both">Both</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="companyAddress">Company Address</Label>
            <Input type="text" id="companyAddress" name="companyAddress" value={formData.companyAddress} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">General Details of Services/Goods</Label>
            <TextArea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required />
          </FormGroup>
        
       
          <FormGroup>
            <Label htmlFor="image">Upload Image</Label>
            <FileInput id="image" name="image" onChange={handleChange} />
          </FormGroup>

          {/* <FormGroup>
            <Label htmlFor="services">Services</Label>
            <Input type="text" id="services" name="services" value={formData.services} onChange={handleChange} />
          </FormGroup> */}
        
        
        
          <Button type="submit">Send Application</Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default VendorRegistrationModal;
