import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, img, price, description } = course;
    const navigate = useNavigate();

    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <Card>
                <Card.Img variant="top" src={img} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price} BDT
                    </Card.Text>
                    <Card.Text>
                        <small>{description}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-block btn-dark text-light' onClick={() => navigate(`/course/${course.id}`)}>Check Out</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;