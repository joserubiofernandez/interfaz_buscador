'use strict';
$(document).ready(function(){
    var ocupacion = $('#desliza_ocupa');
    var selector_ocupacion = $('#selector_ocupacion');
    var suma_familia = $('#suma_familia');
    var resta_familia = $('#resta_familia');
    var suma_nino = $('#suma_nino');
    var resta_nino = $('#resta_nino');
    var suma_bebe = $('#suma_bebe');
    var resta_bebe = $('#resta_bebe');
    var num_familia = $('#num_familia');
    var num_nino = $('#num_nino');
    var num_bebe = $('#num_bebe');
    var contador_familia = 2;
    var contador_nino = 0;
    var contador_bebe = 0;

    ocupacion.click(function(){
        selector_ocupacion.css('visibility')=='hidden' ? selector_ocupacion.css('visibility','visible') : selector_ocupacion.css('visibility','hidden');
    });
    
  
    
    suma_familia.click(function(){
        contador_familia++;
        $('#num_familia').text(contador_familia);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
        num_familia.attr('placeholder', contador_familia);
        num_familia.attr('value', contador_familia);

    });
    resta_familia.click(function(){
        if(contador_familia>1)contador_familia--;
        $('#num_fam').text(contador_familia);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
        num_familia.attr('placeholder', contador_familia);
        num_familia.attr('value', contador_familia);
    });


    suma_nino.click(function(){
        contador_nino++;
        $('#num_nino').text(contador_nino);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
        num_nino.attr('placeholder', contador_nino);
        num_nino.attr('value', contador_nino);
    });
    resta_nino.click(function(){
        if(contador_nino>0)contador_nino--;
        $('#num_nino').text(contador_nino);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
        num_nino.attr('placeholder', contador_nino);
        num_nino.attr('value', contador_nino);
    });
    suma_bebe.click(function(){
        contador_bebe++;
        $('#num_bb').text(contador_bebe);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
    });
    resta_bebe.click(function(){
        if(contador_bebe>0)contador_bebe--;
        $('#num_bb').text(contador_bebe);
        ocupacion.text('1 Habitación / ' + contador_familia + ' - ' + contador_nino);
    });

  

    $('#datepicker_entrada').datepicker( {
        minDate: new Date(),
        dateFormat: "d M y",
        onSelect: function(fecha) {
            $('#datepicker_salida').datepicker({   
                  dateFormat: "d M y",       
                  minDate: new Date()
            });
           
        }
    });

   
   
});