import axios from "axios";


const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export const login = async (email: string, password: string) => {
  console.log("Chave Secreta:", password);
  console.log("Email:", email);
  try {
    const response = await api.post("/authentication/login", {
      email,
      password: password,
    });

    if (response.data.Authorization) {
      try {
        localStorage.setItem("authToken", response.data.Authorization);

        const savedToken = localStorage.getItem("authToken");
        if (savedToken !== response.data.Authorization) {
          throw new Error("Falha ao salvar token de autenticação");
        }
      } catch (storageError) {
        throw new Error("Erro ao salvar dados de autenticação");
      }
    } else {
      throw new Error(
        "Token de autenticação não encontrado na resposta do servidor"
      );
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  name: string,
  surname: string,
  email: string,
  password: string
) => {
  try {
    const response = await api.post("/register", {
      name,
      surname,
      email,
      password,
    });

    if (response.data.Authorization) {
      localStorage.setItem("authToken", response.data.Authorization);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const isAuthenticated = () => {
  const token = getToken();
  return token !== null;
};

export const debugLocalStorage = () => {
  const token = localStorage.getItem("authToken");
  const allItems = Object.keys(localStorage);

  localStorage.setItem("test", "funcionando");
  const testValue = localStorage.getItem("test");
  localStorage.removeItem("test");

  return {
    authToken: token,
    allItems: allItems,
    testWorking: testValue === "funcionando",
  };
};

export const validateToken = () => {
  const token = getToken();
  if (!token) {
    return false;
  }

  if (token.length < 10) {
    return false;
  }

  return true;
};
