
export const loadProductsActions = () =>({
    type:'LOAD_PRODUCTS'
})

export const productsLoadedActions = products => ({
    type:'PRODUCTS_LOADED',
    products
})