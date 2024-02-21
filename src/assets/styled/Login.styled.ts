import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    >div{
        width: 460px; 
        background-color: rgba(222,222,222,.1);
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 2px 4px 0 rgba(111,111,111, 0.2);
    }
`;

export const Form = styled.form`
    
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    >input{
        margin-bottom: 8px;
    }

`;
export const Dividing= styled.div`
    display: flex;
    align-items: center;
    margin: 24px 0;

    >div{
        flex: 1;
        border-top: 1px solid #5D5D5D;
    }
    >p{
        margin: 0 8px;
        color: #5D5D5D;
        font-size: 80%;
    }
`;

export const Social = styled.div`
padding: 0 16px;
div{
    height: 48px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ABABAB;
    margin-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;
    p{
        margin-left: 8px;
    }
}
`;

export const SocialIcon = styled.div`
display: flex;
div{
    flex: 1;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: .6;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
}
`;

export const Logo = styled.img.attrs(props=>({
    src: props.src,
    alt: props.alt
}))`
    width: 24px;
    height: 24px;
    
`
