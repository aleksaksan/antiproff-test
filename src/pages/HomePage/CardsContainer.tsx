import { UserCard } from "../../components/UserCard/UserCard";

type CardsContainerProps = {
  userList: UserCard[]
}

export const CardsContainer = (props: CardsContainerProps) => {
  return (
    <div className='cards-container'>
      {props.userList.map(user=>
        <UserCard
          id={user.id}
          fullName={user.fullName}
          src={user.src}
          checked={user.checked}
          onClickLike={user.onClickLike}
          key={user.id}
        />
      )}
    </div>
  );
};
