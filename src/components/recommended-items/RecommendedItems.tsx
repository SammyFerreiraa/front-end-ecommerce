import React from 'react'
import ItemsRecommended from './ItemsRecommended'

const RecommendedItems = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-3 px-3 py-5">
      <h1 className="text-xl font-semibold text-zinc-900 lg:text-2xl lg:leading-loose">
        Produtos Recomendados
      </h1>
      <ItemsRecommended />
    </div>
  )
}

export default RecommendedItems
