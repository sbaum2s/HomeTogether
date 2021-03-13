<template v-bind="$attrs">
  <v-dialog v-model="dialog" persistent :width="$attrs.width">
    <template v-slot:activator="{ on }">
      <v-list-item dense v-on="on" v-if="$attrs.activator == 'list-item'">
        <v-list-item-icon>
          <v-icon color="gray">{{ $attrs.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $attrs.title }}</v-list-item-title>
      </v-list-item>
      <v-btn color="primary" v-if="$attrs.activator == 'button'" dark v-on="on">
        <v-icon color="gray">{{ $attrs.icon }}</v-icon>
        {{ $attrs.title }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Problem melden</v-card-title>
      <v-card-text>
        <v-list two-line v-if="!isSubmitted">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>IP-Adresse/Hostname</v-list-item-title>
              <v-list-item-subtitle>{{ ip }} ({{ hostname }})</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>User-Agent</v-list-item-title>
              <v-list-item-subtitle>{{ userAgent }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-form v-if="!isSubmitted" @submit.prevent="submit">
          <v-text-field v-model="name" label="Name" required></v-text-field>

          <v-text-field v-model="email" label="E-mail" required></v-text-field>

          <v-textarea v-model="message" label="Nachricht"></v-textarea>

          <v-btn color="success" class="mr-4" @click="submit">senden</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Formular löschen</v-btn>
        </v-form>
        <v-alert type="success" v-if="isSubmitted">
          Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen
          zurückmelden!
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeModal">schließen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ClientJS from "clientjs";
import axios from "axios";

import { functions } from "../../../firebase_init";

export default {
  data() {
    return {
      dialog: false,
      email: "",
      name: "",
      message: "",
      ip: "",
      userAgent: "",
      hostname: "",
      items: [
        {
          title: "IP",
          subtitle: this.ip
        },
        {
          title: "ApplicationDescription",
          subtitle: this.hostname
        },
        {
          title: "ApplicationProductname",
          subtitle: this.userAgent
        }
      ],
      isSubmitted: false,
      isError: false,
      errorHeader: "error.invalidFields",
      errors: [],
      submitting: false
    };
  },
  methods: {
    submit() {
      this.sendFormData();
    },
    reset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    closeModal() {
      this.dialog = false;
      this.isSubmitted = false;

      this.reset();
    },
    enableSubmitLoader() {
      this.submitting = true;
    },
    disableSubmitLoader() {
      this.submitting = false;
    },
    sendFormData() {
      const sendMail = functions.httpsCallable("sendFeedbackMail");

      sendMail({
        to: this.$attrs.recipientEmail,
        name: this.name,

        ip: this.ip,
        hostname: this.hostname,
        userAgent: this.userAgent,
        email: this.email,
        message: this.message,
        subject:
          "TEST ------ Neue Supportanfrage via " +
          process.env.VUE_APP_TITLE +
          " vom " +
          new Date().toLocaleString()
      })
        .then(() => {
          this.isSubmitted = true;
          this.isError = false;
        })
        .catch(() => {
          this.errorHeader = "error.general";
          this.errors = [{ field: null, message: "error.generalMessage" }];
          this.isError = true;
        });
    }
  },
  created() {
    axios
      .get("https://ipinfo.io/?token=1e2543aeac3e53")
      .then(response => {
        // handle success
        this.ip = response.data.ip;
        this.hostname = response.data.hostname;
      })
      .catch(() => {
        // handle error
      })
      .then(() => {
        // always executed
      });
    const client = new ClientJS();

    const userAgent = client.getUA();
    this.userAgent = userAgent;
    console.log(userAgent);
  }
};
</script>
