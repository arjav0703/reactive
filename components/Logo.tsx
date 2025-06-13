import Image from "next/image";

type LogoProps = {
  size: number;
};

export default function Logo({ size }: LogoProps) {
  return (
    <div>
      <Image src="logo.svg" alt="Logo" width={size} height={size} className="animate-spin [animation-duration:2s] hover:[animation-play-state:paused]" />
    </div>
  );
}
