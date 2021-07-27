# PostsAppNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Explicacion

## Actions
En el archivo `actions.ts` sólo se encuentra la definición de los Actions types y los Action creators que son simplemente funciones que crean Acciones.
En este archivo también se exportan los tipos de acciones disponibles.

## Reducer
En el archivo `reducer.ts` se define el modelo de datos del estado para "Post", llamado PostState.
Tambien se establece un valor inicial para PostState.
Se crea un reducer llamado `PostsReducer`, el cual recibe el estado actualizado (se establece el initialState por defecto) y la Action disparada.

Dependiendo de que tipo de acción se haya emitido, este actualiza el `PostState`.

**NOTA**: Este reducer no es mas que una funcion pura. Por lo que sólo recibe el estado, el tipo de accion y devuelve un nuevo objeto para `PostState`.

## PostEffects (side effects)
En el archivo `post.effects.ts` se encuentran los effects.

Estos effects, se encargan de suscribirse a actions del store, entonces se encarga de comparar que tipo de Action se emitió para realizar funcionalidad correspondiente.
Por ejemplo: en el caso de que el tipo de accion emitida sea `<GetPostsAction>(PostActionTypes.GET_POSTS)`, este va a encargarse de llamar al metodo `getAll()` de `PostsService`. Si sale bien, emite una acción `new GetPostsSuccessAction(data)`, si sale mal emite `new GetPostsFailAction(error)` en forma de `Observable`.

# Flujo

Cuando la app inicializa, se renderizan los componentes AddPost y PostsComponent, el cual tiene el listado de componentes.
Este ultimo, inyecta el store, definiendo que es del tipo `AppState`. 
Luego selecciona diferentes propiedades del estado `PostState` que pertenece a AppState.

Al cargar, dispara una Action del tipo `GetPostsAction`.
Esto desencadena en que:
* El reducer recibe esta accion y actualiza el estado.
* PostEffects, detecta el tipo de accion emitida, hace el fetch correspondiente y emite una accion `GetPostsSuccessAction(data)` o `GetPostsFailAction(error)` dependiendo lo que corresponda.
* El reducer atrapa nuevamente la acción emitida y actualiza el estado.
* Se actualiza la vista de `PostsComponent` ya que está suscripta a `PostState`.
