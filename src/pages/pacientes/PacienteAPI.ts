export function buscarPacientes() {
    if(!localStorage['pacientes']) {
        localStorage['pacientes'] = '[]';
    }
    
    let pacientes = localStorage['pacientes'];
    pacientes = JSON.parse(pacientes);
    return pacientes;
}

export function eliminarPaciente(id:string) {
    let pacientes = buscarPacientes();
    
    let indice = pacientes.findIndex((paciente:any) => paciente.id == id)
    pacientes.splice(indice,1);
    
    localStorage['pacientes'] = JSON.stringify(pacientes)
}

export function guardarPacientes(paciente:any) {
    let pacientes = buscarPacientes();
    pacientes.push(paciente)
    localStorage['pacientes'] = JSON.stringify(pacientes)
}