import api from "../api/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};


export const getUserProfile = async () => {
  try {
    const response = await api.get(`/user/profile`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export const updateUserProfile = async (userData: { name: string; email: string }) => {
  try {
    const response = await api.patch(
      `/user/profile`,
      userData,
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

export const deleteUserAccount = async () => {
  try {
    const response = await api.delete(`/user/account`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting user account:", error);
    throw error;
  }
}

export const updatePassword = async (currentPassword: string, newPassword: string) => {
  try {
    const response = await api.patch(
      `/user/password`,
      { currentPassword, newPassword },
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
}

