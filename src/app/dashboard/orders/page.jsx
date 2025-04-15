import OrdersPage from '@/components/dashboard/orders'
import Container from '@/components/shared/common/Container'
import React from 'react'

const Orders = () => {
  return (
    <div className='flex-center w-full'>
      <Container>
        <OrdersPage/>
      </Container>
    </div>
  )
}

export default Orders