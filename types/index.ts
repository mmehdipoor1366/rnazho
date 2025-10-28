/**
 * Common TypeScript type definitions for the application
 */

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin' | 'provider';
  createdAt: Date;
  updatedAt: Date;
}

// Appointment types
export interface Appointment {
  id: string;
  userId: string;
  providerId: string;
  serviceId: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Service types
export interface Service {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: string;
  providerId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Provider types
export interface Provider {
  id: string;
  name: string;
  description: string;
  specialization: string[];
  avatar?: string;
  rating: number;
  reviewCount: number;
  workingHours: WorkingHours[];
  location?: Location;
  createdAt: Date;
  updatedAt: Date;
}

// Working hours
export interface WorkingHours {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 6 = Saturday
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  isOpen: boolean;
}

// Location
export interface Location {
  address: string;
  city: string;
  province: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AppointmentFormData {
  serviceId: string;
  providerId: string;
  date: string;
  time: string;
  notes?: string;
}

// Component props types
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}