import { IconFriendship, IconRelationship } from 'assets/icons';

const CardCategory = ({ title, onClick }) => {
  return (
    <div
      className="bg-red-800 dark:bg-slate-900 text-white w-full items-center h-full px-2 py-8 md:py-10 font-bold text-lg text-center rounded-lg cursor-pointer box"
      onClick={onClick}
    >
      {title}
      <div className="flex h-full items-center justify-center">
        {title == 'Friendship' ? <IconFriendship /> : <IconRelationship />}
      </div>
    </div>
  );
};

export default CardCategory;
