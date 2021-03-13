<template>
  <div class="login">
    <v-row>
      <v-col>
        <v-container>
          <v-card flat>
            <v-card-title primary-title>
              <h3>Login mit Benutzername / Passwort</h3>
            </v-card-title>
            <v-form v-model="valid" @submit.prevent="login" ref="form">
              <v-alert type="error" v-if="this.errorUsername">{{
                this.errorUsername
              }}</v-alert>
              <v-alert type="error" v-if="this.errorPassword">{{
                this.errorPassword
              }}</v-alert>
              <!--v-text-field
                prepend-icon="mdi-account"
                name="Email"
                label="Email"
                :rules="[rules.emailRules]"
              ></v-text-field-->
              <v-text-field
                v-model="username"
                prepend-icon="mdi-account"
                name="Username"
                label="Username"
                :rules="[nameRules.required]"
                @click="resetError"
              ></v-text-field>
              <v-text-field
                v-model="password"
                prepend-icon="mdi-lock"
                :append-icon="showClearText ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                name="Passwort"
                label="Passwort"
                :type="showClearText ? 'text' : 'password'"
                hint="Mind. 8 Zeichen"
                counter
                @click:append="showClearText = !showClearText"
                @click="resetError"
              ></v-text-field>
              <v-card-actions>
                <v-btn color="primary" type="submit" :disabled="!valid" large>
                  <v-progress-circular
                    v-if="pending == true"
                    :width="3"
                    color="white"
                    indeterminate
                  ></v-progress-circular>
                  <span v-else>Login</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",
  components: {},
  data: () => ({
    showClearText: false,
    valid: false,
    username: "",
    nameRules: {
      required: (v) => !!v || "Name is required",
      //   min: v => v.length <= 10 || "Name must be less than 10 characters"
    },
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      // emailMatch: () => "The email and password you entered don't match",
      emailRules: (v) => /.+@.+/.test(v) || "E-mail must be valid",
    },
  }),
  methods: {
    login() {
      this.$store
        .dispatch("auth/login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          // this.$router.push("/");
          // console.log("Logged in.");
        });
    },
    resetForm() {
      this.$refs.form.reset();
    },
    resetError() {
      this.$store.dispatch("auth/clear");
    },
  },
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
    ...mapState("auth", ["errorUsername"]),
    ...mapState("auth", ["errorPassword"]),
    ...mapState("auth", ["pending"]),
  },
  watch: {
    isLoggedIn: function (val) {
      if (val) {
        // Login true
        console.log("Logged in.");
        this.$refs.form.reset();
        this.$router.push("/");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>