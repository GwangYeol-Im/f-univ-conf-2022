import styled from '@emotion/styled';

interface Prop {
  speakInfo: SpeakInfo;
}

interface SpeakInfo {
  name: string;
  title: string;
  univ: string;
  subTitle: string;
  sessionNumber: number;
  time: string;
  imageUrl: string;
  github: string;
}

const Speaker = ({ speakInfo }: Prop) => {
  return (
    <Container>
      <Wrapper href={speakInfo.github} target="_blank">
        <SessionHeader>
          <InfoWrapper>
            <Session>Session 0{speakInfo.sessionNumber}</Session>
            <SessionInfo>
              <Time>{speakInfo.time}</Time>
              <Title>{speakInfo.title}</Title>
            </SessionInfo>
          </InfoWrapper>
          <SpeakerImage
            width={191}
            height={170}
            src={speakInfo.imageUrl}
            alt="speaker"
          />
        </SessionHeader>
        <SessionBottom>
          <Info>
            <>
              {speakInfo.univ} {speakInfo.name} · {speakInfo.subTitle}
            </>
            <Git>
              GitHub 보러가기{' '}
              <svg
                width="10"
                height="10"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 11L23 11" stroke="#749AFE" strokeWidth="2" />
                <path d="M13 1L23 11L13 21" stroke="#749AFE" strokeWidth="2" />
              </svg>
            </Git>
          </Info>
        </SessionBottom>
      </Wrapper>
    </Container>
  );
};

export default Speaker;

const Container = styled.section`
  width: 85%;
  padding: 1rem;
  margin: 0 auto;
  @media screen and (min-width: 576px) {
    width: 414px;
  }
`;

const Wrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const SessionHeader = styled.div`
  border-radius: 5px 5px 0 0;
  display: flex;
  background-color: #749afe;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50%;
  justify-content: space-between;
`;

const Session = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  width: 70%;
  background-color: #20232c;
  font-weight: 300;
`;

const SessionInfo = styled.div`
  position: relative;
  color: white;
  width: 270px;
  font-size: 1.3rem;
  font-weight: 500;
  padding-left: 0.2rem;
  @media screen and (min-width: 576px) {
    width: 414px;
  }
`;

const Time = styled.div`
  font-weight: 400;
`;

const SpeakerImage = styled.img`
  padding-right: 1rem;
  width: 50%;
`;

const SessionBottom = styled.div`
  padding: 1rem;
  border-radius: 0 0 5px 5px;
  background-color: #20232c;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const Git = styled.div`
  color: #749afe;
`;
