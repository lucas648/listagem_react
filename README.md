# listagem_react

Neste Projeto é criada uma lista de afazeres, que é alimentada por um 
formulário que recebe a descrição da tarefa e seu responsável.

O dado inserido no formulário é enviado do frontend para o backend e persistido no BD MongoDb.

## Models

O backend contem o schema para a task, na pasta 'models' no arquivo 'task.js', definindo apenas dois valores
a serem passadoos para esta tabela no bd e através da lib 'mongoose' envia este dado para o MongoDb.

## Controlers

Na pasta 'controllers' são definidos no arquivo 'taskControllers.js' os métodos de conexão com o bd 

'store': Que possibilita uma tarefa ser inserida no bd
'index': Que possibilita a busca de todas as tarefas no bd
'delete': Que possibilita a exclusão de uma tarefa do bd através do Id

## Rotas

No arquivo 'routes.js' são definidas as rotas a serem usadas pelos metodos : 'get', 'post' e 'delete', no backend
para o front pode realizar a chamada destes métodos, para envio, recuperação e deleção de dados 

Já no front as rotas são definidas para as páginas ou componentes, através da lib 'react-router-dom', ultilizando dos
componentes:
'BrowserRouter': Que define o inicio do roteamento dos componentes e por isso deve englobar a definição das rotas 
'Switch': Que permite que sejam definidas mais de uma rota 
'Route': Que define a rota, recebendo o caminho em si e o componente a que a rota vai chamar

## Component Task

O formulário está no componente 'Task', que realiza o envio dos dados para o BD, 
através da Rota criada para isso no arquivo 'routes.js' no backend, ultilizando o método 'post'.

Ao se cadastrar uma tarefa é lançado um 'alert' que informa se a mesma foi enviada com sucesso, e o usuário 
pode, se desejar, enviar mais tarefas, ou acessar a lista de tarefas que é acessada através do link ao fim do formulário

## Arquivo API

As operações com métodos http, são possibilitadas pela arquivo 'api' que está no frontend 
e importa a lib 'axios' que possibilita a ultilização dos métodos.

## Component List 

Este componente possibilita a listagem de Tarefas que foram cadastradas até o momento, através de uma requisição
'get', e os renderiza atraves do metodo 'map' percorrendo o array 'task' e renderizando cada 'task' presente nele.

No fim de cada tarefa está posicionado um botão que conclui a tarefa e por ela estar concluida a exclui da lista de afazeres,
este botão chama o metodo 'delete' que exclui uma tarefa através do seu id.

ao fim da lista existe um link que permite que o usuário volte para o formmulário e insira novas tarefas se desejar.

## Melhorias 

Do escopo do projeto, ainda falta implementar a função de arrastar tarefas, como drag and drop, estão sendo estudadas alternativas 
para a implementação desta funcionalidade, e será implementada assim que for selecionada a melhor forma.

### Autor

#### Lucas Costa e Silva Almeida



