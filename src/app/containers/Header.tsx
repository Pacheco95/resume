import Image, { type ImageProps } from "@/components/Image";

export interface HeaderProps {
  imageProps?: ImageProps;
  name: string;
  role: string;
}

const Header = ({ imageProps, role, name }: HeaderProps) => (
  <header className="bg-primary text-white py-4 flex flex-col items-center">
    {imageProps && (
      <Image
        className="rounded-full h-36 border-4"
        {...imageProps}
        alt={imageProps.alt}
      />
    )}
    <h1 className="mt-4 text-2xl uppercase font-bold">{name}</h1>
    {role && <h2 className="text-lg">{role}</h2>}
  </header>
);

export default Header;
