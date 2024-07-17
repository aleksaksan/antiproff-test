import { Header } from '../../components/Header/Header';
import { NavButton } from '../../components/NavButton/NavButton';
import { SvgExit } from '../../components/Svg/SvgExit';

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;