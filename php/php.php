<?php
 if(isset($_POST["submit"])){
     $entrada = $_POST['entrada'];
     $salida = $_POST['salida'];
     $promcode = $_POST['promocode'];
     $familia = $_POST['familia'];
     $nino = $_POST['nino'];

     echo " La fecha de entrada:" .  $entrada . "<br/>La fecha de salida:  ". $salida . "<br /> El código promocional: ". $promcode ."<br />  
     EL número de adultos: ".$familia . "<br/>El número de niños: ".  $nino ;
}


?>