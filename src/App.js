import React, {Component} from "react";
import './estilo.css'


export default class App extends Component{

    constructor(props){
        super(props)
        this.state={
          textoFrase: '',
        }

        this.frases = [
          'Quando chover, busque pelo arco-íris. Quando escurecer, busque pelas estrelas.',
          'Seja o piloto de suas histórias e voe o mais alto que conseguir.',
          'Nenhum mar calmo torna um marinheiro especialista em navegação.',
          'Quem tem luz própria jamais ficará na escuridão.',
          'O que não tem solução virando a página, terá solução mudando de livro.',
          'Quanto mais fortes forem suas provações, maiores serão suas vitórias.',
          'Se você não vivenciar a tristeza, não saberá reconhecer quando a felicidade chegar.',
          'No final, as coisas que nos arrependeremos serão as decisões que não tomamos.',
          'Você é mais corajoso do que pensa, mais forte do que parece e mais esperto do que acredita.',
          'A inspiração jamais chega primeiro que o esforço.',
          'Não se compare com os demais. Ser único e especial é o que vai te distinguir em sua caminhada para o sucesso.',
          'A vida também é uma consequência de como encaramos as situações a nossa volta.',
          'Colecione memórias e acumule sorrisos. Todo o resto é passageiro.',
          'Quando o dia está cinza, seja o seu próprio arco-íris.',
          'Praticar a compaixão, o amor e o carinho é a forma mais pura de cuidar da humanidade.',
          'Esteja sempre um passo à frente dos seus concorrentes e meio passo atrás dos seus limites.',
          'É melhor se arrepender pelo que fez do que somente imaginar o que poderia ser feito.',
          'Não espere pelo momento perfeito. Faça de cada momento a oportunidade perfeita.',
          'Para boas recompensas não há atalhos.',
          'Trabalhe duro em silêncio. Deixe que o sucesso faça barulho.',
          'Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças.',
          'Vencedores não são pessoas que nunca falham, são pessoas que nunca desistem.',
          'A verdadeira felicidade é ser feliz sem motivos.',
          'Cada segundo é uma nova oportunidade para mudar.',
          'Só é lutador quem sabe lutar consigo mesmo.',
          'Tentar acertar realizando os mesmos erros é o mais claro sinal de insanidade.',
          'A primavera sempre chega, mesmo que neste momento você sinta que está preso em um inverno sem fim.',
          'A receita para o sucesso está no equilíbrio.',
          'Erros são as provas de que estamos tentando.',
          'Erros são as provas de que estamos tentando.',
          'A mudança é dolorosa, mas necessária. Você só vai encontrar felicidade se souber se adaptar a ela!',
          'Os limites que impomos sobre nós mesmos podem se tornar verdadeiras prisões.',
          'Se o plano não funciona, mude o plano, não a meta.',
          'Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!',
          'Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.',
          'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
          'Até a noite mais escura vai chegar ao fim e o sol vai se levantar mais uma vez.',
          'Se você não encontrar alguém que te inspire, seja o seu próprio exemplo de sucesso.',
          'Nenhum ser humano conseguiu voar sem primeiro tirar os pés do chão.',
          'Percorra o mundo! Viajar não é despesa, é investimento.',
          'Aqueles que não acreditam em mágica jamais vão encontrá-la.',
          'O êxito é a coleção dos pequenos esforços que tomamos um dia sim e no outro também.',
          'Se quiser alcançar a grandeza, pare de pedir permissão.',
          'As limitações só existem em nossa mente. Mas se usarmos nossa imaginação, nossas possibilidades serão infinitas.',
          'Tentar evitar o fracasso é uma forma de fugir do êxito.',
          'A vida é igual andar de bicicleta. Para manter o equilíbrio é preciso se manter em movimento.',
          'Existem duas coisas que nos impedem de ser feliz: viver no passado e nos compararmos com os outros.',
          'Às vezes, os melhores momentos estão eternizados em nossa memória. Você os sente e os leva para sempre no seu coração.',
          'Viva a história que você gostaria de contar.',
          'Quando entendemos que foi “um dia a menos” e não “um dia a mais”, começamos a nos dar conta do que realmente importa nesta vida.',
          'Não nascemos sendo vencedores e não nascemos sendo perdedores. Nascemos podendo escolher.'
        ]

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito(){
      let state = this.state
      let number = Math.floor(Math.random() * this.frases.length)
      state.textoFrase = '"' + this.frases[number] + '"'
      this.setState(state)
    }

  render(){
      return(
        <div className="containerFull">

        <div className="container">
            <img className="img" src={require('./assets/biscoito.png')}/>
            <Botao  nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
            <h3 className="textoFrase">{this.state.textoFrase}</h3>
        </div>
        </div>
        
      )
  }
}

class Botao extends Component {
  render(){
    return(
      <div>
        <button className="btn" onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}