// src/components/CreateTaskModal.tsx
import React, { useState } from "react";
import "./CreateTaskModal.css";

type Task = {
  name: string;
  description: string;
  status: "TODO" | "DOING" | "DONE";
  priority: "Baixa" | "Média" | "Alta";
  startDate: string;
  endDate: string;
  createdBy: string;
  category: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
};

const CreateTaskModal: React.FC<Props> = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = useState<Task>({
    name: "",
    description: "",
    status: "TODO",
    priority: "Média",
    startDate: "",
    endDate: "",
    createdBy: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(task);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Criar nova tarefa</h2>

        <div className="modal-form">
          <div className="form-group">
            <label>Nome</label>
            <input name="name" value={task.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="TODO">TODO</option>
              <option value="DOING">DOING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>

          <div className="form-group">
            <label>Prioridade</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <div className="form-group">
            <label>Data de Início</label>
            <input
              type="date"
              name="startDate"
              value={task.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Data de Fim</label>
            <input
              type="date"
              name="endDate"
              value={task.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Descrição</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Categoria </label>
            <input
              name="category"
              value={task.category}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn" onClick={handleSubmit}>
            Criar
          </button>
          <button className="btn cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
