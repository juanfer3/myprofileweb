import React from 'react';

import posed from 'react-pose';
import { connect } from 'react-redux'

import './Card.css'

import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    Fab,
    Typography,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';


const Box = posed.div({
    popped: {
        x: -10,
        y: -10,
        background: 'rgba(161, 0, 246, 1)',
        boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
        transition: { duration: 700 }
      }
  })

const isVisible = false;
const Card = ({yo}) =>(
    
    
    <div className="container_card">
       <Grid fluid>
            <Row>
                <Col xsOffset={2} xs={8} md={8}>
                    <div className="card card_presentation">
                        <Row className="body_card">
                            <Col  xs={12} md={3}>
                                <img src="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-1-299x347.jpg" alt=""/>
                            </Col>
                            <Col  xs={12} mdOffset={2} md={6}>
                                <div>
                                    <Fab variant="extended" className="primary" aria-label="delete">
                                        Hello!
                                    </Fab>
                                    <br/>
                                    <br/>
                                    <Typography variant="h4" component="h4" gutterBottom>
                                        I'm Juan Villadiego
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        software developer
                                    </Typography>
                                    <hr/>
                                    <div>
                                        <List>
                                            { yo.map((data, key) => 
                                                <ListItem key={key} >
                                                    <ListItemText primary={ data.title }/>
                                                    <ListItemSecondaryAction>
                                                    <ListItemText primary={ data.value }/>
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            )}
                                        </List>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer_card"></div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
)

const mapStateToProps = state => ({
    yo: state.yo
})

export default connect(mapStateToProps, {})(Card);