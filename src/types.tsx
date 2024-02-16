export interface Friend {
    index: number;
    name: string;
    message: string;
    img: string;
    active: string;
  }
  
  export type SelectFriendFunction = (friend: Friend) => void;
  