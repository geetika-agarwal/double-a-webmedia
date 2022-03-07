import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CloseIcon, Icon, SidebarBtnLink, SidebarBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const SidebarSection = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="/our-work" onClick={toggle}>
                    Our Work
                </SidebarLink>
                <SidebarLink to="/contact-us" onClick={toggle}>
                    Contact Us
                </SidebarLink>
                <SidebarLink to="/pricing" onClick={toggle}>
                    Pricing
                </SidebarLink>
                <SidebarLink to="/careers" onClick={toggle}>
                    Careers
                </SidebarLink>
                <SidebarLink to="/customize-your-page" onClick={toggle}>
                    Customize Your Page
                </SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarBtnLink to="">
                    <AiOutlineShoppingCart />
                </SidebarBtnLink>
            </SidebarBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SidebarSection
