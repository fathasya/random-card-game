import { Button, GameRoom } from 'components';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';

function CategoryGamePage() {
  const router = useRouter();

  const handleExit = () => {
    router.push('/');
  };

  return (
    <MainLayout>
      <div className="w-full hidden md:flex flex-col items-end font-bold uppercase px-5 pt-5">
        <Button text="Exit" isExit={true} onClick={handleExit} />
      </div>
      <GameRoom />
      <div className="w-full md:hidden flex flex-col h-1/4 items-center font-bold uppercase px-5 pt-5">
        <Button text="Exit" isExit={true} onClick={handleExit} />
      </div>
    </MainLayout>
  );
}

export default CategoryGamePage;
