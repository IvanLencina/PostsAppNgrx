# PostsAppNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Explanation

## Actions
In the `actions.ts` file there is only the definition of the Actions types and the Action creators that are simply functions that create Actions.
The types of actions available are also exported in this file.

## Reducer
The file `reducer.ts` defines the state data model for "Post", called `PostState`.
An initial value is also set for PostState.
A reducer called `PostsReducer` is created, which receives the updated state (the initialState is set by default) and the triggered Action.

Depending on what type of action has been issued, it updates the `PostState`.

**NOTE**: This reducer is just a pure function. So it only receives the state, the action type and returns a new object for `PostState`.

## PostEffects (side effects)
In the file `post.effects.ts` are the effects.

These effects are responsible for subscribing to actions in the store, then it is responsible for comparing what type of Action was dispatched to perform corresponding functionality.
For example: in the case that the type of the dispatched action is `<GetPostsAction> (PostActionTypes.GET_POSTS)`, this will take care of calling the `getAll ()` method of `PostsService`. If it succeeds, it issues a `new GetPostsSuccessAction (data)` action, if it fails it emits `new GetPostsFailAction (error)` as an `Observable`.

# Flow

When the app initializes, the AddPost and PostsComponent components are rendered, which has the list of components.
The latter, injects the store, defining that it is of type `AppState`.
Then select different properties of the `PostState` state that belongs to AppState.

When loading, it triggers an Action of type `GetPostsAction`.
This triggers in that:
* The reducer receives this action and updates the state.
* PostEffects, detects the type of action issued, makes the corresponding fetch and emits an action `GetPostsSuccessAction (data)` or `GetPostsFailAction (error)` depending on what corresponds.
* The reducer catches the new dispatched action again and updates the state.
* The view of `PostsComponent` is updated since it is subscribed to` PostState`.
