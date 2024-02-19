
/*let productos = [
    {
    "id": "1",
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Blanco 500cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/11341.jpg",
    "Precio": "503.89",
    "Stock": "0"
    },
    {
    "id": 2,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Molto Alcohol 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4830.jpg",
    "Precio": "559.89",
    "Stock": "2"
    },
    {
    "id": 3,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Dos Anclas Alcohol 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/11341.jpg",
    "Precio": "559.89",
    "Stock": "20"
    },
    {
    "id": 4,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Vino 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4843.jpg",
    "Precio": "671.88",
    "Stock": "20"
    },
    {
    "id": 5,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Vinagre Marolio Manzana 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4832.jpg",
    "Precio": "671.88",
    "Stock": "20"
    },
    {
    "id": 6,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Marolio Mezcla 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/3/0/304.jpg",
    "Precio": "1099.9",
    "Stock": "20"
    },
    {
    "id": 7,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Molto Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20019.jpg",
    "Precio": "1343.88",
    "Stock": "20"
    },
    {
    "id": 8,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Ca�uelas Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/218.jpg",
    "Precio": "1349.9",
    "Stock": "20"
    },
    {
    "id": 9,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Cocinero Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/3/0/300.jpg",
    "Precio": "1399.9",
    "Stock": "20"
    },
    {
    "id": 10,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Natura Girasol 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/1/119.jpg",
    "Precio": "1599.9",
    "Stock": "20"
    },
    {
    "id": 11,
    "Rubro": "Almacen",
    "Categoria": "Aceites y Vinagres",
    "Nombre": "Aceite Arcor de Maiz 900 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/197.jpg",
    "Precio": "4479.88",
    "Stock": "20"
    },
    {
    "id": 12,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Mostaza Savora 60 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/1695_16814442356438cd8be92807.41029854.jpg",
    "Precio": "358.29",
    "Stock": "20"
    },
    {
    "id": 13,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Ketchup Hellmans Sachet 60 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/4/1407_16833456296455d0dd37a1e3.38224272.jpg",
    "Precio": "403.08",
    "Stock": "20"
    },
    {
    "id": 14,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Salsa Golf Natura 125 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20673.jpg",
    "Precio": "403.09",
    "Stock": "20"
    },
    {
    "id": 15,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Mayonesa Marolio Doypack 241 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/6/1/6176.jpg",
    "Precio": "425.49",
    "Stock": "20"
    },
    {
    "id": 16,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Chimichurri Marolio Clasico 285 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21247_1698464151653c81978dce71.33613173.jpg",
    "Precio": "880.74",
    "Stock": "20"
    },
    {
    "id": 17,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Salsa Tahiti Soja 265 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/16906.jpg",
    "Precio": "1626.11",
    "Stock": "20"
    },
    {
    "id": 18,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Salsa Dos Anclas Aji Picante",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20005.jpg",
    "Precio": "1791.98",
    "Stock": "20"
    },
    {
    "id": 19,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Mayonesa Natura Sachet 125 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/2/7276.jpg",
    "Precio": "302.29",
    "Stock": "20"
    },
    {
    "id": 20,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Mayones Molto Doypack 241 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22281.jpg",
    "Precio": "526.83",
    "Stock": "20"
    },
    {
    "id": 21,
    "Rubro": "Almacen",
    "Categoria": "Aderezos y Condimentos",
    "Nombre": "Sal Dos Anclas Parrillera Estcuhe 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/3/13140.jpg",
    "Precio": "436.69",
    "Stock": "20"
    },
    {
    "id": 22,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Sopa Alicante Criolla con Vegetales 72 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23689.jpg",
    "Precio": "851.08",
    "Stock": "20"
    },
    {
    "id": 23,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Sopa Molto Pronto Vegetales",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/4/24347.jpg",
    "Precio": "895.88",
    "Stock": "20"
    },
    {
    "id": 24,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Sopa Molto Pronto Arvejas 50 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/4/24345.jpg",
    "Precio": "895.88",
    "Stock": "20"
    },
    {
    "id": 25,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Sopa Knorr con Pollo Cabello de Angel",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17658_16814442366438cd8ce1d855.75319316.jpg",
    "Precio": "951.88",
    "Stock": "20"
    },
    {
    "id": 26,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Caldo Maggi Gallina 2 un",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/2759.jpg",
    "Precio": "223.88",
    "Stock": "20"
    },
    {
    "id": 27,
    "Rubro": "Almacen",
    "Categoria": "Caldos y Sopas",
    "Nombre": "Caldo Knorr Verdura 2 un",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/2/727_16833456296455d0dd42d091.76942398.jpg",
    "Precio": "246.28",
    "Stock": "20"
    },
    {
    "id": 28,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Arvejas Marolio Tetra Recart 340 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21637.jpg",
    "Precio": "447.89",
    "Stock": "20"
    },
    {
    "id": 29,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Arvejas Molto 350 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/19780.jpg",
    "Precio": "503.89",
    "Stock": "20"
    },
    {
    "id": 30,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Choclo Marolio Cremoso Amarillo 350 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25207.jpg",
    "Precio": "515.08",
    "Stock": "20"
    },
    {
    "id": 31,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Jardinera Molto 350 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20186_169120741964cdc6fb7ba111.82010793.jpg",
    "Precio": "655.09",
    "Stock": "20"
    },
    {
    "id": 32,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Picadillo Marolio 90 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/19163_1698464150653c8196a44d58.16313687.jpg",
    "Precio": "425.49",
    "Stock": "20"
    },
    {
    "id": 33,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Pate Swift 90 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/1/711_1.jpg",
    "Precio": "649.48",
    "Stock": "20"
    },
    {
    "id": 34,
    "Rubro": "Almacen",
    "Categoria": "Conservas y Legumbres",
    "Nombre": "Pate Molto 90 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26637_169872364865407740e65348.36380849.jpg",
    "Precio": "503.89",
    "Stock": "20"
    },
    {
    "id": 35,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Dulce de Leche Ilolay Cl�sico 200 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/4/24922.jpg",
    "Precio": "1174.88",
    "Stock": "20"
    },
    {
    "id": 36,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Dulce de Leche Marolio 400 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/2748.jpg",
    "Precio": "1187.09",
    "Stock": "20"
    },
    {
    "id": 37,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Dulce de Leche Marolio Repostero 400 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25901.jpg",
    "Precio": "1243.08",
    "Stock": "20"
    },
    {
    "id": 38,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Dulce de Leche La Paulina 400 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/3/13618.jpg",
    "Precio": "1355.06",
    "Stock": "20"
    },
    {
    "id": 39,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Mermelada Dulcor Durazno Pote 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26748.jpg",
    "Precio": "1075.09",
    "Stock": "20"
    },
    {
    "id": 40,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Mermelada Dulcor Frutilla Pote 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26749.jpg",
    "Precio": "1355.06",
    "Stock": "20"
    },
    {
    "id": 41,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Mermelada Noel Naranja Ligth 390 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/5/0/5013.jpg",
    "Precio": "1399.89",
    "Stock": "20"
    },
    {
    "id": 42,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Mermelada Dulcor Ciruela Frasco 454 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26283.jpg",
    "Precio": "1544.79",
    "Stock": "20"
    },
    {
    "id": 43,
    "Rubro": "Almacen",
    "Categoria": "Dulces y Mermeladas",
    "Nombre": "Mermela Molto Durazno Frasco 454 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/8/18997.jpg",
    "Precio": "1626.1",
    "Stock": "20"
    },
    {
    "id": 44,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Arroz Molto Largo Fino 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22074.jpg",
    "Precio": "1007.89",
    "Stock": "20"
    },
    {
    "id": 45,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Arros Ala Largo 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/229.jpg",
    "Precio": "1062.88",
    "Stock": "20"
    },
    {
    "id": 46,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Arroz Molto Largo Fino 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22073.jpg",
    "Precio": "2071.88",
    "Stock": "20"
    },
    {
    "id": 47,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Avena Marolio Tradicional 400 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/8/4858.jpg",
    "Precio": "1343.88",
    "Stock": "20"
    },
    {
    "id": 48,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Avena Nestun Banana 225 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/2175.jpg",
    "Precio": "1847.88",
    "Stock": "20"
    },
    {
    "id": 49,
    "Rubro": "Almacen",
    "Categoria": "Arroz y Cereales",
    "Nombre": "Avena Quaker Extra Fina 470 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/1672.jpg",
    "Precio": "2071.88",
    "Stock": "20"
    },
    {
    "id": 50,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Benedictino 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27980_1703733931658ceaab2f9e75.52433340.jpg",
    "Precio": "414.28",
    "Stock": "20"
    },
    {
    "id": 51,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Cellier 600 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27657_1679457638641a7d66d9a735.96530638.jpg",
    "Precio": "436.69",
    "Stock": "20"
    },
    {
    "id": 52,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Glaciar sin Gas 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27113.jpg",
    "Precio": "571.08",
    "Stock": "20"
    },
    {
    "id": 53,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Levite Manzana 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22310.jpg",
    "Precio": "447.88",
    "Stock": "20"
    },
    {
    "id": 54,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Brio Pomelo 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26398.jpg",
    "Precio": "515.08",
    "Stock": "20"
    },
    {
    "id": 55,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Brio Manzana 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26396.jpg",
    "Precio": "515.08",
    "Stock": "20"
    },
    {
    "id": 56,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Levite Naranja 1 lt",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25788.jpg",
    "Precio": "615.88",
    "Stock": "20"
    },
    {
    "id": 57,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Aquarius Naranja 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20990_1679457638641a7d66903764.57931600.jpg",
    "Precio": "1175.89",
    "Stock": "20"
    },
    {
    "id": 58,
    "Rubro": "Bebidas",
    "Categoria": "Aguas",
    "Nombre": "Agua Aquarius Pera 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20989_1679457638641a7d66c4ab05.56057872.jpg",
    "Precio": "1175.89",
    "Stock": "20"
    },
    {
    "id": 59,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Tres Torres Limon 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17489.jpg",
    "Precio": "783.89",
    "Stock": "20"
    },
    {
    "id": 60,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Marolio Pomelo Rosado 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23020.jpg",
    "Precio": "783.89",
    "Stock": "20"
    },
    {
    "id": 61,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Marolio Citrus 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/2/12136.jpg",
    "Precio": "783.89",
    "Stock": "20"
    },
    {
    "id": 62,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Marolio Cordillerano 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/8/8/8832.jpg",
    "Precio": "783.89",
    "Stock": "20"
    },
    {
    "id": 63,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Terma Pomelo Rosado 1,35 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20576.jpg",
    "Precio": "1063.89",
    "Stock": "20"
    },
    {
    "id": 64,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Terma Limon Cero 1,35 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/7/7797.jpg",
    "Precio": "1063.89",
    "Stock": "20"
    },
    {
    "id": 65,
    "Rubro": "Bebidas",
    "Categoria": "Amargos",
    "Nombre": "Amargo Terma Cuyano Cero 1,35 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/7/7795.jpg",
    "Precio": "1063.89",
    "Stock": "20"
    },
    {
    "id": 66,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Cafayate Reserva Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20600.jpg",
    "Precio": "2687.89",
    "Stock": "20"
    },
    {
    "id": 67,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Cafayate Reserva Cabernet Sauvegnon 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20598.jpg",
    "Precio": "2687.89",
    "Stock": "20"
    },
    {
    "id": 68,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Terrazas Cabernet Sauvegnon 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/9/4/9458_170433904565962665463c45.81848365.jpg",
    "Precio": "3807.88",
    "Stock": "20"
    },
    {
    "id": 69,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Alamos Cabernet 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20209.jpg",
    "Precio": "5151.89",
    "Stock": "20"
    },
    {
    "id": 70,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Famiglia Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21486.jpg",
    "Precio": "5375.69",
    "Stock": "20"
    },
    {
    "id": 71,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Nicasia Blend Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22542.jpg",
    "Precio": "6271.88",
    "Stock": "20"
    },
    {
    "id": 72,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Nicasia Cabernet Franc 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25224.jpg",
    "Precio": "6271.88",
    "Stock": "20"
    },
    {
    "id": 73,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Nicasia Blanco-Blan 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25223.jpg",
    "Precio": "6271.88",
    "Stock": "20"
    },
    {
    "id": 74,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Trumpeter Chardonnay 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27062.jpg",
    "Precio": "7503.88",
    "Stock": "20"
    },
    {
    "id": 75,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Saint Felicien Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21358.jpg",
    "Precio": "7503.88",
    "Stock": "20"
    },
    {
    "id": 76,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Serie A Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26492.jpg",
    "Precio": "8287.89",
    "Stock": "20"
    },
    {
    "id": 77,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Malamado Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21257.jpg",
    "Precio": "8399.88",
    "Stock": "20"
    },
    {
    "id": 78,
    "Rubro": "Bebidas",
    "Categoria": "Vinos",
    "Nombre": "Vino Ruttini Cabernet Malbec 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20904.jpg",
    "Precio": "12095.88",
    "Stock": "20"
    },
    {
    "id": 79,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Cuvee Mumm Leger Spritz 269cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27535.jpg",
    "Precio": "1007.89",
    "Stock": "20"
    },
    {
    "id": 80,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Cuvee Mumm Extra Brutt 269cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27534.jpg",
    "Precio": "1007.89",
    "Stock": "20"
    },
    {
    "id": 81,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Novecento Extra Brutt 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26932.jpg",
    "Precio": "1791.89",
    "Stock": "20"
    },
    {
    "id": 82,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne San Telmo Extra Brutt 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25719.jpg",
    "Precio": "2463.88",
    "Stock": "20"
    },
    {
    "id": 83,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Norton Dulce 750 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22507.jpg",
    "Precio": "2799.88",
    "Stock": "20"
    },
    {
    "id": 84,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Federico de Alvear Rosado Dulce 750cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/5/15944.jpg",
    "Precio": "2967.88",
    "Stock": "20"
    },
    {
    "id": 85,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Federico de Extra Dulce 750cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/5/15943.jpg",
    "Precio": "2967.89",
    "Stock": "20"
    },
    {
    "id": 86,
    "Rubro": "Bebidas",
    "Categoria": "Espumantes",
    "Nombre": "Champagne Federico de Extra Brutt 750cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/8/2/827.jpg",
    "Precio": "2967.89",
    "Stock": "20"
    },
    {
    "id": 87,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Corona Botella 330 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20250.jpg",
    "Precio": "895.88",
    "Stock": "20"
    },
    {
    "id": 88,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Schneider AFA 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20774.jpg",
    "Precio": "895.88",
    "Stock": "20"
    },
    {
    "id": 89,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Brahma Dorada 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/6/26798_16814442346438cd8acb8eb1.37323922.jpg",
    "Precio": "895.88",
    "Stock": "20"
    },
    {
    "id": 90,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Andes Origen Roja 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25900.jpg",
    "Precio": "951.89",
    "Stock": "20"
    },
    {
    "id": 91,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Andes Origen Rubia 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25860.jpg",
    "Precio": "951.89",
    "Stock": "20"
    },
    {
    "id": 92,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Quilmes Lata 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/2/4240.jpg",
    "Precio": "1007.89",
    "Stock": "20"
    },
    {
    "id": 93,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Imperial Lata 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23973.jpg",
    "Precio": "1030.29",
    "Stock": "20"
    },
    {
    "id": 94,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Miller Lata 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22567.jpg",
    "Precio": "1175.89",
    "Stock": "20"
    },
    {
    "id": 95,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Heineken Lata 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23975.jpg",
    "Precio": "1343.84",
    "Stock": "20"
    },
    {
    "id": 96,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Grolsch Lata 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22590.jpg",
    "Precio": "1343.88",
    "Stock": "20"
    },
    {
    "id": 97,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Stella Artois 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/4/24558.jpg",
    "Precio": "1343.88",
    "Stock": "20"
    },
    {
    "id": 98,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Antares Honey 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27462.jpg",
    "Precio": "1567.88",
    "Stock": "20"
    },
    {
    "id": 99,
    "Rubro": "Bebidas",
    "Categoria": "Cervezas",
    "Nombre": "Cerveza Antares Scoch 473 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27461.jpg",
    "Precio": "1567.88",
    "Stock": "20"
    },
    {
    "id": 100,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Coca Cola sin Azucar 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/5/15412_1679457641641a7d69b11d37.14031532.jpg",
    "Precio": "705.49",
    "Stock": "20"
    },
    {
    "id": 101,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Coca Cola  500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/7/8/7830_1679457641641a7d6918ed29.70758273.jpg",
    "Precio": "705.49",
    "Stock": "20"
    },
    {
    "id": 102,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Seven Up 354 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/4/2/4260_1679457640641a7d68785271.58394013.jpg",
    "Precio": "761.49",
    "Stock": "20"
    },
    {
    "id": 103,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Pepsi Cola 354 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/1605.jpg",
    "Precio": "761.49",
    "Stock": "20"
    },
    {
    "id": 104,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Seven Up 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/8/7/8702.jpg",
    "Precio": "817.48",
    "Stock": "20"
    },
    {
    "id": 105,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Pepsi Cola 500 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/8/7/8701.jpg",
    "Precio": "817.48",
    "Stock": "20"
    },
    {
    "id": 106,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Pomelo Ligth 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25113.jpg",
    "Precio": "828.69",
    "Stock": "20"
    },
    {
    "id": 107,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Cola Ligth 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25101_2.jpg",
    "Precio": "828.69",
    "Stock": "20"
    },
    {
    "id": 108,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Tonic Ligth 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27788_170606825265b0891c280b77.80505689.jpg",
    "Precio": "828.69",
    "Stock": "20"
    },
    {
    "id": 109,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Cola 1,5 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27693_1685677552647965f0158977.96471178.jpg",
    "Precio": "828.69",
    "Stock": "20"
    },
    {
    "id": 110,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Coca Cola Sin Azucar Lata 354 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25287_1679457638641a7d66a30de4.21232056.jpg",
    "Precio": "839.88",
    "Stock": "20"
    },
    {
    "id": 111,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Coca Cola  Lata 354 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/3/3/3389_1679457639641a7d6741e424.23394599.jpg",
    "Precio": "839.88",
    "Stock": "20"
    },
    {
    "id": 112,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Pomelo Ligth 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17626.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 113,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Naranja 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17517_169120742064cdc6fc4d4054.06630214.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 114,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Tonica 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17516_169120742064cdc6fc41f971.01706072.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 115,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Cola 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17513_169120741964cdc6fbbeae87.53223244.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 116,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Lima Limon 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17514_169120741964cdc6fbf04a01.11908551.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 117,
    "Rubro": "Bebidas",
    "Categoria": "Gaseosas",
    "Nombre": "Gaseosa Cunnington Clasica Pomelo 2,25 lts",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17515_169120741964cdc6fb9a5410.77431602.jpg",
    "Precio": "963.09",
    "Stock": "20"
    },
    {
    "id": 118,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Bondiola Marolio Envasado al vacio 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/8/18056.jpg",
    "Precio": "16497.49",
    "Stock": 5
    },
    {
    "id": 119,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Bondiola Lario mini 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/4/24171.jpg",
    "Precio": "22399.88",
    "Stock": "5"
    },
    {
    "id": 120,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Fiambre de Cerdo Caba�a Don Tom�s rectangular 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21528.jpg",
    "Precio": "3595.09",
    "Stock": "10"
    },
    {
    "id": 121,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Fiambre de Cerdo Don Antonino Pata 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/19814.jpg",
    "Precio": "3593.48",
    "Stock": "10"
    },
    {
    "id": 122,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Salchichon Champinion Primavera 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/9/5/9559.jpg",
    "Precio": "5359.09",
    "Stock": "10"
    },
    {
    "id": 123,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Mortadela Lario Bologna vejiga 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/9/3/9398.jpg",
    "Precio": "6887.89",
    "Stock": "10"
    },
    {
    "id": 124,
    "Rubro": "Frescos",
    "Categoria": "Fiambres",
    "Nombre": "Jamon Cocido 214 Delicato 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/9/7/9755.jpg",
    "Precio": "10079.88",
    "Stock": "5"
    },
    {
    "id": 125,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche Yatasto entera sin Tac sachet 1 lt",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23035.jpg",
    "Precio": "599.08",
    "Stock": "20"
    },
    {
    "id": 126,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche La Serenisima Liviana 1% sachet 1 lt",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20850.jpg",
    "Precio": "894.3",
    "Stock": "20"
    },
    {
    "id": 127,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche La Serenisima Clasica 3% sachet 1 lt",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/0/20849_1682740843644c966bb17307.15398671.jpg",
    "Precio": "894.3",
    "Stock": "20"
    },
    {
    "id": 128,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche Nido 3 200 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25376_1699500938654c538a954c52.51210229.jpg",
    "Precio": "447.88",
    "Stock": "20"
    },
    {
    "id": 129,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche Nestle Nidina 2 200 cc",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25939.jpg",
    "Precio": "559.89",
    "Stock": "20"
    },
    {
    "id": 130,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche Sancor Beb� 1 Nutrici�n Completa 200 ml",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/16556.jpg",
    "Precio": "816.47",
    "Stock": "20"
    },
    {
    "id": 131,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Leche Sancor BB Advance 2 200 ml",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27511.jpg",
    "Precio": "1141.27",
    "Stock": "20"
    },
    {
    "id": 132,
    "Rubro": "Frescos",
    "Categoria": "Lacteos",
    "Nombre": "Lecha Nutrilon Profutura 3 200 ml",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/3/23712.jpg",
    "Precio": "1253.28",
    "Stock": "20"
    },
    {
    "id": 133,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Tallarines Villa D'agri 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27684_1682740842644c966a9c6a38.05039069.jpg",
    "Precio": "950.88",
    "Stock": "10"
    },
    {
    "id": 134,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Fusiles Villa D'agri 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/7/27685_1682740844644c966c351319.96466092.jpg",
    "Precio": "1119.88",
    "Stock": "10"
    },
    {
    "id": 135,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Ravioles Mendia 4 Quesos 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25355.jpg",
    "Precio": "1454.88",
    "Stock": "10"
    },
    {
    "id": 136,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Ravioles Mendia Jamon Muzarella 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25354.jpg",
    "Precio": "1454.88",
    "Stock": "10"
    },
    {
    "id": 137,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Capelletis Villa D'agri 4 Quesos 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/6/16132.jpg",
    "Precio": "1342.88",
    "Stock": "10"
    },
    {
    "id": 138,
    "Rubro": "Frescos",
    "Categoria": "Pastas",
    "Nombre": "Capelletis Mendia Pollo y Verdura 500 grs",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/5/25358.jpg",
    "Precio": "1376.48",
    "Stock": "10"
    },
    {
    "id": 139,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Paulina Por Salut 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/5/8/5831.jpg",
    "Precio": "4743.07",
    "Stock": "5"
    },
    {
    "id": 140,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Paulina Doble Crema 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/1/21109.jpg",
    "Precio": "4878.59",
    "Stock": "5"
    },
    {
    "id": 141,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Paulina Cremoso 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/5/8/5830.jpg",
    "Precio": "5454.29",
    "Stock": "5"
    },
    {
    "id": 142,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Babilonia Sardo 1kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/7/17069.jpg",
    "Precio": "5790.29",
    "Stock": "5"
    },
    {
    "id": 143,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Serenisima Cremon 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/1/9/19850.jpg",
    "Precio": "5935.88",
    "Stock": "5"
    },
    {
    "id": 144,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Serenisima Cremon Ligth 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/2/2/22518.jpg",
    "Precio": "5935.88",
    "Stock": "5"
    },
    {
    "id": 145,
    "Rubro": "Frescos",
    "Categoria": "Quesos",
    "Nombre": "Queso La Paulina Por Salut Ligth 1 kg",
    "Imagen": "https://maxiconsumo.com/media/catalog/product/cache/8313a15b471f948db4d9d07d4a9f04a2/5/8/5824.jpg",
    "Precio": "6103.89",
    "Stock": "5"
    }
    ]

    export const obtenerProductos = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)},1000)
            }
        )
    }

    export const obtenerProductoId = (idProducto)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos.find(prod => prod.id == idProducto))
            }, 1000)
        })

    }

    export const obtenerProductoCategoria = (categoriaId)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos.filter(prod => prod.Categoria === categoriaId))
                
            }, 1000)
        })

    }

    export const obtenerProductoRubro = (rubroId)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos.filter(prod => prod.Rubro === rubroId))
                
            }, 1000)
        })

    }*/

    

   