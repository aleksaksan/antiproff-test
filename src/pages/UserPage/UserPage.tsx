import { Header } from '../../components/Header/Header';
import { NavButton } from '../../components/NavButton/NavButton';
import { SvgBack } from '../../components/Svg/SvgBack';
import { SvgEmail } from '../../components/Svg/SvgEmail';
import { SvgExit } from '../../components/Svg/SvgExit';
import { SvgPhone } from '../../components/Svg/SvgPhone';
import './UserPage.scss';

export const UserPage = () => {
  return (
    <div className='page'>
      <Header>
        <nav>
          <NavButton onClick={()=>{}}>
            <span>Назад</span>
            <SvgBack />
          </NavButton>
          <NavButton onClick={()=>{}}>
            <span>Выход</span>
            <SvgExit />
          </NavButton>
        </nav>
        <div className='user-header'>
          <img src="https://reqres.in/img/faces/7-image.jpg" alt="Артур Королёв" />
          <div className="user-title">
            <h1>Артур Королёв</h1>
            <h2>Партнер</h2>
          </div>
        </div>
      </Header>
      <div className='max-width'>
        <div className="user-description">
          <div className="user-description-text">
            <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.<br/><br/>
            В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".<br/><br/>
            Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
          </div>
          <div className="user-contacts">
            <div className="flex-center">
              <SvgPhone />
              <span>+7 (954) 333-44-55</span>
            </div>
            <div className="flex-center">
              <SvgEmail />
              <span>sykfafkar@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
