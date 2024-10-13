import styles from './index.module.css';

export enum AnchorSize {
    Regular = 'regular',
    Small = 'small'
}

export enum AnchorVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Custom = 'custom'
}

export default function Anchor({
    href = '#',
    size = AnchorSize.Regular,
    variant = AnchorVariant.Secondary,
    icon: Icon,
    className = '',
    children,
  }): JSX.Element {
    return (
        <div>
            <a href={href} target="_blank" className={classes}>
                {Icon && (
                    <figure className="flex justify-center items-center h-6 w-6 mr-2">
                        <Icon className="h-6 w-6" />
                    </figure>
                )}
                {children}
            </a>
        </div>
    );
}