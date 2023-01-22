import './App.css';

import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import { basketState } from './state/recoildata';

function Detail(props) {
  const navigate = useNavigate();

  const [shoose, setShoose] = useRecoilState(basketState);
  // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const showBasket = useRecoilValue(basketState); // 읽기 전용!
  const BasketHandler = useSetRecoilState(basketState); // 값만 변경 시키기
  const resetBasket = useResetRecoilState(basketState); // 디폴트값으로 값 변경

  const cartNames = showBasket.map((item) => item.name).filter((name) => name !== 'empty');

  const uniquecartNames = cartNames
    .filter((element, index) => {
      return cartNames.indexOf(element) === index;
    })
    .map((name) => {
      const cartWithPrice = showBasket.filter((cart) => cart.name === name);
      return { name, price: cartWithPrice[0].price };
    });
  const cartTotalInfo = uniquecartNames.map((cart) => {
    const cartNamesFilter = cartNames.filter((cartName) => cart.name === cartName);
    return {
      name: cart.name,
      count: cartNamesFilter.length,
      price: cart.price,
    };
  });

  return (
    <div className="Detail">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.content.title}</h4>
          <p>{props.content.content}</p>
          <p>{props.content.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => setShoose((shoose) => [...shoose].add[{ name: '1', price: 0 }])}>
            장바구니담기
          </button>{' '}
          &nbsp;
          <button className="btn btn-danger" onClick={() => navigate('/')}>
            뒤로가기
          </button>
          {showBasket}
          {cartNames}
          {uniquecartNames}
          {cartTotalInfo}
        </div>
      </div>
    </div>
  );
}

export default Detail;
