// Button component props
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

// Card component props
export interface CardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    price?: number | string;
    rating?: number | string;
    location?: string;
    className?: string;
}

// Will add more interfaces as the project grows
