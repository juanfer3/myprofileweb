import React from 'react';

import './Description.css'

import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    Typography
} from '@material-ui/core';

const Description = () =>(
  
       
    <Col mdOffset={1} xs={10}>
        <p align="center" className="description"  >
            Hello! I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.
        </p>
    </Col>
)

export default Description;