
import GoogleLogo from '@/assets/image/google.png';
import GithubLogo from '@/assets/image/github.png';
import NaverLogo from '@/assets/image/naver.png';
import KakaoLogo from '@/assets/image/kakao-talk.png';
import { Container, Form, Dividing, SocialIcon, Logo} from '@/assets/styled/Login.styled';
import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '@/fBase';

function SignUp (){

    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value}
        } = event;
        setId(value);
    }
    
    const onChangePw = (event: React.FormEvent<HTMLInputElement>)=>{
        const {
            currentTarget: {value}
        } = event;
        setPw(value);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, id, pw).then((userCredential) => {
            const user = userCredential.user;
            console.log('Signed in ', user);
            //[TODO]유저정보 저장하기

        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //[TODO] 에러메시지 출력
            console.log('error: ', errorCode, errorMessage)
        });
    }

    return <Container>
        <div>
            <Form onSubmit={onSubmit}>
                <input type="text" value={id} placeholder="ID" onChange={onChangeId}/>
                <input type="password" value={pw} placeholder="PASSWORD" onChange={onChangePw}/>
                {/* <input type="password" placeholder="PASSWORD Check"/> */}
                <button>JOIN</button>
            </Form>

            <Dividing>
                <div></div>
                <p>OR</p>
                <div></div>
            </Dividing>

            <SocialIcon>
                <div><Logo src={GoogleLogo} alt={`Google`}/></div>
                <div><Logo src={GithubLogo} alt={`Github`}/></div>
                <div><Logo src={NaverLogo} alt={`Naver`}/></div>
                <div><Logo src={KakaoLogo} alt={`Kakao`}/></div>
            </SocialIcon>
        </div>

    </Container>
}
export default SignUp;