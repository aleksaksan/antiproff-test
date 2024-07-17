import { SvgLike } from '../Svg/SvgLike';
import { SvgLikeCheked } from '../Svg/SvgLikeCheked';
import './UserCard.scss';

export type UserCard = {
  id: number;
  fullName: string;
  src?: string;
  checked?: boolean;
  onClickLike: (id: number) => void;
}

export const UserCard = (props: UserCard) => {
  const onClickHandler = (id: number) => {
    props.onClickLike(id);
  };
  
  return (
    <div className='user-card'>
      <img src={props.src} alt={props.fullName} />
      <div className='user-name'>{props.fullName}</div>
      <div className='like-container'>
        <div onClick={()=>onClickHandler(props.id)}></div>
        {props.checked ? <SvgLikeCheked /> : <SvgLike />}
      </div>
    </div>
  );
};
