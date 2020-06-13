export function colores(color?: string): string[] {

    const resp = [
        'rojo',
        'azul',
        'blanco'
    ];

    if (color) {
        resp.push(color);
    }

    return resp;

}
