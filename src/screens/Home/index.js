import React from "react";
import Layout from "../../components/Layout";
import styles from "./home.module.css";

import { classes } from "../../data/classes";

export default function Home() {
  const [classOptions, setClassOptions] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState("Six (VI)");

  const [sectionOptions, setSectionOptions] = React.useState([]);
  const [selectedSection, setSelectedSection] = React.useState("");

  const [subjectOptions, setSubjectOptions] = React.useState([]);
  const [selectedSubject, setSelectedSubject] = React.useState("");

  // set options for initial rendering
  React.useEffect(() => {
    let temp = classes.map((elem) => elem.name);
    setClassOptions(temp);

    let class_six = classes.filter((op) => op.name === "Six (VI)")[0];
    let temp_sections = class_six.sections.map((op) => op.name);
    setSectionOptions(temp_sections);
    setSelectedSection(temp_sections[0]);

    let temp_subjects = class_six.subjects;
    setSubjectOptions(temp_subjects);
    setSelectedSubject(temp_subjects[0]);
  }, []);

  // set sections options after class selection
  React.useEffect(() => {
    let temp_class = classes.filter((op) => op.name === selectedClass)[0];

    let temp_sections = temp_class.sections.map((op) => op.name);
    setSectionOptions(temp_sections);

    let temp_subjects = temp_class.subjects;
    setSubjectOptions(temp_subjects);
  }, [selectedClass]);

  const handleClassSelection = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleSectionSelection = (e) => {
    setSelectedSection(e.target.value);
  };

  const handleSubjectSelection = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(selectedClass);
    console.log(selectedSection);
    console.log(selectedSubject);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftcontent}>
        <h1>
          <span className={styles.spanText}>Attendence</span> Sheet
        </h1>
        <p>Rezuan Ahmed Riyad</p>
        <p>Lecturer, Abed Ali Girls High School and College.</p>
      </div>

      <div className={styles.rightcontent}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.input}>
            <label>Class</label>
            <select name="classes" id="classes" onChange={handleClassSelection}>
              {classOptions
                ? classOptions.map((elem) => (
                    <option value={elem} key={elem}>
                      {elem}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className={styles.input}>
            <label>Section</label>
            <select
              name="sections"
              id="sections"
              onChange={handleSectionSelection}
            >
              {sectionOptions
                ? sectionOptions.map((elem) => (
                    <option value={elem} key={elem}>
                      {elem}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className={styles.input}>
            <label>Subject</label>
            <select
              name="subjects"
              id="subjects"
              onChange={handleSubjectSelection}
            >
              {subjectOptions
                ? subjectOptions.map((elem) => (
                    <option value={elem} key={elem}>
                      {elem}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <button type="submit">Find Sheet</button>
        </form>
      </div>
    </div>
  );
}
