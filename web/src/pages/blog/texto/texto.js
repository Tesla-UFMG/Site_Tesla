import React, { useState } from 'react';

import "./styles/texto.css";

import NavBar from '../../../components/navbar/navbar';

import Cabecalho from './components/cabecalho';
import ImageCapa from './components/imageCapa';
import Paragraph from './components/paragraph';
import Topicos from './components/topicos';
import Subtitle from './components/subtitle';
import ParagraphImage from './components/paragraphImage';
import FullImage from './components/image';

import porsche from '../../../assets/img/fotos/texto/porsche.png';
import imageTracado from '../../../assets/img/fotos/texto/imagem-tracado.png';
import explicacaoCurva from '../../../assets/img/fotos/texto/explicacaoCurva.png';

const subtitles = ['Traçado DiCurrida', 'Traçado Geométrico', 'Matemática', 'Understeer vs. Oversteer'];

const data = [
  {
    id: 'cabecalho',
    content: {
      code: '#DAYNA-01',
      title: 'Introdução à Dinâmica Veicular',
      date: '22 jun 2020',
      author: 'Marcus Vinícius Bonifácio',
      readTime: '10 min',
    }
  },
  {
    id: 'imagem-capa',
    content: {
      image: porsche,
      imageDescription: 'Porsche em uma pista',
      legend: 'Porsche'
    }
  },
  {
    id: 'paragraph',
    content: "*Aqui você aprenderá sobre as fases da curva, força e aceleração laterais e momento de yaw.# Este é um artigo do nível intermediário, o que significa que ele aborda conceitos de engenharia um pouco mais avançados, para você que busca um conhecimento mais profundo sobre o tema sem necessariamente um estudo tão aprofundado. Aproveite ;D"
  },
  {
    id: 'topicos',
    content: ['Traçado DiCurrida', 'Traçado Geométrico', 'Matemática', 'Understeer vs. Oversteer']
  },
  {
    id: 'paragraph',
    content: "Para iniciarmos esta série sobre dinâmica veicular, nada mais justo que introduzirmos o assunto falando um pouco do componente mais importante do carro: os pneus! Sim, você não leu errado. Basicamente todos os principais sistemas de um carro trabalham em função dos pneus: o powertrain produz e transmite força aos pneus para que o veículo possa se movimentar; a direção os esterça para que gerem força lateral e o carro possa fazer curva; os freios os fazem produzir força contrária ao movimento para reduzir a velocidade do veículo; a suspensão busca manter contato ótimo dos pneus com o solo a todo instante para que sempre haja boa aderência; os adereços aerodinâmicos que geram downforce visam pressionar os pneus contra o solo para também maximizar a aderência à pista; e o chassi necessita ser torcionalmente rígido o suficiente para que a suspensão possa transmitir as cargas verticais adequadas a cada pneu nas diversas situações de curva enfrentadas na pista. Em outras palavras, os pneus são a única parte do veículo que toca o solo, logo, são os responsáveis por nele imprimir as principais forças que o fazem virar, acelerar e frear."
  },
  {
    id: 'paragraph',
    content: "O comportamento dos pneus, na verdade, é bastante complexo, e saber analisar suas características e particularidades é fundamental para saber escolhê-los com critério, como também para alcançar um bom projeto veicular. As análises desses compostos viscoelásticos não são triviais, os critérios de escolha são diversos e a estratégia de gerenciamento do seu uso define até mesmo resultados de corridas, sendo a proposta desta série abordar tais questões."
  },
  {
    id: 'paragraph',
    content: "E a dinâmica veicular trata justamente do omportamento do veículo nas três situações que mencionamos – curva, aceleração e frenagem – enquanto analisa a interação entre veículo, piloto e pista, tendo os pneus como o pilar dessa análise. E, para começar, vamos falar um pouco dessa primeira situação: como um carro faz curvas."
  },
  {
    id: 'subtitle',
    content: {
      number: "1",
      subtitle: "Traçado DiCurrida"
    }
  },
  {
    id: 'paragraph',
    content: "Antes de tudo, é necessário entender como é o traçado descrito por um carro de corrida em uma curva e quais são suas fases."
  },
  {
    id: 'paragraphImage',
    content: {
      paragraph: "Sabemos que o objetivo final de um carro de corrida é percorrer um determinado caminho no menor intervalo de tempo possível. Em outras palavras, é alcançar a maior velocidade média possível no circuito.",
      image: imageTracado,
      imageDescription: "Carro de formula 1"
    }
  },
  {
    id: 'paragraph',
    content: "Para isso acontecer, o piloto deve aumentar ao máximo as maiores velocidades, aumentar ao máximo as velocidades mínimas, gastar o menor tempo possível nas velocidades mínimas e o maior tempo possível nas altas velocidades."
  },
  {
    id: 'paragraph',
    content: "Para alcançar as maiores velocidades possíveis no circuito, as quais ocorrem nos finais das retas, a aceleração longitudinal deve, obviamente, ser máxima nas retas. Porém, tão importante quanto isso é o fato de que a velocidade inicial com que o veículo entra na reta também deve ser a maior possível. Dessa forma, o veículo é capaz de cobrir uma mesma distância em velocidades maiores ao se comparar com uma situação em que entrasse com velocidade menor, culminando numa maior velocidade no final da reta e num menor tempo gasto para percorrê-la, aumentando a velocidade média."
  },
  {
    id: 'paragraph',
    content: "Em relação às velocidades mínimas – que ocorrem sempre nas curvas – quanto maiores elas são, menos tempo o veículo precisa passar freando, já que não é necessário reduzir tanto a velocidade para contornar a curva, o que possibilita permanecer em altas velocidades por mais tempo na reta antecedente, contribuindo também para o aumento da velocidade média. Também, quanto maiores são as velocidades mínimas nas curvas, menos tempo o veículo despende para percorrê-las, diminuindo, por consequência, o tempo gasto nas menores velocidades. Além disso, como o veículo não precisa reduzir tanto sua velocidade nesse caso, ele já inicia a reta subsequente em uma velocidade mais alta, carregando maior velocidade ao longo de todo o trecho até a próxima curva, situação da qual já explicamos a importância no parágrafo anterior. Percebe-se, portanto, que a velocidade mínima influencia em todas as etapas da curva. E é por isso que os pilotos adotam o “traçado de corrida”, que é o traçado que maximiza a velocidade mínima, através do aumento do raio de curva. Observe o exemplo abaixo."
  },
  {
    id: 'fullImage',
    content: {
      image: explicacaoCurva,
      imageDescription: "Explicacao do traçado de curva",
      legend: "Engineering Explained (Adaptado)"
    }
  },
  {
    id: 'subtitle',
    content: {
      number: "2",
      subtitle: 'Traçado Geométrico'
    }
  },
  {
    id: 'paragraph',
    content: "O veículo verde escolhe fazer o *traçado geométrico#, que consiste em percorrer o maior arco possível dentro dos limites da pista – a trajetória começa do lado externo da pista, toca um ponto na parte interna e termina novamente do lado externo. Enquanto isso, o vermelho se desloca sempre pelo meio da pista."
  },
  {
    id: 'paragraph',
    content: "Repare que, apesar de o veículo verde ter que frear antes, percorrer maior distância com o volante esterçado e sair da curva mais “tarde”, a distância de frenagem é menor e a velocidade de curva é significativamente maior (63%). Como resultado, o veículo verde gasta menos tempo que o vermelho para percorrer todos esses trechos somados, obtendo uma vantagem de tempo total de quase 1 segundo apenas nesta curva. E a mesma lógica se aplica se compararmos o traçado geométrico com as trajetórias em preto (20m e 40m de raio)."
  },
]

