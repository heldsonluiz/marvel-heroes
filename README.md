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

## **Funcionalidades**

- Listagem de heróis da biblioteca da Marvel API.
- Busca de herói por nome.
- Ordenação da listagem por ordem alfabética.
- Opção de favoritar heróis e exibir apenas os favoritos.
- Exibição dos detalhes do herói, como últimos quadrinhos disponíveis para venda.
- (Em breve) Paginação de resultados

<p align="center">
<img src="https://raw.githubusercontent.com/heldsonluiz/marvel-heroes/refs/heads/main/assets/prints/screens.png" alt="Marvel Heroes Screens Thumbnail">
</p>

---

## **Setup**

### **Requisitos**

- [Node.js (> 20)](https://nodejs.org/)
- Cadastro para utilização da API da Marvel em [https://developer.marvel.com/docs]() (necessário para obter as chaves públicas e privadas)

### **Instalação**

1. Certifique-se de que o Node.js está instalado em sua máquina
2. Faça o clone do projeto
3. Navegue até a pasta do projeto e faça uma cópia do arquivo `.env.exemple` na raiz do seu projeto renomeando para `.env`
4. Configure as suas chaves pública (`VITE_API_KEY_PUBLIC`) e privada (`VITE_API_KEY_PRIVATE`) dentro do arquivo `.env`
5. Abra um terminal no projeto e execute:
   ```bash
   npm install
   npm run dev
   ```
6. Abra a aplicação no seu navegador de preferência
---

## **Utilização**

1. Ao abrir o aplicativo, você verá uma tela de boas-vindas com a listagem de 20 heróis da Marvel em ordem alfabética
2. Navegue pela lista de heróis e marque até 5 heróis favoritos clicando no ❤️ ao lado do nome do herói.
3. Você pode buscar heróis pelo nome, a lista exibirá sempre os 20 primeiros resultados.
4. Você pode ordenar a lista de forma crescente ou decrescente clicando no toggle 'Ordenar por nome - A/Z'.
5. É possível exibir apenas a lista dos seus heróis favoritos.
6. Clique em um herói para exibir os detalhes.

---

## **CI/Lint**

O Projeto conta com um arquivo para a configuração de actions no GitHub que realiza a validação de Lint dos arquivos contidos em um pull-request. A validação segue as regras definidas em `eslint.config.js`. Para alterar o arquivo de configuração, edite o arquivo `frontend-ci.yml` dentro da pasta `/.github/workflows/`

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Para mais informações, leia o arquivo [LICENSE](LICENSE).

---

## **Contato**

Dúvidas ou sugestões? Entre em contato:

- **E-mail:** heldsonluiz@gmail.com
- **LinkedIn:** [Heldson Luiz](https://linkedin.com/in/heldsonluiz)

---
