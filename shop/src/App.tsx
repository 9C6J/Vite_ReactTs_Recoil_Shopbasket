import './App.css';

import { useRecoilState } from 'recoil';

import Detail from './Detail';
import { items } from './state/recoildata';

function app() {
  const [shoose, setShoose] = useRecoilState(items);

  return (
    <div className="App">
      {shoose.map((s) => s)}
      <button onClick={() => setShoose(shoose.concat('a'))}>추가</button>
      <Detail></Detail>
    </div>
  );
}

export default app;
