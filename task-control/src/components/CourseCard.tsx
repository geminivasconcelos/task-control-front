import React from "react";
import "./CourseCard.css";

interface CourseCardProps {
  title: string;
  teacher: string;
  level: string;
  completed: number;
  stats: {
    videos: number;
    hours: number;
    activities: number;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  teacher,
  level,
  completed,
  stats,
}) => {
  return (
    <div className="course-card">
      <div className="header">
        <h3>{title}</h3>
        <p className="teacher">{teacher}</p>
        <p className="level">{level}</p>
      </div>
      <div className="stats">
        <span>📕{stats.videos} </span>
        <span>📗{stats.hours} </span>
        <span>📝{stats.activities} </span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${completed}%` }}></div>
      </div>
      <p className="completed">Completed: {completed}%</p>
    </div>
  );
};

export default CourseCard;
