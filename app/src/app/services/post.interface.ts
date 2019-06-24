export interface IPost 
    {
        user: {
            name: string;
            image: string;
        },
        date: number,
        text: string;
        comments: IComments;
        reactions: IReactions;

  }

  export interface IComments
  {
    user: {
        name: string;
        image: string;
    },
    text: string;
    date: 1516736063
    }

    export interface IReactions
        {
            id: number;
            name: string;
            number: number;
        }