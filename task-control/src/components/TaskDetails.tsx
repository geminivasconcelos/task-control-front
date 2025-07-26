import React, { useState } from "react";
import "./TaskDetails.css";

interface TaskDetailsProps {
  title: string;
  time: string;
  location: string;
  place?: string;
  priority?: string;
  status?: string;
  description?: string;
  onClose: () => void;
  onSave?: (data: {
    title: string;
    time: string;
    location: string;
    priority: string;
    status: string;
    description: string;
    place: string;
  }) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  title,
  time,
  location,
  place = "UFBA",
  priority = "Alta",
  status = "Não Iniciada",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
  onClose,
  onSave,
}) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editTime, setEditTime] = useState(time);
  const [editLocation, setEditLocation] = useState(location);
  const [editPriority, setEditPriority] = useState(priority);
  const [editStatus, setEditStatus] = useState(status);
  const [editDescription, setEditDescription] = useState(description);
  const [editPlace, setEditPlace] = useState(place);

  const [editingTitle, setEditingTitle] = useState(false);
  const [editingTime, setEditingTime] = useState(false);
  const [editingLocation, setEditingLocation] = useState(false);
  const [editingPriority, setEditingPriority] = useState(false);
  const [editingStatus, setEditingStatus] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [editingPlace, setEditingPlace] = useState(false);

  const handleSave = () => {
    if (onSave) {
      onSave({
        title: editTitle,
        time: editTime,
        location: editLocation,
        priority: editPriority,
        status: editStatus,
        description: editDescription,
        place: editPlace,
      });
    }
    onClose();
  };

  const handleBlur = (setEditing: (v: boolean) => void) => () => setEditing(false);
  const handleKeyDown = (setEditing: (v: boolean) => void) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter") setEditing(false);
  };

  return (
    <div className="task-details-overlay">
      <div className="task-details">
        <div className="task-details-header">
          {editingTitle ? (
            <input
              className="task-details-title task-details-editable"
              value={editTitle}
              autoFocus
              onChange={e => setEditTitle(e.target.value)}
              onBlur={handleBlur(setEditingTitle)}
              onKeyDown={handleKeyDown(setEditingTitle)}
            />
          ) : (
            <p
              className="task-details-title task-details-editable"
              onClick={() => setEditingTitle(true)}
            >
              {editTitle}
            </p>
          )}
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="task-details-subheader">
          {editingPriority ? (
            <select
              className="task-details-priority task-details-editable"
              value={editPriority}
              autoFocus
              onChange={e => setEditPriority(e.target.value)}
              onBlur={handleBlur(setEditingPriority)}
            >
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          ) : (
            <span
              className="task-details-priority task-details-editable"
              onClick={() => setEditingPriority(true)}
            >
              {editPriority}
            </span>
          )}
          {editingStatus ? (
            <select
              className="task-details-status task-details-editable"
              value={editStatus}
              autoFocus
              onChange={e => setEditStatus(e.target.value)}
              onBlur={handleBlur(setEditingStatus)}
            >
              <option value="Não Iniciada">Não Iniciada</option>
              <option value="Em Progresso">Em Progresso</option>
              <option value="Concluída">Concluída</option>
            </select>
          ) : (
            <span
              className="task-details-status task-details-editable"
              onClick={() => setEditingStatus(true)}
            >
              {editStatus}
            </span>
          )}
          {editingPlace ? (
            <input
              className="task-details-status task-details-editable"
              value={editPlace}
              autoFocus
              onChange={e => setEditPlace(e.target.value)}
              onBlur={handleBlur(setEditingPlace)}
              onKeyDown={handleKeyDown(setEditingPlace)}
            />
          ) : (
            <span
              className="task-details-status task-details-editable"
              onClick={() => setEditingPlace(true)}
            >
              {editPlace}
            </span>
          )}
        </div>
        <div className="task-details-info-time-location">
          <p className="task-details-info-time">
            <span className="task-details-info-icon">🕒</span>
            {editingTime ? (
              <input
                className="task-details-info-text task-details-editable"
                value={editTime}
                autoFocus
                onChange={e => setEditTime(e.target.value)}
                onBlur={handleBlur(setEditingTime)}
                onKeyDown={handleKeyDown(setEditingTime)}
              />
            ) : (
              <span
                className="task-details-info-text task-details-editable"
                onClick={() => setEditingTime(true)}
              >
                {editTime}
              </span>
            )}
          </p>
          <p className="task-details-info-location">
            <span className="task-details-info-icon">📍</span>
            {editingLocation ? (
              <input
                className="task-details-info-text task-details-editable"
                value={editLocation}
                autoFocus
                onChange={e => setEditLocation(e.target.value)}
                onBlur={handleBlur(setEditingLocation)}
                onKeyDown={handleKeyDown(setEditingLocation)}
              />
            ) : (
              <span
                className="task-details-info-text task-details-editable"
                onClick={() => setEditingLocation(true)}
              >
                {editLocation}
              </span>
            )}
          </p>
        </div>

        <div className="task-details-description">
          <span className="task-details-description-title">Descrição</span>
          {editingDescription ? (
            <textarea
              className="task-details-description-textarea task-details-editable"
              name="description"
              id="description"
              value={editDescription}
              autoFocus
              onChange={e => setEditDescription(e.target.value)}
              onBlur={handleBlur(setEditingDescription)}
            ></textarea>
          ) : (
            <div
              className="task-details-description-text task-details-editable"
              onClick={() => setEditingDescription(true)}
            >
              {editDescription}
            </div>
          )}
        </div>
        <div className="task-details-save-container">
          <button className="save-button" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
