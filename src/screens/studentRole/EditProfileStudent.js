import React, { useState } from 'react';
import Footer from '../../components/Footer';
import HeaderStudent from '../../components/HeaderStudent';


const EditProfileStudent = () => {
  const [formData, setFormData] = useState({
    avatar: '', // URL or file object
    fullName: '',
    age: '',
    email: '',
    phoneNumber: '',
    address: '',
    description: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      avatar: event.target.files[0], // Assuming single file upload
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form data:', formData);
  };

  return (
    <div className="container">
      <HeaderStudent />

      <div className="line"></div>

      <div className="edit-profile">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="avatar-container">
            <label htmlFor="avatar">
              <img src={formData.avatar || 'default-avatar.png'} alt="Avatar" />
              <span>Change Avatar</span>
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*" // Restrict file types
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Save Profile</button>
          </div>

        </form>
      </div>

      <div className="line"></div>

      <Footer />
    </div>

  );
};

export default EditProfileStudent;
