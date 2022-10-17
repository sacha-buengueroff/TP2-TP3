const libros = [
    { id: 1, titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', año: 1997 },
    { id: 2, titulo: 'Así habló Zaratustra', autor: 'Friedrich Nietzsche', año: 1883 },
]


const findLibro = id => {
    return libros.find(libro => libro.id == id) 
} 

const findLibros = () => libros

const saveLibro = libro => {
    libro.año = parseInt(libro.año)
    const id = parseInt(libros[libros.length-1].id) + 1
    //const id = ++libros[libros.length-1].id
    libro.id = id
    libros.push(libro)
    return libro
}

const updateLibro = (libro, id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)
    return libro
}

const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    /* (1)
    const libro = libros[index]
    libros.splice(index, 1)
    */
   const libro = libros.splice(index, 1)[0]
   return libro
}


export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}
