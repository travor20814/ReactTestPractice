import gql from 'graphql-tag';

export const FETCH_FOOD_LIST = gql`
  query foodList {
    foodList {
      id
      name
      picture
      activePicture
      nobgPicture
    }
  }
`;

export default null;
