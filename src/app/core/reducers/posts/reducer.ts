import Post from '../../models/post-model';

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | any;
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      userId: 1,
      title: 'First Post',
      body: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      id: 2,
      userId: 1,
      title: 'Second Post',
      body: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
  ],
  loading: false,
  error: ''
};


