

const enum ERROR_TYPES {
  NOT_FOUND, // 0
  UNAUTHORIZED, // 1
  FORBIDDEN // 2
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  switch (tipoDeError) {
    case ERROR_TYPES.NOT_FOUND:
      console.log("no encontrado");
      
      break
    case ERROR_TYPES.UNAUTHORIZED:
      console.log("no autorizado");
      
      break
  }
}

mostrarMensaje(ERROR_TYPES.NOT_FOUND)