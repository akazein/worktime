import React from 'react';
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

interface NavButtonProps {
    link: string;
    children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ link, children }) => {
    return (
        <NavigationMenuItem>
            <Link to={link}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {children}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>

    );
};

export default NavButton;
