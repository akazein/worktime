import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'

import NavButton from './NavButton'

const Header = () => {
    return (
        <NavigationMenu className='w-screen'>
            <NavigationMenuList>
                <NavButton link=''>Home</NavButton>
                <NavButton link='Stats'>Stats</NavButton>
                <NavButton link='Settings'>Settings</NavButton>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Header