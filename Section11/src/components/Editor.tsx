import { useContext, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  //   const dispatch = useContext(TodoDispatchContext);

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    // dispatch?.onClickAdd(text); // 유니온으로 null값 때문에 옵셔널 체이닝 추가
    dispatch.onClickAdd(text); //커스텀으로 만들어서 옵셔널 체이닝 쓰지 않고 사용하는 에시
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
