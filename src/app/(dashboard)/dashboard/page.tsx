'use client'

import { useAuth } from '@/contexts/AuthContext'
import { 
  Package, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export default function DashboardPage() {
  const { userProfile } = useAuth()

  // Dados mockados - depois virão do banco
  const stats = [
    {
      name: 'Total de Produtos',
      value: '248',
      change: '+12%',
      changeType: 'increase',
      icon: Package,
      color: 'blue',
    },
    {
      name: 'Valor em Estoque',
      value: 'R$ 45.231',
      change: '+23%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'green',
    },
    {
      name: 'Vendas do Mês',
      value: 'R$ 12.450',
      change: '+5%',
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'purple',
    },
    {
      name: 'Estoque Baixo',
      value: '12',
      change: '-3%',
      changeType: 'decrease',
      icon: AlertTriangle,
      color: 'red',
    },
  ]

  const lowStockProducts = [
    { name: 'Camiseta Básica Branca (M)', stock: 3, minStock: 10 },
    { name: 'Calça Jeans Masculina (42)', stock: 2, minStock: 5 },
    { name: 'Tênis Esportivo (39)', stock: 1, minStock: 6 },
    { name: 'Bermuda Cargo Bege (G)', stock: 4, minStock: 8 },
  ]

  const recentSales = [
    { id: '001', customer: 'João Silva', total: 299.90, items: 3, time: '10 min atrás' },
    { id: '002', customer: 'Maria Santos', total: 149.90, items: 1, time: '25 min atrás' },
    { id: '003', customer: 'Pedro Costa', total: 589.80, items: 5, time: '1h atrás' },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      red: 'bg-red-500',
    }
    return colors[color] || 'bg-gray-500'
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo, {userProfile?.full_name?.split(' ')[0] || 'Usuário'}! 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Aqui está um resumo do seu negócio hoje
        </p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1">
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-600" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === 'increase'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">vs mês anterior</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Produtos com Estoque Baixo */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Estoque Baixo
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Ver todos
            </button>
          </div>

          <div className="space-y-4">
            {lowStockProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Estoque: <span className="font-semibold text-red-600">{product.stock}</span> / Mínimo: {product.minStock}
                  </p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                  Repor
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Vendas Recentes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-green-500" />
              Vendas Recentes
            </h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Ver todas
            </button>
          </div>

          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div
                key={sale.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-gray-900">{sale.customer}</p>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                      #{sale.id}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {sale.items} {sale.items === 1 ? 'item' : 'itens'} • {sale.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    R$ {sale.total.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
            <Package className="w-8 h-8 mb-2" />
            <p className="font-semibold">Adicionar Produto</p>
            <p className="text-sm opacity-90 mt-1">Cadastre novos produtos</p>
          </button>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
            <TrendingUp className="w-8 h-8 mb-2" />
            <p className="font-semibold">Registrar Entrada</p>
            <p className="text-sm opacity-90 mt-1">Adicione estoque</p>
          </button>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-4 rounded-lg transition-all text-left">
            <ShoppingCart className="w-8 h-8 mb-2" />
            <p className="font-semibold">Nova Venda</p>
            <p className="text-sm opacity-90 mt-1">Registre uma venda</p>
          </button>
        </div>
      </div>
    </div>
  )
}
