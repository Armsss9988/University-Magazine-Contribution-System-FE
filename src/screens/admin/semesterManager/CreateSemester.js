import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SidebarAdmin from "../../../components/SidebarAdmin";
import Footer from '../../../components/Footer';
import { semesterAPI } from "../../../api/api";


const CreateSemester = () => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [closed, setClosed] = useState(false); // Checkbox for closed state (default: false)
    const [showData, setShowData] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await semesterAPI.createSemester({
            academic_year: name,
            start_date: startDate,
            final_closure_date: endDate,
            closed: closed,
          });

          console.log('Semester created:', response.data);
          setShowData(response.data);
          window.alert('Successfully created a new semester!')
          // Xóa form data or chuyển hướng sang trang khác (tùy chọn)
          setName('');
          setStartDate('');
          setEndDate('');
          setClosed(false);
        } catch (error) {
          console.error('Error creating semester:', error);
        }
    };

    return (
        <div className='container'>
            <SidebarAdmin />
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Tạo học kỳ mới</h2>
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Academic Semester</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="startDate">
                        <Form.Label>Ngày bắt đầu</Form.Label>
                        <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="endDate">
                        <Form.Label>Ngày kết thúc</Form.Label>
                        <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Tạo học kỳ
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>

    );
};

export default CreateSemester;
