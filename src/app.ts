import express, {Request, Response} from 'express'

const app = express()
const port = 8087

//Crea un middleware para convertir en JSON
app.use(express.json())

app.get('/api/v1/doctores', (req: Request, res: Response)=>{
    const doctores = [
            {id_doctor: 1,
             nombre: 'Julian',
             apellido: 'Lasprilla',
             especialidad: 'Pediatría',
             consultorio: 101,
             correo: 'julian@ejemplo.com'
            },
            {id_doctor: 2,
                nombre: 'Jose',
                apellido: 'Hernandez',
                especialidad: 'Medicina General',
                consultorio: 102,
                correo: 'jose@ejemplo.com'
               }
        ]
        res.json(doctores)
    }
)

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
    }
)