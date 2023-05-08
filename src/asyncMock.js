const products = [
    {
        id: '1',
        name: 'Coca-cola Lata',
        price: 300,
        category: 'Gaseosas',
        img: 'https://images.rappi.com.ar/products/1656470215111_1656470213411.jpg?d=200x200&e=webp',
        stock: 240,
        description: 'Descripcion de Coca-cola Lata'
    },
   
    {
        id: '2',
        name: 'Cerveza Quilmes',
        price: 400,
        category: 'Cervezas',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/267/330/products/quilmes-lata1-b1a161319affb5edb915950207731979-640-0.jpg',
        stock: 240,
        description: 'Descripcion de Cerveza Quilmes'
    },

    {
        id: '3',
        name: 'Fernet Branca',
        price: 2000,
        category: 'Aperitivos',
        img: 'https://www.puroescabio.com.ar/web/image/product.template/49631/image_256',
        stock: 120,
        description: 'Descripcion de Fernet Branca'
    },

    {
       id: '4',
        name: 'Vino Toro',
        price: 350,
        category: 'Vinos',
        img: 'https://www.comodinencasa.com.ar/arquivos/ids/157603-300-300/Vino-Toro-Tto.-T.-B-x-1-Lt.jpg?v=637376782693170000',
        stock: 120,
        description: 'Descripcion de Vino Toro' 
    },

    {
        id: '5',
        name: 'Promo Fernet',
        price: 2600,
        category: 'Promos',
        img: 'https://images.rappi.com.ar/products/1646881944938_1646881941250.jpg?d=200x200&e=webp',
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

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            const filteredProducts = products.filter((products) => products.category === categoryId);
            resolve(filteredProducts);
        }, 500)
    } )
}