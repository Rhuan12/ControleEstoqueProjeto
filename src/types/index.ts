// Types principais do sistema

export interface Organization {
  id: string
  name: string
  plan: 'free' | 'basic' | 'premium' | 'enterprise'
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  organization_id: string
  role: 'admin' | 'manager' | 'user'
  full_name: string
  avatar_url?: string
  created_at: string
}

export interface Category {
  id: string
  organization_id: string
  name: string
  description?: string
  parent_id?: string
  created_at: string
}

export interface Product {
  id: string
  organization_id: string
  name: string
  description?: string
  sku: string
  barcode?: string
  category_id: string
  cost_price: number
  sale_price: number
  profit_margin?: number
  min_stock: number
  images: string[]
  is_active: boolean
  created_at: string
  updated_at: string
  category?: Category
  variants?: ProductVariant[]
}

export interface ProductVariant {
  id: string
  product_id: string
  size?: string
  color?: string
  sku_variant: string
  stock_quantity: number
  additional_price?: number
  created_at: string
  updated_at: string
}

export type MovementType = 'entrada' | 'saida' | 'ajuste'

export interface StockMovement {
  id: string
  organization_id: string
  product_variant_id: string
  type: MovementType
  quantity: number
  reason?: string
  user_id: string
  created_at: string
  product_variant?: ProductVariant
  user?: User
}

export interface Sale {
  id: string
  organization_id: string
  total: number
  discount?: number
  payment_method?: string
  customer_name?: string
  customer_phone?: string
  notes?: string
  user_id: string
  created_at: string
  items?: SaleItem[]
  user?: User
}

export interface SaleItem {
  id: string
  sale_id: string
  product_variant_id: string
  quantity: number
  unit_price: number
  subtotal: number
  product_variant?: ProductVariant
}

// Tipos para formulários e estados

export interface ProductFormData {
  name: string
  description?: string
  sku: string
  barcode?: string
  category_id: string
  cost_price: number
  sale_price: number
  min_stock: number
  images: string[]
  is_active: boolean
}

export interface StockMovementFormData {
  product_variant_id: string
  type: MovementType
  quantity: number
  reason?: string
}

export interface CategoryFormData {
  name: string
  description?: string
  parent_id?: string
}

// Tipos para Dashboard

export interface DashboardStats {
  total_products: number
  low_stock_products: number
  total_stock_value: number
  total_sales_today: number
  total_sales_month: number
}

export interface ChartData {
  name: string
  value: number
}

// Tipos para paginação

export interface PaginationParams {
  page: number
  per_page: number
  search?: string
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    per_page: number
    total: number
    total_pages: number
  }
}

// Tipos para filtros

export interface ProductFilters {
  category_id?: string
  min_price?: number
  max_price?: number
  in_stock?: boolean
  is_active?: boolean
}

export interface SaleFilters {
  start_date?: string
  end_date?: string
  customer_name?: string
  min_total?: number
  max_total?: number
}
