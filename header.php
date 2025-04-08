<?php
if (!isset($titre)) {
    $titre = "Titre par défaut";
}
if (!isset($css)) {
    $css = "style.css"; // Fichier CSS par défaut
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>

    <link rel="stylesheet" type="text/css" href="<?= $css ?>">

    <title><?=$titre ?></title>

<body>
