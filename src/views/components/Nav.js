import api from '../../service/api';


let Nav = {
   render: async () => {
    
    let view = `<a href= "#/login"> Login </a>
    <a href = #/> Home </a>`

    return view

    }, 
    after_render: async()=>{

    }
}




export default Nav;