import React from 'react';
import { connect } from 'react-redux'

import './Skills.css'

import { Row, Col } from 'react-flexbox-grid';

import {LinearProgress} from '@material-ui/core';

const Skills = ({skills}) =>(
    <Col mdOffset={2} xs={8}>
        <h1 align="center">Professional Skills</h1>
        <div className="card">
            <div className="body_card">
                <Row>
                    {
                        skills.map((skill, key) => 
                            <Col key={key} xs={12} md={6}>
                                <p>{skill.skill}</p>
                                <LinearProgress variant="determinate" value={skill.value} />
                            </Col>    
                        )
                    }
                </Row>
            </div>
            
        </div>
    </Col>

)

const mapStateToProps = state => ({
    skills: state.skills
})


export default connect(mapStateToProps, {})(Skills);