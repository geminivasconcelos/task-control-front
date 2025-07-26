import React from "react";
import "./TaskDetails.css";

interface TaskDetailsProps {
  title: string;
  time: string;
  location: string;
  place: string;
  onClose: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  title,
  time,
  location,
  onClose,
}) => {
  return (
    <div className="task-details-overlay">
      <div className="task-details">
        <div className="task-details-header">
          <p className="task-details-title">{title}</p>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="task-details-subheader">
          <span className="task-details-priority">Alta</span>
          <span className="task-details-status">Não Iniciada</span>
          <span className="task-details-status">UFBA</span>
        </div>
        <div className="task-details-info-time-location">
          <p className="task-details-info-time">
            <span className="task-details-info-icon">🕒</span>
            <span className="task-details-info-text">{time}</span>
          </p>
          <p className="task-details-info-location">
            <span className="task-details-info-icon">📍</span>
            <span className="task-details-info-text">{location}</span>
          </p>
        </div>

        <div className="task-details-description">
          <span className="task-details-description-title">Descrição</span>
          <textarea
            name="description"
            id="description"
            value={
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque."
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
