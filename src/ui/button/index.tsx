import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "../../utilities/util";

type ButtonType = ComponentProps<'button'> & ComponentProps<'a'>;
export interface BaseButtonProps extends ButtonType {}

const buttonVariants = cva(
  'inline-flex items-center justify-center font-poppins gap-2.5 transition-colors disabled:pointer-events-none duration-300 font-medium disabled:cursor-not-allowed disabled:opacity-70',
    {
        variants: {
            variant: {
                default: 'text-white bg-primary-gradient',
                primary: 'text-white bg-primary-gradient'
            },
            size: {
                default: 'w-[158px] font-[14px] h-[43px] p-[10px] rounded-[100px]'
            },
            fullWidth: {
                true: 'w-full'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps extends BaseButtonProps, VariantProps<typeof buttonVariants> {}


const Button = ({ variant, size, fullWidth, className, ...props }: ButtonProps) => {
  return (
    <button
    className={cn(buttonVariants({ variant, size, className, fullWidth }))}
    {...props}
    />
  )
}

export default Button