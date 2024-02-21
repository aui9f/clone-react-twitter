
import GoogleLogo from '@/assets/image/google.png';
import GithubLogo from '@/assets/image/github.png';
import NaverLogo from '@/assets/image/naver.png';
import KakaoLogo from '@/assets/image/kakao-talk.png';
import { Container, Form, Dividing, Social, Logo} from '@/assets/styled/Login.styled';
import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '@/fBase';
import { useNavigate } from 'react-router-dom';

function Login (){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigater = useNavigate();
    
    const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = event;
        setId(value);
    }
    
    const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} = event;
        setPw(value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        signInWithEmailAndPassword(auth, id, pw).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Signed in ', user)
            //[TODO] 홈으로 이동
            navigater('/');
            

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('[ERR]', errorCode, errorMessage);
            //[TODO] 에러메시지 출력
        });
        
    }
    return <Container>
        <div>
            <Form onSubmit={onSubmit}>
                <input type="text" value={id} placeholder="ID" onChange={onChangeId}/>
                <input type="password" value={pw} placeholder="PASSWORD" onChange={onChangePw}/>
                <button type="submit">Login</button>
            </Form>

            <Dividing>
                <div></div>
                <p>OR</p>
                <div></div>
            </Dividing>

            <Social>
                <div><Logo src={GoogleLogo} alt={`Google`}/><p>구글 계정으로 계속하기</p></div>
                <div><Logo src={GithubLogo} alt={`Github`}/><p>깃허브 계정으로 계속하기</p></div>
                <div><Logo src={NaverLogo} alt={`Naver`}/><p>네이버 계정으로 계속하기</p></div>
                <div><Logo src={KakaoLogo} alt={`Kakao`}/><p>카카오톡 계정으로 계속하기</p></div>
            </Social>
        </div>

    </Container>
}
export default Login;