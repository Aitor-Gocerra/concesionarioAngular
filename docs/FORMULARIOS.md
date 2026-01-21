# Diferencias clave: Formularios de Plantilla vs. Formularios Reactivos en Angular

| Característica | Formularios de Plantilla (`[(ngModel)]`) | Formularios Reactivos (`FormGroup`) |
|----------------|------------------------------------------|--------------------------------------|
| **Lugar de la lógica** | En el template HTML (`required`, `minlength`, etc.) | En el componente TypeScript (`Validators.required`, `Validators.minLength(2)`) |
| **Validación personalizada** | Requiere directivas adicionales | Función simple en `.ts` |
| **Acceso al valor** | Variables sueltas: `this.marca` | Objeto controlado: `this.form.value` |
| **Estado (touched, dirty, errors)** | Manual con referencias locales | Nativo: `form.get('campo').errors`, `.touched`, `.pending` |
| **Pruebas unitarias** | Complejas (necesitan DOM) | Sencillas: instancias el form en la prueba |
| **Reactividad / RxJS** | No disponible | `form.valueChanges.subscribe(...)` |
| **Anidación** | Imposible sin *hack* | `FormArray` / `FormGroup` anidados nativos |
| **Render condicional** | `*ngIf` manual | `form.statusChanges` → botones, mensajes, etc. |

## ¿Cuándo usar cada uno?
- **Formularios simples** (login, contacto rápido) → `ngModel`
- **Formularios complejos** (validación cruzada, arrays dinámicos, dependencias) → **Reactivo**