export default function platzom(str) {
  let translation = str

  // 1° regla: Si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2)
  }

  // 2° regla: Si la palabra comienza con "z", se le agrega "pe" al final.
  if (str.toLowerCase().startsWith('z')){
    translation = `${translation}pe`
  }

  // 3° regla: Si la palabra traducida tiene 10+ caracteres,
  // se parte a la mitad la palabra y se añade un guion del medio.

  const length = translation.length

  if (length >= 10){
    const strLeft = translation.slice(0, parseInt(length/2))
    const strRight = translation.slice(parseInt(length/2))
    translation = `${strLeft}-${strRight}`
  }

  // Si la palabra original es un palindromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayusculas y minusculas
  if (str === str.split('').reverse().join("")){
    let palindromo = str.split("")
                          .map((c, index) => {
                            if (index % 2 == 0){
                              return c.toUpperCase()
                            }
                            return c.toLowerCase()
                          })
                          .join("")

    return palindromo
  }

  return translation
}