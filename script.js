// $(document).ready(function() {
//     $(".canadaPost").hover(function(){
//         $(this).width("600px").height("520px");
//       }, 
//       function() {
//           $(this).width("500px").height("420px")
//       }
//     );
// });

// $(document).ready(function() {
//     $(".scrolldownarrow").click(function(){
//         $("this").css("background-color", "red")
//       }
//     );
// });

$(document).ready(function(){
  $(".nav-item").hover(function(){
    $(this).css("background-color", "#A3D9D9");
    }, function(){
    $(this).css("background-color", "#d0eff2");
  });
});

$(document).ready(function() {
  $(".expandBB").click(function() {
    $(".betterBitesP").show();
  })
})

$(document).ready(function() {
  $(".expandCP").click(function() {
    $(".canadaPostP").show();
  })
})

$(document).ready(function() {
  $(".expandTIFA").click(function() {
    $(".TIFAP").show();
  })
})

    