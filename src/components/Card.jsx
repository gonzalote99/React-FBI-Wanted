import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';

const Card = ({uid, title, subject, image}) => {
  const navigate = useNavigate();
  return(
    <StyleCard 
        onClick={() => { navigate(`/wanted/${uid}`); 
                       }}
      >
    <img src={image} alt={title} />
      <Info>
      <H4>{title}</H4>
        <p>{subject}</p>
      </Info>
    </StyleCard>
  );
};



const Info = styled.div`
text-align: center;
`
const H4 = styled.h4`
margin-block: 1em;
`

const StyleCard = styled.div`
background-color: white;
padding: 1rem;
display: grid;
place-items: center;
position: relative;
cursor: pointer;
transition: background-color 0.25s ease-in-out;

&:hover {
  background-color: #ddd;
  border-radius: 6px;
  z-index: 2;
}

`;

export default Card;