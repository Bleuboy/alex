import { useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import { Item } from './model';

const ICON_NAMES = [
  '/icons/brief-icon.png',
  '/icons/col-icon.png',
  '/icons/compare-icon.png',
  '/icons/dashboard-icon.png',
  '/icons/layer-icon.png',
  '/icons/layer-icon-2.png',
];

type GridViewProps = {
  items: Item[];
};

const GridView = ({ items }: GridViewProps) => {
  const isNarrowScreen = useMediaQuery({ query: '(max-width: 400px)' });

  const [showItems, setShowItems] = useState(isNarrowScreen ? 2 : null);

  const handleShowMore = () => {
    setShowItems((prevItems) => prevItems + 2);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {items
        .slice(0, showItems ? showItems : items.length)
        .map(({ title, description }, index) => (
          <div className="p-4 bg-white bg-opacity-70 backdrop-blur-md rounded">
            <img
              className="w-6 h-auto mx-auto pb-2"
              src={ICON_NAMES[index]}
              alt={ICON_NAMES[index]}
            />
            <h3 className="text-xl font-semibold text-center pb-2">{title}</h3>
            <p className="description text-center">{description}</p>
          </div>
        ))}
      {isNarrowScreen && showItems && showItems < items.length && (
        <button
          onClick={handleShowMore}
          className="mx-auto text-brand-secondary-default"
        >
          Show More
        </button>
      )}
    </div>
  );
};

type InfoSectionProps = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  items: Item[];
};

export const InfoSection = ({
  id,
  title,
  description,
  imageSrc,
  items,
}: InfoSectionProps) => {
  return (
    <div id={id} className="flex flex-col justify-center min-h-screen pt-24">
      <h2 className="text-3xl font-semibold text-center pb-4">{title}</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 pb-16">
        <p className="description text-center">{description}</p>
        {imageSrc && (
          <img className="w-1/2 sm:w-1/4" src={imageSrc} alt={imageSrc} />
        )}
      </div>
      <GridView items={items} />
    </div>
  );
};
