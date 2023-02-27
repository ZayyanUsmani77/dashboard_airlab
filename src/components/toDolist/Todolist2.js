import React, { useState } from 'react'
import './toDolist.css'
const Todolist2 = () => {
  const [input, setInput] = useState('')
  const [task, setTask] = useState([])

  // creando el task en un objeto con el texto y un valor booleano
  //  unciamente si el input no es un string vacio ademas de limpiar el texto del input
  const add = (e) => {
    e.preventDefault()
    if (input === '') return
    setTask([
      ...task,
      {
        text: input,
        completed: false,
      },
    ])
    setInput('')
  }

  //
  //filtra el array de objetos y retorna los que cumplen la condicion
  const remove = (index) => {
    setTask(task.filter((_item, i) => i !== index))
    console.log('eliminado')
    console.log(index)
  }

  const toggleChecked = (index) => {
    ///haciendo un spread de task con el parametro de index
    const obj = {
      ...task[index],
    }
    // cambiando el valor de object completed a true o false
    obj.completed = !obj.completed
    //seteando el valor nuevo  de task con slice accediendo al index del  objeto y dandole el valor de obj
    //concatenando el array y modificando el index + 1 para que los task mantengan el orden
    setTask([...task.slice(0, index), obj].concat(task.slice(index + 1)))
    console.log('indice listo')
    console.log(index)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '5px',
          marginBottom: '10px',
          border: '1px solid lightgrey',
          padding: '15px',
        }}
      >
        <h2 style={{ fontSize: '23px', textAlign: 'left', color: 'black' }}>New Service?</h2>
        <div className="main" style={{ marginTop: '20px', textAlign: 'left' }}>
          {/* creando un formulario para obtener el valor del nuevo task*/}
          <form onSubmit={add} style={{ display: 'flex' }}>
            <input
              type="text"
              className="form-control "
              placeholder="Add Service"
              width="100%"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              style={{ marginTop: '10px', height: '41px' }}
            />
            <button
              className="add-btn"
              style={{ fontSize: '15px', width: '60px', backgroundColor: '#2711f0' }}
            >
              <b>Add</b>
            </button>
          </form>
          {task.map((item, i) => (
            <div className="raws" key={i} style={{ float: 'left' }}>
              <div className="spanContainer">
                <i
                  // className="fa fa-check-circle-o"
                  style={{
                    color: '#2741f7',
                    marginRight: '10px',
                    fontSize: '18px',
                    marginTop: '',
                    marginRight: '4px',
                  }}
                ></i>
                <span
                  className="span-map"
                  style={{
                    textDecoration: item.completed && 'line-through',
                    fontSize: '16px',
                    color: 'grey',
                  }}
                >
                  {item.text}
                </span>
              </div>

              <button className="delete-btn" onClick={() => remove(i)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Todolist2
