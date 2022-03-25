const app = Vue.createApp (
    {
        data () {
            return {
                nombre: 'Carlos',
                apellido: 'Ose',
                email: 'adad@prueba.com',
                genero: 'male',
                foto: 'https://randomuser.me/api/portraits/men/10.jpg'
            }
        },
        methods: {
            async cambiarUsuario() {
                const response = await fetch('https://randomuser.me/api')
                const { results } = await response.json();
                
                this.nombre = results[0].name.first,
                this.apellido = results[0].name.last,
                this.email = results[0].email,
                this.genero = results[0].gender,
                this.foto = results[0].picture.medium
            }
        }
    }
);

app.mount('#app')