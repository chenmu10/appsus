import emailService from "../../services/email/email.service.js";

export default {
    template:`
    <section class="email-app">
        <h1>Email App</h1>
        <router-view></router-view>
    </section>
    `,
    created() {
        emailService.query()
        .then (emails => {
            console.log('query filter:',emails);
            
        })
        // emailService.addEmail({body:'a',subject:'b'})
        // .then (emails => {
        //     // console.log(emails);
            
        // }),
        // emailService.getById(1)
        // .then (emails => {
        //     // console.log('get by id:',emails);
            
        // }),
        // emailService.deleteEmail(1)
        // .then (emails => {
        // })
        
    }
}