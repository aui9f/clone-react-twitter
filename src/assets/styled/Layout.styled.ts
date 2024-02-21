import styled from "styled-components";

export const Nav = styled.nav`
    width: 280px;
    border-right: 1px solid #D9D9D9;
    height: 100vh;
    padding: 16px;
    position: relative;
    >ul{
       >li{
            padding: 8px 16px;
            a{
                display: flex;
                align-items: center;
                cursor: pointer;
                img{
                    width: 24px;
                    height: 24px;
                }
                p{
                    margin-left: 16px;
                }
            }
       } 
    }
`

export const IMenu = styled.img.attrs(props=>({
    src: props.src,
    alt: props.alt
}))`
    width: 24px;
    height: 24px;
`

export const Post = styled.div`
    background-color: #2C7083;
    height: 48px;
    color: #FFFFFF;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    margin: 16px auto;
    cursor: pointer;
`

export const Profile = styled.div`
    height: 80px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    >img{
        width: 40px;
        height: 40px;
        margin: auto 0;
    }
    .text{
        flex: 1;
        padding: 0 8px;
    }

`
// #E8E9EC #D9D9D9 #ABABAB #848484 #747474 #5D5D5D #444444 #1D1D1D
// point: #2C7083