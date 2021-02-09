import Nav from '../components/Nav'

let dashBoard = {
    render : async () => {        
        let NavBar = await Nav.render();
        let view = `${NavBar} <br> 
        <div style="border: solid;">
        <div>
            <label for="tname"><b>Dados da conta</b></label>
            <input type="text" placeholder="Digite o numero da conta" name="tname" required>
            <label for="tname"><b>CPF</b></label>
            <input type="text" placeholder="Digite o CPF" name="tname" required>
        
            <label for="psw"><b>Descrição</b></label>
            <input type="password" placeholder="descreva o pagamento" name="psw" required>
        
            <button type="submit" id="transferencia"><a href="#/dashboard">Transferir</a></button>  
        </div>
    </div>`
                
        return view 
    },
    after_render: async () => {
        //vazio
}

}

export default dashBoard;