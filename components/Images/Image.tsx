import NextImage, { ImageProps } from 'next/image'

//const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`${src}`} {...rest} />
)

export default Image