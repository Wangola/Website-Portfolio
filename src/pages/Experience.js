import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import { TbSchool as SchoolIcon } from "react-icons/tb";
import { HiOutlinePresentationChartBar as InternIcon } from "react-icons/hi";
import { MdOutlineWorkOutline as WorkIcon } from "react-icons/md";
import { TbQuestionMark as QuestionMark } from "react-icons/tb";

function Experience() {
  // Additional Style to update indentation
  const listItemStyles = {
    wordWrap: "break-word",
    textIndent: "-1.5em",
    paddingLeft: "2em",
  };

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#0086FF">
        {/* FSW */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2017 - 2019"
          iconStyle={{
            background: "linear-gradient(to top left, red, yellow)",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Florida SouthWestern State College (FSW)
          </h3>
          <p> Associate in Arts, General Studies (AA)</p>
          <li style={listItemStyles}>Dean’s List Fall 2017 – Summer 2019</li>
        </VerticalTimelineElement>

        {/* FGCU */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Aug 2019 - May 2022"
          iconStyle={{
            background: "linear-gradient(to top left, red, yellow)",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Florida Gulf Coast University (FGCU)
          </h3>
          <p> Bachelor of Science - BS, Software Engineering (BS)</p>
          <li style={listItemStyles}>Cumulative GPA 3.70</li>
          <li style={listItemStyles}>Dean’s List Spring 2020 – Spring 2022</li>
          <li style={listItemStyles}>Magna Cum Laude</li>
        </VerticalTimelineElement>

        {/* d3 Creative Studio */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Oct 2021 - Dec 2022"
          iconStyle={{
            background: "linear-gradient(to top left, red, yellow)",
          }}
          icon={<InternIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineering Intern
          </h3>
          <p> d3 Creative Studio - Punta Gorda, FL (Hybrid)</p>
          <li style={listItemStyles}> Led the project team for Hohme.</li>
          <li style={listItemStyles}>
            Obtained and created requirements for Homeowner, Builder, and
            Service provider websites for the V1 prototype
          </li>
          <li style={listItemStyles}>
            Designed NoSQL data structure and developed a Builder Dashboard
            prototype using React.js and AWS Services within one month
          </li>
        </VerticalTimelineElement>

        {/* Hohme.io */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Jun 2022 - Dec 2022"
          iconStyle={{
            background: "linear-gradient(to top left, red, yellow)",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Independent Contractor
          </h3>
          <p> Hohme.io - Punta Gorda, FL (Hybrid)</p>
          <li style={listItemStyles}>
            Identified customer journey for Hohme from awareness to loyalty
          </li>
          <li style={listItemStyles}>
            Developed digital twins of model homes and constructed feedback loop
            for incoming users
          </li>
          <li style={listItemStyles}>
            Generated onboarding resources including AI videos and FQA websites
            and verified app connectivity with IoT providers
          </li>
        </VerticalTimelineElement>

        {/* ??? */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="?? - ??"
          iconStyle={{
            background: "linear-gradient(to top left, red, yellow)",
          }}
          icon={<QuestionMark />}
        >
          <h3 className="vertical-timeline-element-title">
            Something awesome....
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
