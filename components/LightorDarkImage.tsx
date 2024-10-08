import Image from "next/image";
import { useTheme } from "next-themes";

const LightorDarkImage = ({
  lightModeSrc,
  darkModeSrc,
  alt,
  width = 800,
  height = 600,
}) => {
  const { theme } = useTheme();

  const imageSrc = theme === "dark" ? darkModeSrc : lightModeSrc;

  return <Image src={imageSrc} alt={alt} width={width} height={height} />;
};

export default LightorDarkImage;
