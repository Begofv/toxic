import { useState, useEffect } from 'react'
import Category from './pages/Category/Category'
import CategoiesList from './pages/Category/CategoriesList'
import Register from './components/register/Refister'
import { getCategories } from './utils/fetch'
import './App.css'

// const categories=[
//   {"name": "Cuñado", 
//   "description": "Para el que no solo es sabio, sino que lo demuestra usando frases hechas en cada conversación. Su habilidad para expresar opiniones sin fundamento es verdaderamente impresionante."
//   },

//   {"name": "Egoísta",
//   "description": "Aquel que hace que el egoísmo sea un arte. Siempre coloca sus necesidades por encima de todo, ¡incluso por encima de las tuyas!"
//   },

//   {"name": "Manipulador",
//   "description": "Para el amigo que podría convencerte de que el cielo es verde si eso le beneficia. Su habilidad para manipular situaciones y personas es digna de reconocimiento."
//   },

//   {"name": "Faltón",
//   "description": "El que nunca pierde la oportunidad de lanzar comentarios hirientes y faltas de respeto. Su lengua afilada es tan rápida como sus críticas."
//   },

//   {"name": "Brasas",
//   "description": "Aquel cuya capacidad para hablar no tiene límites. Su habilidad para llenar el silencio es tan destacada que podría considerarse un deporte."
//   },

//   {"name": "Fantasma",
//   "description": "Para el que siempre presume de tener o hacer algo extraordinario, aunque en realidad ni lo tiene ni lo hace. Su habilidad para exagerar sus logros es digna de reconocimiento (o de escepticismo)."
//   },

//   {"name": "Bienqueda",
//   "description": "Para el que siempre está tratando de quedar bien ante los demás. Su obsesión por la aprobación es tan evidente como sus esfuerzos por impresionar."
//   },

//    {"name": "Bocas",
//     "description": "Para el que simplemente no puede guardar secretos. Su incapacidad para contener la información confidencial lo convierte en el maestro de revelar detalles comprometedores."
//   },
  
//   {"name":  "Mete mierda",
//   "description": "El que parece tener un doctorado en esparcir chismes y crear conflictos. Su habilidad para meter mierda es digna de una categoría propia."
//   },

//   {"name": "Borde",
//   "description": "Aquel cuya actitud borde lo hace destacar como el maestro de la antipatía e impertinencia en el grupo. Su habilidad para ser desagradable es impresionante."
//   },

//   {"name":  "Egocéntrico",
//   "description": "Aquel cuyo mundo gira completamente a su alrededor. Su capacidad para ser el protagonista de todas las historias es casi una obra maestra del egocentrismo."
//   },

//   {"name": "Dictador",
//   "description": "Aquel que tiende a imponer sus decisiones sobre el grupo. Su capacidad para dar órdenes es tan impresionante que podría considerarse un talento artístico."
//   },

//   {"name":  "Gusmias",
//   "description": "Para el que lleva la tacañería a otro nivel. Su habilidad para ahorrar hasta el último céntimo es tan destacada que podría considerarse una obra maestra de la frugalidad."
//   },

//   {"name":  "Tergiversador",
//   "description": "Aquel que tiene la habilidad única de torcer cualquier historia a su favor. Su destreza en la tergiversación es digna de un premio."
//   },

//   {"name":  "Cotilla",
//     "description": "Aquel cuya curiosidad no tiene límites. Su habilidad para estar al tanto de la vida de los demás es tan inagotable que merece ser reconocida como el cotilla supremo del grupo."
//   },

//   {"name": "Anodino",
//   "description": "Aquel que pasa sin pena ni gloria."
//   }]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
    fetchCategories();
  },[]);
  async function fetchCategories(){
    const result = await getCategories();
    console.log("categories",result);
    setCategories(result.data);
  }

  return (
    <>
      {!isLoggedIn ?
        <Register onLogin={() => setIsLoggedIn(true)}/>
        :
        <>
          <CategoiesList categories={categories}/>
    </>
    }
    </>
  )
}

export default App
