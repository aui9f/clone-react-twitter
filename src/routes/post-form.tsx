import styled from "styled-components";
import temp from '@/assets/image/temp_user.png'
import close from '@/assets/image/close.png'

const PostContainer = styled.div`
    background-color: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    >form{
        background-color: #FFFFFF;
        width: 480px;
        height: 280px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        .body{
            flex: 1;
            padding: 16px;
            display: flex;
            flex-direction: column;
            border-top: 1px solid #ABABAB;
            border-bottom: 1px solid #ABABAB;
            >div{
                flex: 1;
                display: flex;
                >img{
                    width: 48px;
                    height: 48px;
                    margin-right: 8px;
                }
                >textarea{
                    flex: 1;
                    border: 0;
                }
            }
            >ul{
                display: flex;
                li{
                    width: 40px;
                    height: 40px;
                    background-color: lightgray;
                    margin-right: 8px;
                }
            }
          
        }
        .header, .footer{
            height: 48px;
            padding: 8px;
            >button{
                height: auto;
                padding: 8px 16px;
            }
        }
        
    }

`
const Close = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${close});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: center;
    
`
function PostForm (){
    return <PostContainer>
        <form>
            <div className="header">
                <Close/>
            </div>
            <div className="body">
                <div>
                    <img src={temp} alt="프로필사진" />
                    <textarea placeholder="무슨 일이 일어나고 있나요?"></textarea>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="footer">
                <button>게시하기</button>
            </div>
        </form>
    </PostContainer>
}
export default PostForm;