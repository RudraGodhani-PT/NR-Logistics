import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type TypographyElement =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'div';

const typographyVariants = cva('tracking-normal', {
  variants: {
    size: {
      xxs: 'text-[9px] xs:text-[9px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[10px]',
      xs: 'text-[11px] sm:text-xs md:text-xs lg:text-xs',
      sm: 'text-xs sm:text-xs md:text-sm lg:text-sm',
      base: 'text-xs sm:text-sm md:text-base lg:text-base',
      lg: 'text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg',
      xl: 'text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-xl',
      '2xl':
        'text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl',
      '3xl': 'text-xl xs:text-2xl sm:text-2xl  lg:text-3xl xl:text-3xl',
      '4xl':
        'text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl',
      '5xl':
        'text-[28px] xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl',
      '6xl':
        'text-[32px] xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl',
      '7xl':
        'text-[32px] xs:text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl',
      '8xl':
        'text-[40px] xs:text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl',
      '9xl':
        'text-[44px] xs:text-8xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-9xl',
      'xl-40':
        'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[40px] xl:text-[40px] 2xl:text-[40px]',

      'xl-46':
        'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[46px] xl:text-[46px] 2xl:text-[46px]',
      'xl-26':
        'text-xl xs:text-2xl sm:text-2xl md:text-[26px] lg:text-[26px] xl:text-[26px]'
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    color: {
      white: 'text-white',
      primary: 'text-primary',
      black: 'text-black',
      secondary: 'text-secondary',
      foreground: 'text-foreground',
      'muted-foreground': 'text-muted-foreground',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info'
    },
    variant: {
      default: '',
      heading: '',
      subheading: 'font-medium',
      body: '',
      caption: 'text-muted-foreground',
      code: 'font-mono bg-muted px-1 py-0.5 rounded text-sm',
      label: 'font-medium',
      error: 'text-error font-medium',
      success: 'text-success font-medium',
      warning: 'text-warning font-medium',
      muted: 'text-muted-foreground'
    },
    truncate: {
      true: 'truncate',
      false: ''
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    }
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'foreground',
    variant: 'default',
    truncate: false,
    align: 'left'
  }
});

type TypographyProps = Omit<
  VariantProps<typeof typographyVariants>,
  'color'
> & {
  children: ReactNode;
  className?: string;
  as?: TypographyElement;
  id?: string;
  color?: string;
};

export const Typography = ({
  children,
  size,
  weight,
  color,
  variant,
  truncate,
  align,
  className,
  as: ElementType = 'div',
  id,
  ...props
}: TypographyProps) => {
  // Check if color is a hex code or custom color (starts with # or rgb/hsl)
  const isCustomColor =
    color &&
    (color.startsWith('#') ||
      color.startsWith('rgb') ||
      color.startsWith('hsl') ||
      ![
        'white',
        'primary',
        'black',
        'secondary',
        'foreground',
        'muted-foreground',
        'error',
        'success',
        'warning',
        'info'
      ].includes(color));

  const colorVariant = isCustomColor
    ? undefined
    : (color as VariantProps<typeof typographyVariants>['color']);
  const style = isCustomColor ? { color } : undefined;

  return (
    <ElementType
      id={id}
      className={cn(
        typographyVariants({
          size,
          weight,
          color: colorVariant,
          variant,
          truncate,
          align
        }),
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </ElementType>
  );
};

export const Heading = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="heading" {...props} />
);

export const Subheading = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="subheading" {...props} />
);

export const Body = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);

export const Code = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="code" {...props} />
);

export const Label = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="label" {...props} />
);

export type TypographyVariants = VariantProps<typeof typographyVariants>;
