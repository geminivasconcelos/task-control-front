import { useState } from "react";
import "./Task.css";
import TaskDetails from "./TaskDetails";

interface TaskData {
  title: string;
  time: string;
  location: string;
  place: string;
}

const taskList: TaskData[] = [
  {
    title: "Aula Laboratório de Programação Web",
    time: "20:20PM–22:10PM",
    location: "ICC II - UFBA",
    place: "UFBA",
  },
  {
    title: "Reunião com Orientador",
    time: "14:00PM–15:00PM",
    location: "Google Meet",
    place: "Online",
  },
  {
    title: "Entrega de Projeto",
    time: "23:59PM",
    location: "SIGAA",
    place: "UFBA",
  },
];

const Task = () => {
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);

  return (
    <>
      <section className="task-list">
        {taskList.map((task, index) => (
          <div
            key={index}
            className={`task-card ${selectedTask?.title === task.title ? "selected" : ""}`}
            onClick={() => setSelectedTask(task)}
          >
            <strong>{task.title}</strong>
            <p>{task.time}</p>
            <p>{task.location}</p>
            <p>{task.place}</p>
            <span className="eye-icon">👁️</span>
          </div>
        ))}
      </section>

      {selectedTask && (
        <TaskDetails
          {...selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </>
  );
};

export default Task;
