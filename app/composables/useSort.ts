import type { Order, OrderByOption } from '~~/types/order'

export function useSort<T extends Record<string, unknown>>(orderInit: Order, orderByInit: OrderByOption['id']) {
  const order = ref<1 | -1>(orderInit)
  const orderBy = ref(orderByInit)

  const sort = (data: Ref<T[]>) => {
    return computed(() => {
      if (!orderBy.value)
        return data.value

      return data.value.sort((a, b) => {
        const aValue = a[orderBy.value]
        const bValue = b[orderBy.value]

        if (typeof aValue === 'number' && typeof bValue === 'number')
          return (aValue - bValue) * order.value

        if (typeof aValue === 'string' && typeof bValue === 'string')
          return aValue.localeCompare(bValue) * order.value

        return 0
      })
    })
  }

  return {
    order,
    orderBy,
    sort,
  }
}
