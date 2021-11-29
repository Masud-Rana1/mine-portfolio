import React from 'react';
import { Button } from 'react-bootstrap';
import './Navigation.css';
const Navigation = () => {
    return (
        <div className="d-flex justify-content-end" >
            <Button variant="outline-info" className="resume"  href="https://drive.google.com/file/d/1aw7kz02L5GM-gBKmqD70MLhOrSJTAr-g/view?usp=sharing" target="_blank">resume</Button>
            
        </div>
    );
};

export default Navigation;