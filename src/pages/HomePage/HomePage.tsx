import { Header } from '../../components/Header/Header';
import { NavButton } from '../../components/NavButton/NavButton';
import { SvgExit } from '../../components/Svg/SvgExit';
import { CardsContainer } from './CardsContainer';
import './HomePage.scss';

const mockData = [
  { id: 0, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 1, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 2, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 3, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 4, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 5, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 6, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
  { id: 7, fullName:'Артур Пирожков', src:'https://reqres.in/img/faces/7-image.jpg', checked:false, onClickLike:()=>{}},
]

export const HomePage = () => {
  return (
    <div className='page'>
      <Header>
        <nav>
          <NavButton onClick={()=>{}}>
            <span>Выход</span>
            <SvgExit />
          </NavButton>
        </nav>
        <div>
          <h1>Наша команда</h1>
          <h2>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</h2>
        </div>
      </Header>
      <CardsContainer userList={mockData} />
    </div>
  );
};
