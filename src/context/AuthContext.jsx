import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('mindloop_token');
    const userData = localStorage.getItem('mindloop_user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('mindloop_token');
        localStorage.removeItem('mindloop_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock validation
          if (email && password.length >= 6) {
            resolve({
              data: {
                user: {
                  id: 1,
                  name: 'John Doe',
                  email: email,
                  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                  role: 'user'
                },
                token: 'mock_jwt_token_' + Date.now()
              }
            });
          } else {
            reject(new Error('Email atau password salah'));
          }
        }, 1500);
      });

      const { user: userData, token } = response.data;
      
      // Store in localStorage
      localStorage.setItem('mindloop_token', token);
      localStorage.setItem('mindloop_user', JSON.stringify(userData));
      
      setUser(userData);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login gagal. Silakan coba lagi.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true);
      
      // Simulate API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock validation
          if (userData.email && userData.password && userData.name) {
            resolve({
              data: {
                user: {
                  id: Date.now(),
                  name: userData.name,
                  email: userData.email,
                  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                  role: 'user'
                },
                token: 'mock_jwt_token_' + Date.now()
              }
            });
          } else {
            reject(new Error('Data registrasi tidak lengkap'));
          }
        }, 1500);
      });

      const { user: newUser, token } = response.data;
      
      // Store in localStorage
      localStorage.setItem('mindloop_token', token);
      localStorage.setItem('mindloop_user', JSON.stringify(newUser));
      
      setUser(newUser);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Registrasi gagal. Silakan coba lagi.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('mindloop_token');
    localStorage.removeItem('mindloop_user');
    setUser(null);
  };

  // Forgot password function
  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Mock email validation
          if (email && email.includes('@')) {
            resolve({ success: true });
          } else {
            reject(new Error('Email tidak valid'));
          }
        }, 1000);
      });

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Gagal mengirim email reset. Silakan coba lagi.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Reset password function
  const resetPassword = async (token, newPassword) => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (token && newPassword.length >= 8) {
            resolve({ success: true });
          } else {
            reject(new Error('Token tidak valid atau password terlalu pendek'));
          }
        }, 1000);
      });

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Gagal reset password. Silakan coba lagi.' 
      };
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (userData) => {
    try {
      setLoading(true);
      
      // Simulate API call
      const updatedUser = { ...user, ...userData };
      
      // Store in localStorage
      localStorage.setItem('mindloop_user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Gagal update profil.' 
      };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
