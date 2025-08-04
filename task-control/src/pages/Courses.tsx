// import React from 'react';
import "./Courses.css";
import CourseCard from "../components/CourseCard";
import Layout from "../components/Layout";
import ScheduleCalendar from "../components/ScheduleCalendar";

const Courses = () => {
  const courses = [
    {
      title: "Modern Art",
      teacher: "Prof. Alicia Mayer",
      level: "Beginner level",
      completed: 75,
      stats: { videos: 90, hours: 62, activities: 71 },
    },
    {
      title: "Sketching",
      teacher: "Mike Dickens",
      level: "Advanced level",
      completed: 30,
      stats: { videos: 25, hours: 52, activities: 22 },
    },
    {
      title: "Arabic Calligraphy",
      teacher: "Mahnoor Moably",
      level: "Sertificated 🎉",
      completed: 100,
      stats: { videos: 31, hours: 28, activities: 11 },
    },
  ];

  return (
    <Layout>
      <div className="courses-page">
        <h1 className="courses-title">My Courses</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <h2 className="section-title">Schedule</h2>
        <ScheduleCalendar />
      </div>
    </Layout>
  );
};

export default Courses;
