<!DOCTYPE html>
<html lang="fr">

<?php $titre="To-Do";
$css="style.css";require 'header.php';
?>

<body>

<?php require 'navbar.php'; ?>
<body>
<div class="container">
    <div class="kitty-header">
        <img class="kitty-face" src="kitty.png" alt="kitty">

        <h1>Kawaii todo List</h1>
    </div>



    <div class="todo-container">
        <div class="input-group">
            <input type="text" id="taskInput" placeholder="Qsq tu dois faire bb..." class="kawaii-input">
            <button id="addTask" class="kawaii-btn">Add</button>
        </div>
        <ul id="taskList" class="task-list"></ul>
    </div>
</div>
<script src="script.js"></script>
</body>
