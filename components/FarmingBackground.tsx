import Image from "next/image"

export default function FarmingBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Image src="/farm-background.jpg" alt="Farming landscape" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute inset-0 bg-green-900/30 backdrop-blur-sm"></div>
    </div>
  )
}

