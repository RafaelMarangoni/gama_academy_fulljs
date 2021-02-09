import api from '../../service/api'
import Nav from '../components/Nav'
import Login from './Login'


let Home = {
    render : async () => {
        let NavBar = await Nav.render();
        let view = `<h1 id="tester">Home Page</h1>
        ${ NavBar }
        <div>
        <form id="cadastro">
            <label>CPF</label><br>
            <input type="text" id="form_cpf"  placeholder="digite o teu CPF"><br>
            <label for="nomeC">Nome Completo</label><br>
            <input type="text" id="nomeC" name="nomeC" placeholder="Sem abreviação"><br>
            <label for="loginc">Login</label><br>
            <input type="text" id="loginc" name="login"placeholder="Digite o seu login"><br>
            <label for="senha">Senha</label><br>
            <input type="password" id="senha" name="senha" placeholder="Digite a tua senha"><br>
            <label for="confirmaSenha">Confirme a tua senha</label><br>
            <input type="password" id="confirmaSenha" name="confirmaSenha" placeholder="confirme a tua senha"><br>

            <a href="#/login"><input  type="submit" value="Enviar"></a>            
        </form>
        </div>
        
        `

        
        return view 
    },
    after_render: async () => {
        var submit = document.getElementById('cadastro')
        submit.addEventListener('submit', function(e){
            e.preventDefault()
            cpf = document.getElementById("form_cpf").value
            nomeC = document.querySelector("#nomeC").value
            loginC = document.querySelector("#loginc").value
            password = document.querySelector("#password").value
            passwordConfirm = document.querySelector("#confirmaSenha").value

            alert(cpf)

            let postDate = {     
                
                cpf: cpf,
                nome: nomeC,
                login : loginc,
                password : password
            }
            if(password === passwordConfirm){
            api.post('usuarios', postDate, { 
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(res => {
                console.log(res.data)
            })
                }
            else{
                console.log("as senhas devem ser iguais")
            }
        })
    }
}

export default Home