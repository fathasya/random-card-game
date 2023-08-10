import { useState } from 'react';
import { useRouter } from 'next/router';
import data from '../../constants/data.json';
import { CardCategory } from 'components/molecules';

function CategorySelection() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    router.push(`/game/${category}`);
  };

  return (
    <div className="w-full lg:w-2/3 xl:w-3/5 h-screen px-5 py-8 md:py-12 flex flex-col items-center space-y-12">
      <p className="uppercase font-bold text-lg md:text-xl text-white underline underline-offset-8">
        Choose Category
      </p>
      <div className="w-full h-1/3 md:h-2/5 lg:h-2/3 flex items-center space-x-5 md:space-x-10">
        {data.map((categoryData) => (
          <CardCategory
            key={categoryData.Id}
            onClick={() => handleCategorySelect(categoryData.category)}
            title={categoryData.category}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySelection;
