import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Avatar from '../../components/Avatar';
import HeaderStudent from '../../components/HeaderStudent';
import Footer from '../../components/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import TermCondition from '../../components/TermCondition'

const NewSubmisson = () => {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    };
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container">
            <HeaderStudent />

            <div className="line"></div>

            <Container>
                <h1>New Submission</h1>
                <Form noValidate validated={validated} method='post'
                    onSubmit={handleSubmit}>
                    <Form.Group
                        className="mb-3">
                        <Form.Label>Choose file</Form.Label>
                        <Form.Control
                            required='true'
                            type="file" />
                    </Form.Group>
                    <Form.Group
                        className="mb-3">
                        <Form.Check
                            required='true'
                            label={
                                <>
                                    I read and agreed to <span className='term-and-condition' onClick={handleShow}>terms and conditions</span>.
                                </>
                            }
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

            <Footer />

            <TermCondition
                show={show}
                onHide={handleClose}
            />
        </div >
    );
};

export default NewSubmisson;
