<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ventass.css">
    <link rel="stylesheet" href="com-alq.css">
    <title>Alquiler</title>
    <style>
        /* Estilos básicos para la galería de imágenes */
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .apartamento-container, .casas-container {
            margin: 20px;
            border: 1px solid #ccc;
            padding: 10px;
        }
        .imagenGaleria, .imagengGaleria {
            text-align: center;
        }
        .Galeria img {
            width: 50px;
            height: 50px;
            cursor: pointer;
            margin: 5px;
        }
        .imagenPrincipal img {
            width: 300px;
            height: 300px;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <header>
        <a href="índice.html" class="logo">
            <img src="Imagenes/ARGENTO.png" id="imagen-argento" alt="Logo Imagen"/>
            <img src="Imagenes/slogan.png" alt="Slogan de inmobiliaria" height="100"/>
        </a>
        <nav>
            <a href="ventas.html" class="nav-link">VENTAS</a>
            <a href="nosotros.html" class="nav-link">NOSOTROS</a>
            <a href="contactanos.html" class="nav-link">CONTÁCTANOS</a>
        </nav>
    </header>
    <h1>Propiedades en alquiler.</h1>
    <h2>Apartamentos | Casas</h2>
    <hr>

    <div class="container">
        <div class="apartamento-container">
            <div class="imagengGaleria">
                <div class="imagenPrincipal">
                    <img src="Departamentos/Dep-Alquiler/DepAl1 (5).jpeg" alt="Edificio imagen exterior" id="apartamentoActual-1">
                </div>
                <div class="Galeria">
                    <img src="Departamentos/Dep-Alquiler/DepAl1 (1).jpeg" alt="Ventanal" class="thumbnail" onclick="changeImage('apartamentoActual-1', 'Departamentos/Dep-Alquiler/DepAl1 (1).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl1 (2).jpeg" alt="Balcon" class="thumbnail" onclick="changeImage('apartamentoActual-1', 'Departamentos/Dep-Alquiler/DepAl1 (2).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl1 (3).jpeg" alt="Comedor" class="thumbnail" onclick="changeImage('apartamentoActual-1', 'Departamentos/Dep-Alquiler/DepAl1 (3).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl1 (4).jpeg" alt="Comedor desde otro angulo" class="thumbnail" onclick="changeImage('apartamentoActual-1', 'Departamentos/Dep-Alquiler/DepAl1 (4).jpeg')">
                </div>
            </div>
            <div class="detalles">
                <h2>$ 150.000</h2>
                <p><b>$ 40.000 Expensas</b></p>
                <ul>
                    <li><b>Begonia al 320, Claypole, Almirante Brown.</b></li>
                    <li>35 m² totales</li>
                    <li>1 ambiente</li>
                    <li>1 dormitorio</li>
                    <li>1 baño</li>
                </ul>
            </div>
        </div>

        <div class="apartamento-container">
            <div class="imagenGaleria">
                <div class="imagenPrincipal">
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (1).jpeg" alt="Edificio imagen exterior" id="apartamentoActual-2">
                </div>
                <div class="Galeria">
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (5).jpeg" alt="Comedor" class="thumbnail" onclick="changeImage('apartamentoActual-2', 'Departamentos/Dep-Alquiler/DepAl2 (1).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (2).jpeg" alt="Cocina" class="thumbnail" onclick="changeImage('apartamentoActual-2', 'Departamentos/Dep-Alquiler/DepAl2 (2).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (3).jpeg" alt="Living" class="thumbnail" onclick="changeImage('apartamentoActual-2', '
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (3).jpeg" alt="Living" class="thumbnail" onclick="changeImage('apartamentoActual-2', 'Departamentos/Dep-Alquiler/DepAl2 (3).jpeg')">
                    <img src="Departamentos/Dep-Alquiler/DepAl2 (4).jpeg" alt="Sala" class="thumbnail" onclick="changeImage('apartamentoActual-2', 'Departamentos/Dep-Alquiler/DepAl2 (4).jpeg')">
                </div>
            </div>
            <div class="detalles">
                <h2>$ 198.000</h2>
                <p><b>$ 55.000 Expensas</b></p>
                <ul>
                    <li><b>Vicente Greco al 149, Ministro Rivadavia, Almirante Brown.</b></li>
                    <li>62 m² totales</li>
                    <li>2 ambientes</li>
                    <li>1 dormitorio</li>
                    <li>1 baño</li>
                </ul>
            </div>
        </div>
    </div>
    <hr>
    <h2>Casas</h2>
    <div class="container">
        <div id="casa-destacada-1" class="casas-container">
            <div class="imagengGaleria">
                <div class="imagenPrincipal">
                    <img src="Casas/Casa-alquiler/Casaalq-1 (1).png" alt="Casa imagen exterior" id="casaActual-1">
                </div>
                <div class="Galeria">
                    <img src="Casas/Casa-alquiler/Casaalq-1 (2).png" alt="Sala de estar" class="thumbnail" onclick="changeImage('casaActual-1', 'Casas/Casa-alquiler/Casaalq-1 (2).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-1 (5).png" alt="Cocina" class="thumbnail" onclick="changeImage('casaActual-1', 'Casas/Casa-alquiler/Casaalq-1 (5).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-1 (10).png" alt="Baño" class="thumbnail" onclick="changeImage('casaActual-1', 'Casas/Casa-alquiler/Casaalq-1 (10).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-1 (12).png" alt="Una habitacion" class="thumbnail" onclick="changeImage('casaActual-1', 'Casas/Casa-alquiler/Casaalq-1 (12).png')">
                </div>
            </div>
            <div class="detalles">
                <h2>$ 275.000</h2>
                <ul>
                    <li><b>Pavon al 628, Adrogué, Almirante Brown.</b></li>
                    <li>200 m² totales</li>
                    <li>4 ambientes</li>
                    <li>1 dormitorio</li>
                    <li>1 baño</li>
                </ul>
            </div>
        </div>

        <div class="casas-container">
            <div class="imagengGaleria">
                <div class="imagenPrincipal">
                    <img src="Casas/Casa-alquiler/Casaalq-2 (2).png" alt="Casa imagen exterior" id="casaActual-2">
                </div>
                <div class="Galeria">
                    <img src="Casas/Casa-alquiler/Casaalq-2 (6).png" alt="Habitacion" class="thumbnail" onclick="changeImage('casaActual-2', 'Casas/Casa-alquiler/Casaalq-2 (6).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-2 (3).png" alt="Baño" class="thumbnail" onclick="changeImage('casaActual-2', 'Casas/Casa-alquiler/Casaalq-2 (3).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-2 (4).png" alt="Sala de estar" class="thumbnail" onclick="changeImage('casaActual-2', 'Casas/Casa-alquiler/Casaalq-2 (4).png')">
                    <img src="Casas/Casa-alquiler/Casaalq-2 (5).png" alt="Cocina" class="thumbnail" onclick="changeImage('casaActual-2', 'Casas/Casa-alquiler/Casaalq-2 (5).png')">
                </div>
            </div>
            <div class="detalles">
                <h2>$ 260.000</h2>
                <ul>
                    <li><b>Chile al 732, Rafael Calzada, Almirante Brown.</b></li>
                    <li>220 m² totales</li>
                    <li>3 ambientes</li>
                    <li>2 dormitorios</li>
                    <li>2 baños</li>
                </ul>
            </div>
        </div>
    </div>
    <hr>

    <script>
        function changeImage(imageId, imageSrc) {
            document.getElementById(imageId).src = imageSrc;
        }
    </script>
</body>
</html>
