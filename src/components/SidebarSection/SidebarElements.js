import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import {NavLink as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #f6f6f6;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3 ease-in-out;

    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    padding: 10px 0;
    overflow-y: auto;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    color: #1D3E53;

    &:hover {
        color: #476D7C;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #1D3E53;
`

export const SidebarWrapper = styled.div`
    color: #476D7C;
    background-color: #f6f6f6;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    background-color: #f6f6f6;
    margin: auto;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #476D7C;
    cursor: pointer;

    &:hover {
        color: #476D7C;
        font-weight: bold;
        transition: 0.2s ease-in-out;
    }

    &.active {
        color: #1D3E53;
        font-weight: bolder;
    }
`

export const SidebarBtnWrap = styled.div`
    text-align: center;
    margin-top: 1rem;
`

export const SidebarBtnLink = styled(LinkR)`
    font-size: 2rem;
    color: #1D3E53;
`