$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------
function calculate() {
    let hossz = document.querySelector("#circuit").value;
    let korido = document.querySelector("#laptime").value / 3600;
    console.log(korido);
    if( hossz === "HUN"){
      hossz = 4.381;
    } else if( hossz === "MON"){
      hossz = 3.337;
    } else if( hossz === "BEL"){
      hossz = 7.004;
    } else if( hossz === "ITA"){
      hossz = 5.793;
    } 
    let atlags = hossz / korido + "km/h";
    
    document.querySelector("#averagespeed").value = atlags ;
    if ( document.querySelector("#averagespeed").value === "Infinitykm/h") {
      document.querySelector("#averagespeed").value = 0 +"km/h"
    }
  }
