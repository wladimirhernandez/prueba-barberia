export interface IPost 
    {
        user: {
            name: string;
            image: string;
        },
        date: number,
        text: string;
        comments: IComments[];
        reactions: IReactions[];

  }

  export interface IComments
  {
    user: {
        name: string;
        image: string;
    },
    text: string;
    date: number;
    }

    export interface IReactions
        {
            id: number;
            name: string;
            number: number;
        }

        export class IPostEmpy{
            static empy() {
                return {
                    user: {
                        name: '',
                        image: '',
                    },
                    date: null,
                    text: '',
                    comments: [],
                    reactions: []
                } as IPost
            }
        }