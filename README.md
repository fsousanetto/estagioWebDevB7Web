# estagioWebDevB7Web

1. Qual a função do "head" no HTML?
    - O elemento head representa uma coleção de metadados onde podemos informar para o browser os detalhes sobre o conteúdo da página que não serão exibidos quando a página web é carregada.

2. Quando uma página é criada, ela automaticamente se adapta a todos os tipos de tela? Por que?
    - Não. Quando uma página web é desenvolvida, ela possui marcações e tamanhos fixos, devendo portanto, ser desenvovlvida seguindo o padrão Mobile First e a aplicação da responsividade para que possa se adaptar a todos os tamnahos de tela.

3. O código HTML e CSS é renderizado no servidor e repassado para o navegador em forma de imagem?
    - Não. O código HTML e CSS é interpretado e renderizado pelo navegador do usuário, não no servidor.

4. Qual a função das tags H (h1, h2, h3, etc) no HTML?
    - São usadas para criação de Títulos em uma página web, sendo o H1 o de maior importância e tamanho, seguido dos demais.

5. O que é SEO e como funciona?
    - SEO (Search Engine Optimization) é um conjunto de técnicas e práticas que incluem a otimização do conteúdo, do código com tags semânticas e da estrutura da página, para melhorar o ranckeamento de uma página web nos resultados de buscas orgânicas dos mecanismos de busca como o Google, tendo como objetivo aumentar o tráfego orgânico para uma página web, tornando-a mais relevante e visível para as pessoas que estão procurando por informações relacionadas ao conteúdo da página.

6. O uso de media query é obrigatório em todas as páginas?
    -  Não é obrigatório, mas seu uso é altamente recomendado para garantir que a página web seja exibida em diferentes dispositivos e tamanhos de tela de forma otimizada.

7. Qual a diferença entre CSS Inline e CSS em um arquivo?
     - O css inline é aplicado diretamente ao elemento HTML no qual está sendo usado, enquanto o .css é aplicado a todos os elementos HTML que estão linkados ao arquivo de css por seus seletores. Este segundo facilida a manutenção e mantem o código html limpo.

8. Como criar animações no CSS? Dê um exemplo.
    - Para criar animações no CSS, devemos usar a propriedade 'animation' e suas sub-propriedades.

    ```
        p {
            animation-duration: 3s;
            animation-name: slidein;
        }

        @keyframe  s slidein {
            from {
                margin-left: 100%;
                width: 300%
            }

            to {
                margin-left: 0%;
                width: 100%;
            }
        }

    ```

9. Qual a diferença entre class e ID no CSS?
    - o ID é o identificador único de um elemento HTML tendo prioridade sibre as classes, as classes são usadas para aplicar estilos a vários elementos HTML.

10. Quais os diferentes tipos de seletores CSS?
    - Selector de tipo: seleciona elementos com base em seu tipo HTML, exemplo ``<p>``.

    - Selector de classe: seleciona elementos com base em sua classe, exemplo: ``.myClasse`` seleciona todos os elementos com ``class="myClasse"``.

    - Selector de ID: seleciona um elemento com base em seu ID, exemplo: ``#myId`` seleciona o elemento com ``id="myId"``.

    - Selector de atributo: seleciona elementos com base em um atributo HTML, exemplo: ``[type="text]`` seleciona todos os elementos com um atributo ``type="text"``.

    - Selector descendente: seleciona elementos aninhados, exemplo: ``div p`` seleciona todos os elementos ``<p>`` que são filhos de um elemento ``<div>``.

    - Selector de filho: seleciona elementos que são filhos diretos de outro elemento. Por exemplo, o seletor ``ul > li`` seleciona todos os elementos ``<li>`` que são filhos diretos de um elemento ``<ul>``.

    - Selector de irmão adjacente: seleciona o primeiro elemento irmão que segue imediatamente o elemento anterior. Por exemplo, o seletor ``h1 + p`` seleciona o primeiro elemento ``<p>`` que segue imediatamente um elemento ``<h1>``.

    - Selector de irmão geral: seleciona todos os elementos irmãos que seguem o elemento anterior. Por exemplo, o seletor ``h1 ~ p`` seleciona todos os elementos ``<p>`` que seguem um elemento ``<h1>``.
