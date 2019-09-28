import React from 'react';

import { connect } from 'react-redux'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './TimeLine.css'

const TimeLine = ({jobs}) =>(
    <div>
        <VerticalTimeline>
            { jobs.map((job, key) => 
            <VerticalTimelineElement
                key={key}
                className="vertical-timeline-element--work"
                date={job.time}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title"> {job.name} </h3>
                <h4 className="vertical-timeline-element-subtitle"> {job.place} </h4>
                <p>
                    {job.decription}
                </p>
            </VerticalTimelineElement>
            )}
        </VerticalTimeline>
    </div>
)

const mapStateToProps = state => ({
    jobs: state.jobs
})

export default  connect(mapStateToProps, {})(TimeLine);