export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

//I didn't apply redux, but set up my actions to make it easy to implement instead of props drilling. Because this was a small project, I felt using redux was unnecessary :)
