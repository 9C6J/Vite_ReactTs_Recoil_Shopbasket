import './App.css';

import { useRecoilState } from 'recoil';

import { items } from './state/recoildata';

function detail() {
  const [shoose, setShoose] = useRecoilState(items);

  return (
    <div className="Detail">
      {shoose.map((s) => s)}
      <button onClick={() => setShoose(shoose.concat('b'))}>추가</button>
    </div>
  );
}

export default detail;
