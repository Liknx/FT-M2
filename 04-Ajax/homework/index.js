$('#boton').click(
    function(){
        var list = document.getElementById('lista');
        
        $.get('http://localhost:5000/amigos',function(data){
            data.forEach(e => {
                console.log(e);
                console.log(e.id);
                let li = document.createElement('li')
                li.innerHTML=''+e.name+' X';
                li.setAttribute('id',e.id)
                list.appendChild(li);
            });
        })
    }
)

$('#search').click(
    function(){
        document.getElementById('amigo').innerHTML = '';
        // var input = $('#input');
        // console.log('input.val()--->'+input.val())
        var input = document.getElementById('input');
        // console.log('input.value--->'+input.value)
        $.get('http://localhost:5000/amigos/'+(input.value),function(data){
            console.log(data.name);
            $('#amigo').append('<b>'+data.name+'</b>');
        })
    }
)

$('#delete').click(
    function(){
        var input = $('#inputDelete');
        $.ajax({
            url: 'http://localhost:5000/amigos/'+input.val(),
            type: 'DELETE',
            success: function(data) {
                console.log(data);
                $('#success').append('<b>Amigo Eliminado</b>');
                input.val('');
            }
        })
    }
)