import ThemeButton from '../buttons/ThemeButton';
import TableSearch from './TableSearch';

const TopSection = ({title, onClickButton, setSearchQuery, buttonText}) => {
  return (
    <>
      <h1 className='text-4xl font-bold font-serif text-secondary mb-6'>
        {title}
      </h1>
      <div
        className={`flex flex-col sm:flex-row w-full ${!setSearchQuery ? 'justify-end' : 'justify-between'} items-center gap-3 px-4`}
      >
        {setSearchQuery && <TableSearch setSearchQuery={setSearchQuery} />}
        {buttonText && (
          <ThemeButton
            buttonText={buttonText}
            handleClick={onClickButton}
            styles='bg-primary hover:bg-primary-hover text-sm py-2'
          />
        )}
      </div>
    </>
  );
};

export default TopSection;
