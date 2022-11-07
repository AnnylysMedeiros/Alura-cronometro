import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                     type="text"
                     name="tarefa"
                     id="tarefa"
                     placeholder="O que você quer estudar hoje"
                     required
                     />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                     type="time" 
                     step="1"
                     name="tempo"
                     id="tempo"
                     min="00:00:00"
                     max="01:30:00"
                     required
                     />
                </div>
                <Button>Adicionar</Button>
            </form>
        )
    }
}

export default Formulario;

// algumas observações sobre o react 17+ não é necessário fazer a importação do react utilizando hooks, somente se for usar class, e podemos fazer a exportação antes da função ao inves de fazer no final