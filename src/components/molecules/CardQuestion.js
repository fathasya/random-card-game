import { IconFriendship, IconRelationship } from 'assets/icons';
import { Button } from 'components/atoms';

const CardQuestion = ({ title, onClick, text }) => {
  return (
    <div className="bg-red-800 dark:bg-slate-900 text-white w-full items-center h-fit px-5 py-10 font-bold text-lg text-center rounded-lg cursor-pointer">
      {title}
      <div className="flex h-fit py-10 items-center justify-center">
        {title == 'Friendship' ? <IconFriendship /> : <IconRelationship />}
      </div>
      <Button onClick={onClick} text={text} />
    </div>
  );
};

export default CardQuestion;
