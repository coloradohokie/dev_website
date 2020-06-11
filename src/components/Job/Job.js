import React from 'react'
import classes from './Job.module.css'

const job = (props) => (
    <div>
        <div className={classes.Titlebar}>
            <h2>{props.company}</h2>
            <p>2016 - 2019</p>
        </div>
        <h3>Business Analyst</h3>
        <p>Authored and managed requirements, user stories, and UX designs for Statline’s software products related to organ and tissue donation. Performed project management, product owner, and testing responsibilities as necessary. Worked in an Agile environment with a geographically dispersed team including offshore development.</p>
        <ul className={classes.BulletList}>
            <li>Lead designer on the Ocular Redesign Project for DonorTrac Plus. Elicited with user interviews, prototyping, and usability sessions. The design was featured at industry trade shows. Statline signed several new customers immediately following the release of this module. The updated UX design resulted in a vastly more intuitive process and streamlined repetitive tasks.</li>
            <li>Acted as project manager on DonorTrac Plus’s Musculoskeletal and Birth Tissue projects. Designed the UX and managed evolving requirements through progressive elaboration. Developed project estimates and reports for management, customers, and others.</li>
            <li>Guided DonorTrac Plus through the software validation process for the Food and Drug Administration. Developed an approach which resulted in a 33% increase in efficiency.</li>
            <li>Reviewed and modernized software development practices to be more efficient while remaining compliant with government standards.</li>
        </ul>
    </div>
)

export default job