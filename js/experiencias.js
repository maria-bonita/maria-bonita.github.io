var experiencias=[
    {categorias:['pesca'],
    titulo:{
        en:'Fishing on boat',
        es:'Pesca embarcada',
        po:'Pesca a bordo'
    },
    descripcion:{
        en:'Get to know the parana river and the mystery of its islands, feel the adrenaline of fighting a dorado or capturing a surubi.',
        es:'Conozca el rio parana y el misterio de sus islas, sienta la adrenalina de luchar contra un dorado o capturar un surubi.',
        po:'Conheça o rio paraná e o mistério de suas ilhas, sinta a adrenalina de lutar contra um dorado ou capturar um surubi.'
    },
    img:'http://relevamientos.pescaargentina.com.ar/wp-content/uploads/2012/02/Pesca-en-Corrientes-036.jpg'
}
]


experiencias.forEach(function(experiencia){
    var element=document.createElement('div')
    element.className='card mb-4'
    element.innerHTML=`<img class="card-img-top " src="${experiencia.img}" alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">${experiencia.titulo.es}</h3>
      <p class="card-text">${experiencia.descripcion.es}</p>
      <a href="#" class="btn btn-primary">Saber mas &rarr;</a>
    </div>`            
    document.getElementById('blogDiv').appendChild(element)
})