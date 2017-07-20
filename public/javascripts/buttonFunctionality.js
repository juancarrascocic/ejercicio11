$(document).ready(function(){
	var boton1 = $("<button id='boton1'>HOLA</button>");
	var boton2 = $("<button id='boton2'>Boton2</button>");
	$('body').append(boton1).append(boton2);

	$('#boton1').on('click', function(){
		var div = $("<div class='div_Juan'>HOLA JUAN</div>");
		$('body').append(div);
	})

	$('#boton2').on('click', function(){
		$('.div_Juan').remove();
		if($('.div_Login').length==0){
		var div = $("<div class='div_Login'> <p>Nombre: <input type='text' id = 'Nombre'/></p><p>Apellidos: <input type='text' id = 'Apellidos'/></p><button id = 'botonPost'>Aceptar</button></div>");
		$('body').append(div);
			}

		$('#botonPost').on('click', function(){
			var nombre = $('#Nombre').val();
			var apellidos = $('#Apellidos').val();
			$.ajax({data:{Nombre: nombre, Apellidos: apellidos}, method : "POST", url: "miAplicacion.php"}).done
				(function(){alert("POST AJAX REALIZADO")});
		})
		
	})

});
