import { Item } from './model';

type GridViewProps = {
  items: Item[];
};

const GridView = ({ items }: GridViewProps) => {
  const colsClass = `grid-cols-${items.length <= 4 ? 2 : 3}`;

  return (
    <div className={`grid ${colsClass} gap-8`}>
      {items.map(({ title, description }) => (
        <div className="p-4 bg-white bg-opacity-70 backdrop-blur-md rounded">
          <h3 className="text-xl font-semibold text-center pb-2">{title}</h3>
          <p className="description text-center">{description}</p>
        </div>
      ))}
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
      <h2 className="text-3xl font-semibold text-center pb-2">{title}</h2>
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
