
import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    
    
    <div style={{ display: 'flex', justifyContent: 'colmun' }}>
      <div style={{ overflowY: 'auto', height: '100vh' }}>
        <div>
          <div
            style={{
              textAlign: 'center',
              marginTop: '30%',
              paddingLeft: '5%',
            }}
          >
            <img
              src="/img/title_modified.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div style={{ marginTop: '20%' ,
         paddingLeft: '5%',}}>
            <img
              src="/img/DATE.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>

          <div style={{ marginTop: '100px' , paddingLeft: '10%',}}>
            <img
              src="/img/scroll.svg"
              alt="내 이미지"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
          

          <div
            style={{
              margin: 'auto',
              marginTop: '20%',
              textAlign: 'center',
              marginLeft: '5%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between',}}>
              <button
                style={{
                  width: '45%',
                  height: 108,
                  
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                <Link to="/booth" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: "Black Han Sans",
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    부스소개
                  </span>
                  <span
                    style={{
                      width: '90%',
                     
                      display: 'block',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'SUIT Varaiable',
                      fontWeight: 'bold',
                      wordBreak: 'keep-all'
                    }}
                  >
                    각 부스별 위치 확인
                  </span>
                  <span
                    style={{
                      marginLeft: '75%',
                      fontSize: '30px',
                    }}
                  >
                    🕹️️
                  </span>
                </Link>
              </button>

              <button
                style={{
                  width: '45%',
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  marginRight: '15px',
                  marginLeft: '5%',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                 
                }}
              >
                <Link to="/intro" style={{ textDecoration: 'none' }}>
                  <span
                    style={{
                      marginRight: '40%',
                      display: 'block',
                      color: 'black',
                      fontSize: '22px',
                      fontFamily: "Black Han Sans",
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    운영시간
                  </span>
                  <span
                    style={{
                      marginRight: '33%',
                      display: 'block',
                      color: 'black',
                      fontSize: '15px',
                      fontFamily: 'SUIT Varaiable',
                      fontWeight: 'bold',
                      wordBreak: 'keep-all',
                    }}
                  >
                    행사 일정 안내
                  </span>
                  <span
                    style={{
                      marginLeft: '75%',
                      fontSize: '30px',
                    }}
                  >
                    ⏰
                  </span>
                </Link>
              </button>
            </div>
            </div>

        
          
          




            <Link
              to="https://regal-gelato-25faff.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
                  <div>
                  <div style={{ display: 'flex',flex:'3', width: '100%', marginLeft: '5%'}}> 
                <button
                style={{
                  width: '90%',
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  
                  marginTop: '20px',
                  display: 'flex', flexDirection: 'column',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >  
                
                <span
                  style={{
                    marginTop: '3%',
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '22px',
                    fontFamily: "Black Han Sans",
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  유형 테스트
                </span>
                <span
                  style={{
                    
                    
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'SUIT Varaiable',
                    fontWeight: 'bold',
                    wordBreak: 'keep-all',
                  }}
                >
                  나에게 꼭 맞는 동아리를 찾아봐!
                </span>
                <span
                  style={{
                
                    
                    marginLeft: '87%',
                    color: 'black',
                    fontSize: '30px',
                    fontFamily: 'SUIT Varaiable',
                    fontWeight: 'bold',
                  }}
                >
                  🧐
                </span>
              
                
              </button>
              </div>
          </div>
                    </Link>



          <div>
          <div style={{ display: 'flex',  justifyContent: 'flex-end' , marginRight: '5%'}}> 
                <button
                style={{
                  width: '45%',
                  height: 67,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  
                  marginTop: '5%',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    
                
                    
                    color: 'black',
                    fontSize: '21px',
                    fontFamily: "Black Han Sans",
                    fontWeight: 400,
                    fontStyle: 'normal',
                  }}
                >
                  ABOUT
                </span>
                <span
                  style={{
                    
                   
                    paddingLeft: '6%',
                    color: 'black',
                    fontSize: '23px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  ‍💻
                </span>
                </Link>
                
              </button>
              </div>
          </div>


            {/* <div style={{ display: 'flex',flex:'3', width: '100%', marginLeft: '5%'}}> */}
            
              {/* <button
                style={{
                  width: '90%',
                  height: 108,
                  backgroundColor: '#FDF0EE',
                  border: 'none',
                  borderRadius: 15,
                  border: '1px black solid',
                  
                  marginTop: '20px',
                  display: 'flex', flexDirection: 'column'
                }}
              >
                <span
                  style={{
                   
                    marginTop: '3%',
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '22px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                   
                  }}
                >
                  유형 테스트
                </span>
                <span
                  style={{
                    
                    
                    marginLeft: '2%',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  
                  }}
                >
                  나에게 꼭 맞는 동아리를 찾아봐!
                </span>
                <span
                  style={{
                
                    
                    marginLeft: '90%',
                    color: 'black',
                    fontSize: '30px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  😇
                </span>
              </button> */}
            {/* </Link> */}
                  {/* </div> */}



          
        </div>

        <div
          style={{
            width: 133,
            height: 36,
            marginLeft: '20px',
            marginTop: '25px',
            position: 'relative',
          }}
        >
          <div
            style={{
              left: 9,
              top: 9,
              position: 'absolute',
              color: '#45392F',
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
            }}
          >
            동아리 바로가기
          </div>
          <div
            style={{
              width: 133,
              height: 36,
              backgroundColor: 'rgba(255, 243, 238, 0.7)',
              left: 0,
              top: 0,
            
              borderRadius: 17,
              border: '1px #45392F solid',
            }}
          />
        </div>

        <div style={{ paddingLeft: '5%', paddingTop: '20px'}}>
          <Link
            to="https://www.instagram.com/likelion_skuniv/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%'}}
          >
            <img
              src="/logologo.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 80, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/juksita_2024/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/적시타로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_pinthree_24/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/핀쓰리로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/sk_ubf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginRight: '5%' }}
          >
            <img
              src="/ubf로고.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>



        <div style={{ marginLeft: '5%', marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/sku_ccc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/ccc.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/sku_workers/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-0-1.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/gramy._.official/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-0-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/udream.sku/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-0-3.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>
        



        <div style={{ marginLeft: '5%', marginTop: '20px' }}>
          <Link
            to="https://www.instagram.com/sdr.official_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/club-0-4.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/oz_sku/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-3-1.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_ivf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-4-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          <Link
            to="https://www.instagram.com/sku_bulls/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
             src="/club-5-.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
        </div>





        <div style={{ marginLeft: '5%', marginTop: '20px' , paddingBottom:'40px'}}>
          <Link
            to="https://www.instagram.com/brandingclub_official/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/club-5-2.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/sku_yeonji/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/club-5-6.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/sku_40th_seoro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/애니문.png"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>

          <Link
            to="https://www.instagram.com/skatcher_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginLeft: '5%' }}
          >
            <img
              src="/스케쳐.jpeg"
              alt="버튼 이미지"
              style={{ width: '20%', height: 75, borderRadius: 10 }}
            />
          </Link>
          
        </div>


      </div>
    </div>
  );
}