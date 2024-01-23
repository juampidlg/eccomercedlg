let productos = [
    {
    "id": 1,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Blanco 500cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/11341.jpg",
    "Precio": "503.89"
    },
    {
    "id": 2,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Molto Alcohol 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4830.jpg",
    "Precio": "559.89"
    },
    {
    "id": 3,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Dos Anclas Alcohol 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/11341.jpg",
    "Precio": "559.89"
    },
    {
    "id": 4,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Vino 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4843.jpg",
    "Precio": "671.88"
    },
    {
    "id": 5,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Manzana 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4832.jpg",
    "Precio": "671.88"
    },
    {
    "id": 6,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Marolio Mezcla 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/3/0/304.jpg",
    "Precio": "1099.9"
    },
    {
    "id": 7,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Molto Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20019.jpg",
    "Precio": "1343.88"
    },
    {
    "id": 8,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Ca�uelas Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/218.jpg",
    "Precio": "1349.9"
    },
    {
    "id": 9,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Cocinero Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/3/0/300.jpg",
    "Precio": "1399.9"
    },
    {
    "id": 10,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Natura Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/119.jpg",
    "Precio": "1599.9"
    },
    {
    "id": 11,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Arcor de Maiz 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/197.jpg",
    "Precio": "4479.88"
    }
    ]

    export const obtenerProductos = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)},5000)
            }
        )
    }