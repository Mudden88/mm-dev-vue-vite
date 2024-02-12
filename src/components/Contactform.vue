<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      user_name: '',
      user_email: '',
      user_message: ''
    }
  },
  methods: {
    sendEmail() {
      const form = document.querySelector('.formFields')
      emailjs
        .sendForm(
          "service_lsa6g3k",
          "template_zdsip6k",
          form,
          "S8vGnw8J7SRCu_DFe"
        )
        .then((result) => {
          alert("Email successfully sent", result.text)

          this.user_name = ''
          this.user_email = ''
          this.user_message = ''
        },
          (error) => {
            alert('Failed to send', error.text)
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

    <form action="" class="formFields" @submit.prevent="sendEmail">
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
