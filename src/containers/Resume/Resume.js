import React from 'react'
import Job from '../../components/Job/Job'
import classes from './Resume.module.css'

const resume = () => (
    <div>
        <h1>Resume</h1>
        <p>This is the resume page.</p>

        <Job company="Statline" years="2016-2019" position="Business Analyst">
            <p>Authored and managed requirements, user stories, and UX designs for Statline’s software products related to organ and tissue donation. Performed project management, product owner, and testing responsibilities as necessary. Worked in an Agile environment with a geographically dispersed team including offshore development.</p>
            <ul className={classes.BulletList}>
                <li>Lead designer on the Ocular Redesign Project for DonorTrac Plus. Elicited with user interviews, prototyping, and usability sessions. The design was featured at industry trade shows. Statline signed several new customers immediately following the release of this module. The updated UX design resulted in a vastly more intuitive process and streamlined repetitive tasks.</li>
                <li>Acted as project manager on DonorTrac Plus’s Musculoskeletal and Birth Tissue projects. Designed the UX and managed evolving requirements through progressive elaboration. Developed project estimates and reports for management, customers, and others.</li>
                <li>Guided DonorTrac Plus through the software validation process for the Food and Drug Administration. Developed an approach which resulted in a 33% increase in efficiency.</li>
                <li>Reviewed and modernized software development practices to be more efficient while remaining compliant with government standards.</li>
            </ul>
        </Job>
        <Job company="Charles Schwab" years="2014-2015" position='Senior Business Analyst / Product Owner'>
            <p>Initially Contracted to a three-month project to produce a gap analysis for upgrading Oracle Identity Server for attestation/certification. Re-contracted to a nine-month project to manage compliance documentation and customer communication for the new Schwab Intelligent Portfolios product.</p>
            <ul className={classes.BulletList}>
                <li>Designed processes to convert paper communication into electronic communication using legacy infrastructure systems in time for the major tax mailings, including fail-back processes and report requirements for bounced messages to ensure compliance with federal regulations.</li>
                <li>Designed, ran, and presented database reports to identify any customers out of compliance with their product requirements. Utilized information stored in Teradata and presented to management in the form of tables and graphs in Excel.</li>
                <li>Oversaw documentation through business, marketing, legal, compliance, and production departments. Collaborated with the compliance department to ensure language met company and industry standards.</li>
                <li>Led accessibility testing on all public facing web pages to ensure compliance with ADA standards.</li>
                <li>Created a gap analysis document which highlighted new features and limitations in the new software, limitations and customizations in the existing software, and recommendations for migration including workflow changes and customization.</li>
                <li>Created a requirements document by eliciting stakeholders. Highlighted and prioritized changes needed to the out-of-the-box software to work for Schwab’s environment. This document was sent to the VP level for sign-off.</li>
            </ul>
        </Job>
        <Job company="McKesson" years="2007-2014" position="Senior Business Analyst">
            <p>Authored and managed user stories and software requirements for McKesson’s next-generation, thin-client, healthcare provider applications as well as thick-client legacy applications and databases. Worked primarily in an Agile/Scrum environment.</p>
            <ul className={classes.BulletList}>
                <li>Wrote business requirements for multiple capitalization cases which were immediately approved by the Senior Vice President and Technical Accounting. They became the standard template for the team.</li>
                <li>Implemented a peer-review process for requirements, resulting in substantial improvements in clarity according to the SQA associates and reducing rework by 33%.</li>
                <li>Traveled to customer sites where the relationship was “troubled” to improve the business relationship. Listened to their concerns and identified both functional and process improvements to meet their needs.</li>
                <li>Managed product team when product manager was out of office, including a month-long leave-of-absence. Activities included prioritizing development work, maintaining customer relationships, and reporting to upper management.</li>
                <li>Educated customer service personnel of new features through technical presentations and software demonstrations in order to provide consistent and proactive support to our customers.</li>
                <li>Specified and troubleshot reporting for products using McKesson Enterprise Intelligence. Metrics included doctor performance, unit performance, and patient data.</li>
                <li>Collaborated with geographically dispersed teams including offshore development.</li>
                <li>Earned four On the Spot awards from four different managers.</li>
            </ul>
        </Job>
        <Job company="OptiFrame Software" years="2002-2007" position="Product Manager">
            <ul className={classes.BulletList}>
                <li>Developed and implemented a storyboarding process and a peer documentation review process, ensuring consistency across the platform and significantly reducing missed use cases and user stories.</li>
                <li>Implemented and maintained a user-centered design process across a multi-function platform.  Result was a new, consistent user interface for both look and user interaction.</li>
                <li>Trained junior analysts on requirements elicitation, requirements writing, and general development strategy. </li>
                <li>Promoted the company and its software at multiple industry trade shows across the country and internationally.</li>
            </ul>
        </Job>



    </div>
)

export default resume