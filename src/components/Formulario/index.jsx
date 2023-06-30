import { useEffect, useState } from 'react';

const Formulario = () => {
    let [nome, setNome] = useState('');
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    useEffect(() => {
        console.log('O componente foi iniciado');
        
        return() => {
            console.log('O componente finalizou');
        }
    },[]);

    useEffect(() => {
        console.log('O nome foi alterado');
    }, [nome]);

    useEffect(() => {
        console.log('A matéria A mudou para: ' + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const resultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return(
                <p>Olá {nome}, foi aprovado</p>                    
            )
        } else {
            return (
                <p>Olá {nome}, não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={({target}) => setNome(target.value)}/>
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {materiaA}
            {materiaB}
            {materiaC}
            {resultado()}
        </form>
    )
}

export default Formulario;