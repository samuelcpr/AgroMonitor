import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Ocorrência de Pragas (Soja):  Hoje, foram encontradas cigarrinhas em 5 % das plantas de soja.Pulgões foram identificados em 10 % das áreas monitoradas, e percevejos em 2 %.Medidas de controle foram acionadas conforme necessidade.',
    'Aplicação de Medidas (Soja): Neste relatório, registramos a aplicação de inseticida biológico para combater as cigarrinhas, visando reduzir sua população. Além disso, foram realizadas armadilhas amarelas para monitorar e controlar os pulgões. Medidas naturais de controle estão sendo avaliadas para minimizar o impacto ambiental.',
    'Monitoramento de Pragas (Soja): O monitoramento das áreas infestadas por percevejos mostrou uma tendência de aumento nos últimos dias. Recomendamos intensificar a vigilância nesses locais e avaliar a adoção de práticas culturais para controlar essa praga, como a rotação de culturas e o manejo integrado de pragas. Continuaremos a observar o comportamento das pragas e a eficácia das medidas implementadas.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">

      
      <h1 className="text-header-page">Relatórios de observações</h1>
    

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/79328967?v=4" alt="Samuel Carlos" />
          <textarea
            id="tweet"
            placeholder="Criar Observação"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Enviar</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}