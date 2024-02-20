import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonItem, IonButton, IonIcon } from '@ionic/react';
import { add, close, pencil, search, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { buscarPacientes, eliminarPaciente, guardarPacientes } from './PacienteAPI';

const PacientesLista: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [pacientes, setPacientes] = useState<any>();
    const history = useHistory();

    useEffect(() => {
        buscar();
    }, [])

    const buscar = () => {
        let datosTest = buscarPacientes();
        setPacientes(datosTest);
    }

    const eliminar = (id:string) => {
        eliminarPaciente(id);
        buscar();
    }
  
    const cargaJaja = () => {
        const ej = {
            id: 1,
            especie: 'Felino',
            nombre: 'Chiqui',
            edad: 3
        }
        guardarPacientes(ej);
        buscar();
    }

    const agregar = () => {
        history.push('/folder/paciente/new')
    }

    const editar = (id:string) => {
        history.push('/folder/paciente/Editar '+id)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonItem>
                        <IonButton color='primary' slot='end'
                            onClick={agregar}>
                            <IonIcon icon={add}/>
                            Agregar
                        </IonButton>
                    </IonItem>
                    <IonGrid className='grilla'>
                        <IonRow>
                            <IonCol>Especie</IonCol>
                            <IonCol>Nombre</IonCol>
                            <IonCol>Edad</IonCol>
                            <IonCol>Acciones</IonCol>
                        </IonRow>
                        {pacientes.map((paciente:any) => 
                            <IonRow>
                                <IonCol>{paciente.especie}</IonCol>
                                <IonCol>{paciente.nombre}</IonCol>
                                <IonCol>{paciente.edad}</IonCol>
                                <IonCol>
                                    <IonButton size='small' fill='clear'
                                        onClick={() => editar(paciente.id)}>
                                        <IonIcon icon={pencil} slot='icon-only'/>
                                    </IonButton>
                                    <IonButton color={'danger'} size='small' fill='clear'
                                        onClick={() => eliminar(paciente.id)}>
                                        <IonIcon icon={close} slot='icon-only'/>
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        )}
                    </IonGrid>
                </IonCard>
                <IonButton onClick={cargaJaja} color={'danger'} size='small' fill='clear'>
                    cargar
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default PacientesLista;
