import Button from '../Button'
import Watch from './Watch'
import style from './Stopwatch.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'

interface Props {
    selecionado: ITarefa | undefined
}

export default function Stopwatch({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch tempo={tempo}/>
            </div>
            <Button>Começar</Button>
        </div>
    )
}