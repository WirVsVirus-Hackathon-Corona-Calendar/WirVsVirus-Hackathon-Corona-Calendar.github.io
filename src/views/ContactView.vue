<template>
<div class="container">
    <h2 class="headline" >Schreib uns doch eine Nachricht! </h2>
     <form class="vue-form" @submit.prevent="submit">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required="true" v-model="contactmessage.name" >
        <br>
        <!-- todo: check e-mail vor validity -->
        <label for="mail">E-Mail</label>
        <input type="email" id="mail" name="mail" placeholder="E-Mail-Adresse" required="true" v-model="contactmessage.email">
        <br>
        <label for="subject">Betreff</label>
       <input type="text" id="subject" name="subject" placeholder="Betreff" required="true" v-model="contactmessage.subject" >
        <br>
        <label for="subject">Nachricht</label>
        <textarea id="message" name="message" placeholder="Ihre Nachricht" v-model="contactmessage.message"></textarea>
        <br>
        <input type="submit" value="Abschicken">
      </form>
</div>

 
</template>

<script>


export default {

  name: "ContactView",
  data() {
    return {
      contactmessage: {
      name:"",
      email:"",
      message:"",
      subject:"",
      }
    }
  },
  methods: {
    // submit form handler
    submit: function() {
    // todo: send-mail:
      this.submitted = true;
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    watch: {
    // watching nested property
    "contactmessage.email": function(value) {
      this.validate("email", value);
      }
    }
  }
}
</script>

<style>

.headline {

  padding: 30px;
}

/* Form */
.vue-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 10px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.vue-form label {
  align: left;
  display: block;
  color: #94aab0;
  margin-bottom: 10px;
}

.vue-form input,
.vue-form textarea {
  align: center;
  display: block;
  width: 100%;
  appearance: none;
  padding: 10px 10px 10px 10px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);

}

.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus,
.vue-form select:focus {
  outline: none;
  border-color: #2c3e50;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

.vue-form input[type="submit"] {
  align: center;
  border: none;
  background: #2c3e50;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;

}

.vue-form input[type="submit"]:hover {
  background: #42a2e1;
}


.vue-form div {
  position: relative;
  margin: 5px 0;
}


.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background: #e94b35;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
/* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>
