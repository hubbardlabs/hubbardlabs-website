export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationInfo;
}