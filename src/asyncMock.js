const products = [
    {
        id: '1',
        name: 'Marca tiento',
        price: 2800,
        category: 'Conjuntos',
        img: './components/Assets/Conjunto1.jpg',
        stock: 25,
        description: 'Descripcion de Conjunto'
    },
    {
        id: '2', 
        name: 'Lody Underwear', 
        price: 1200, 
        category: 'Boxers', 
        img: 'https://scontent.feze5-1.fna.fbcdn.net/v/t39.30808-6/301525121_478102934322842_3056834969711718064_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHUiAsuxFBh1dBi2j0cZe5-wgTWybwuITTCBNbJvC4hNN3G_PlasSbzWq8RgAdonQKn23Esh4cp3ZL0EJiUuIak&_nc_ohc=B2mLNBkbpIEAX83p7J3&_nc_oc=AQkju8KFFoqx7vCPJ1roVjXzA4c7gGzzosYi4KmrXtlz2OzVIZ4Vq5m2BoZSsZgvXQQ&_nc_ht=scontent.feze5-1.fna&oh=00_AfBML_KmXbhMSStecsSa5K3lu9V6XBowhDyWWUCCWvnHZA&oe=646E7D43', 
        stock: 5, 
        description: 'Descripcion de Lody Underwear'
},
    {
        id: '3', 
        name: 'Saphirus', 
        price: 1200, 
        category: 'Saphirus', 
        img: 'https://scontent.feze5-1.fna.fbcdn.net/v/t39.30808-6/267500418_455606939336661_755083387464729992_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFXB_G26SC6m-jhkE0VWPVU1geYEQsxIOjWB5gRCzEg6D5mWC_4U-POb253VwWOLfHJad8knFg93ckHBUs_bb9m&_nc_ohc=RprWAaDEOQYAX_XR9Gi&_nc_ht=scontent.feze5-1.fna&oh=00_AfCdIg_cncM_oLJUICH5qIZjMu3rI8SekVQ9DUfR20dNpQ&oe=646EDE73', 
        stock: 8, 
        description: 'Descripcion de Saphirus'
},
{
    id: '4',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: 'https://scontent.feze5-1.fna.fbcdn.net/v/t39.30808-6/300500595_478102937656175_2611386727167018907_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHK-baEIygEdaEHr5FYogy8ps2EbTMwhhqmzYRtMzCGGhV8eZzVqWaMq6JiICy2FnYDURhzQqdg5-VjsbmnYjNj&_nc_ohc=t8zFERt51zkAX8aO0Yu&_nc_ht=scontent.feze5-1.fna&oh=00_AfB1U1cTrzJxVxPXKr_M9-m8ZxmkiCtuAHAsRkuL6ckSYQ&oe=646E6695',
    stock: 25,
    description: 'Descripcion de Conjunto'
},
{
    id: '5',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: 'https://scontent.feze5-1.fna.fbcdn.net/v/t39.30808-6/278071499_525916298972391_1359912305412184717_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG7VsTLpqyeLT3Go2ZiD51sY8_xzsNIjjFjz_HOw0iOMSuzd3uBfEaH1xQkIhD1WlVRuGX97K2JFQIsIISzHNLM&_nc_ohc=bBOdPxG_WtIAX8vY9kk&_nc_ht=scontent.feze5-1.fna&oh=00_AfBrlYH661EQ_hPB05v6MegObXxeqiNU6hRzdVyjdNZpDQ&oe=646F34CE',
    stock: 25,
    description: 'Descripcion de Conjunto'
},
{
    id: '6',
    name: 'Marca tiento',
    price: 2800,
    category: 'Conjuntos',
    img: 'https://scontent.feze5-1.fna.fbcdn.net/v/t39.30808-6/282182506_554286066135414_3115559830353172237_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHme-1RU4CyXm1tPj7uCCd3qQ-U3Mlu0p6pD5TcyW7SnoEeKFYxmH1Fjn7ZTAbQtrNxx6maxjTAau5i0oEyCvBd&_nc_ohc=U5aY2vzA9eEAX_LY3t7&_nc_ht=scontent.feze5-1.fna&oh=00_AfCDtrRvO4eEF9ylWQxhuedllNgXsgvRqr1Y76TYegGkyw&oe=646E7B67',
    stock: 25,
    description: 'Descripcion de Conjunto'
}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter    (prod => prod.category === productCategory))
        }, 500)
    })

}