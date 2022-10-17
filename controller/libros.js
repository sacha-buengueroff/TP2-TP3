import api from '../api/libros.js'

const getLibros = (req,res) => { //:id? es un parametro de request que viene por req.params (route params) (el signo de pregunta muestra que es opcional)
    //const id = req.params.id
    const { id } = req.params
    res.json(api.obtenerLibros(id))
}

const postLibro = (req,res) => {
    const libro = req.body //como uso body params es un POST (se manda JSON o urlencoded) (no se pueden usar en GET y DELETE)
    res.json(api.guardarLibro(libro))
    // res.redirect('/')
}

const putLibro = (req, res) => { // POST agrega, PUT actualiza parcial o totalmente
    const { id } = req.params
    const libro = req.body
    res.json(api.actualizarLibro(libro, id))
}

const deleteLibro = (req, res) => { 
    const { id } = req.params
    // (2)
    res.json(api.eliminarLibro(id))
}

export default {
    getLibros,
    postLibro,
    putLibro,
    deleteLibro
}