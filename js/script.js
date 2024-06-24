const divListaUsuarios = document.getElementById('listaUsuarios')



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
        throw new Error('solicitud erronea');
        }
        return response.json();
    })
    .then((response) => {
        let listaTotal =''
        
        response.forEach(usuario => {
            const { name, username, phone, age, email, address, id, company} = { age: numeroAleatorio(25, 35), ...usuario }
            const nameSpan = '<span><strong>Nombre: </strong>' + name + '</span>'
            const ageSpan = '<span><strong>Edad: </strong>' + age + '</span>'
            const usernameSpan = '<span><strong>Username: </strong>' + username + '</span>'
            const phoneSpan = '<span><strong>Phone: </strong>' + phone + '</span>'
            const emailSpan = '<span><strong>Email: </strong>' + email + '</span>'
            const img = `<img width=100px src="/assets/img/${id}.jpeg"></img>`
            const companySpan = '<span><strong>Compañia: </strong>' + company.name + '</span>'
            const addressSpan = '<span><strong>Dirección </strong>' + address.street + ', ' + address.suite + ', ' +  address.city + '</span>'
            

            const datos1 = nameSpan + ageSpan + usernameSpan  + phoneSpan + emailSpan
            const datos2 = companySpan + addressSpan
            let  divUser =  '<div class="contenedor"> ' + 
                                    '<div class="contenedor-fila-1">' + 
                                        '<div class="contenedor-dato-1">' + 
                                            datos1 +
                                        '</div>' + 
                                        '<div class="contenedor-img">' + 
                                            img +
                                        '</div>' + 
                                    '</div>' + 
                                    '<div class="contenedor-fila-2">' + 
                                        datos2 +
                                    '</div>' + 
                                '</div>'
            listaTotal = listaTotal + divUser;
        })
        divListaUsuarios.innerHTML = listaTotal;
    })
    .catch((error) => {
        console.error(error)
        divListaUsuarios.innerText = 'ha habido un error con la Api: ' + error;
    });

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

