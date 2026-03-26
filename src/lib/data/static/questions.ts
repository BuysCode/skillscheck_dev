import type { Question } from "@/types/interfaces/quizInterface";

export const questions: Question[] = [
  {
    id: '1',
    language: 'JavaScript',
    seniority: 'junior',
    title: 'Qual é o resultado da expressão "5" + 2 em JavaScript?',
    options: [
      { letter: 'A', text: '7' },
      { letter: 'B', text: '"52"' },
      { letter: 'C', text: 'undefined' },
      { letter: 'D', text: 'Error' }
    ],
    rightAnswer: 'B'
  },
  {
    id: '2',
    language: 'JavaScript',
    seniority: 'junior',
    title: 'Qual método é utilizado para adicionar um elemento ao final de uma array?',
    options: [
      { letter: 'A', text: 'push()' },
      { letter: 'B', text: 'pop()' },
      { letter: 'C', text: 'shift()' },
      { letter: 'D', text: 'join()' }
    ],
    rightAnswer: 'A'
  },
  {
    id: '3',
    language: 'JavaScript',
    seniority: 'junior',
    title: 'Qual a diferença principal entre "const" e "let"?',
    options: [
      { letter: 'A', text: 'Não há diferença, ambos são idênticos.' },
      { letter: 'B', text: 'Let permite redeclaração, Const não.' },
      { letter: 'C', text: 'Const impede a reatribuição de valor, enquanto Let permite.' },
      { letter: 'D', text: 'Const é apenas para números e Let para strings.' }
    ],
    rightAnswer: 'C'
  },
  {
    id: '4',
    language: 'JavaScript',
    seniority: 'junior',
    title: 'Como você verifica o tipo de uma variável em JavaScript?',
    options: [
      { letter: 'A', text: 'checkTypeof(variable)' },
      { letter: 'B', text: 'typeOf variable' },
      { letter: 'C', text: 'variable.type()' },
      { letter: 'D', text: 'typeof variable' }
    ],
    rightAnswer: 'D'
  },
  {
    id: '5',
    language: 'JavaScript',
    seniority: 'junior',
    title: 'O que o método .map() retorna?',
    options: [
      { letter: 'A', text: 'O primeiro elemento que satisfaz uma condição.' },
      { letter: 'B', text: 'Uma nova array com os resultados da função aplicada a cada elemento.' },
      { letter: 'C', text: 'Um valor booleano indicando se o item existe.' },
      { letter: 'D', text: 'A soma de todos os valores da array original.' }
    ],
    rightAnswer: 'B'
  },
  {
    id: 'js-mid-1',
    language: 'JavaScript',
    seniority: 'mid-level',
    title: 'Qual a principal diferença entre microtasks e macrotasks na Event Loop?',
    options: [
      { letter: 'A', text: 'Macrotasks têm prioridade sobre microtasks.' },
      { letter: 'B', text: 'Microtasks (como Promises) são executadas imediatamente após a task atual, antes do próximo render.' },
      { letter: 'C', text: 'Microtasks são executadas apenas em Web Workers.' },
      { letter: 'D', text: 'Não há diferença de prioridade, apenas de sintaxe.' }
    ],
    rightAnswer: 'B'
  },
  {
    id: 'js-mid-2',
    language: 'JavaScript',
    seniority: 'mid-level',
    title: 'O que caracteriza um "Closure" em JavaScript?',
    options: [
      { letter: 'A', text: 'Uma função que não retorna valor.' },
      { letter: 'B', text: 'O processo de transformar uma string em código executável.' },
      { letter: 'C', text: 'Uma função que "lembra" do seu escopo léxico, mesmo quando executada fora dele.' },
      { letter: 'D', text: 'Um método para fechar conexões de banco de dados automaticamente.' }
    ],
    rightAnswer: 'C'
  },
  {
    id: 'js-mid-3',
    language: 'JavaScript',
    seniority: 'mid-level',
    title: 'Sobre o operador "spread" (...) em objetos, o que acontece com propriedades duplicadas?',
    options: [
      { letter: 'A', text: 'O JavaScript lança um SyntaxError.' },
      { letter: 'B', text: 'A propriedade definida por último sobrescreve as anteriores.' },
      { letter: 'C', text: 'A propriedade definida primeiro é mantida.' },
      { letter: 'D', text: 'O objeto se torna uma Array.' }
    ],
    rightAnswer: 'B'
  },
  {
    id: 'js-mid-4',
    language: 'JavaScript',
    seniority: 'mid-level',
    title: 'Qual o comportamento do método Promise.all()?',
    options: [
      { letter: 'A', text: 'Resolve apenas se a primeira promise for bem-sucedida.' },
      { letter: 'B', text: 'Resolve quando todas as promises terminarem, independente de erro.' },
      { letter: 'C', text: 'Rejeita imediatamente se qualquer uma das promises falhar.' },
      { letter: 'D', text: 'Executa as promises de forma sequencial, uma após a outra.' }
    ],
    rightAnswer: 'C'
  },
  {
    id: 'js-mid-5',
    language: 'JavaScript',
    seniority: 'mid-level',
    title: 'Para que serve o "Strict Mode" ("use strict")?',
    options: [
      { letter: 'A', text: 'Para forçar o uso de TypeScript.' },
      { letter: 'B', text: 'Para desativar o Garbage Collector.' },
      { letter: 'C', text: 'Para capturar erros silenciosos e evitar práticas consideradas inseguras ou mal otimizadas.' },
      { letter: 'D', text: 'Para permitir o uso de variáveis sem declaração (var/let/const).' }
    ],
    rightAnswer: 'C'
  },

  {
    id: 'js-sr-1',
    language: 'JavaScript',
    seniority: 'senior',
    title: 'Como funciona o Garbage Collection no motor V8 (Chrome/Node.js)?',
    options: [
      { letter: 'A', text: 'Utiliza contagem de referência simples para deletar objetos.' },
      { letter: 'B', text: 'Baseia-se no algoritmo Generational Mark-and-Sweep, dividindo objetos em Young e Old Generation.' },
      { letter: 'C', text: 'O desenvolvedor deve liberar a memória manualmente usando o comando delete.' },
      { letter: 'D', text: 'Ele limpa a memória apenas quando a aba do navegador é fechada.' }
    ],
    rightAnswer: 'B'
  },
  {
    id: 'js-sr-2',
    language: 'JavaScript',
    seniority: 'senior',
    title: 'Qual a vantagem de usar WeakMap em vez de Map?',
    options: [
      { letter: 'A', text: 'WeakMap permite chaves de qualquer tipo (strings, números).' },
      { letter: 'B', text: 'WeakMap é mais rápido para iterar com for...of.' },
      { letter: 'C', text: 'WeakMap mantém referências "fracas", permitindo que as chaves sejam coletadas pelo GC se não houver outras referências.' },
      { letter: 'D', text: 'WeakMap pode ser serializado para JSON mais facilmente.' }
    ],
    rightAnswer: 'C'
  },
  {
    id: 'js-sr-3',
    language: 'JavaScript',
    seniority: 'senior',
    title: 'O que é "Function Currying" e qual sua utilidade?',
    options: [
      { letter: 'A', text: 'Técnica de transformar uma função com múltiplos argumentos em uma sequência de funções com um único argumento.' },
      { letter: 'B', text: 'Um método de otimização de recursão.' },
      { letter: 'C', text: 'Uma forma de herança baseada em protótipos.' },
      { letter: 'D', text: 'O ato de injetar dependências no construtor de uma classe.' }
    ],
    rightAnswer: 'A'
  },
  {
    id: 'js-sr-4',
    language: 'JavaScript',
    seniority: 'senior',
    title: 'No contexto de performance, o que é o "JIT Compiler"?',
    options: [
      { letter: 'A', text: 'Um interpretador que executa o código linha por linha sem otimizar.' },
      { letter: 'B', text: 'Um compilador que transforma JS em C++ antes de rodar.' },
      { letter: 'C', text: 'Compilador que analisa o código em tempo de execução e compila partes frequentes (hot spots) para código de máquina.' },
      { letter: 'D', text: 'Uma ferramenta de pré-processamento como o Babel.' }
    ],
    rightAnswer: 'C'
  },
  {
    id: 'js-sr-5',
    language: 'JavaScript',
    seniority: 'senior',
    title: 'Qual o impacto do uso excessivo de "bind(this)" ou funções anônimas dentro do método render() de um componente?',
    options: [
      { letter: 'A', text: 'Nenhum, o motor JS otimiza isso automaticamente.' },
      { letter: 'B', text: 'Causa Memory Leaks catastróficos imediatamente.' },
      { letter: 'C', text: 'Pode causar re-renderizações desnecessárias, pois uma nova referência de função é criada a cada ciclo.' },
      { letter: 'D', text: 'Impede que o componente receba novas props.' }
    ],
    rightAnswer: 'C'
  },
  { id: 'ts-jr-1', language: 'TypeScript', seniority: 'junior', title: 'Qual o comando para transpilar um arquivo .ts em .js via terminal?', options: [{ letter: 'A', text: 'ts-run' }, { letter: 'B', text: 'tsc' }, { letter: 'C', text: 'npm build' }, { letter: 'D', text: 'node-ts' }], rightAnswer: 'B' },
  { id: 'ts-jr-2', language: 'TypeScript', seniority: 'junior', title: 'Como definimos um tipo que pode ser string ou number?', options: [{ letter: 'A', text: 'string & number' }, { letter: 'B', text: 'string | number' }, { letter: 'C', text: 'either(string, number)' }, { letter: 'D', text: 'string || number' }], rightAnswer: 'B' },
  { id: 'ts-jr-3', language: 'TypeScript', seniority: 'junior', title: 'Qual a utilidade do tipo "void"?', options: [{ letter: 'A', text: 'Para variáveis vazias.' }, { letter: 'B', text: 'Para funções que não retornam valor.' }, { letter: 'C', text: 'Para anular um objeto.' }, { letter: 'D', text: 'É o mesmo que undefined.' }], rightAnswer: 'B' },
  { id: 'ts-jr-4', language: 'TypeScript', seniority: 'junior', title: 'Qual interface define uma propriedade opcional?', options: [{ letter: 'A', text: 'prop?: string' }, { letter: 'B', text: 'prop!: string' }, { letter: 'C', text: 'optional prop: string' }, { letter: 'D', text: 'prop: string | null' }], rightAnswer: 'A' },
  { id: 'ts-jr-5', language: 'TypeScript', seniority: 'junior', title: 'O que o tipo "any" faz?', options: [{ letter: 'A', text: 'Obrigada a tipagem rigorosa.' }, { letter: 'B', text: 'Desabilita a verificação de tipo para a variável.' }, { letter: 'C', text: 'Permite apenas objetos.' }, { letter: 'D', text: 'É um alias para string.' }], rightAnswer: 'B' },

  { id: 'ts-mid-1', language: 'TypeScript', seniority: 'mid-level', title: 'Qual a diferença entre interface e type alias?', options: [{ letter: 'A', text: 'Interfaces podem ser estendidas (merged), types não.' }, { letter: 'B', text: 'Types são apenas para funções.' }, { letter: 'C', text: 'Interfaces não aceitam tipos primitivos.' }, { letter: 'D', text: 'Não existe diferença prática.' }], rightAnswer: 'A' },
  { id: 'ts-mid-2', language: 'TypeScript', seniority: 'mid-level', title: 'O que faz o operador "keyof"?', options: [{ letter: 'A', text: 'Retorna os valores de um objeto.' }, { letter: 'B', text: 'Cria um tipo baseado nas chaves de um objeto/interface.' }, { letter: 'C', text: 'Verifica se uma chave existe em tempo de execução.' }, { letter: 'D', text: 'Deleta uma chave de um tipo.' }], rightAnswer: 'B' },
  { id: 'ts-mid-3', language: 'TypeScript', seniority: 'mid-level', title: 'Para que servem os Generics (<T>)?', options: [{ letter: 'A', text: 'Para criar componentes reutilizáveis que trabalham com vários tipos.' }, { letter: 'B', text: 'Para gerar IDs aleatórios.' }, { letter: 'C', text: 'Para forçar o tipo String.' }, { letter: 'D', text: 'Para importar módulos externos.' }], rightAnswer: 'A' },
  { id: 'ts-mid-4', language: 'TypeScript', seniority: 'mid-level', title: 'O que é Type Guarding?', options: [{ letter: 'A', text: 'Uma forma de proteger o código contra hackers.' }, { letter: 'B', text: 'Técnica para estreitar (narrowing) um tipo dentro de um bloco condicional.' }, { letter: 'C', text: 'O uso de "readonly" em propriedades.' }, { letter: 'D', text: 'Validar tipos no Banco de Dados.' }], rightAnswer: 'B' },
  { id: 'ts-mid-5', language: 'TypeScript', seniority: 'mid-level', title: 'O que o Utility Type "Partial<T>" faz?', options: [{ letter: 'A', text: 'Torna todas as propriedades de T opcionais.' }, { letter: 'B', text: 'Remove propriedades de um tipo.' }, { letter: 'C', text: 'Torna propriedades somente leitura.' }, { letter: 'D', text: 'Cria um tipo com apenas algumas chaves.' }], rightAnswer: 'A' },

  { id: 'ts-sr-1', language: 'TypeScript', seniority: 'senior', title: 'O que são Variadic Tuple Types?', options: [{ letter: 'A', text: 'Tuplas que aceitam qualquer tipo.' }, { letter: 'B', text: 'Tipos de tupla que podem ter o operador spread para representar formas genéricas.' }, { letter: 'C', text: 'Arrays multidimensionais fixas.' }, { letter: 'D', text: 'Uma forma antiga de declarar enums.' }], rightAnswer: 'B' },
  { id: 'ts-sr-2', language: 'TypeScript', seniority: 'senior', title: 'Como funciona o "Conditional Types" (T extends U ? X : Y)?', options: [{ letter: 'A', text: 'É um if/else comum de JavaScript.' }, { letter: 'B', text: 'Permite selecionar um tipo baseado em uma relação de herança em tempo de compilação.' }, { letter: 'C', text: 'Valida tipos em chamadas de API.' }, { letter: 'D', text: 'É usado para tratar erros de try/catch.' }], rightAnswer: 'B' },
  { id: 'ts-sr-3', language: 'TypeScript', seniority: 'senior', title: 'Qual a diferença entre "unknown" e "any"?', options: [{ letter: 'A', text: 'São idênticos.' }, { letter: 'B', text: '"unknown" é o "any" seguro: você não pode operar nele sem antes verificar o tipo.' }, { letter: 'C', text: '"any" é mais restrito que "unknown".' }, { letter: 'D', text: '"unknown" só aceita objetos.' }], rightAnswer: 'B' },
  { id: 'ts-sr-4', language: 'TypeScript', seniority: 'senior', title: 'O que é "Mapped Types"?', options: [{ letter: 'A', text: 'Um mapa (Map) de objetos JS.' }, { letter: 'B', text: 'Criação de novos tipos baseados na iteração sobre propriedades de tipos existentes.' }, { letter: 'C', text: 'Uma função de array.' }, { letter: 'D', text: 'Configuração do tsconfig.json.' }], rightAnswer: 'B' },
  { id: 'ts-sr-5', language: 'TypeScript', seniority: 'senior', title: 'Para que serve o "infer" dentro de um Conditional Type?', options: [{ letter: 'A', text: 'Para forçar a conversão de tipo.' }, { letter: 'B', text: 'Para declarar uma variável de tipo que será deduzida durante a verificação.' }, { letter: 'C', text: 'Para importar tipos de bibliotecas C++.' }, { letter: 'D', text: 'Para verificar nulos.' }], rightAnswer: 'B' },
  { id: 'html-jr-1', language: 'HTML', seniority: 'junior', title: 'Qual tag é usada para criar um link?', options: [{ letter: 'A', text: '<link>' }, { letter: 'B', text: '<a>' }, { letter: 'C', text: '<href>' }, { letter: 'D', text: '<url>' }], rightAnswer: 'B' },
  { id: 'html-jr-2', language: 'HTML', seniority: 'junior', title: 'Qual atributo define o caminho de uma imagem?', options: [{ letter: 'A', text: 'link' }, { letter: 'B', text: 'path' }, { letter: 'C', text: 'src' }, { letter: 'D', text: 'href' }], rightAnswer: 'C' },
  { id: 'html-jr-3', language: 'HTML', seniority: 'junior', title: 'Qual tag representa o título principal de uma página?', options: [{ letter: 'A', text: '<h6>' }, { letter: 'B', text: '<title>' }, { letter: 'C', text: '<h1>' }, { letter: 'D', text: '<head>' }], rightAnswer: 'C' },
  { id: 'html-jr-4', language: 'HTML', seniority: 'junior', title: 'Como abrir um link em uma nova aba?', options: [{ letter: 'A', text: 'target="_new"' }, { letter: 'B', text: 'target="_blank"' }, { letter: 'C', text: 'rel="external"' }, { letter: 'D', text: 'open="window"' }], rightAnswer: 'B' },
  { id: 'html-jr-5', language: 'HTML', seniority: 'junior', title: 'Qual tag é usada para listas não ordenadas?', options: [{ letter: 'A', text: '<ol>' }, { letter: 'B', text: '<li>' }, { letter: 'C', text: '<ul>' }, { letter: 'D', text: '<list>' }], rightAnswer: 'C' },

  { id: 'html-mid-1', language: 'HTML', seniority: 'mid-level', title: 'Para que serve a tag <section>?', options: [{ letter: 'A', text: 'Apenas para estilizar com CSS.' }, { letter: 'B', text: 'Para representar uma seção genérica e temática de um documento.' }, { letter: 'C', text: 'Para substituir a tag <div> em todos os casos.' }, { letter: 'D', text: 'Para carregar scripts externos.' }], rightAnswer: 'B' },
  { id: 'html-mid-2', language: 'HTML', seniority: 'mid-level', title: 'O que é o atributo "srcset" em uma tag <img>?', options: [{ letter: 'A', text: 'Define uma lista de fontes de imagem para diferentes densidades de tela.' }, { letter: 'B', text: 'Define o título da imagem.' }, { letter: 'C', text: 'É usado para imagens em preto e branco.' }, { letter: 'D', text: 'Define o estilo da borda.' }], rightAnswer: 'A' },
  { id: 'html-mid-3', language: 'HTML', seniority: 'mid-level', title: 'Qual a função da tag <label>?', options: [{ letter: 'A', text: 'Criar um botão.' }, { letter: 'B', text: 'Associar um texto explicativo a um campo de input, melhorando a acessibilidade.' }, { letter: 'C', text: 'Agrupar vários formulários.' }, { letter: 'D', text: 'Definir metadados.' }], rightAnswer: 'B' },
  { id: 'html-mid-4', language: 'HTML', seniority: 'mid-level', title: 'O que significa HTML Semântico?', options: [{ letter: 'A', text: 'Usar apenas <div> e <span>.' }, { letter: 'B', text: 'Usar tags que descrevem o significado do conteúdo (ex: <article>, <nav>).' }, { letter: 'C', text: 'HTML que não precisa de CSS.' }, { letter: 'D', text: 'Código HTML gerado por IA.' }], rightAnswer: 'B' },
  { id: 'html-mid-5', language: 'HTML', seniority: 'mid-level', title: 'Para que serve o atributo "alt" em imagens?', options: [{ letter: 'A', text: 'Mudar o tamanho da imagem.' }, { letter: 'B', text: 'Fornecer uma descrição textual para leitores de tela e caso a imagem não carregue.' }, { letter: 'C', text: 'Criar um efeito de sombra.' }, { letter: 'D', text: 'Linkar a imagem a outra página.' }], rightAnswer: 'B' },

  { id: 'html-sr-1', language: 'HTML', seniority: 'senior', title: 'O que são Web Components?', options: [{ letter: 'A', text: 'Apenas componentes de React.' }, { letter: 'B', text: 'Conjunto de tecnologias (Custom Elements, Shadow DOM, HTML Templates) para criar tags reutilizáveis nativas.' }, { letter: 'C', text: 'Plugins do Chrome.' }, { letter: 'D', text: 'Tags HTML que só funcionam no servidor.' }], rightAnswer: 'B' },
  { id: 'html-sr-2', language: 'HTML', seniority: 'senior', title: 'O que é Shadow DOM?', options: [{ letter: 'A', text: 'Uma versão escura do site.' }, { letter: 'B', text: 'Encapsulamento de DOM e estilos, isolando-os do restante do documento.' }, { letter: 'C', text: 'Uma técnica de SEO para esconder links.' }, { letter: 'D', text: 'O DOM que o Googlebot não consegue ler.' }], rightAnswer: 'B' },
  { id: 'html-sr-3', language: 'HTML', seniority: 'senior', title: 'Como otimizar a prioridade de carregamento de um recurso crítico com HTML?', options: [{ letter: 'A', text: 'Usando <script async>.' }, { letter: 'B', text: 'Usando <link rel="preload">.' }, { letter: 'C', text: 'Colocando tudo no final do <body>.' }, { letter: 'D', text: 'Usando z-index alto.' }], rightAnswer: 'B' },
  { id: 'html-sr-4', language: 'HTML', seniority: 'senior', title: 'Qual o papel dos atributos ARIA (Accessible Rich Internet Applications)?', options: [{ letter: 'A', text: 'Melhorar o design responsivo.' }, { letter: 'B', text: 'Fornecer semântica adicional para tecnologias assistivas quando o HTML nativo não é suficiente.' }, { letter: 'C', text: 'Aumentar a velocidade de renderização.' }, { letter: 'D', text: 'Substituir as classes CSS.' }], rightAnswer: 'B' },
  { id: 'html-sr-5', language: 'HTML', seniority: 'senior', title: 'O que acontece quando o navegador encontra uma tag desconhecida?', options: [{ letter: 'A', text: 'O site trava imediatamente.' }, { letter: 'B', text: 'O navegador a trata como um elemento inline (semelhante a um <span>) sem semântica específica.' }, { letter: 'C', text: 'O navegador ignora o conteúdo dentro da tag.' }, { letter: 'D', text: 'É disparado um erro 404.' }], rightAnswer: 'B' },
  { id: 'html-jr-1', language: 'HTML', seniority: 'junior', title: 'Qual tag é usada para criar um link?', options: [{ letter: 'A', text: '<link>' }, { letter: 'B', text: '<a>' }, { letter: 'C', text: '<href>' }, { letter: 'D', text: '<url>' }], rightAnswer: 'B' },
  { id: 'html-jr-2', language: 'HTML', seniority: 'junior', title: 'Qual atributo define o caminho de uma imagem?', options: [{ letter: 'A', text: 'link' }, { letter: 'B', text: 'path' }, { letter: 'C', text: 'src' }, { letter: 'D', text: 'href' }], rightAnswer: 'C' },
  { id: 'html-jr-3', language: 'HTML', seniority: 'junior', title: 'Qual tag representa o título principal de uma página?', options: [{ letter: 'A', text: '<h6>' }, { letter: 'B', text: '<title>' }, { letter: 'C', text: '<h1>' }, { letter: 'D', text: '<head>' }], rightAnswer: 'C' },
  { id: 'html-jr-4', language: 'HTML', seniority: 'junior', title: 'Como abrir um link em uma nova aba?', options: [{ letter: 'A', text: 'target="_new"' }, { letter: 'B', text: 'target="_blank"' }, { letter: 'C', text: 'rel="external"' }, { letter: 'D', text: 'open="window"' }], rightAnswer: 'B' },
  { id: 'html-jr-5', language: 'HTML', seniority: 'junior', title: 'Qual tag é usada para listas não ordenadas?', options: [{ letter: 'A', text: '<ol>' }, { letter: 'B', text: '<li>' }, { letter: 'C', text: '<ul>' }, { letter: 'D', text: '<list>' }], rightAnswer: 'C' },

  { id: 'html-mid-1', language: 'HTML', seniority: 'mid-level', title: 'Para que serve a tag <section>?', options: [{ letter: 'A', text: 'Apenas para estilizar com CSS.' }, { letter: 'B', text: 'Para representar uma seção genérica e temática de um documento.' }, { letter: 'C', text: 'Para substituir a tag <div> em todos os casos.' }, { letter: 'D', text: 'Para carregar scripts externos.' }], rightAnswer: 'B' },
  { id: 'html-mid-2', language: 'HTML', seniority: 'mid-level', title: 'O que é o atributo "srcset" em uma tag <img>?', options: [{ letter: 'A', text: 'Define uma lista de fontes de imagem para diferentes densidades de tela.' }, { letter: 'B', text: 'Define o título da imagem.' }, { letter: 'C', text: 'É usado para imagens em preto e branco.' }, { letter: 'D', text: 'Define o estilo da borda.' }], rightAnswer: 'A' },
  { id: 'html-mid-3', language: 'HTML', seniority: 'mid-level', title: 'Qual a função da tag <label>?', options: [{ letter: 'A', text: 'Criar um botão.' }, { letter: 'B', text: 'Associar um texto explicativo a um campo de input, melhorando a acessibilidade.' }, { letter: 'C', text: 'Agrupar vários formulários.' }, { letter: 'D', text: 'Definir metadados.' }], rightAnswer: 'B' },
  { id: 'html-mid-4', language: 'HTML', seniority: 'mid-level', title: 'O que significa HTML Semântico?', options: [{ letter: 'A', text: 'Usar apenas <div> e <span>.' }, { letter: 'B', text: 'Usar tags que descrevem o significado do conteúdo (ex: <article>, <nav>).' }, { letter: 'C', text: 'HTML que não precisa de CSS.' }, { letter: 'D', text: 'Código HTML gerado por IA.' }], rightAnswer: 'B' },
  { id: 'html-mid-5', language: 'HTML', seniority: 'mid-level', title: 'Para que serve o atributo "alt" em imagens?', options: [{ letter: 'A', text: 'Mudar o tamanho da imagem.' }, { letter: 'B', text: 'Fornecer uma descrição textual para leitores de tela e caso a imagem não carregue.' }, { letter: 'C', text: 'Criar um efeito de sombra.' }, { letter: 'D', text: 'Linkar a imagem a outra página.' }], rightAnswer: 'B' },

  { id: 'html-sr-1', language: 'HTML', seniority: 'senior', title: 'O que são Web Components?', options: [{ letter: 'A', text: 'Apenas componentes de React.' }, { letter: 'B', text: 'Conjunto de tecnologias (Custom Elements, Shadow DOM, HTML Templates) para criar tags reutilizáveis nativas.' }, { letter: 'C', text: 'Plugins do Chrome.' }, { letter: 'D', text: 'Tags HTML que só funcionam no servidor.' }], rightAnswer: 'B' },
  { id: 'html-sr-2', language: 'HTML', seniority: 'senior', title: 'O que é Shadow DOM?', options: [{ letter: 'A', text: 'Uma versão escura do site.' }, { letter: 'B', text: 'Encapsulamento de DOM e estilos, isolando-os do restante do documento.' }, { letter: 'C', text: 'Uma técnica de SEO para esconder links.' }, { letter: 'D', text: 'O DOM que o Googlebot não consegue ler.' }], rightAnswer: 'B' },
  { id: 'html-sr-3', language: 'HTML', seniority: 'senior', title: 'Como otimizar a prioridade de carregamento de um recurso crítico com HTML?', options: [{ letter: 'A', text: 'Usando <script async>.' }, { letter: 'B', text: 'Usando <link rel="preload">.' }, { letter: 'C', text: 'Colocando tudo no final do <body>.' }, { letter: 'D', text: 'Usando z-index alto.' }], rightAnswer: 'B' },
  { id: 'html-sr-4', language: 'HTML', seniority: 'senior', title: 'Qual o papel dos atributos ARIA (Accessible Rich Internet Applications)?', options: [{ letter: 'A', text: 'Melhorar o design responsivo.' }, { letter: 'B', text: 'Fornecer semântica adicional para tecnologias assistivas quando o HTML nativo não é suficiente.' }, { letter: 'C', text: 'Aumentar a velocidade de renderização.' }, { letter: 'D', text: 'Substituir as classes CSS.' }], rightAnswer: 'B' },
  { id: 'html-sr-5', language: 'HTML', seniority: 'senior', title: 'O que acontece quando o navegador encontra uma tag desconhecida?', options: [{ letter: 'A', text: 'O site trava imediatamente.' }, { letter: 'B', text: 'O navegador a trata como um elemento inline (semelhante a um <span>) sem semântica específica.' }, { letter: 'C', text: 'O navegador ignora o conteúdo dentro da tag.' }, { letter: 'D', text: 'É disparado um erro 404.' }], rightAnswer: 'B' },
  { id: 'css-jr-1', language: 'CSS', seniority: 'junior', title: 'Como mudar a cor de fundo de um elemento?', options: [{ letter: 'A', text: 'color: red;' }, { letter: 'B', text: 'background-color: red;' }, { letter: 'C', text: 'bgcolor: red;' }, { letter: 'D', text: 'fill-color: red;' }], rightAnswer: 'B' },
  { id: 'css-jr-2', language: 'CSS', seniority: 'junior', title: 'Qual a diferença entre margin e padding?', options: [{ letter: 'A', text: 'Margin é interno, padding é externo.' }, { letter: 'B', text: 'Margin é externo, padding é interno.' }, { letter: 'C', text: 'São sinônimos.' }, { letter: 'D', text: 'Padding só serve para textos.' }], rightAnswer: 'B' },
  { id: 'css-jr-3', language: 'CSS', seniority: 'junior', title: 'Como selecionar um elemento com id="quiz"?', options: [{ letter: 'A', text: '.quiz' }, { letter: 'B', text: '#quiz' }, { letter: 'C', text: 'quiz' }, { letter: 'D', text: '*quiz' }], rightAnswer: 'B' },
  { id: 'css-jr-4', language: 'CSS', seniority: 'junior', title: 'O que faz o seletor ":hover"?', options: [{ letter: 'A', text: 'Seleciona elementos clicados.' }, { letter: 'B', text: 'Aplica estilos quando o mouse passa sobre o elemento.' }, { letter: 'C', text: 'Esconde o elemento.' }, { letter: 'D', text: 'Seleciona o primeiro filho.' }], rightAnswer: 'B' },
  { id: 'css-jr-5', language: 'CSS', seniority: 'junior', title: 'Qual propriedade define o tamanho da fonte?', options: [{ letter: 'A', text: 'text-size' }, { letter: 'B', text: 'font-style' }, { letter: 'C', text: 'font-size' }, { letter: 'D', text: 'size' }], rightAnswer: 'C' },

  { id: 'css-mid-1', language: 'CSS', seniority: 'mid-level', title: 'Qual a principal diferença entre "display: none" e "visibility: hidden"?', options: [{ letter: 'A', text: 'Nenhuma.' }, { letter: 'B', text: '"none" remove do layout; "hidden" apenas esconde mas mantém o espaço ocupado.' }, { letter: 'C', text: '"hidden" remove do DOM.' }, { letter: 'D', text: '"none" só funciona em imagens.' }], rightAnswer: 'B' },
  { id: 'css-mid-2', language: 'CSS', seniority: 'mid-level', title: 'O que é o Box Model?', options: [{ letter: 'A', text: 'Um framework CSS.' }, { letter: 'B', text: 'Modelo que define conteúdo, padding, borda e margem de cada elemento.' }, { letter: 'C', text: 'Uma forma de usar Flexbox.' }, { letter: 'D', text: 'Uma biblioteca de ícones.' }], rightAnswer: 'B' },
  { id: 'css-mid-3', language: 'CSS', seniority: 'mid-level', title: 'Qual a vantagem de usar unidades "rem" em vez de "px"?', options: [{ letter: 'A', text: 'Cores mais vibrantes.' }, { letter: 'B', text: 'Melhor escalabilidade e acessibilidade (baseia-se no root).' }, { letter: 'C', text: 'O carregamento é mais rápido.' }, { letter: 'D', text: '"rem" só funciona em mobile.' }], rightAnswer: 'B' },
  { id: 'css-mid-4', language: 'CSS', seniority: 'mid-level', title: 'Para que serve a propriedade "z-index"?', options: [{ letter: 'A', text: 'Mudar a cor.' }, { letter: 'B', text: 'Controlar a ordem de empilhamento vertical de elementos posicionados.' }, { letter: 'C', text: 'Aumentar o zoom.' }, { letter: 'D', text: 'Alinhar ao centro.' }], rightAnswer: 'B' },
  { id: 'css-mid-5', language: 'CSS', seniority: 'mid-level', title: 'O que o comando "justify-content: center" faz em um container flex?', options: [{ letter: 'A', text: 'Alinha itens no eixo principal (geralmente horizontal).' }, { letter: 'B', text: 'Alinha itens no eixo cruzado (vertical).' }, { letter: 'C', text: 'Aumenta o espaçamento entre letras.' }, { letter: 'D', text: 'Justifica o texto.' }], rightAnswer: 'A' },

  { id: 'css-sr-1', language: 'CSS', seniority: 'senior', title: 'O que é Especificidade no CSS?', options: [{ letter: 'A', text: 'A velocidade do arquivo CSS.' }, { letter: 'B', text: 'Conjunto de regras que decide qual estilo ganha quando há seletores conflitantes.' }, { letter: 'C', text: 'Um tipo de animação.' }, { letter: 'D', text: 'O uso de variáveis CSS.' }], rightAnswer: 'B' },
  { id: 'css-sr-2', language: 'CSS', seniority: 'senior', title: 'Como funciona a aceleração de hardware (GPU) no CSS?', options: [{ letter: 'A', text: 'Aumentando o brilho da tela.' }, { letter: 'B', text: 'Usando propriedades como transform: translateZ(0) ou will-change para delegar ao processador gráfico.' }, { letter: 'C', text: 'Usando muito JavaScript.' }, { letter: 'D', text: 'Não existe isso no CSS.' }], rightAnswer: 'B' },
  { id: 'css-sr-3', language: 'CSS', seniority: 'senior', title: 'O que é "Stacking Context" (Contexto de Empilhamento)?', options: [{ letter: 'A', text: 'Uma biblioteca para gerenciar grids.' }, { letter: 'B', text: 'Uma hierarquia tridimensional que determina como os elementos se sobrepõem, além do z-index.' }, { letter: 'C', text: 'Um erro de overflow.' }, { letter: 'D', text: 'O uso de display: stack.' }], rightAnswer: 'B' },
  { id: 'css-sr-4', language: 'CSS', seniority: 'senior', title: 'Qual a diferença entre Flexbox e CSS Grid?', options: [{ letter: 'A', text: 'Nenhuma.' }, { letter: 'B', text: 'Flexbox é focado em uma dimensão (linha ou coluna); Grid é focado em duas dimensões.' }, { letter: 'C', text: 'Grid é apenas para imagens.' }, { letter: 'D', text: 'Flexbox é mais moderno que Grid.' }], rightAnswer: 'B' },
  { id: 'css-sr-5', language: 'CSS', seniority: 'senior', title: 'Para que servem as CSS Custom Properties (--var)?', options: [{ letter: 'A', text: 'Para criar funções no CSS.' }, { letter: 'B', text: 'Variáveis dinâmicas que podem ser manipuladas via JS e respeitam o escopo do DOM.' }, { letter: 'C', text: 'Para importar arquivos SASS.' }, { letter: 'D', text: 'Para definir o nome do autor.' }], rightAnswer: 'B' },

  { id: 'php-jr-1', language: 'Php', seniority: 'junior', title: 'Como começa um script PHP?', options: [{ letter: 'A', text: '<script>' }, { letter: 'B', text: '<?php' }, { letter: 'C', text: '<?' }, { letter: 'D', text: '<php>' }], rightAnswer: 'B' },
  { id: 'php-jr-2', language: 'Php', seniority: 'junior', title: 'Como declarar uma variável no PHP?', options: [{ letter: 'A', text: 'var x = 1;' }, { letter: 'B', text: '$x = 1;' }, { letter: 'C', text: 'int x = 1;' }, { letter: 'D', text: 'let x = 1;' }], rightAnswer: 'B' },
  { id: 'php-jr-3', language: 'Php', seniority: 'junior', title: 'Qual função exibe texto na tela?', options: [{ letter: 'A', text: 'print_all()' }, { letter: 'B', text: 'echo' }, { letter: 'C', text: 'console.log()' }, { letter: 'D', text: 'show()' }], rightAnswer: 'B' },
  { id: 'php-jr-4', language: 'Php', seniority: 'junior', title: 'Qual operador é usado para concatenação de strings?', options: [{ letter: 'A', text: '+' }, { letter: 'B', text: '.' }, { letter: 'C', text: '&' }, { letter: 'D', text: 'concat()' }], rightAnswer: 'B' },
  { id: 'php-jr-5', language: 'Php', seniority: 'junior', title: 'Qual superglobal armazena dados de formulário enviados via POST?', options: [{ letter: 'A', text: '$GET' }, { letter: 'B', text: '$_POST' }, { letter: 'C', text: '$POST_DATA' }, { letter: 'D', text: '$_FORM' }], rightAnswer: 'B' },

  { id: 'php-mid-1', language: 'Php', seniority: 'mid-level', title: 'Qual a função do Composer no ecossistema PHP?', options: [{ letter: 'A', text: 'Compilar código PHP.' }, { letter: 'B', text: 'Gerenciador de dependências e pacotes.' }, { letter: 'C', text: 'Servidor web nativo.' }, { letter: 'D', text: 'Gerador de documentação.' }], rightAnswer: 'B' },
  { id: 'php-mid-2', language: 'Php', seniority: 'mid-level', title: 'O que são Traits?', options: [{ letter: 'A', text: 'Interfaces com métodos privados.' }, { letter: 'B', text: 'Mecanismo para reutilização de código em linguagens de herança única como PHP.' }, { letter: 'C', text: 'Erros fatais do sistema.' }, { letter: 'D', text: 'Configurações do php.ini.' }], rightAnswer: 'B' },
  { id: 'php-mid-3', language: 'Php', seniority: 'mid-level', title: 'Qual a diferença entre PDO e MySQLi?', options: [{ letter: 'A', text: 'Não há diferença.' }, { letter: 'B', text: 'PDO é uma camada de abstração para vários bancos; MySQLi é apenas para MySQL.' }, { letter: 'C', text: 'MySQLi é orientado a objetos; PDO não.' }, { letter: 'D', text: 'PDO é mais antigo e lento.' }], rightAnswer: 'B' },
  { id: 'php-mid-4', language: 'Php', seniority: 'mid-level', title: 'Para que servem os Namespaces?', options: [{ letter: 'A', text: 'Aumentar a memória do servidor.' }, { letter: 'B', text: 'Organizar o código e evitar conflitos de nomes entre classes e funções.' }, { letter: 'C', text: 'Definir o nome do banco de dados.' }, { letter: 'D', text: 'Criar variáveis globais.' }], rightAnswer: 'B' },
  { id: 'php-mid-5', language: 'Php', seniority: 'mid-level', title: 'O que faz o método mágico __construct()?', options: [{ letter: 'A', text: 'Destrói um objeto.' }, { letter: 'B', text: 'É chamado automaticamente ao instanciar uma nova classe.' }, { letter: 'C', text: 'Transforma um objeto em string.' }, { letter: 'D', text: 'Cria um clone do objeto.' }], rightAnswer: 'B' },

  { id: 'php-sr-1', language: 'Php', seniority: 'senior', title: 'O que é o OPcache?', options: [{ letter: 'A', text: 'Um gerenciador de banco de dados.' }, { letter: 'B', text: 'Extensão que armazena o bytecode pré-compilado na memória, acelerando a execução.' }, { letter: 'C', text: 'Um framework de testes.' }, { letter: 'D', text: 'Um plugin do VS Code.' }], rightAnswer: 'B' },
  { id: 'php-sr-2', language: 'Php', seniority: 'senior', title: 'O que caracteriza a Injeção de Dependência?', options: [{ letter: 'A', text: 'Passar objetos para o construtor ou métodos em vez de criá-los internamente.' }, { letter: 'B', text: 'Incluir arquivos externos com require().' }, { letter: 'C', text: 'Instalar pacotes com Composer.' }, { letter: 'D', text: 'Usar variáveis globais para conectar o DB.' }], rightAnswer: 'A' },
  { id: 'php-sr-3', language: 'Php', seniority: 'senior', title: 'Qual a diferença entre == e === no PHP 8?', options: [{ letter: 'A', text: 'Não existe diferença.' }, { letter: 'B', text: '== compara valor (com coerção); === compara valor e tipo de forma estrita.' }, { letter: 'C', text: '=== é usado apenas para objetos.' }, { letter: 'D', text: '== é mais rápido.' }], rightAnswer: 'B' },
  { id: 'php-sr-4', language: 'Php', seniority: 'senior', title: 'O que são "Generators" e qual sua vantagem de memória?', options: [{ letter: 'A', text: 'Geram senhas seguras.' }, { letter: 'B', text: 'Iteradores que geram valores sob demanda usando yield, economizando muita RAM em listas grandes.' }, { letter: 'C', text: 'Scripts que geram HTML automaticamente.' }, { letter: 'D', text: 'Processadores de imagens.' }], rightAnswer: 'B' },
  { id: 'php-sr-5', language: 'Php', seniority: 'senior', title: 'O que são "Attributes" (introduzidos no PHP 8)?', options: [{ letter: 'A', text: 'Comentários comuns.' }, { letter: 'B', text: 'Metadados estruturados para classes e métodos, substituindo os PHPDoc annotations.' }, { letter: 'C', text: 'Propriedades privadas de uma classe.' }, { letter: 'D', text: 'Tags HTML dentro do PHP.' }], rightAnswer: 'B' },

  { id: 'jv-jr-1', language: 'Java', seniority: 'junior', title: 'Qual a principal diferença entre um tipo primitivo (ex: int) e uma Wrapper Class (ex: Integer)?', options: [{ letter: 'A', text: 'Não há diferença.' }, { letter: 'B', text: 'Wrappers são objetos e podem ser nulos; primitivos não.' }, { letter: 'C', text: 'Primitivos ocupam mais memória.' }, { letter: 'D', text: 'Wrappers não funcionam em Listas.' }], rightAnswer: 'B' },
  { id: 'jv-jr-2', language: 'Java', seniority: 'junior', title: 'O que significa a sigla JVM?', options: [{ letter: 'A', text: 'Java Variable Manager' }, { letter: 'B', text: 'Java Virtual Machine' }, { letter: 'C', text: 'Joint Visual Module' }, { letter: 'D', text: 'Just Virtual Memory' }], rightAnswer: 'B' },
  { id: 'jv-jr-3', language: 'Java', seniority: 'junior', title: 'Qual palavra reservada é usada para herança de classes?', options: [{ letter: 'A', text: 'implements' }, { letter: 'B', text: 'extends' }, { letter: 'C', text: 'inherits' }, { letter: 'D', text: 'using' }], rightAnswer: 'B' },
  { id: 'jv-jr-4', language: 'Java', seniority: 'junior', title: 'Como se declara o método principal de um programa Java?', options: [{ letter: 'A', text: 'void main()' }, { letter: 'B', text: 'public static void main(String[] args)' }, { letter: 'C', text: 'static main(String args)' }, { letter: 'D', text: 'public main()' }], rightAnswer: 'B' },
  { id: 'jv-jr-5', language: 'Java', seniority: 'junior', title: 'Qual é o operador de comparação de igualdade?', options: [{ letter: 'A', text: '=' }, { letter: 'B', text: '==' }, { letter: 'C', text: 'equals' }, { letter: 'D', text: '===' }], rightAnswer: 'B' },

  { id: 'jv-mid-1', language: 'Java', seniority: 'mid-level', title: 'O que é o "Diamond Problem" e como Java o resolve?', options: [{ letter: 'A', text: 'É um erro de memória resolvido pelo GC.' }, { letter: 'B', text: 'Conflito de herança múltipla, resolvido permitindo herança simples de classes e múltiplas interfaces.' }, { letter: 'C', text: 'Um erro de sintaxe em Generics.' }, { letter: 'D', text: 'Um problema de recursividade infinita.' }], rightAnswer: 'B' },
  { id: 'jv-mid-2', language: 'Java', seniority: 'mid-level', title: 'Qual a diferença entre HashMap e Hashtable?', options: [{ letter: 'A', text: 'HashMap é thread-safe, Hashtable não.' }, { letter: 'B', text: 'HashMap permite uma chave nula; Hashtable é sincronizada (thread-safe) e não permite nulos.' }, { letter: 'C', text: 'Hashtable é mais rápida que HashMap.' }, { letter: 'D', text: 'São idênticas desde o Java 8.' }], rightAnswer: 'B' },
  { id: 'jv-mid-3', language: 'Java', seniority: 'mid-level', title: 'Para que serve a palavra-chave "volatile"?', options: [{ letter: 'A', text: 'Para indicar que uma variável será alterada por múltiplas threads, garantindo visibilidade na memória principal.' }, { letter: 'B', text: 'Para tornar uma variável constante.' }, { letter: 'C', text: 'Para deletar um objeto manualmente.' }, { letter: 'D', text: 'Para otimizar o tempo de compilação.' }], rightAnswer: 'A' },
  { id: 'jv-mid-4', language: 'Java', seniority: 'mid-level', title: 'O que é a API de Streams (Java 8+)?', options: [{ letter: 'A', text: 'Uma forma de ler arquivos TXT.' }, { letter: 'B', text: 'Uma forma funcional de processar coleções de dados de forma declarativa.' }, { letter: 'C', text: 'Um sistema de chat em tempo real.' }, { letter: 'D', text: 'A nova interface gráfica do Java.' }], rightAnswer: 'B' },
  { id: 'jv-mid-5', language: 'Java', seniority: 'mid-level', title: 'Qual a diferença entre Checked e Unchecked Exceptions?', options: [{ letter: 'A', text: 'Checked devem ser tratadas ou declaradas na assinatura do método; Unchecked (Runtime) não.' }, { letter: 'B', text: 'Unchecked são erros de hardware.' }, { letter: 'C', text: 'Checked só ocorrem em tempo de execução.' }, { letter: 'D', text: 'Não há diferença no tratamento.' }], rightAnswer: 'A' },

  { id: 'jv-sr-1', language: 'Java', seniority: 'senior', title: 'O que é o G1 Garbage Collector?', options: [{ letter: 'A', text: 'Um coletor antigo para máquinas de 32 bits.' }, { letter: 'B', text: 'Um coletor focado em latência previsível, dividindo a Heap em regiões.' }, { letter: 'C', text: 'Uma ferramenta de log de erros.' }, { letter: 'D', text: 'O compilador JIT do Java.' }], rightAnswer: 'B' },
  { id: 'jv-sr-2', language: 'Java', seniority: 'senior', title: 'O que são "Strong", "Soft", "Weak" e "Phantom" References?', options: [{ letter: 'A', text: 'Diferentes níveis de visibilidade de variáveis (public/private).' }, { letter: 'B', text: 'Diferentes graus de elegibilidade de um objeto para o Garbage Collector.' }, { letter: 'C', text: 'Tipos de criptografia do pacote java.security.' }, { letter: 'D', text: 'Nomes de design patterns de criação.' }], rightAnswer: 'B' },
  { id: 'jv-sr-3', language: 'Java', seniority: 'senior', title: 'Como funciona o ClassLoader do Java?', options: [{ letter: 'A', text: 'Ele carrega todas as classes do computador no boot.' }, { letter: 'B', text: 'Utiliza um modelo de delegação hierárquica para carregar classes sob demanda.' }, { letter: 'C', text: 'É um script que limpa o cache.' }, { letter: 'D', text: 'Transforma arquivos .java em .exe.' }], rightAnswer: 'B' },
  { id: 'jv-sr-4', language: 'Java', seniority: 'senior', title: 'O que é o Reflection API e qual seu custo?', options: [{ letter: 'A', text: 'Permite examinar ou modificar o comportamento de classes em runtime, mas tem alto custo de performance.' }, { letter: 'B', text: 'É um espelhamento de banco de dados nativo.' }, { letter: 'C', text: 'Serve para debugar código via interface visual.' }, { letter: 'D', text: 'É o termo para recursividade em Java.' }], rightAnswer: 'A' },
  { id: 'jv-sr-5', language: 'Java', seniority: 'senior', title: 'O que é o modelo de memória do Java (JMM)?', options: [{ letter: 'A', text: 'A especificação de como os threads interagem através da memória principal e caches locais.' }, { letter: 'B', text: 'O limite de RAM definido no Windows.' }, { letter: 'C', text: 'A estrutura de pastas do JDK.' }, { letter: 'D', text: 'Um algoritmo de compressão de dados.' }], rightAnswer: 'A' },

  { id: 'c-jr-1', language: 'C', seniority: 'junior', title: 'O que é um ponteiro?', options: [{ letter: 'A', text: 'Uma variável que armazena um número inteiro.' }, { letter: 'B', text: 'Uma variável que armazena o endereço de memória de outra variável.' }, { letter: 'C', text: 'Uma função que aponta para o erro.' }, { letter: 'D', text: 'Um tipo de dado para textos longos.' }], rightAnswer: 'B' },
  { id: 'c-jr-2', language: 'C', seniority: 'junior', title: 'Como liberar memória alocada dinamicamente?', options: [{ letter: 'A', text: 'delete()' }, { letter: 'B', text: 'free()' }, { letter: 'C', text: 'clear()' }, { letter: 'D', text: 'remove()' }], rightAnswer: 'B' },
  { id: 'c-jr-3', language: 'C', seniority: 'junior', title: 'Qual a função usada para imprimir no console?', options: [{ letter: 'A', text: 'cout' }, { letter: 'B', text: 'printf()' }, { letter: 'C', text: 'print()' }, { letter: 'D', text: 'write()' }], rightAnswer: 'B' },
  { id: 'c-jr-4', language: 'C', seniority: 'junior', title: 'Qual símbolo representa o operador de endereço?', options: [{ letter: 'A', text: '*' }, { letter: 'B', text: '&' }, { letter: 'C', text: '%' }, { letter: 'D', text: '#' }], rightAnswer: 'B' },
  { id: 'c-jr-5', language: 'C', seniority: 'junior', title: 'O que o comando "return 0;" na main geralmente significa?', options: [{ letter: 'A', text: 'Erro no programa.' }, { letter: 'B', text: 'Execução bem-sucedida.' }, { letter: 'C', text: 'O programa vai reiniciar.' }, { letter: 'D', text: 'Variável nula.' }], rightAnswer: 'B' },

  { id: 'c-mid-1', language: 'C', seniority: 'mid-level', title: 'Qual a diferença entre malloc() e calloc()?', options: [{ letter: 'A', text: 'Malloc é mais rápido; Calloc é lento.' }, { letter: 'B', text: 'Malloc aloca memória bruta; Calloc aloca e inicializa todos os bits com zero.' }, { letter: 'C', text: 'Calloc é apenas para strings.' }, { letter: 'D', text: 'Malloc não aceita variáveis.' }], rightAnswer: 'B' },
  { id: 'c-mid-2', language: 'C', seniority: 'mid-level', title: 'O que é um "Dangling Pointer"?', options: [{ letter: 'A', text: 'Um ponteiro que aponta para NULL.' }, { letter: 'B', text: 'Um ponteiro que ainda aponta para um endereço de memória que já foi liberado.' }, { letter: 'C', text: 'Um ponteiro que não foi declarado.' }, { letter: 'D', text: 'Um ponteiro para uma função.' }], rightAnswer: 'B' },
  { id: 'c-mid-3', language: 'C', seniority: 'mid-level', title: 'Para que serve a palavra-chave "static" em uma variável global?', options: [{ letter: 'A', text: 'Para torná-la constante.' }, { letter: 'B', text: 'Para limitar o escopo da variável apenas ao arquivo onde foi declarada.' }, { letter: 'C', text: 'Para permitir o acesso de outros arquivos.' }, { letter: 'D', text: 'Para deletar a variável após o uso.' }], rightAnswer: 'B' },
  { id: 'c-mid-4', language: 'C', seniority: 'mid-level', title: 'O que faz o operador "sizeof"?', options: [{ letter: 'A', text: 'Retorna o número de letras de uma string.' }, { letter: 'B', text: 'Retorna o tamanho em bytes de um tipo ou variável.' }, { letter: 'C', text: 'Redimensiona uma array.' }, { letter: 'D', text: 'Verifica se a memória está cheia.' }], rightAnswer: 'B' },
  { id: 'c-mid-5', language: 'C', seniority: 'mid-level', title: 'O que é uma struct?', options: [{ letter: 'A', text: 'Uma função especial.' }, { letter: 'B', text: 'Um tipo de dado definido pelo usuário que agrupa variáveis de diferentes tipos.' }, { letter: 'C', text: 'Uma biblioteca padrão.' }, { letter: 'D', text: 'Um loop infinito.' }], rightAnswer: 'B' },

  { id: 'c-sr-1', language: 'C', seniority: 'senior', title: 'O que acontece em um "Stack Overflow" no nível de sistema?', options: [{ letter: 'A', text: 'O HD fica sem espaço.' }, { letter: 'B', text: 'O ponteiro de pilha (stack pointer) excede o limite alocado, invadindo memória proibida.' }, { letter: 'C', text: 'O código é compilado incorretamente.' }, { letter: 'D', text: 'O usuário é desconectado.' }], rightAnswer: 'B' },
  { id: 'c-sr-2', language: 'C', seniority: 'senior', title: 'O que é "Memory Alignment" (alinhamento de memória)?', options: [{ letter: 'A', text: 'Organizar o código de forma bonita.' }, { letter: 'B', text: 'Ajuste de dados na memória em endereços múltiplos do tamanho da palavra do processador para otimizar o acesso.' }, { letter: 'C', text: 'Limpar a RAM.' }, { letter: 'D', text: 'Usar apenas ponteiros void.' }], rightAnswer: 'B' },
  { id: 'c-sr-3', language: 'C', seniority: 'senior', title: 'Como implementar polimorfismo em C puro?', options: [{ letter: 'A', text: 'Não é possível.' }, { letter: 'B', text: 'Usando ponteiros de função dentro de structs.' }, { letter: 'C', text: 'Usando o comando "virtual".' }, { letter: 'D', text: 'Através de macros do pré-processador.' }], rightAnswer: 'B' },
  { id: 'c-sr-4', language: 'C', seniority: 'senior', title: 'Qual o perigo de usar a função gets()?', options: [{ letter: 'A', text: 'Ela é muito lenta.' }, { letter: 'B', text: 'Vulnerabilidade de Buffer Overflow, pois não limita o tamanho da leitura.' }, { letter: 'C', text: 'Ela não lê espaços.' }, { letter: 'D', text: 'Ela só funciona em Linux.' }], rightAnswer: 'B' },
  { id: 'c-sr-5', language: 'C', seniority: 'senior', title: 'O que faz o qualificador "restrict"?', options: [{ letter: 'A', text: 'Impede o acesso de outras threads.' }, { letter: 'B', text: 'Informa ao compilador que aquele ponteiro é a única forma de acessar o objeto apontado, permitindo otimizações agressivas.' }, { letter: 'C', text: 'Torna o ponteiro constante.' }, { letter: 'D', text: 'Bloqueia o uso de free().' }], rightAnswer: 'B' },

  { id: 'cpp-jr-1', language: 'C++', seniority: 'junior', title: 'Como imprimir no console em C++ usando a biblioteca padrão?', options: [{ letter: 'A', text: 'printf()' }, { letter: 'B', text: 'std::cout' }, { letter: 'C', text: 'System.out.print' }, { letter: 'D', text: 'echo' }], rightAnswer: 'B' },
  { id: 'cpp-jr-2', language: 'C++', seniority: 'junior', title: 'Qual a diferença entre "new" e "malloc"?', options: [{ letter: 'A', text: '"new" é do C, "malloc" do C++.' }, { letter: 'B', text: '"new" chama o construtor do objeto; "malloc" apenas aloca memória bruta.' }, { letter: 'C', text: 'Não há diferença.' }, { letter: 'D', text: '"malloc" é mais seguro.' }], rightAnswer: 'B' },
  { id: 'cpp-jr-3', language: 'C++', seniority: 'junior', title: 'O que é uma classe em C++?', options: [{ letter: 'A', text: 'Um conjunto de funções apenas.' }, { letter: 'B', text: 'Um modelo para criar objetos que encapsula dados e comportamentos.' }, { letter: 'C', text: 'Uma variável global.' }, { letter: 'D', text: 'Um arquivo de cabeçalho.' }], rightAnswer: 'B' },
  { id: 'cpp-jr-4', language: 'C++', seniority: 'junior', title: 'Qual operador é usado para acessar membros de um ponteiro de objeto?', options: [{ letter: 'A', text: '.' }, { letter: 'B', text: '->' }, { letter: 'C', text: '::' }, { letter: 'D', text: '@' }], rightAnswer: 'B' },
  { id: 'cpp-jr-5', language: 'C++', seniority: 'junior', title: 'O que é o "Namespace std"?', options: [{ letter: 'A', text: 'Uma biblioteca de gráficos.' }, { letter: 'B', text: 'O espaço de nomes padrão que contém as funcionalidades da biblioteca padrão do C++.' }, { letter: 'C', text: 'Um tipo de variável.' }, { letter: 'D', text: 'O nome do compilador.' }], rightAnswer: 'B' },

  { id: 'cpp-mid-1', language: 'C++', seniority: 'mid-level', title: 'O que é o RAII (Resource Acquisition Is Initialization)?', options: [{ letter: 'A', text: 'Um novo compilador.' }, { letter: 'B', text: 'Padrão onde a gestão de recursos (memória, arquivos) é atrelada ao ciclo de vida de objetos (destrutores).' }, { letter: 'C', text: 'Uma forma de herança múltipla.' }, { letter: 'D', text: 'Um erro de linkagem.' }], rightAnswer: 'B' },
  { id: 'cpp-mid-2', language: 'C++', seniority: 'mid-level', title: 'Para que servem as funções virtuais?', options: [{ letter: 'A', text: 'Para economizar memória.' }, { letter: 'B', text: 'Para permitir polimorfismo de tempo de execução (dynamic dispatch).' }, { letter: 'C', text: 'Para declarar funções que não existem.' }, { letter: 'D', text: 'Para rodar código em máquinas virtuais.' }], rightAnswer: 'B' },
  { id: 'cpp-mid-3', language: 'C++', seniority: 'mid-level', title: 'O que é a STL em C++?', options: [{ letter: 'A', text: 'Standard Template Library: coleção de algoritmos e containers genéricos.' }, { letter: 'B', text: 'Simple Text Language.' }, { letter: 'C', text: 'Sistema de Tráfego Local.' }, { letter: 'D', text: 'Um framework para jogos.' }], rightAnswer: 'A' },
  { id: 'cpp-mid-4', language: 'C++', seniority: 'mid-level', title: 'Qual a diferença entre "std::vector" e uma array comum?', options: [{ letter: 'A', text: 'Vector é estático.' }, { letter: 'B', text: 'Vector é dinâmico, cresce automaticamente e gerencia sua própria memória.' }, { letter: 'C', text: 'Arrays são mais rápidas para deletar itens.' }, { letter: 'D', text: 'Não existe diferença de funcionalidade.' }], rightAnswer: 'B' },
  { id: 'cpp-mid-5', language: 'C++', seniority: 'mid-level', title: 'O que é um "Copy Constructor"?', options: [{ letter: 'A', text: 'Um botão de copiar e colar.' }, { letter: 'B', text: 'Um construtor especial usado para criar um novo objeto como cópia de um objeto existente.' }, { letter: 'C', text: 'Uma função que duplica o código.' }, { letter: 'D', text: 'Um vírus de computador.' }], rightAnswer: 'B' },

  { id: 'cpp-sr-1', language: 'C++', seniority: 'senior', title: 'O que são "Smart Pointers" (unique_ptr, shared_ptr)?', options: [{ letter: 'A', text: 'Ponteiros que digitam código sozinhos.' }, { letter: 'B', text: 'Objetos que gerenciam a vida útil de ponteiros brutos automaticamente para evitar Memory Leaks.' }, { letter: 'C', text: 'Ponteiros que só aceitam números.' }, { letter: 'D', text: 'Variáveis globais seguras.' }], rightAnswer: 'B' },
  { id: 'cpp-sr-2', language: 'C++', seniority: 'senior', title: 'O que é "SFINAE" (Substitution Failure Is Not An Error)?', options: [{ letter: 'A', text: 'Um erro crítico do compilador.' }, { letter: 'B', text: 'Conceito em Templates onde falhas na dedução de tipos não geram erro, apenas descartam a sobrecarga.' }, { letter: 'C', text: 'Uma biblioteca de redes.' }, { letter: 'D', text: 'Um modo de depuração.' }], rightAnswer: 'B' },
  { id: 'cpp-sr-3', language: 'C++', seniority: 'senior', title: 'O que são "Move Semantics" e "Rvalue References"?', options: [{ letter: 'A', text: 'Mover arquivos no disco.' }, { letter: 'B', text: 'Recurso (C++11) que permite "mover" recursos de objetos temporários em vez de copiá-los, ganhando performance.' }, { letter: 'C', text: 'Referências a variáveis globais.' }, { letter: 'D', text: 'Uma técnica de animação CSS.' }], rightAnswer: 'B' },
  { id: 'cpp-sr-4', language: 'C++', seniority: 'senior', title: 'Como funciona a VTable (Virtual Table)?', options: [{ letter: 'A', text: 'É uma tabela de banco de dados virtual.' }, { letter: 'B', text: 'Mecanismo interno usado pelo compilador para suportar dynamic dispatch (funções virtuais).' }, { letter: 'C', text: 'Uma lista de variáveis globais.' }, { letter: 'D', text: 'Onde o C++ armazena as strings.' }], rightAnswer: 'B' },
  { id: 'cpp-sr-5', language: 'C++', seniority: 'senior', title: 'O que é Metaprogramação de Templates?', options: [{ letter: 'A', text: 'Escrever código que gera código em tempo de compilação.' }, { letter: 'B', text: 'Usar modelos de design do Photoshop.' }, { letter: 'C', text: 'Um framework de testes.' }, { letter: 'D', text: 'A documentação do sistema.' }], rightAnswer: 'A' },

  { id: 'cs-jr-1', language: 'C#', seniority: 'junior', title: 'Qual a extensão dos arquivos de código C#?', options: [{ letter: 'A', text: '.cpp' }, { letter: 'B', text: '.cs' }, { letter: 'C', text: '.csharp' }, { letter: 'D', text: '.java' }], rightAnswer: 'B' },
  { id: 'cs-jr-2', language: 'C#', seniority: 'junior', title: 'Qual framework da Microsoft é usado para rodar C#?', options: [{ letter: 'A', text: 'Node.js' }, { letter: 'B', text: '.NET' }, { letter: 'C', text: 'Spring' }, { letter: 'D', text: 'Django' }], rightAnswer: 'B' },
  { id: 'cs-jr-3', language: 'C#', seniority: 'junior', title: 'O que faz o comando Console.WriteLine()?', options: [{ letter: 'A', text: 'Lê uma linha do teclado.' }, { letter: 'B', text: 'Escreve um texto no console e pula uma linha.' }, { letter: 'C', text: 'Fecha o programa.' }, { letter: 'D', text: 'Cria uma variável.' }], rightAnswer: 'B' },
  { id: 'cs-jr-4', language: 'C#', seniority: 'junior', title: 'Qual a diferença entre "value types" e "reference types"?', options: [{ letter: 'A', text: 'Nenhuma.' }, { letter: 'B', text: 'Value types armazenam o dado (stack); Reference types armazenam o endereço (heap).' }, { letter: 'C', text: 'Reference types são mais rápidos.' }, { letter: 'D', text: 'Value types são apenas para números.' }], rightAnswer: 'B' },
  { id: 'cs-jr-5', language: 'C#', seniority: 'junior', title: 'O que é o NuGet?', options: [{ letter: 'A', text: 'O compilador do C#.' }, { letter: 'B', text: 'O gerenciador de pacotes para o ecossistema .NET.' }, { letter: 'C', text: 'Uma IDE da Microsoft.' }, { letter: 'D', text: 'Um tipo de dado para datas.' }], rightAnswer: 'B' },

  { id: 'cs-mid-1', language: 'C#', seniority: 'mid-level', title: 'O que é o LINQ?', options: [{ letter: 'A', text: 'Um driver de placa de vídeo.' }, { letter: 'B', text: 'Language Integrated Query: sintaxe para consultar dados de diversas fontes (coleções, SQL).' }, { letter: 'C', text: 'Uma linguagem de marcação.' }, { letter: 'D', text: 'Um sistema de arquivos.' }], rightAnswer: 'B' },
  { id: 'cs-mid-2', language: 'C#', seniority: 'mid-level', title: 'Qual a diferença entre "IEnumerable" e "IQueryable"?', options: [{ letter: 'A', text: 'IEnumerable é para banco de dados; IQueryable para listas.' }, { letter: 'B', text: 'IEnumerable executa em memória; IQueryable permite traduzir a query para o provedor (ex: SQL).' }, { letter: 'C', text: 'São idênticos.' }, { letter: 'D', text: 'IEnumerable é assíncrono.' }], rightAnswer: 'B' },
  { id: 'cs-mid-3', language: 'C#', seniority: 'mid-level', title: 'Para que servem os modificadores "async" e "await"?', options: [{ letter: 'A', text: 'Para pausar o computador.' }, { letter: 'B', text: 'Para realizar operações assíncronas sem bloquear a thread principal.' }, { letter: 'C', text: 'Para deletar variáveis.' }, { letter: 'D', text: 'Para proteger o código contra vírus.' }], rightAnswer: 'B' },
  { id: 'cs-mid-4', language: 'C#', seniority: 'mid-level', title: 'O que são "Extension Methods"?', options: [{ letter: 'A', text: 'Métodos que aumentam o tamanho do arquivo.' }, { letter: 'B', text: 'Permitem adicionar novos métodos a tipos existentes sem modificar o código original.' }, { letter: 'C', text: 'Métodos que só funcionam em subclasses.' }, { letter: 'D', text: 'Métodos para ler extensões de arquivos.' }], rightAnswer: 'B' },
  { id: 'cs-mid-5', language: 'C#', seniority: 'mid-level', title: 'Qual a função do Garbage Collector no .NET?', options: [{ letter: 'A', text: 'Reiniciar o Windows.' }, { letter: 'B', text: 'Gerenciar automaticamente a alocação e liberação de memória para objetos na Heap.' }, { letter: 'C', text: 'Limpar o cache do navegador.' }, { letter: 'D', text: 'Compilar o código para código de máquina.' }], rightAnswer: 'B' },

  { id: 'cs-sr-1', language: 'C#', seniority: 'senior', title: 'O que é o CLR (Common Language Runtime)?', options: [{ letter: 'A', text: 'O editor de texto do Visual Studio.' }, { letter: 'B', text: 'O ambiente de execução do .NET que gerencia memória, threads e segurança.' }, { letter: 'C', text: 'Uma biblioteca de gráficos 3D.' }, { letter: 'D', text: 'O instalador do framework.' }], rightAnswer: 'B' },
  { id: 'cs-sr-2', language: 'C#', seniority: 'senior', title: 'Como funciona o padrão de projeto "Dependency Injection" nativo do ASP.NET Core?', options: [{ letter: 'A', text: 'Através de variáveis globais.' }, { letter: 'B', text: 'Usando um container de serviços que resolve dependências via construtor.' }, { letter: 'C', text: 'Copiando e colando código de classes.' }, { letter: 'D', text: 'Usando apenas classes estáticas.' }], rightAnswer: 'B' },
  { id: 'cs-sr-3', language: 'C#', seniority: 'senior', title: 'O que são "Delegates" e "Events"?', options: [{ letter: 'A', text: 'Nomes de variáveis para datas.' }, { letter: 'B', text: 'Delegates são ponteiros para funções; Events são notificações baseadas neles.' }, { letter: 'C', text: 'Funções para gerenciar bancos de dados.' }, { letter: 'D', text: 'Tags HTML para formulários.' }], rightAnswer: 'B' },
  { id: 'cs-sr-4', language: 'C#', seniority: 'senior', title: 'Qual o impacto de usar "Reflection" em larga escala no C#?', options: [{ letter: 'A', text: 'Nenhum, é extremamente rápido.' }, { letter: 'B', text: 'Degradação de performance devido à busca de metadados em runtime.' }, { letter: 'C', text: 'Melhora a segurança do código.' }, { letter: 'D', text: 'Reduz o consumo de RAM.' }], rightAnswer: 'B' },
  { id: 'cs-sr-5', language: 'C#', seniority: 'senior', title: 'O que é o padrão "Middleware" no ASP.NET?', options: [{ letter: 'A', text: 'Um banco de dados intermediário.' }, { letter: 'B', text: 'Componentes montados em um pipeline que manipulam requisições e respostas HTTP.' }, { letter: 'C', text: 'O hardware que roda o servidor.' }, { letter: 'D', text: 'Um tipo de variável para conexões.' }], rightAnswer: 'B' },

  { id: 'lua-jr-1', language: 'Lua', seniority: 'junior', title: 'Qual é a principal estrutura de dados em Lua?', options: [{ letter: 'A', text: 'Array' }, { letter: 'B', text: 'Table' }, { letter: 'C', text: 'Dictionary' }, { letter: 'D', text: 'List' }], rightAnswer: 'B' },
  { id: 'lua-jr-2', language: 'Lua', seniority: 'junior', title: 'Em Lua, os índices de uma tabela (array) começam em qual número?', options: [{ letter: 'A', text: '0' }, { letter: 'B', text: '1' }, { letter: 'C', text: '-1' }, { letter: 'D', text: 'Depende do compilador' }], rightAnswer: 'B' },
  { id: 'lua-jr-3', language: 'Lua', seniority: 'junior', title: 'Como se declara uma variável local?', options: [{ letter: 'A', text: 'var x = 1' }, { letter: 'B', text: 'local x = 1' }, { letter: 'C', text: 'let x = 1' }, { letter: 'D', text: 'x := 1' }], rightAnswer: 'B' },
  { id: 'lua-jr-4', language: 'Lua', seniority: 'junior', title: 'Como concatenar duas strings em Lua?', options: [{ letter: 'A', text: '+' }, { letter: 'B', text: '..' }, { letter: 'C', text: '&' }, { letter: 'D', text: 'concat()' }], rightAnswer: 'B' },
  { id: 'lua-jr-5', language: 'Lua', seniority: 'junior', title: 'Como se encerra um bloco de código (if, for, function)?', options: [{ letter: 'A', text: '}' }, { letter: 'B', text: 'end' }, { letter: 'C', text: 'stop' }, { letter: 'D', text: 'finish' }], rightAnswer: 'B' },

  { id: 'lua-mid-1', language: 'Lua', seniority: 'mid-level', title: 'O que são "Metatables"?', options: [{ letter: 'A', text: 'Tabelas que armazenam metadados de arquivos.' }, { letter: 'B', text: 'Mecanismo que permite mudar o comportamento de tabelas (ex: sobrecarga de operadores).' }, { letter: 'C', text: 'Tabelas gigantes com milhões de registros.' }, { letter: 'D', text: 'Bancos de dados externos.' }], rightAnswer: 'B' },
  { id: 'lua-mid-2', language: 'Lua', seniority: 'mid-level', title: 'O que faz a função "setmetatable(t1, t2)"?', options: [{ letter: 'A', text: 'Copia os dados de t2 para t1.' }, { letter: 'B', text: 'Define t2 como a metatabela de t1.' }, { letter: 'C', text: 'Deleta as duas tabelas.' }, { letter: 'D', text: 'Compara se t1 e t2 são iguais.' }], rightAnswer: 'B' },
  { id: 'lua-mid-3', language: 'Lua', seniority: 'mid-level', title: 'Como funcionam as Coroutines em Lua?', options: [{ letter: 'A', text: 'São threads nativas do sistema operacional.' }, { letter: 'B', text: 'São linhas de execução colaborativas que podem ser pausadas e retomadas (yield/resume).' }, { letter: 'C', text: 'São funções que rodam apenas em servidores.' }, { letter: 'D', text: 'São loops que nunca param.' }], rightAnswer: 'B' },
  { id: 'lua-mid-4', language: 'Lua', seniority: 'mid-level', title: 'O que é o valor "nil" em Lua?', options: [{ letter: 'A', text: 'O número zero.' }, { letter: 'B', text: 'Um tipo de dado que representa a ausência de valor.' }, { letter: 'C', text: 'Uma string vazia.' }, { letter: 'D', text: 'Um erro de sistema.' }], rightAnswer: 'B' },
  { id: 'lua-mid-5', language: 'Lua', seniority: 'mid-level', title: 'Qual a utilidade do operador "#" antes de uma tabela?', options: [{ letter: 'A', text: 'Deleta a tabela.' }, { letter: 'B', text: 'Retorna o comprimento (número de elementos) da sequência na tabela.' }, { letter: 'C', text: 'Multiplica os valores da tabela.' }, { letter: 'D', text: 'Verifica se a tabela é nula.' }], rightAnswer: 'B' },

  { id: 'lua-sr-1', language: 'Lua', seniority: 'senior', title: 'Como Lua lida com gerenciamento de memória?', options: [{ letter: 'A', text: 'O desenvolvedor deve usar malloc/free.' }, { letter: 'B', text: 'Usa um Garbage Collector incremental automático.' }, { letter: 'C', text: 'Não há gerenciamento, a memória limpa ao fechar o script.' }, { letter: 'D', text: 'Usa contagem de referência manual.' }], rightAnswer: 'B' },
  { id: 'lua-sr-2', language: 'Lua', seniority: 'senior', title: 'O que é o metamétodo "__index"?', options: [{ letter: 'A', text: 'Um índice para o Google buscar o script.' }, { letter: 'B', text: 'Mecanismo usado para buscar chaves em outra tabela caso elas não existam na original (base da herança).' }, { letter: 'C', text: 'Uma função que ordena a tabela.' }, { letter: 'D', text: 'O nome do arquivo principal.' }], rightAnswer: 'B' },
  { id: 'lua-sr-3', language: 'Lua', seniority: 'senior', title: 'Por que Lua é frequentemente usada como linguagem de "Scripting" em motores de jogos (como Roblox ou LÖVE)?', options: [{ letter: 'A', text: 'Porque é a linguagem mais rápida do mundo.' }, { letter: 'B', text: 'Devido à sua facilidade de integração com C/C++ e pegada (footprint) mínima de memória.' }, { letter: 'C', text: 'Porque ela substitui o Windows.' }, { letter: 'D', text: 'Porque ela é proprietária da Microsoft.' }], rightAnswer: 'B' },
  { id: 'lua-sr-4', language: 'Lua', seniority: 'senior', title: 'O que acontece se você não declarar uma variável como "local" em Lua?', options: [{ letter: 'A', text: 'O script não roda.' }, { letter: 'B', text: 'Ela se torna global por padrão, o que pode causar poluição de escopo e bugs.' }, { letter: 'C', text: 'Ela é deletada automaticamente.' }, { letter: 'D', text: 'Ela se torna uma constante.' }], rightAnswer: 'B' },
  { id: 'lua-sr-5', language: 'Lua', seniority: 'senior', title: 'O que é o ambiente "_G" em Lua?', options: [{ letter: 'A', text: 'Uma biblioteca de gráficos.' }, { letter: 'B', text: 'Uma tabela especial que contém todas as variáveis globais do sistema.' }, { letter: 'C', text: 'O nome do compilador Lua.' }, { letter: 'D', text: 'Uma função de gravidade.' }], rightAnswer: 'B' },
];