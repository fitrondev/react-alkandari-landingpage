type TitleProps = {
  title: string;
  desc: string;
};

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-lg uppercase font-bold">{title}</h1>
      <p className="sm:max-w-[600px] text-3xl sm:text-5xl font-extrabold">
        {desc}
      </p>
    </div>
  );
};
export default Title;
