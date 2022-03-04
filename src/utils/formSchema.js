import * as Yup from 'yup';
export  const validationSchema = Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    lastname: Yup.string().required("Campo obligatorio"),
    email: Yup.string().required("Campo obligatorio"),
    area: Yup.string().required("Campo obligatorio"),
    status: Yup.boolean().required("Campo obligatorio"),
    urlImage: Yup.string().required("Campo obligatorio"),
})