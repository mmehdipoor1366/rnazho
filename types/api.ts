/**
 * API-related type definitions
 */

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestConfig {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number>;
}

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: unknown;
}

export type ApiHandler<T = unknown> = (
  req: Request
) => Promise<Response> | Response;