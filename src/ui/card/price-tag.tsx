import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { cn } from '../../utilities/util'

const cardVariants = cva(
    'flex flex-col  w-full justify-center cursor-pointer px-[25px] ',
    {
        variants: {
            variant: {
                default: 'rounded-[10px] hover:bg-primary-gradient bg-transparent border border-[#302E2E]',
                active: 'bg-primary-gradient',
                gradientLight: 'bg-light-right border border-[#302E2E]',
                gradientDark: 'bg-light-left border border-[#302E2E]',
                cardGradient: 'bg-gradient-card border border-[#302E2E]',
                cardGradientTwo: 'gradient-card-two border border-[#302E2E]'
            },
            size: {
                lg: 'h-[244px] rounded-[20px]',
                sm: 'h-[122px] rounded-[10px]',
                md: 'h-[204px] rounded-[10px]'
            },
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

export interface Div extends HTMLAttributes<HTMLElement> {}
export interface CardProps extends Div, VariantProps<typeof cardVariants> {
}



const CardLayout = ({ children, variant,  size, className, ...props}: CardProps) => {
  return (
    <div
    className={cn(cardVariants({ variant, size, className }))}
    {...props}
    >
        {children}
    </div>
  )
}

export default CardLayout