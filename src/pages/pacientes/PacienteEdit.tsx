import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonItem, IonButton, IonIcon, IonLabel, IonInput, IonPicker, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime } from '@ionic/react';
import { add, close, pencil, search, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buscarPacientes, eliminarPaciente, guardarPacientes } from './PacienteAPI';

const PacienteEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string}>();

    const [pacientes, setPacientes] = useState<any>();

    useEffect(() => {
        buscar();
    }, [])

    const buscar = () => {
        let datosTest = buscarPacientes();
        setPacientes(datosTest);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name} {id}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonItem>
                        <IonSelect label="Especie" labelPlacement="stacked">
                            <IonSelectOption value="felinoId">Felino</IonSelectOption>
                            <IonSelectOption value="caninoId">Canino</IonSelectOption>
                            <IonSelectOption value="reptilId">Reptil</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Nombre</IonLabel>
                        <IonInput placeholder={'Nombre'}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position='stacked'>Fecha de nacimiento</IonLabel>
                        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                        <IonModal keepContentsMounted={true}>
                            <IonDatetime id="datetime" presentation='date'></IonDatetime>
                        </IonModal>
                    </IonItem>
                </IonCard>
                <IonItem>
                        <IonButton color='primary' slot='end'>
                            <IonIcon icon={add}/>
                            Guardar
                        </IonButton>
                    </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default PacienteEdit;
