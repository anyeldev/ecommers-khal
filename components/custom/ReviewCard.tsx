import { Review } from '@/types'
import { Star } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-6 w-[430px] h-[250px]">
      <div>
        <div className="flex text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => {
            const use = i < Math.round(review.stars)
            return (
              <Star
                key={i}
                fill={use ? 'currentColor' : 'transparent'}
                className={use ? '' : 'text-[#dde0e2]'}
              />
            )
          })}
        </div>
        <p className="text-sm mt-3">{review.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <Avatar>
          <AvatarImage src={review.avatar} alt={review.name} />
        </Avatar>
        <div>
          <p className="font-semibold text-base">{review.name}</p>
          <span className="text-gray-400 font-medium">{review.jobTitle}</span>
        </div>
      </div>
    </div>
  )
}
