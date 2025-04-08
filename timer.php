<!DOCTYPE html>
<html lang="fr">

<?php $titre="Timer";
$css="style.css";require 'header.php';
?>

<body>

<?php require 'navbar.php'; ?>
<div class="container">
    <div class="kitty-header">
        <img class="kitty-face" src="kitty.png" alt="kitty">

        <h1>Kawaii timer</h1>
    </div>


    <div class="timer-container">
        <div class="timer" id="timer">25:00</div>
        <button id="startTimer" class="kawaii-btn">Start</button>
        <button id="resetTimer" class="kawaii-btn">Reset</button>
    </div>
</div>
<script src="timer.js"></script>
</body>
