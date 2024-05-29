import React, { useEffect, useRef, useState } from 'react';
import '../style/skills.css';
import cLogo from "../assets/languageIcons/c.png";
import cppLogo from "../assets/languageIcons/c++.png";
import pythonLogo from "../assets/languageIcons/python.png";
import javaLogo from "../assets/languageIcons/java.png";
import javascriptLogo from "../assets/languageIcons/js.png";
import reactLogo from "../assets/languageIcons/react.png";
import flutterLogo from "../assets/languageIcons/flutter.png";
import node from "../assets/languageIcons/nodejs.png";
import express from "../assets/languageIcons/expressjs.png";
import mongoDb from "../assets/languageIcons/mongoDb.png";
import dart from "../assets/languageIcons/dart.png";
import firebase from "../assets/languageIcons/fireabase.png";
import html from "../assets/languageIcons/html.png";
import css from "../assets/languageIcons/css.png";
import tailwind from "../assets/languageIcons/tailwind.png";
import spline from "../assets/languageIcons/spline.png";
import typescript from "../assets/languageIcons/typescript.png";
import github from "../assets/languageIcons/github.png";

const Skills = () => {
  const skillsRef = useRef([]);
  const lineRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const skills = [
    { name: "C", logo: cLogo },
    { name: "C++", logo: cppLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Java", logo: javaLogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "React", logo: reactLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "node", logo: node },
    { name: "express", logo: express },
    { name: "mongoDb", logo: mongoDb },
    { name: "dart", logo: dart },
    { name: "firebase", logo: firebase },
    { name: "HTML", logo: html },
    { name: "Css", logo: css },
    { name: "Tailwind", logo: tailwind },
    { name: "spline", logo: spline },
    { name: "TypeScript", logo: typescript },
    { name: "Github", logo: github },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight - 5;
      const skillsContainerTop = skillsContainerRef.current.offsetTop;
      const skillsContainerHeight = skillsContainerRef.current.clientHeight;

      const maxHeight = skillsContainerHeight - 30; // Adjust as needed
      const lineHeight = Math.min(scrollPosition - skillsContainerTop - 20, maxHeight);
      if (lineHeight >= 0) {
        setScrollHeight(lineHeight);
      } else {
        setScrollHeight(0);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const currentSkills = skillsRef.current;
    currentSkills.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      currentSkills.forEach((skill) => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  const openingTag = "<";
  const aboutTag = "My Skills";
  const closeTag = "/>";

  return (
    <div className="skillsetContainer">
      <div className="skill-title">
        {openingTag} <span>{aboutTag}</span> {closeTag}
      </div>
      <div className="skills-container" ref={skillsContainerRef}>
        <div className="line" style={{ height: `${scrollHeight}px` }} ref={lineRef}></div>
        {skills.map((skill, index) => (
          <div key={index} className="skill" ref={el => skillsRef.current[index] = el}>
            <img src={skill.logo} alt={skill.name} />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
