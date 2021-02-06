let Error404 = {
    render : async () => {
        let view = `<h1> Opps, algo deu errado</h1>`
        return view 
    },
    after_render: async () => {
        //vazio
    }
}

export default Error404