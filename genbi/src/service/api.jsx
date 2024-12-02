import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const baseUrl = "https://be.genbiuinam.org/api";
// const baseUrl = "http://192.168.1.131:8000/api";

const api = axios.create({
  baseURL: baseUrl,
});
const apipublic = axios.create({
  baseURL: baseUrl,
});

// Set Authorization header secara global
const setAuthHeader = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Fungsi untuk mengambil data dari endpoint tertentu
export const fetchData = async (endpoint, token) => {
  try {
    // Set Authorization header dengan token yang diberikan
    setAuthHeader(token);

    // Jadwalkan refresh token sebelum token kedaluwarsa
    scheduleTokenRefresh(token);

    // Fetch data dari endpoint yang diberikan
    const response = await api.get(endpoint);

    // Mengembalikan data dari response
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// // Get Data
// export const fetchData = async (endpoint, token) => {
//   try {
//     if (!token) {
//       throw new Error("Token tidak tersedia");
//     }
//     // Set Authorization header dengan token
//     if (token) {
//       setAuthHeader(token);
//     }

//     // Fetch data dari endpoint yang diberikan
//     const response = await api.get(endpoint);

//     // Mengembalikan data dari response
//     return response.data;
//   } catch (error) {
//     // Menangani error
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// Get Data public
export const fetchDataPublic = async (endpoint) => {
  try {
    // Fetch data dari endpoint yang diberikan
    const response = await apipublic.get(endpoint);

    // Mengembalikan data dari response
    return response.data;
  } catch (error) {
    // Menangani error
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Post Data / Create
export const postData = async (endpoint, data, token) => {
  try {
    // Set Authorization header dengan token jika diperlukan
    if (token) {
      setAuthHeader(token);
    }
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// // // Fungsi untuk melakukan permintaan PUT
// export const putData = async (endpoint, data) => {
//   try {
//     const response = await api.put(endpoint, data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// Delete data
export const deleteData = async (endpoint, token) => {
  try {
    // Set Authorization header dengan token
    setAuthHeader(token);
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async (endpoint, token) => {
  try {
    // Set Authorization header dengan token
    setAuthHeader(token);
    const response = await api.post(endpoint);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Fungsi untuk melakukan refresh token
const refreshToken = async () => {
  try {
    // Melakukan permintaan ke endpoint refresh-token
    const response = await api.post("/refresh-token");

    // Mengambil token baru dari response
    const newToken = response.data.token;

    // Menyimpan token baru (misalnya, ke dalam cookies atau localStorage)
    Cookies.set("token", newToken); // Simpan token baru ke cookies

    // Mengatur header Authorization dengan token yang baru
    setAuthHeader(newToken);

    console.log({ newToken });

    console.log("Token berhasil diperbarui");
    return newToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

// Fungsi untuk mengatur timer refresh token sebelum token kadaluarsa
const scheduleTokenRefresh = (token) => {
  try {
    // Mendekode token untuk mendapatkan waktu kedaluwarsa
    const decoded = jwtDecode(token);
    const exp = decoded.exp * 1000; // Waktu kedaluwarsa dalam milidetik
    const now = Date.now(); // Waktu saat ini dalam milidetik

    // Menghitung waktu sebelum token kadaluarsa (refresh 10 menit sebelum kadaluarsa)
    const refreshTime = exp - now - 10 * 60 * 1000;

    if (refreshTime > 0) {
      // Mengatur timer untuk refresh token
      setTimeout(async () => {
        try {
          const newToken = await refreshToken();
          scheduleTokenRefresh(newToken); // Menjadwalkan ulang dengan token baru
        } catch (error) {
          console.error("Gagal melakukan refresh token:", error);
        }
      }, refreshTime);
    } else {
      // Jika refreshTime kurang dari 0, segera lakukan refresh token
      refreshToken().then((newToken) => {
        scheduleTokenRefresh(newToken);
      });
    }
  } catch (error) {
    console.error("Error scheduling token refresh:", error);
  }
};

// // // Detail
// Fungsi untuk melakukan refresh token
// Fungsi untuk melakukan refresh token
const refreshTokenDetail = async () => {
  try {
    const response = await axios.post(`${baseUrl}/refresh-token`);

    if (response.data && response.data.token) {
      const newToken = response.data.token;
      // Simpan token baru di cookies dan update waktu kadaluarsa
      Cookies.set("token", newToken, { expires: 1 }); // Expire 1 hari, atau sesuaikan dengan waktu valid token

      console.log("Token berhasil diperbarui");
      return newToken;
    } else {
      throw new Error(
        "Refresh token gagal, respons tidak memiliki token baru."
      );
    }
  } catch (error) {
    console.error("Error refreshing token:", error.message);
    throw error;
  }
};

// Fungsi untuk mengecek apakah token mendekati kadaluarsa dan melakukan refresh
const checkAndRefreshToken = async (token) => {
  try {
    const decoded = jwtDecode(token);
    const exp = decoded.exp * 1000; // Waktu kadaluarsa dalam milidetik
    const now = Date.now();

    // Waktu 10 menit sebelum kadaluarsa
    const refreshThreshold = exp - 10 * 60 * 1000;

    if (now >= refreshThreshold) {
      console.log("Token hampir kadaluarsa, melakukan refresh...");
      return await refreshTokenDetail();
    }

    // Token masih valid
    return token;
  } catch (error) {
    console.error("Error checking or refreshing token detail:", error.message);
    return await refreshTokenDetail();
  }
};

// Fungsi untuk mengambil data detail dengan dukungan refresh token
export const detail = async (endpoint, token, revalidateSeconds = 10) => {
  try {
    // Periksa dan perbarui token jika diperlukan

    const validToken = await checkAndRefreshToken(token);

    // Mengatur header Authorization dengan token yang valid
    const headers = validToken ? { Authorization: `Bearer ${validToken}` } : {};

    // Fetch data dari endpoint yang diberikan dengan revalidate
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers,
      next: { revalidate: revalidateSeconds },
    });

    // Cek jika respons tidak oke
    if (!response.ok) {
      throw new Error("Gagal memuat data detail");
    }

    // Mengambil data dari respons
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data detail:", error.message);
    throw error;
  }
};

// Setup untuk melakukan refresh token otomatis
const setupAutoRefreshToken = (initialToken) => {
  try {
    const decoded = jwtDecode(initialToken);
    const exp = decoded.exp * 1000; // Convert to milliseconds
    const now = Date.now();

    // Refresh token 10 menit sebelum kadaluarsa
    const timeBeforeRefresh = exp - now - 10 * 60 * 1000;

    if (timeBeforeRefresh > 0) {
      setTimeout(async () => {
        try {
          await refreshTokenDetail();
        } catch (err) {
          console.error("Error scheduling token refresh detail:", err.message);
        }
      }, timeBeforeRefresh);
    }
  } catch (error) {
    console.error("Error setting up token refresh detail:", error.message);
  }
};

// Setup refresh token otomatis saat halaman dimuat atau token didapatkan
const token = Cookies.get("token");
if (token) {
  setupAutoRefreshToken(token);
}
