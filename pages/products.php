<?php
    include("../src/database.php");
    $sql = "SELECT * FROM `productos`"; 
    $datos = mysqli_query($conection, $sql);
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fonteñez Joyas - Productos</title>
    <link rel="stylesheet" href="../styles/style.css">
</head>
<body>
    <header>
        <a href="./pages/products.php">Productos</a>
        <a href="#"><img src="../assets/img/logo.png" alt="" width="40"></a>
        <a href="./pages/about-us.php">Nosotros</a>
    </header>
    <section>
        <?php
            foreach($datos as $productos){
        ?>
        <div class="item-product">
            <img src="<?php echo $productos["imgUrl"] ?>" alt="" width="200">
            <h2><?php echo $productos["nombre_producto"]?></h2>
            <span>$<?php echo $productos["precio"]?></span>
            <p><?php echo $productos["descripcion"]?></p>
        </div>
        <?php
            }
        ?>
    </section>
</body>
</html>