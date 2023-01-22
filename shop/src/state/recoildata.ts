import { atom } from 'recoil';

// 커스텀훅?

export const basketState = atom({
  key: 'basketState',
  default: [{ name: 'empty', price: 0 }],
});