function PaginaTexto() {
  const [lateralTopicos, setLateralTopicos] = useState(false);

  var last_known_scroll_position = 0;
  var ticking = false;

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (last_known_scroll_position >= 1000) {
          setLateralTopicos(true);
        } else {
          setLateralTopicos(false);
        }

        ticking = false;
      });

      ticking = true;
    }
  });

  function renderText() {
    return (
      <div className="body">
        {data.map(part => {
          if (part.id === 'paragraph')
            return <Paragraph paragraph={part.content} />;
          else if (part.id === 'paragraphImage')
            return <ParagraphImage paragraph={part.content.paragraph} image={part.content.image} imageDescription={part.content.imageDescription} />;
          else if (part.id === 'fullImage')
            return <FullImage image={part.content.image} imageDescription={part.content.imageDescription} legend={part.content.legend} />
          else if (part.id === 'subtitle')
            return <Subtitle number={part.content.number} subtitle={part.content.subtitle} />
          else if (part.id === 'cabecalho')
            return <Cabecalho code={part.content.code} title={part.content.title} date={part.content.date} author={part.content.author} readTime={part.content.readTime} />
          else if (part.id === 'imagem-capa')
            return <ImageCapa image={part.content.image} imageDescription={part.content.imageDescription} legend={part.content.legend} />
          else if (part.id === 'topicos')
            return <Topicos topicos={part.content} />

          return 0;
        })}

        <div className="topicos-lateral">
          {lateralTopicos && subtitles.map((topico, index) => {
            return <a key={index} href={"#" + topico}><strong>{index + 1}</strong>. {topico}</a>
          })}
        </div>
      </div>
    )
  }

  return (
    <div id="texto-body">
      <NavBar color="preto" display="none" />

      <div id="conteudo-text-blog">
        {renderText()}
      </div>
    </div>
  );
}

export default PaginaTexto;