const products = [
    {
        id: '1',
        name: 'Coca-cola Lata',
        price: 300,
        category: 'Gaseosas',
        img: '',
        stock: 240,
        description: 'Descripcion de Coca-cola Lata'
    },
   
    {
        id: '2',
        name: 'Cerveza Quilmes',
        price: 400,
        category: 'Cervezas',
        img: '',
        stock: 240,
        description: 'Descripcion de Cerveza Quilmes'
    },

    {
        id: '3',
        name: 'Fernet Branca',
        price: 2000,
        category: 'Aperitivos',
        img: '',
        stock: 120,
        description: 'Descripcion de Fernet Branca'
    },

    {
       id: '4',
        name: 'Vino Toro',
        price: 350,
        category: 'Vinos',
        img: '',
        stock: 120,
        description: 'Descripcion de Vino Toro' 
    },

    {
        id: '5',
        name: 'Promo Fernet',
        price: 2600,
        category: 'Promos',
        img: '',
        stock: 120,
        description: 'Descripcion de Promo Fernet'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}