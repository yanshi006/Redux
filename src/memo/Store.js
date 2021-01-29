import { createStore } from "redux";

//初期値の値(state)
const initialData = {
  //メモに出す値
  data: [{ message: 'sample data', created: new Date() }],
  //addFormの上に出す値
  message: 'please type message: ',
  //何の操作が行われたかを表す値
  mode: 'default',
  //findFormで検索された新しい配列を返す
  fdata: []
};

//レデューサー
export const memoReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);
    case 'DELETE':
      return deleteReduce(state, action);
    case 'FIND':
      return findReduce(state, action);
    default:
      return state
  };
}

//レデュースのアクション

//メモ追加のレデュース処理
const addReduce = (state, action) => {
  let data = {
    message: action.message,
    created: new Date()
  };
  //新しい配列を作っている
  let newdata = state.data.slice();
  //1番初めに新しい配列を加えている
  newdata.unshift(data);
  return {
    data: newdata,
    message: 'Added!!',
    mode: 'default',
    fdata: []
  };
}

//メモ検索のレデュース処理
const findReduce = (state, action) => {
  let f = action.find;
  let fdata = [];
  state.data.forEach(value => {
    //もしも検索した値のindexが0以上の場合（0も含まれる）、fdataにpushしてその値だけを表示している。
    //value.messageはfindフォームで検索した値
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata
  }
}

//メモ削除のレデュース処理
const deleteReduce = (state, action) => {
  //新しい配列を作成している
  let newdata = state.data.slice();
  //spliceメソッドで、action.indexのインデックスを1つ削除している
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'delete "' + action.index + '":',
    mode: 'delete',
    fdata: []
  }
}

//メモ追加のアクションクリエーター
export const addMemo = (text) => {
  return {
    type: 'ADD',
    message: text
  }
}

//メモ削除のアクションクリエーター
export const deleteMemo = (num) => {
  return {
    type: 'DELETE',
    index: num
  }
}

//メモ検索のアクションクリエーター
export const findMemo = (text) => {
  return {
    type: 'FIND',
    find: text
  }
}

export default createStore(memoReducer);