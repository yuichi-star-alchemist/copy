import imageFile from "@/../public/MonitorDecorationsImage.svg"
import Image from "next/image"

const MonitorDecorationsImage = () => {
  return (
    <Image
      fill
      src={imageFile}
      alt="モニターの台座・コード・びりびりマークの見た目を表現する画像です"
    />
  )
}

export default MonitorDecorationsImage