import Nav from '../components/Nav'


let login = {
    render : async () => {        
        let NavBar = await Nav.render();
        let view = `${NavBar} <br> 
        <form>             
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
      
          <button type="submit"><a href="#/dashboard">Login</a></button>          
        </div>
          
      </form>`
                
        return view 
    },
    after_render: async () => {
        
    }
}


export default login;

