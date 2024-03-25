import React, { useState } from 'react';
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
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !password || !confirmPassword || !role || !faculty) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        try {
          const response = await userAPI.createUser( {
            username: name,
            email: email,
            password: password,
            role: role,
            facultyName: faculty,
          });

          console.log('Student account created:', response.data);
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setErrorMessage('');
          window.alert('Create account success!');
        } catch (error) {
          console.error('Error creating student account:', error);
          setErrorMessage('An error occurred. Please try again later.');
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
            <div className='content-newacc'>
            <div className='form-container'>
                <h1>New Account</h1>
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
                    <div className='select-container'>
                        <text>Faculty</text>
                        <select className='faculty-select' value={faculty} onChange={handleChangeFaculty}>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Business">Business</option>
                            <option value="Graphic Design">Graphic Design</option>
                        </select>
                    </div>
                    <div className='select-container'>
                        <text>Role</text>
                        <select className='role-select' value={role} onChange={handleChangeRole}>
                            <option value="student">Student</option>
                            <option value="coordinator">Coordinator</option>
                            <option value="manager">Manager</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <Button className='submit-button' variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
        </div>
    );
};

export default CreateAccount;
