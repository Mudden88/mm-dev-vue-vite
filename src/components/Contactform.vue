<script>
import emailjs from 'emailjs-com'
import { useToast } from 'vue-toastification'

export default {
  setup() {
    const toast = useToast()
    return { toast }
  },
  data() {
    return {
      user_name: '',
      user_email: '',
      user_message: '',
      to_name: 'Martin'
    }
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_lsa6g3k",
          "template_zdsip6k",
          {
            user_name: this.user_name,
            to_name: this.to_name,
            user_message: this.user_message,
            user_email: this.user_email

          },
          "S8vGnw8J7SRCu_DFe",

        )
        .then((result) => {
          if (this.user_name != '' && this.user_email != '') {

            this.toast.success('Email Successfully Sent', result.text)

            this.user_name = ''
            this.user_email = ''
            this.user_message = ''
          } else {
            this.toast.error('Name and email cannot be blank')
          }
        }
        )
    }
  }
}

</script>
<template>
  <h2 class=" text-start ms-3"><b>Contact</b><b class="text-muted">Me</b></h2>
  <p class="ms-3">Fill out this form below to get in touch with me. I'll reply as soon as possible.</p>
  <div class="contact-container ms-3 py-3">

    <form action="" class="formFields" @submit.prevent="sendEmail" id="contactForm">
      <div class="name-fields">
        <div class="field">
          <input type="text" v-model="user_name" placeholder="Name" />
        </div>
      </div>

      <div class="email-field field">
        <input type="email" v-model="user_email" placeholder="Email" />
      </div>

      <div class="field">

        <textarea type="textarea" cols="30" rows="10" r v-model="user_message" placeholder="Enter message.." />
      </div>
      <div class="submitbutton field">
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template >

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.field {
  margin: 10px;
}

input,
textarea {
  height: 50px;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  background: transparent;
}

.submitbutton {
  height: 50px;
  width: 80%;
  display: flex;
  justify-content: center;

}

.btn {
  width: 200px;
}

textarea {
  height: 145px;
}
</style>
