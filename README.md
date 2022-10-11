<div align="center">

![logo](https://user-images.githubusercontent.com/97968740/195141792-afad2581-f5cb-4fce-8391-6afa12dc7cd0.svg)

Aplicação Web front-end de um E-Commerce de camisetas (fictício), com pagamento no Stripe. Feito utilizando _NextJS_.

<!-- :link: <https://coffee-delivery-davirlima.vercel.app/> :link: -->

</div>

## :heavy_check_mark: Tecnologias:

<div>
  <img 
    height="50px"
    src="https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png"
    alt="Logo Next"
  />
  <img 
    height="50px"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    alt="Logo TypeScript"
  />
</div>

## :books: Bibliotecas:

- stitches;
- stripe;
- axios;
- keen-slider;
- phosphor-react;
- immer.

## :hammer: Funcionalidades:

- **Listagem de produtos (camisetas) disponíveis para compra;**
- **Adicionar e remover produtos no carrinho;**
- **Exibir o valor total da compra no carrinho.**
- **Exibir o total de itens no carrinho no Header;**
- **Realizar o pagamento dos produtos no stripe.**

**Obs: Todos os produtos vem dos produtos cadastrados no stripe, via api**

## :open_file_folder: Execute o projeto localmente

:heavy_exclamation_mark: **Requisitos:** *Node.js v.16.17.0*

1. Clone o repositório:

 ~~~bash
 git clone https://github.com/davirlima/ignite-shop.git
 ~~~
 
2. Instale as dependências com o comando:

  ~~~bash
  npm install
  # ou
  yarn install
  ~~~
  
3. Renomeie o arquivo _.template.local_ da raiz, para **_.env.local_** e edite as chaves do stripe 
  
4. Execute a aplicação com o comando:

  ~~~bash
  npm run dev
  # ou
  yarn dev
  ~~~
  
 5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## :computer: Interfaces:

<div align="center">
  <img
   src="https://user-images.githubusercontent.com/97968740/195144693-8ac10b7e-4fdb-4da8-bdf7-b4e206234833.png"
   alt="Interface da Aplicação Ignite Shop, tela home, em Desktop e Laptop"
   width=74%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195144936-4c03e88d-0716-46ec-acce-e9737881f833.png"
   alt="Interface da Aplicação Ignite Shop, tela home, em Mobile"
   width=25%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195145284-70433c33-79c0-44c5-8c75-c8ffa9aab3cb.png"
   alt="Interface da Aplicação Ignite Shop, tela de descrição do produto, em Desktop e Laptop"
   width=74%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195145493-9713deb0-f7db-408d-bcaa-8bbf211d6786.png"
   alt="Interface da Aplicação Ignite Shop, tela de descição do produto, em Mobile"
   width=25%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195145942-8014cc7d-8a59-4c64-be32-86aaa854c134.png"
   alt="Interface da Aplicação Ignite Shop, modal do carrinho, em Desktop e Laptop"
   width=74%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195145689-a85ed24c-1ba4-4abe-966e-efd9a7c3c7b2.png"
   alt="Interface da Aplicação Ignite Shop, modal do carrinho, em Mobile"
   width=25%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195146287-bb523104-7a29-4513-a279-205a3aed2ef4.png"
   alt="Interface da Aplicação Ignite Shop, tela de pagamento do stripe, em Desktop e Laptop"
   width=74%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195146663-ebc342cb-692d-4083-8787-615d152e07d6.png"
   alt="Interface da Aplicação Ignite Shop, tela de pagamento do stripe, em Mobile"
   width=25%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195147354-e84226a2-ce6b-4bad-94ca-b1ad33d36439.png"
   alt="Interface da Aplicação Ignite Shop, pagina de confirmação de compra, em Desktop e Laptop"
   width=74%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195147543-4357382f-0aed-47f7-a491-456d319e10c6.png"
   alt="Interface da Aplicação Ignite Shop, pagina de confirmação de compra, em Mobile"
   width=25%
  />
  <img
   src="https://user-images.githubusercontent.com/97968740/195149494-323b8a7e-e114-4f4b-9a6c-fddca9c06ec6.gif"
   alt="GIF demonstrativo da aplicação"
   width=99%
   align="center"
  />
</div>
