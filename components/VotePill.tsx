import * as SVG from './SVGIcons'

interface VotePill {
  title: string
  image?: string
  svg?: any
}

const VotePillImage = ({ title, image, svg }: VotePill) => {
  if (svg) {
    return svg
  }

  if (image) {
    return <img className='g-10 w-10 object-contain' src={image} alt={title} />
  }

  return <SVG.Loading className='mr-1 h-6 w-6 animate-spin place-self-center' />
}

const VotePill = ({ title, ...props }: VotePill) => {
  return (
    <button className='pointer group'>
      <div className='flex flex-row items-center gap-2 rounded-full border border-gray-200 px-8 py-3'>
        <figure className='flex h-10 w-10 object-contain'>
          <VotePillImage title={title} {...props} />
        </figure>
        <div className='text-2xl font-semibold text-gray-700'>{title}</div>
      </div>
    </button>
  )
}

export default VotePill
