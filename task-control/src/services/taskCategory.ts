import api from "../api/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const postCategoryTask = async (name: string, createdBy: string) => {
  try {
    const response = await api.post(
      `/tasks-category`,
      { name, createdBy },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating task category:", error);
    throw error;
  }
};

export const updateCategoryTask = async (id: string, name: string) => {
  try {
    const response = await api.patch(
      `/tasks-category/${id}`,
      { name },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating task category:", error);
    throw error;
  }
};

export const deleteCategoryTask = async (id: string) => {
  try {
    const response = await api.delete(`/tasks-category/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting task category:", error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get(`/tasks-category`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching task categories:", error);
    throw error;
  }
};

export const getCategoryById = async (id: string) => {
  try {
    const response = await api.get(`/tasks-category/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching task category by ID:", error);
    throw error;
  }
};
