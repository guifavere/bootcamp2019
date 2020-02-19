import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductsList } from './styles';

export default function Home() {
  return (
    <ProductsList>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>
          Game muito legal com nome grande que quebra várias linhas
        </strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>Game muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>Game muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>Game muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>Game muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static3.tcdn.com.br/img/img_prod/187970/beast_quest_ps4_14843_1_20180322230938.jpg"
          alt="Game legal"
        />
        <strong>Game muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductsList>
  );
}
