async function login(){

    const usuario =
        document.getElementById("usuario").value;

    const senha =
        document.getElementById("senha").value;

    try{

        const response = await fetch(
            `${API_URL}/${DATABASE.usuarios}/?user_field_names=true`,
            {
                headers:{
                    Authorization:`Token ${BASEROW_TOKEN}`
                }
            }
        );

        const data = await response.json();

        const usuarioEncontrado =
            data.results.find(u =>
                u.usuario === usuario &&
                u.senha === senha
            );

        if(usuarioEncontrado){

            localStorage.setItem(
                "usuarioLogado",
                usuario
            );

            alert("Login realizado!");

            window.location =
                "pages/dashboard.html";

        }else{

            alert("Usuário ou senha inválidos");

        }

    }catch(error){

        console.error(error);

        alert("Erro ao conectar");

    }

}