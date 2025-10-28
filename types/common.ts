// Common types for the Rnazho appointment booking system

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "provider" | "admin";
}

export interface Appointment {
  id: string;
  userId: string;
  providerId: string;
  serviceId: string;
  date: Date;
  time: string;
  duration: number; // in minutes
  status: "pending" | "confirmed" | "cancelled" | "completed";
  notes?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: string;
}

export interface TimeSlot {
  id: string;
  providerId: string;
  date: Date;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Provider {
  id: string;
  name: string;
  description: string;
  services: string[]; // Array of service IDs
  rating: number;
  totalReviews: number;
  avatar?: string;
}
