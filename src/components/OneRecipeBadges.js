import {
  MdMood,
  MdFavoriteBorder,
  MdTimer,
  MdRestaurant,
} from 'react-icons/md';

import styled from 'styled-components';
// import { Basic } from '../styles';

const OneRecipeBadges = (probs) => {
  // console.log(probs.rezept.servings);
  // console.log(probs.rezept.readyInMinutes);
  const rez = probs.rezept;
  return (
    <Badges>
      <Badge>
        <Icon>
          <MdTimer />
        </Icon>
        <h4>{rez.readyInMinutes} min</h4>
      </Badge>
      <Badge>
        <Icon>
          <MdFavoriteBorder />
        </Icon>
        <h4>{rez.healthScore}%</h4>
      </Badge>
      <Badge>
        <Icon>
          <MdMood />
        </Icon>
        <h4>{rez.aggregateLikes} likes</h4>
      </Badge>
      <Badge>
        <Icon>
          <MdRestaurant />
        </Icon>
        <h4>{rez.pricePerServing}</h4>
      </Badge>
    </Badges>
  );
};

const Badges = styled.div`
  width: 75%;
  /* background-color: #dedede; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media only screen and (max-width: 680px) {
    width: 100%;
    font-size: 3rem;
    padding-right: 1rem;
  }
`;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #ffe3e3; */
`;

const Icon = styled.div`
  flex: 1 1 20%;
  font-size: 3rem;
  padding-right: 0.6rem;
  @media only screen and (max-width: 680px) {
    font-size: 3rem;
    padding-right: 1rem;
  }
`;

export default OneRecipeBadges;
