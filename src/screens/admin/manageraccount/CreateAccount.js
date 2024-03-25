import React, { useState } from 'react';
// Optional import for styling
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import { userAPI } from "../../../api/api";


const CreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');
    const [faculty, setFaculty] = useState('Information Technology');
    const [errorMessage, setErrorMessage] = useState(''); // For error handling

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(role, faculty, password, email, name);
        // Basic validation (can be enhanced)
        if (!name || !email || !password || !confirmPassword || !role || !faculty) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // Handle form submission logic
        // - Send data to backend API (if applicable) using axios
        // - Handle successful creation, error messages, etc.

        // Example API call (replace with your actual API endpoint)
        try {
          const response = await userAPI.createUser( {
            username: name,
            email: email,
            password: password,
            role: role,
            facultyName: faculty,
          });

          console.log('Student account created:', response.data);
          


          // Handle successful creation (clear form, redirect, etc.)
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setErrorMessage(''); // Clear error message
          window.alert('Create account success!');
        } catch (error) {
          console.error('Error creating student account:', error);
          setErrorMessage('An error occurred. Please try again later.'); // Generic error message
        }
    };





    const handleChangeRole = (event) => {
        setRole(event.target.value);
    };
    const handleChangeFaculty = (event) => {
        setFaculty(event.target.value);
    };

    return (
        <div className='container'>
            <SidebarAdmin />
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>Create Account</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Form onSubmit={handleSubmit}>
                    <FormGroup controlId="name">
                        <FormLabel>Tên</FormLabel>
                        <FormControl type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </FormGroup>
                    
                    <FormGroup controlId="password">
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </FormGroup>
                    <FormGroup controlId="confirmPassword">
                        <FormLabel>Xác nhận mật khẩu</FormLabel>
                        <FormControl type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </FormGroup>
                    <div>
                        <text>Faculty</text>
                        <select value={faculty} onChange={handleChangeFaculty}>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Business">Business</option>
                            <option value="Graphic Design">Graphic Design</option>
                        </select>
                    </div>
                    <div>
                        <text>Role</text>
                        <select value={role} onChange={handleChangeRole}>
                            <option value="student">Student</option>
                            <option value="coordinator">Coordinator</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <Button variant="primary" type="submit">
                        Tạo tài khoản
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>

    );
};

export default CreateAccount;
