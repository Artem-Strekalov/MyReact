import { Link, NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
const Layout: React.FC = () => {
    const Header = styled.div`
        width: 100%;
        height: 80px;
        background: #227c9d;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
    `
    const Logo = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
    `
    const NavBlock = styled.div`
        margin-left: 40px;
        height: 100%;
        display: flex;
    `
    const WrapperLink = styled.div`
        width: 240px;
        height: 100%;
        border-left: 1px solid #fdfcdc;
        border-right: 1px solid #fdfcdc;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        font-size: 18px;
    `
    const CustomLink = styled(NavLink)`
        width: 100%;
        color: #fff;
        font-size: 18px;
        text-decoration: none;
        div {
            width: 240px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;

            &::after {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 6px;
                background: #2cc185;
                content: "";
                opacity: 0;
                transition: opacity 0.3s;
            }
        }

        &.active > div {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            text-overflow: ellipsis;
            &::after {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 6px;
                background: #2cc185;
                content: "";
                opacity: 1;
            }
        }
    `
    const Wrapper = styled.div`
        width: 100%;
        min-height: 100vh;
        background: #fef9ef;
        display: flex;
        flex-direction: column;
    `
    return (
        <Wrapper>
            <Header>
                <Logo>My skills</Logo>
                <NavBlock>
                    <WrapperLink>
                        <CustomLink to="/todo">
                            <div>Todo</div>
                        </CustomLink>
                    </WrapperLink>
                    <WrapperLink>
                        <CustomLink to="/forms">
                            <div>Forms</div>
                        </CustomLink>
                    </WrapperLink>
                    <WrapperLink>
                        <CustomLink to="/antd">
                            <div>Ant Design</div>
                        </CustomLink>
                    </WrapperLink>
                </NavBlock>
            </Header>
            <Outlet />
        </Wrapper>
    )
}
export default Layout
