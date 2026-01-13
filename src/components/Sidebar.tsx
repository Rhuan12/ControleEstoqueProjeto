'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3,
  Settings,
  Users,
  FolderTree,
  TrendingUp,
  Package2
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
}

interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Produtos', href: '/dashboard/produtos', icon: Package },
  { name: 'Categorias', href: '/dashboard/categorias', icon: FolderTree },
  { name: 'Estoque', href: '/dashboard/estoque', icon: Package2 },
  { name: 'Movimentações', href: '/dashboard/movimentacoes', icon: TrendingUp },
  { name: 'Vendas', href: '/dashboard/vendas', icon: ShoppingCart },
  { name: 'Relatórios', href: '/dashboard/relatorios', icon: BarChart3 },
  { name: 'Usuários', href: '/dashboard/usuarios', icon: Users },
  { name: 'Configurações', href: '/dashboard/configuracoes', icon: Settings },
]

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-screen transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-0
          w-64 bg-white border-r border-gray-200
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Stock Control</h1>
                <p className="text-xs text-gray-500">Sistema de Estoque</p>
              </div>
            </Link>
          </div>

          {/* Navegação */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/dashboard' && pathname.startsWith(item.href))
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                        ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Plano atual */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 text-white">
              <p className="text-sm font-semibold mb-1">Plano Gratuito</p>
              <p className="text-xs opacity-90 mb-3">Até 100 produtos</p>
              <button className="w-full bg-white text-blue-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Fazer Upgrade
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
