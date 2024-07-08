import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface AvatarAttributes extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Avatar({ className, alt, ...rest }: AvatarAttributes) {
  return (
    <div className={twMerge(className)}>
      <img className={twMerge(className)} alt={alt} {...rest} />
    </div>
  )
}
