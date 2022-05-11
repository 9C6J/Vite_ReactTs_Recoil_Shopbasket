import { atom } from 'recoil';

export const items = atom({
  key: 'itemlist',
  default: [],
});
// 커스텀훅?
