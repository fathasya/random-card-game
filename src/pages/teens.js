import { BadgeCategory } from 'components';
import Card from 'components/molecules/CardCategory';
import MainLayout from 'layouts/MainLayout';

export default function Teens() {
  return (
    <MainLayout>
      <BadgeCategory />
      <Card />
    </MainLayout>
  );
}
