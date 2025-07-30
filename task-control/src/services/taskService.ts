import api from "../api/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getTasks = async () => {
  try {
    const response = await api.get(`/tasks`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const getTaskById = async (taskId: string) => {
  try {
    const response = await api.get(`/tasks/${taskId}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw error;
  }
};

export const getTaskByCategory = async (category: string) => {
  try {
    const response = await api.get(`/tasks/category/${category}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by category:", error);
    throw error;
  }
};

export const getTaskByStatus = async (status: string) => {
  try {
    const response = await api.get(`/tasks/status/${status}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by status:", error);
    throw error;
  }
};

export const getTaskByPriority = async (priority: string) => {
  try {
    const response = await api.get(`/tasks/priority/${priority}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by priority:", error);
    throw error;
  }
};

export const getTaskByDueDate = async (dueDate: string) => {
  try {
    const response = await api.get(`/tasks/due/${dueDate}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by due date:", error);
    throw error;
  }
};

export const getTaskByInterval = async (startDate: string, endDate: string) => {
  try {
    const response = await api.get(`/tasks/interval`, {
      params: { startDate, endDate },
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks by interval:", error);
    throw error;
  }
};

export const createTask = async (taskData: any) => {
  try {
    const response = await api.post(`/tasks`, taskData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (taskId: string, taskData: any) => {
  try {
    const response = await api.put(`/tasks/${taskId}`, taskData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const response = await api.delete(`/tasks/${taskId}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
