<p align="center"><img src="https://raw.githubusercontent.com/heldsonluiz/marvel-heroes/refs/heads/main/assets/prints/thumbnail.png" alt="Marvel Heroes thumbnail"></p>

# Marvel Heroes

![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![image](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)


**Marvel Heroes** é um website que permite que você busque informações dos seus heróis preferidos do universo MARVEL.
Você pode ver a versão no ar [aqui](https://marvel-heroes.heldsonluiz.dev.br)

---

<br>

## **Funcionalidades**

- Listar os heróis da Marvel (obtidos através da [API da Marvel](https://developer.marvel.com/docs))
- Buscar heróis por nome.
- Ordenar a lista de heróis em ordem alfabética.
- Criar uma listagem com 5 heróis favoritos.
- Exibir uma página dedicada a cada herói com:
  - Quantidade de filmes e quadrinhos onde ele aparece.
  - Informações sobre o herói.
  - Data do último quadrinho em que ele aparece.
  - Lista dos 10 últimos quadrinhos lançados para o herói

<p align="center">
<br/>
<img src="https://raw.githubusercontent.com/heldsonluiz/marvel-heroes/refs/heads/main/assets/prints/screens.png" alt="Marvel Heroes Screens Thumbnail">
</p>

<br>

## **Acesso ao projeto**

Você pode [acessar o código fonte do projeto](https://github.com/heldsonluiz/marvel-heroes) ou [baixá-lo zipado](https://github.com/heldsonluiz/marvel-heroes/archive/refs/heads/main.zip).

<br>

## **Setup**

### **Requisitos**

- [Node.js (> 20)](https://nodejs.org/)
- Realizar o cadastro na API da Marvel em [https://developer.marvel.com/docs]() (necessário para obter as chaves públicas e privadas)



### **Instalação**

1. Certifique-se de que o Node.js está instalado em sua máquina.
   ```
   node --version
   ```
   ##### ***Caso esteja instalado você receberá uma mensagem com a versão instala, por exemplo: `v23.6.0`, caso contrário receberá uma mensagem dizendo que o comando não foi encontrado.***

<br/>

2. Faça o clone do projeto para a pasta do seu computador
   ```
   git clone https://github.com/heldsonluiz/marvel-heroes.git
   ```

<br/>

3. No terminal da sua IDE digite o comando para entrar na pasta que você criou para o projeto.
   ```
   cd projetoMarvel
   ```
<br/>

4. Faça uma cópia do arquivo `.env.exemple` na raiz do seu projeto renomeando para `.env`.

<br/>

5. Configure as suas chaves públicas '(VITE_API_KEY_PUBLIC) e privada (VITE_API_KEY_PRIVATE) dentro do arquivo `.env`. Salve as alterações.
   ```
   VITE_API_KEY_PUBLIC=YOUR_PUBLIC_API_KEY
   VITE_API_KEY_PRIVATE=YOUR_PRIVATE_API_KEY
   ```

<br/>

6. No terminal da sua IDE execute o projeto com os comandos:
   ```
   npm install
   npm run dev
   ```

   *No seu terminal vai aparecer algo como:*
   ```
   VITE v6.0.6  ready in 110 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ➜  press h + enter to show help
   ```
   ##### *Abra o link no seu navegador de preferência.*

<br/>

## **Como usar**

- Ao abrir o aplicativo, você verá uma tela de boas-vindas com a listagem, em ordem alfabética, de 20 heróis da Marvel.
- Navegue pela lista de heróis e marque até 5 heróis favoritos clicando no ❤️ ao lado do nome do herói tanto na página inicial, quanto nas páginas dedicadas à cada personagem.
- Você pode buscar heróis pelo nome, a lista exibirá sempre os 20 primeiros resultados.
   - Para buscar um herói, digite seu nome completo, ou o primeiro nome, ou as primeiras letras do nome ou apenas a inicial. Lembre-se de usar hífens (ex: A-Bomb), pontos (ex: A.I.M.) e apóstrofos (ex: T'Challa) conforme o nome oficial do personagem.
- Você pode ordenar a lista de forma crescente ou decrescente clicando no toggle `Ordenar por nome - A/Z`.
- É possível exibir a lista com seus heróis favoritos clicando em no `❤️ Somente favoritos` na página inicial.
- Clique na foto do herói para exibir os detalhes sobre ele.


<br/>

## **CI/Lint**

O Projeto conta com um arquivo para a configuração de actions no GitHub que realiza a validação de Lint dos arquivos contidos em um pull-request. A validação segue as regras definidas em `eslint.config.js`. Para alterar o arquivo de configuração, edite o arquivo `frontend-ci.yml` dentro da pasta `/.github/workflows/`

<br/>


## **Licença**

Este projeto está licenciado sob a licença MIT. Para mais informações, leia o arquivo [LICENSE](LICENSE).


<br/>


## **Contato**

Dúvidas ou sugestões? Entre em contato:

- **E-mail:** heldsonluiz@gmail.com
- **LinkedIn:** [Heldson Luiz](https://linkedin.com/in/heldsonluiz)

